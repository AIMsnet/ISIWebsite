import PageHero from '../components/common/PageHero';
import SectionHeading from '../components/common/SectionHeading';
import SEO from '../components/common/SEO';
import { academic } from '../data/academic';
import { GraduationCap, ExternalLink, BookOpen } from 'lucide-react';

export default function AcademicPage() {
  return (
    <>
      <SEO title="Academic Programmes | Indian Statistical Institute Pune" description="Academic information and programme links for the Indian Statistical Institute, including undergraduate, postgraduate, and doctoral studies." canonical="https://isipune.ac.in/academic" />
      <PageHero title="Academic Programmes & Research" description="Academic degrees, Dean of Studies information, and official research orientation across the Indian Statistical Institute system." />

      <section className="container-shell section-space">
        <SectionHeading eyebrow="Academic Ecosystem" title="Degree Programmes & Institutional Deanery" description="The Indian Statistical Institute offers world-renowned degree and diploma programmes in Statistics, Mathematics, Computer Science, and Quantitative Economics." />
        
        <div className="mt-8 grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="space-y-6">
            <p className="text-sm leading-relaxed text-slate-700">
              {academic.overview}
            </p>
            
            <div className="card-academic p-6">
              <h3 className="font-serif text-base font-bold text-brand-900 mb-4 flex items-center gap-2 border-b border-slate-200 pb-2">
                <GraduationCap className="text-isi-gold-600" size={20} />
                Offered Degree Programmes (ISI Central Deanery)
              </h3>
              <div className="grid gap-3 sm:grid-cols-2">
                {academic.programmes.map((programme) => (
                  <div key={programme} className="p-3 bg-slate-50 rounded border border-slate-200 text-xs font-semibold text-brand-900 flex items-center gap-2">
                    <BookOpen size={14} className="text-brand-700 shrink-0" />
                    <span>{programme}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="card-gold-accent p-6">
            <h3 className="font-serif text-base font-bold text-brand-900 border-b border-slate-200 pb-2.5">
              Official Academic Portals
            </h3>
            <ul className="mt-4 space-y-3.5 text-xs">
              {academic.links.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.url}
                    target={link.external ? '_blank' : '_self'}
                    rel={link.external ? 'noopener noreferrer' : ''}
                    className="inline-flex items-center gap-2 font-bold text-brand-700 hover:text-brand-900 hover:underline transition"
                  >
                    <ExternalLink size={14} className="text-isi-gold-600 shrink-0" />
                    <span>{link.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}

