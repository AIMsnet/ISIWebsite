import nodemailer from 'nodemailer';

let mailTransport;

export class ContactRequestError extends Error {
  constructor(statusCode, message) {
    super(message);
    this.statusCode = statusCode;
  }
}

const escapeHtml = (value) => value.replace(/[&<>"']/g, (character) => ({
  '&': '&amp;',
  '<': '&lt;',
  '>': '&gt;',
  '"': '&quot;',
  "'": '&#39;',
})[character]);

export const getContactFields = (body) => {
  if (!body || typeof body !== 'object' || Array.isArray(body)) {
    throw new ContactRequestError(400, 'Please submit a valid enquiry.');
  }
  if (typeof body.website === 'string' && body.website.trim()) {
    throw new ContactRequestError(400, 'Please submit a valid enquiry.');
  }

  const fields = {
    name: typeof body.name === 'string' ? body.name.trim() : '',
    email: typeof body.email === 'string' ? body.email.trim() : '',
    phone: typeof body.phone === 'string' ? body.phone.trim() : '',
    subject: typeof body.subject === 'string' ? body.subject.trim() : '',
    enquiryType: typeof body.enquiryType === 'string' ? body.enquiryType.trim() : '',
    message: typeof body.message === 'string' ? body.message.trim() : '',
  };

  if (!fields.name || !fields.email || !fields.subject || !fields.message) {
    throw new ContactRequestError(400, 'Name, email, subject, and message are required.');
  }
  if (fields.name.length > 120 || fields.email.length > 254 || fields.phone.length > 40
    || fields.subject.length > 200 || fields.enquiryType.length > 200 || fields.message.length > 5000) {
    throw new ContactRequestError(400, 'One or more fields exceed the allowed length.');
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fields.email)) {
    throw new ContactRequestError(400, 'Please enter a valid email address.');
  }
  if (/[\r\n]/.test(fields.email) || /[\r\n]/.test(fields.subject)) {
    throw new ContactRequestError(400, 'Please remove line breaks from the email and subject fields.');
  }

  return fields;
};

export const sendContactEnquiry = async (fields) => {
  const { SMTP_HOST, SMTP_USER, SMTP_PASS } = process.env;
  const port = Number(process.env.SMTP_PORT || 587);
  if (!SMTP_HOST || !SMTP_USER || !SMTP_PASS || !Number.isInteger(port) || port < 1 || port > 65535) {
    throw new Error('SMTP_HOST, SMTP_USER, SMTP_PASS, and a valid SMTP_PORT must be configured.');
  }

  if (!mailTransport) {
    const secure = process.env.SMTP_SECURE
      ? process.env.SMTP_SECURE.toLowerCase() === 'true'
      : port === 465;
    mailTransport = nodemailer.createTransport({
      host: SMTP_HOST,
      port,
      secure,
      auth: { user: SMTP_USER, pass: SMTP_PASS },
      connectionTimeout: 10000,
      greetingTimeout: 10000,
      socketTimeout: 15000,
    });
  }

  const recipient = process.env.CONTACT_TO || 'head@isipune.ac.in';
  const from = process.env.SMTP_FROM || SMTP_USER;
  const rows = [
    ['Name', fields.name],
    ['Email', fields.email],
    ['Phone', fields.phone || 'Not provided'],
    ['Programme / Consultancy Focus Area', fields.enquiryType || 'Not provided'],
    ['Subject', fields.subject],
  ];
  const detailRows = rows.map(([label, value]) => `
    <tr>
      <th align="left" style="padding:12px 14px;border-bottom:1px solid #e5e7eb;color:#334155;font-size:14px;width:38%;">${label}</th>
      <td style="padding:12px 14px;border-bottom:1px solid #e5e7eb;color:#0f172a;font-size:14px;word-break:break-word;">${escapeHtml(value)}</td>
    </tr>`).join('');
  const message = escapeHtml(fields.message).replace(/\r?\n/g, '<br>');

  await mailTransport.sendMail({
    from,
    to: recipient,
    replyTo: fields.email,
    subject: `Website enquiry: ${fields.subject}`,
    text: [
      'New enquiry submitted through the ISI Pune website',
      '',
      ...rows.map(([label, value]) => `${label}: ${value}`),
      '',
      'Message:',
      fields.message,
    ].join('\n'),
    html: `<!doctype html>
      <html><body style="margin:0;padding:24px;background:#f1f5f9;font-family:Arial,Helvetica,sans-serif;color:#0f172a;">
        <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="max-width:680px;margin:0 auto;background:#fff;border:1px solid #e2e8f0;border-radius:8px;overflow:hidden;">
          <tr><td style="padding:24px 28px;background:#002147;color:#fff;">
            <p style="margin:0 0 6px;color:#e8bd62;font-size:12px;font-weight:bold;letter-spacing:1px;text-transform:uppercase;">ISI Pune Website</p>
            <h1 style="margin:0;font-size:22px;line-height:1.4;">New enquiry received</h1>
          </td></tr>
          <tr><td style="padding:24px 28px;">
            <p style="margin:0 0 18px;color:#475569;font-size:14px;">A visitor submitted the contact form. You can reply directly to this email to contact them.</p>
            <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="border-collapse:collapse;">${detailRows}</table>
            <h2 style="margin:24px 0 10px;color:#002147;font-size:16px;">Message</h2>
            <div style="padding:16px;background:#f8fafc;border-left:3px solid #c99b2e;color:#1e293b;font-size:14px;line-height:1.7;overflow-wrap:anywhere;">${message}</div>
            <p style="margin:22px 0 0;color:#64748b;font-size:12px;">Received ${new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })} (IST)</p>
          </td></tr>
        </table>
      </body></html>`,
  });
};
