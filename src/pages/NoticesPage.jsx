import PageHero from '../components/common/PageHero';
import SectionHeading from '../components/common/SectionHeading';
import SEO from '../components/common/SEO';
import { notices } from '../data/notices';
import { FileText, ExternalLink, Calendar } from 'lucide-react';

export default function NoticesPage() {
  return (
    <>
      <SEO title="Notices & Announcements | Indian Statistical Institute Pune" description="Latest notices, announcements, and programme updates from the Indian Statistical Institute Pune Unit." canonical="https://isipune.ac.in/notices" />
      <PageHero title="Official Notices & Circulars" description="Important updates, announcements, exam notices, and training-related circulars for current programmes and opportunities." />

      <section className="container-shell section-space">
        <SectionHeading eyebrow="Official Communications" title="Latest Notices" description="Timely announcements relevant to executive courses, academic offerings, workshops, and institutional guidelines." />

        <div className="mt-8 space-y-6">
          {notices.map((notice) => (
            <article key={notice.id} className="card-academic p-6 flex flex-col md:flex-row md:items-center justify-between gap-6">
              <div className="flex-1 space-y-2">
                <div className="flex flex-wrap items-center gap-2.5">
                  <span className="status-badge bg-brand-100 text-brand-900 border border-brand-300">
                    {notice.category}
                  </span>
                  {notice.isNew && (
                    <span className="status-badge bg-isi-crimson-700 text-white">
                      New
                    </span>
                  )}
                  {notice.important && (
                    <span className="status-badge bg-isi-gold-500 text-brand-900 font-bold">
                      ★ Important
                    </span>
                  )}
                  <span className="text-xs font-semibold text-slate-500 flex items-center gap-1">
                    <Calendar size={12} className="text-slate-400" />
                    {new Date(notice.date).toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' })}
                  </span>
                </div>

                <h2 className="font-serif text-lg md:text-xl font-bold text-brand-900 leading-snug">
                  {notice.title}
                </h2>
                
                <p className="text-xs md:text-sm text-slate-600 leading-relaxed max-w-3xl">
                  {notice.description}
                </p>
              </div>

              <div className="flex flex-row md:flex-col gap-2.5 shrink-0 pt-3 md:pt-0 border-t md:border-t-0 border-slate-100">
                {notice.documentUrl !== '#' && (
                  <a href={notice.documentUrl} className="btn-secondary text-xs px-3.5 py-2 flex items-center justify-center gap-1.5 w-full">
                    <FileText size={14} /> Document
                  </a>
                )}
                {notice.externalUrl !== '#' && (
                  <a href={notice.externalUrl} className="btn-primary text-xs px-3.5 py-2 flex items-center justify-center gap-1.5 w-full">
                    <ExternalLink size={14} /> Details
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}

