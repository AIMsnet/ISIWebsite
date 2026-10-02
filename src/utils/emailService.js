import emailjs from 'emailjs-com';

const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

emailjs.init({ publicKey: publicKey || '' });

export const sendContactEmail = async (formData) => {
  if (!serviceId || !templateId || !publicKey) {
    throw new Error('EmailJS environment variables are missing. Please add them to your .env file.');
  }

  const payload = {
    name: formData.name,
    email: formData.email,
    phone: formData.phone,
    subject: formData.subject,
    enquiry_type: formData.enquiryType,
    message: formData.message,
  };

  return emailjs.send(serviceId, templateId, payload);
};
