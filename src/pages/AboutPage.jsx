import PageHero from '../components/common/PageHero';
import SectionHeading from '../components/common/SectionHeading';
import SEO from '../components/common/SEO';
import { Award, CheckCircle2, History, Target } from 'lucide-react';

const historyPoints = [
  'The Institute began in a small room in Presidency College, Kolkata, in December 1931.',
  'Founded by Professor Prasanta Chandra Mahalanobis as a pioneer in statistical research and education.',
  'Gained the status of an Institution of National Importance by an Act of Parliament in 1959.',
  'Today operates multi-disciplinary research divisions, academic campuses, and SQC & OR units across India.',
];

export default function AboutPage() {
  return (
    <>
      <SEO title="About ISI Pune | Indian Statistical Institute" description="About the Pune unit of the Indian Statistical Institute, its history, objectives, and role in research, training, and consultancy." canonical="https://isipune.ac.in/about" />
      <PageHero title="About Pune Centre" description="A specialized unit under the Statistical Quality Control & Operations Research (SQC & OR) Division of the Indian Statistical Institute." />

      {/* Overview Section */}
      <section className="container-shell section-space">
        <SectionHeading eyebrow="Institutional Mandate" title="The Pune Unit Overview" description="Applying statistical science, operations research, and quality engineering to solve real-world industrial and administrative challenges." />
        
        <div className="mt-8 grid gap-8 lg:grid-cols-2">
          <div className="space-y-4 text-sm leading-relaxed text-slate-700">
            <p className="font-medium text-slate-900">
              The Pune Unit of the Indian Statistical Institute functions actively in executive teaching, professional certification, statistical consulting, and applied research.
            </p>
            <p>
              We partner with commercial industries, defense organizations, manufacturing enterprises, and public institutions across India to implement structured methodology in Six Sigma, Total Quality Management (TQM), ISO management systems, and advanced data analytics.
            </p>
            <div className="p-4 rounded-lg bg-brand-50 border-l-4 border-brand-700 text-xs text-brand-900 font-serif leading-relaxed">
              "Quality is not an accident; it is always the result of high intention, sincere effort, intelligent direction, and skillful execution."
            </div>
          </div>

          <div className="card-academic p-6">
            <h3 className="font-serif text-lg font-bold text-brand-900 border-b border-slate-200 pb-2.5 flex items-center gap-2">
              <Target className="text-isi-gold-600" size={20} />
              Major Focus Areas
            </h3>
            <ul className="mt-4 space-y-3 text-xs text-slate-700">
              {[
                'Statistical Quality Control (SQC) & Industrial Process Excellence',
                'Operations Research (OR) & Quantitative Decision Support',
                'Executive Certification Programmes (Green Belt, Black Belt, Data Analytics)',
                'Corporate Consulting & Data-backed Performance Improvement',
              ].map((item) => (
                <li key={item} className="flex items-start gap-2.5">
                  <CheckCircle2 size={16} className="text-brand-700 shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Parent Institute Section */}
      <section className="bg-brand-50/70 border-y border-brand-200/60">
        <div className="container-shell section-space">
          <SectionHeading eyebrow="National Identity" title="Indian Statistical Institute Ecosystem" description="A unique multi-locational central university devoted to research, education, and statistical applications." />
          <div className="space-y-4 text-sm leading-relaxed text-slate-700 max-w-4xl">
            <p>
              The Indian Statistical Institute is a unique Institution of National Importance under the Ministry of Statistics and Programme Implementation (MoSPI), Government of India.
            </p>
            <p>
              Headquartered in Kolkata, ISI has major academic centres in Bangalore, Delhi, Chennai, and Tezpur, alongside network units in cities like Pune, Hyderabad, Coimbatore, and Vadodara.
            </p>
          </div>
        </div>
      </section>

      {/* Objectives Section */}
      <section className="container-shell section-space">
        <SectionHeading eyebrow="Core Mission" title="Statutory Objectives" description="The Institute’s work is oriented to national development, advanced statistical theory, and industrial efficiency." />
        
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {[
            { step: '01', title: 'Knowledge Dissemination', text: 'To promote the study and dissemination of knowledge of Statistics and develop statistical theory for research and practical applications.' },
            { step: '02', title: 'Interdisciplinary Research', text: 'To undertake research in fields of natural and social sciences with a view to mutual development of statistics and these sciences.' },
            { step: '03', title: 'Operational Efficiency', text: 'To investigate projects and support operations research for national planning, industry development, and efficiency improvement.' },
          ].map((item) => (
            <div key={item.step} className="card-gold-accent p-6 flex flex-col justify-between">
              <div>
                <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-brand-900 text-sm font-bold text-isi-gold-400">
                  {item.step}
                </div>
                <h3 className="font-serif text-base font-bold text-brand-900">{item.title}</h3>
                <p className="mt-2 text-xs leading-relaxed text-slate-600">{item.text}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* History & Recognition */}
      <section className="bg-slate-100/80 border-t border-slate-200">
        <div className="container-shell section-space">
          <SectionHeading eyebrow="Legacy" title="Historical Landmark & Recognition" description="Over 90 years of pioneering statistical research and public service in India." />
          
          <div className="grid gap-6 lg:grid-cols-2">
            <div className="card-surface p-6">
              <h3 className="font-serif text-lg font-bold text-brand-900 flex items-center gap-2 border-b border-slate-200 pb-2.5">
                <History className="text-brand-700" size={20} />
                Historical Timeline
              </h3>
              <ul className="mt-4 space-y-3 text-xs leading-relaxed text-slate-700">
                {historyPoints.map((point) => (
                  <li key={point} className="flex items-start gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-isi-gold-500 shrink-0 mt-1.5"></span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="card-surface p-6">
              <h3 className="font-serif text-lg font-bold text-brand-900 flex items-center gap-2 border-b border-slate-200 pb-2.5">
                <Award className="text-isi-gold-600" size={20} />
                Parliamentary Status
              </h3>
              <p className="mt-4 text-xs leading-relaxed text-slate-700">
                Recognized by the Indian Parliament through the Indian Statistical Institute Act (No. 57 of 1959) as an Institution of National Importance, empowering the Institute to grant degrees and diplomas in Statistics, Mathematics, Computer Science, and Quantitative Economics.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

