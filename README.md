# ISI Pune Website Redesign

A production-ready React + Vite static website for the Indian Statistical Institute, Pune Unit, rebuilt from the official institutional content and structure.

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

## Environment variables

Create a `.env` file from `.env.example` and add your EmailJS credentials:

```bash
VITE_EMAILJS_SERVICE_ID=
VITE_EMAILJS_TEMPLATE_ID=
VITE_EMAILJS_PUBLIC_KEY=
```

## EmailJS configuration

1. Create an EmailJS account and service.
2. Create a template with fields matching the form values: `name`, `email`, `phone`, `subject`, `enquiry_type`, `message`.
3. Add the service ID, template ID and public key to your `.env` file.
4. Keep private credentials out of source control.

## Deployment

This project is static and can be deployed to GitHub Pages, Netlify, Vercel, or any hosting platform with SPA fallback support.

For SPA hosting, ensure the server rewrites all routes to `index.html`.

## Notes

- The project uses React, Redux Toolkit, React Router, Tailwind CSS, and EmailJS.
- Important institutional information is centralized in `src/data` for maintainability.
- Replace placeholder links and content where official document URLs are available.
"# ISIWebsite" 
