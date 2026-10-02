import PageHero from '../components/common/PageHero';
import SectionHeading from '../components/common/SectionHeading';
import SEO from '../components/common/SEO';
import { services } from '../data/services';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

export default function ServicesPage() {
  return (
    <>
      <SEO title="Services & Capabilities | Indian Statistical Institute Pune" description="Professional services offered by the Pune Unit including public programmes, statistical consulting, surveys, data analytics, Six Sigma, and management systems support." canonical="https://isipune.ac.in/services" />
      <PageHero title="Services & Technical Capabilities" description="Applied statistical, analytical, and operational services designed to support industry, quality engineering, and organizational performance." />

      <section className="container-shell section-space">
        <SectionHeading eyebrow="Capabilities" title="Consulting & Training Services" description="The Pune Unit brings together statistical consulting, executive training, industrial surveys, and evidence-based quality improvement." />
        
        <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service) => (
            <article key={service.title} className="card-academic p-6 flex flex-col justify-between">
              <div>
                <div className="mb-3 flex items-center justify-between">
                  <span className="text-[11px] font-bold uppercase tracking-widest text-brand-700 bg-brand-50 px-2.5 py-1 rounded border border-brand-200">
                    {service.type}
                  </span>
                  <CheckCircle2 size={16} className="text-isi-gold-600" />
                </div>
                <h2 className="font-serif text-lg font-bold text-brand-900 leading-snug">{service.title}</h2>
                <p className="mt-3 text-xs leading-relaxed text-slate-600">{service.summary}</p>
              </div>

              <div className="mt-5 pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-brand-800">
                <span>SQC & OR Services</span>
                <ArrowRight size={14} className="text-isi-gold-600" />
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}

