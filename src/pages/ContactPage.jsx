import { useMemo, useState } from 'react';
import { Mail, MapPin, Phone, Send, CheckCircle, AlertCircle } from 'lucide-react';
import PageHero from '../components/common/PageHero';
import SectionHeading from '../components/common/SectionHeading';
import SEO from '../components/common/SEO';
import { contact } from '../data/contact';
import { sendContactEmail } from '../utils/emailService';

const initialForm = {
  name: '',
  email: '',
  phone: '',
  subject: '',
  enquiryType: '',
  message: '',
};

export default function ContactPage() {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState({ type: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const formIsValid = useMemo(() => {
    const nextErrors = {};

    if (!form.name.trim()) nextErrors.name = 'Name is required.';
    if (!form.email.trim()) nextErrors.email = 'Email is required.';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) nextErrors.email = 'Please enter a valid email address.';
    if (!form.subject.trim()) nextErrors.subject = 'Subject is required.';
    if (!form.message.trim()) nextErrors.message = 'Message is required.';

    return {
      isValid: Object.keys(nextErrors).length === 0,
      nextErrors,
    };
  }, [form]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: '' }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const result = formIsValid;
    if (!result.isValid) {
      setErrors(result.nextErrors);
      setStatus({ type: 'error', message: 'Please correct the highlighted fields and try again.' });
      return;
    }

    setIsSubmitting(true);
    setStatus({ type: '', message: '' });

    try {
      await sendContactEmail(form);
      setStatus({ type: 'success', message: 'Your message has been sent successfully. Our team will get back to you.' });
      setForm(initialForm);
      setErrors({});
    } catch (error) {
      setStatus({ type: 'error', message: error?.message || 'We could not send your message right now. Please try again later.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <SEO title="Contact Us | Indian Statistical Institute Pune" description="Contact the Indian Statistical Institute Pune Unit for training, consultancy, and programme enquiries." canonical="https://isipune.ac.in/contact" />
      <PageHero title="Contact Centre" description="Reach out to the Pune Unit for executive training enquiries, statistical consulting, and organizational partnerships." />

      <section className="container-shell section-space">
        <SectionHeading eyebrow="Reach Us" title="Contact Information & Enquiries" description="Official contact details for the Indian Statistical Institute Pune Unit." />

        <div className="mt-8 grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
          {/* Left Column: Address Card & Map */}
          <div className="space-y-6">
            <div className="card-academic p-6 space-y-4">
              <h3 className="font-serif text-lg font-bold text-brand-900 border-b border-slate-200 pb-2">
                Pune Unit Office
              </h3>
              <ul className="space-y-4 text-xs text-slate-700">
                <li className="flex items-start gap-3">
                  <MapPin className="mt-0.5 text-isi-gold-600 shrink-0" size={18} />
                  <span className="leading-relaxed font-medium">{contact.address}</span>
                </li>
                <li className="flex items-center gap-3">
                  <Phone className="text-isi-gold-600 shrink-0" size={16} />
                  <a href={contact.phoneHref} className="font-semibold text-brand-800 hover:text-brand-900 hover:underline">
                    {contact.phone}
                  </a>
                </li>
                <li className="flex items-center gap-3">
                  <Mail className="text-isi-gold-600 shrink-0" size={16} />
                  <a href={contact.emailHref} className="font-semibold text-brand-800 hover:text-brand-900 hover:underline">
                    {contact.email}
                  </a>
                </li>
              </ul>
            </div>

            <div className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-soft">
              <iframe title="ISI Pune location map" src={contact.mapUrl} className="h-[280px] w-full border-0" loading="lazy" referrerPolicy="no-referrer-when-downgrade" allowFullScreen></iframe>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <form onSubmit={handleSubmit} noValidate className="card-gold-accent p-6 md:p-8">
            <h3 className="font-serif text-lg font-bold text-brand-900 border-b border-slate-200 pb-2.5 mb-6">
              Send an Enquiry
            </h3>

            <div className="grid gap-5 md:grid-cols-2">
              <div>
                <label htmlFor="name" className="mb-1.5 block text-xs font-bold uppercase tracking-wider text-brand-900">
                  Full Name <span className="text-red-600">*</span>
                </label>
                <input
                  id="name"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Your full name"
                  className="w-full rounded-md border border-slate-300 bg-white px-3.5 py-2.5 text-xs text-slate-900 placeholder-slate-400 focus:border-brand-700 focus:outline-none focus:ring-2 focus:ring-isi-gold-500/40 transition"
                  aria-invalid={Boolean(errors.name)}
                />
                {errors.name && <p className="mt-1 text-xs font-semibold text-red-600">{errors.name}</p>}
              </div>

              <div>
                <label htmlFor="email" className="mb-1.5 block text-xs font-bold uppercase tracking-wider text-brand-900">
                  Email Address <span className="text-red-600">*</span>
                </label>
                <input
                  id="email"
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="name@organization.com"
                  className="w-full rounded-md border border-slate-300 bg-white px-3.5 py-2.5 text-xs text-slate-900 placeholder-slate-400 focus:border-brand-700 focus:outline-none focus:ring-2 focus:ring-isi-gold-500/40 transition"
                  aria-invalid={Boolean(errors.email)}
                />
                {errors.email && <p className="mt-1 text-xs font-semibold text-red-600">{errors.email}</p>}
              </div>

              <div>
                <label htmlFor="phone" className="mb-1.5 block text-xs font-bold uppercase tracking-wider text-brand-900">
                  Phone Number
                </label>
                <input
                  id="phone"
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                  placeholder="+91 98765 43210"
                  className="w-full rounded-md border border-slate-300 bg-white px-3.5 py-2.5 text-xs text-slate-900 placeholder-slate-400 focus:border-brand-700 focus:outline-none focus:ring-2 focus:ring-isi-gold-500/40 transition"
                />
              </div>

              <div>
                <label htmlFor="subject" className="mb-1.5 block text-xs font-bold uppercase tracking-wider text-brand-900">
                  Subject <span className="text-red-600">*</span>
                </label>
                <input
                  id="subject"
                  name="subject"
                  value={form.subject}
                  onChange={handleChange}
                  placeholder="Subject of enquiry"
                  className="w-full rounded-md border border-slate-300 bg-white px-3.5 py-2.5 text-xs text-slate-900 placeholder-slate-400 focus:border-brand-700 focus:outline-none focus:ring-2 focus:ring-isi-gold-500/40 transition"
                  aria-invalid={Boolean(errors.subject)}
                />
                {errors.subject && <p className="mt-1 text-xs font-semibold text-red-600">{errors.subject}</p>}
              </div>

              <div className="md:col-span-2">
                <label htmlFor="enquiryType" className="mb-1.5 block text-xs font-bold uppercase tracking-wider text-brand-900">
                  Programme / Consultancy Focus Area
                </label>
                <input
                  id="enquiryType"
                  name="enquiryType"
                  value={form.enquiryType}
                  onChange={handleChange}
                  placeholder="e.g. Six Sigma Certification / Corporate Analytics Consulting"
                  className="w-full rounded-md border border-slate-300 bg-white px-3.5 py-2.5 text-xs text-slate-900 placeholder-slate-400 focus:border-brand-700 focus:outline-none focus:ring-2 focus:ring-isi-gold-500/40 transition"
                />
              </div>

              <div className="md:col-span-2">
                <label htmlFor="message" className="mb-1.5 block text-xs font-bold uppercase tracking-wider text-brand-900">
                  Detailed Message <span className="text-red-600">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Write your enquiry message here..."
                  className="w-full rounded-md border border-slate-300 bg-white px-3.5 py-2.5 text-xs text-slate-900 placeholder-slate-400 focus:border-brand-700 focus:outline-none focus:ring-2 focus:ring-isi-gold-500/40 transition"
                  aria-invalid={Boolean(errors.message)}
                />
                {errors.message && <p className="mt-1 text-xs font-semibold text-red-600">{errors.message}</p>}
              </div>
            </div>

            {status.message && (
              <div className={`mt-5 rounded-md border px-4 py-3 text-xs font-medium flex items-center gap-2 ${status.type === 'success' ? 'border-emerald-300 bg-emerald-50 text-emerald-800' : 'border-red-300 bg-red-50 text-red-800'}`}>
                {status.type === 'success' ? <CheckCircle size={16} /> : <AlertCircle size={16} />}
                <span>{status.message}</span>
              </div>
            )}

            <div className="mt-6">
              <button
                type="submit"
                disabled={isSubmitting}
                className="btn-gold px-6 py-3 text-xs font-bold flex items-center justify-center gap-2 disabled:cursor-not-allowed disabled:opacity-70 shadow-md hover:shadow-lg transition"
              >
                <Send size={14} />
                {isSubmitting ? 'Sending Message...' : 'Submit Message'}
              </button>
            </div>
          </form>
        </div>
      </section>
    </>
  );
}

