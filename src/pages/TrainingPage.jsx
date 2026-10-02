import PageHero from '../components/common/PageHero';
import SectionHeading from '../components/common/SectionHeading';
import SEO from '../components/common/SEO';
import { Award, BookOpen, CheckCircle2 } from 'lucide-react';

const modules = [
  'Six Sigma Green Belt Certification',
  'Six Sigma Black Belt Certification',
  'Master Black Belt & TPM Leadership',
  'Applied Data Analytics using Python',
  'Advanced Data Analytics for Defense & Industry',
  'ISO & Management Systems Quality Improvement',
];

export default function TrainingPage() {
  return (
    <>
      <SEO title="Professional Training & Certification | Indian Statistical Institute Pune" description="Training modules and professional programmes offered by the Pune Unit of ISI in analytics, quality management, and operational excellence." canonical="https://isipune.ac.in/training" />
      <PageHero title="Professional Training & Certification" description="Executive training modules, certification programmes, and customized corporate workshops in statistical thinking and quality improvement." />

      <section className="container-shell section-space">
        <SectionHeading eyebrow="Programmes" title="Executive Training Offerings" description="The Pune Unit conducts open-house certification programmes as well as customized in-plant training for industrial organizations." />
        
        <div className="mt-8 grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="space-y-4 text-sm leading-relaxed text-slate-700">
            <p className="font-medium text-slate-900">
              Our training modules are engineered for engineers, quality heads, managers, analytics leaders, and defense officers seeking rigorous, data-backed methodologies.
            </p>
            <p>
              Programmes are conducted either as open-house executive workshops or as organization-specific in-house projects with guided industrial application.
            </p>
          </div>

          <div className="card-academic p-6">
            <h3 className="font-serif text-lg font-bold text-brand-900 border-b border-slate-200 pb-2.5 flex items-center gap-2">
              <Award className="text-isi-gold-600" size={20} />
              Key Certification Themes
            </h3>
            <ul className="mt-4 space-y-3 text-xs text-slate-700">
              {modules.map((module) => (
                <li key={module} className="flex items-start gap-2.5">
                  <CheckCircle2 size={16} className="text-brand-700 shrink-0 mt-0.5" />
                  <span>{module}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-slate-100/80 border-t border-slate-200">
        <div className="container-shell section-space">
          <SectionHeading eyebrow="Curriculum Pillar" title="What the Programmes Deliver" description="Blending conceptual statistical principles with practical case studies and hands-on software tools." />
          
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {[
              { num: '1', title: 'Statistical Foundations', desc: 'Probability theory, hypothesis testing, regression modeling, and statistical process control for analytical decision-making.' },
              { num: '2', title: 'Process Optimization', desc: 'DMAIC methodology, root-cause analysis, Design of Experiments (DOE), and structured project execution.' },
              { num: '3', title: 'Operational Excellence', desc: 'Integrating Quality Management Systems, Lean principles, and data analytics into enterprise governance.' },
            ].map((item) => (
              <div key={item.num} className="card-gold-accent p-6 flex flex-col justify-between">
                <div>
                  <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-brand-900 text-sm font-bold text-isi-gold-400">
                    {item.num}
                  </div>
                  <h3 className="font-serif text-base font-bold text-brand-900">{item.title}</h3>
                  <p className="mt-2 text-xs leading-relaxed text-slate-600">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

