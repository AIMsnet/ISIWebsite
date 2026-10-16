# ISI Pune Website Redesign

A React + Vite website with a Node.js SMTP endpoint for the Indian Statistical Institute, Pune Unit, rebuilt from the official institutional content and structure.

## Installation

```bash
npm install
```

## Development

```bash
npm run dev
```

## Production build

```bash
npm run build
```

## Preview production build

```bash
npm run preview
```

## Contact form email (direct SMTP)

The contact form sends enquiries through this project's Node.js server using SMTP.
It does not use an email delivery service. Copy `.env.example` to `.env` and enter
the SMTP connection details provided by the administrator of the sending mailbox:

```bash
SMTP_HOST=smtpout.secureserver.net
SMTP_PORT=465
SMTP_SECURE=true
SMTP_USER=head@isipune.ac.in
SMTP_PASS=
SMTP_FROM=head@isipune.ac.in
CONTACT_TO=head@isipune.ac.in
```

The provided DNS records point to GoDaddy's `secureserver.net` mail system, so the
example is prefilled for its SMTP server using port `465` with implicit TLS.
`SMTP_USER` and `SMTP_FROM` are set to the mailbox shown on the website; fill in
`SMTP_PASS` with that mailbox's password in your private `.env` file. DNS records do
not reveal the mailbox password. If GoDaddy identifies this mailbox as Microsoft 365
rather than Workspace/Professional Email, use its Microsoft 365 SMTP settings
instead. Keep `.env` and SMTP credentials private and set the same variables in the
production server's environment. The browser never receives these credentials.

## Deployment

For Vercel, set the project build command to `npm run build` and the output directory
to `dist`. Add `SMTP_HOST`, `SMTP_PORT`, `SMTP_SECURE`, `SMTP_USER`, `SMTP_PASS`,
`SMTP_FROM`, and `CONTACT_TO` under **Project Settings → Environment Variables** for
each deployment environment, then redeploy. The `.env` file on your computer is not
uploaded to Vercel. Vercel serves the site and runs the `/api/contact` function.

For other Node.js hosts, run `npm run build` and then `npm start` with the same SMTP
variables set in the server environment. `npm run dev` starts the site and API
together for local development.

## Notes

- The project uses React, Redux Toolkit, React Router, Tailwind CSS, and Nodemailer for server-side SMTP delivery.
- Important institutional information is centralized in `src/data` for maintainability.
- Replace placeholder links and content where official document URLs are available.
