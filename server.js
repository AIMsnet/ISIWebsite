import 'dotenv/config';
import { createServer } from 'node:http';
import { readFile, stat } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { ContactRequestError, getContactFields, sendContactEnquiry } from './src/server/contactEmail.js';

const rootDirectory = path.dirname(fileURLToPath(import.meta.url));
const buildDirectory = path.join(rootDirectory, 'dist');
const isDevelopment = process.argv.includes('--dev');

const readJsonBody = async (request) => {
  const chunks = [];
  let size = 0;

  for await (const chunk of request) {
    size += chunk.length;
    if (size > 16 * 1024) {
      throw new ContactRequestError(413, 'The submitted form is too large.');
    }
    chunks.push(chunk);
  }

  try {
    return JSON.parse(Buffer.concat(chunks).toString('utf8'));
  } catch {
    throw new ContactRequestError(400, 'The submitted form is not valid JSON.');
  }
};

const sendJson = (response, statusCode, payload) => {
  response.writeHead(statusCode, {
    'Content-Type': 'application/json; charset=utf-8',
    'Cache-Control': 'no-store',
    'X-Content-Type-Options': 'nosniff',
  });
  response.end(JSON.stringify(payload));
};

const handleContactRequest = async (request, response) => {
  if (request.method !== 'POST') {
    response.setHeader('Allow', 'POST');
    sendJson(response, 405, { message: 'Method not allowed.' });
    return;
  }
  if (!request.headers['content-type']?.toLowerCase().startsWith('application/json')) {
    sendJson(response, 415, { message: 'Please submit the enquiry using the contact form.' });
    return;
  }

  const fields = getContactFields(await readJsonBody(request));
  try {
    await sendContactEnquiry(fields);
  } catch (error) {
    console.error('Contact enquiry email could not be sent:', error.message);
    sendJson(response, 503, { message: 'We could not send your message right now. Please try again later.' });
    return;
  }
  sendJson(response, 200, { message: 'Your enquiry has been sent.' });
};

const serveBuiltFile = async (request, response) => {
  const requestPath = new URL(request.url, 'http://localhost').pathname;
  const decodedPath = decodeURIComponent(requestPath);
  let filePath = decodedPath === '/'
    ? path.join(buildDirectory, 'index.html')
    : path.resolve(buildDirectory, `.${decodedPath}`);
  if (!filePath.startsWith(`${buildDirectory}${path.sep}`)) {
    response.writeHead(403).end('Forbidden');
    return;
  }

  try {
    if (!(await stat(filePath)).isFile()) throw new Error('Not a file');
  } catch {
    filePath = path.join(buildDirectory, 'index.html');
  }

  try {
    const content = await readFile(filePath);
    const contentType = ({
      '.css': 'text/css; charset=utf-8',
      '.html': 'text/html; charset=utf-8',
      '.ico': 'image/x-icon',
      '.js': 'text/javascript; charset=utf-8',
      '.json': 'application/json; charset=utf-8',
      '.png': 'image/png',
      '.svg': 'image/svg+xml',
      '.webp': 'image/webp',
      '.woff2': 'font/woff2',
      '.xml': 'application/xml; charset=utf-8',
    })[path.extname(filePath)] || 'application/octet-stream';
    response.writeHead(200, { 'Content-Type': contentType, 'X-Content-Type-Options': 'nosniff' });
    response.end(content);
  } catch {
    response.writeHead(404).end('Not found. Build the site with npm run build first.');
  }
};

const start = async () => {
  let vite;
  if (isDevelopment) {
    const { createServer: createViteServer } = await import('vite');
    vite = await createViteServer({ server: { middlewareMode: true }, appType: 'spa' });
  }

  const server = createServer(async (request, response) => {
    try {
      const pathname = new URL(request.url, 'http://localhost').pathname;
      if (pathname === '/api/contact') {
        await handleContactRequest(request, response);
      } else if (pathname.startsWith('/api/')) {
        sendJson(response, 404, { message: 'API endpoint not found.' });
      } else if (isDevelopment) {
        vite.middlewares(request, response);
      } else {
        await serveBuiltFile(request, response);
      }
    } catch (error) {
      if (error instanceof ContactRequestError) {
        sendJson(response, error.statusCode, { message: error.message });
        return;
      }
      console.error('Request failed:', error.message);
      if (!response.headersSent) sendJson(response, 500, { message: 'An unexpected error occurred.' });
      else response.destroy();
    }
  });

  const port = Number(process.env.PORT || (isDevelopment ? 5173 : 3000));
  server.listen(port, '0.0.0.0', () => {
    console.log(`ISI Pune website server listening on port ${port}${isDevelopment ? ' (development)' : ''}`);
  });
};

start().catch((error) => {
  console.error('Could not start the website server:', error.message);
  process.exitCode = 1;
});
