import {
  ContactRequestError,
  getContactFields,
  sendContactEnquiry,
} from '../src/server/contactEmail.js';

const respond = (response, status, body) => {
  response.setHeader('Cache-Control', 'no-store');
  response.setHeader('X-Content-Type-Options', 'nosniff');
  response.status(status).json(body);
};

export default async function handler(request, response) {
  if (request.method !== 'POST') {
    response.setHeader('Allow', 'POST');
    respond(response, 405, { message: 'Method not allowed.' });
    return;
  }

  if (!request.headers['content-type']?.toLowerCase().startsWith('application/json')) {
    respond(response, 415, { message: 'Please submit the enquiry using the contact form.' });
    return;
  }

  const contentLength = Number(request.headers['content-length'] || 0);
  if (contentLength > 16 * 1024) {
    respond(response, 413, { message: 'The submitted form is too large.' });
    return;
  }

  try {
    let body = request.body;
    if (Buffer.isBuffer(body) || typeof body === 'string') {
      try {
        body = JSON.parse(body.toString());
      } catch {
        throw new ContactRequestError(400, 'The submitted form is not valid JSON.');
      }
    }

    const fields = getContactFields(body);
    await sendContactEnquiry(fields);
    respond(response, 200, { message: 'Your enquiry has been sent.' });
  } catch (error) {
    if (error instanceof ContactRequestError) {
      respond(response, error.statusCode, { message: error.message });
      return;
    }

    console.error('Contact enquiry email could not be sent:', {
      code: error.code,
      command: error.command,
      message: error.message,
    });
    respond(response, 503, { message: 'We could not send your message right now. Please try again later.' });
  }
}
