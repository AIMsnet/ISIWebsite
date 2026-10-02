import {
  ArrowRight,
  BookOpenText,
  BriefcaseBusiness,
  ChartColumn,
  ClipboardCheck,
  Factory,
  Mail,
  MapPin,
  Phone,
  Bell,
  ShieldCheck,
  Award,
} from "lucide-react";
import { Link } from "react-router-dom";
import SectionHeading from "../components/common/SectionHeading";
import { courses } from "../data/courses";
import { notices } from "../data/notices";
import { services } from "../data/services";
import { siteConfig } from "../data/siteConfig";
import SEO from "../components/common/SEO";

const featureCards = [
  {
    title: "Six Sigma Excellence",
    icon: ClipboardCheck,
    description:
      "Green Belt, Black Belt certification and process optimization programmes for professionals.",
  },
  {
    title: "Data Analytics & AI",
    icon: ChartColumn,
    description:
      "Applied statistical analytics, decision support, and data-driven methods for industry.",
  },
  {
    title: "Operations Research",
    icon: BriefcaseBusiness,
    description:
      "Strategic optimization and operational decision modeling for commercial and defense sectors.",
  },
  {
    title: "Quality Management Systems",
    icon: Factory,
    description:
      "TQM, TPM, ISO statistical process control consulting with scientific rigour.",
  },
];

export default function HomePage() {
  const featuredCourses = courses
    .filter((course) => course.featured)
    .slice(0, 3);
  const topNotices = notices.slice(0, 3);

  return (
    <>
      <SEO
        title="Indian Statistical Institute (ISI) Pune Centre | Official Portal"
        description="Official website for Indian Statistical Institute Pune — training, applied statistics, quality management, analytics, and consultancy."
        canonical="https://isipune.ac.in/"
      />

      {/* ================= ANNOUNCEMENT TICKER BANNER (ISICAL ACADEMIC STYLE) ================= */}
      <div className="bg-brand-950 text-white text-xs border-b border-brand-800 py-2 px-4">
        <div className="container-shell flex items-center gap-3 overflow-hidden">
          <div className="flex items-center gap-1.5 px-2.5 py-0.5 bg-isi-crimson-700 text-white rounded font-bold shrink-0 tracking-wider text-[11px] uppercase">
            <Bell size={12} className="animate-bounce" />
            Notice Ticker
          </div>
          <div className="overflow-hidden whitespace-nowrap flex-1 text-slate-200">
            <div className="inline-block animate-marquee space-x-8 text-brand-500">
              <span className="font-semibold text-isi-gold-400">
                ★ Admissions Open:
              </span>
              Certificate Course in Advanced Data Analytics for Defence Officers
              <span className="mx-4 text-brand-500">•</span>
              <span className="font-semibold text-isi-gold-400">
                ★ Upcoming Workshop:
              </span>
              Six Sigma Black Belt Certification Program starts next month
              <span className="mx-4 text-brand-500">•</span>
              <span className="font-semibold text-isi-gold-400">
                ★ Official Link:
              </span>
              Access research publications via Kolkata Headquarters Main Portal
            </div>
          </div>
          <Link
            to="/notices"
            className="text-[11px] text-isi-gold-400 font-semibold hover:underline shrink-0 hidden sm:inline"
          >
            View All Notices →
          </Link>
        </div>
      </div>

      {/* ================= HERO SECTION (ISICAL DEEP NAVY GRADIENT & INSTITUTIONAL CREST) ================= */}
      <section className="relative bg-gradient-to-b from-brand-900 via-brand-800 to-brand-950 text-white overflow-hidden py-12 md:py-20 border-b-4 border-isi-gold-500">
        {/* Background Subtle Watermark Overlay */}
        <div className="absolute inset-0 opacity-5 pointer-events-none flex items-center justify-center">
          <img
            src="/Indian-statistical-institute-logo.png"
            alt=""
            className="w-[600px] h-[600px] object-contain filter invert"
          />
        </div>

        <div className="container-shell relative z-10 grid gap-10 lg:grid-cols-[1.25fr_0.75fr] lg:items-center">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-isi-gold-500/40 bg-brand-900/80 px-3.5 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-isi-gold-300 backdrop-blur-sm mb-4 shadow-sm">
              <ShieldCheck size={14} className="text-isi-gold-400" />
              Autonomous Institute of National Importance
            </div>

            <h1 className="font-serif text-3xl font-extrabold tracking-tight sm:text-4xl md:text-5xl lg:text-5xl leading-tight">
              Statistical Quality Control & Operations Research, Pune Unit
            </h1>

            <p className="mt-5 max-w-2xl text-base text-slate-200 leading-relaxed md:text-lg">
              Established under the Act of Parliament (1959), Indian Statistical
              Institute has many divisions and units. SQC&OR Unit of Pune is
              engaged in Training, Teaching, Reasearch and Consulting in the
              field of Quality, Reliability and Analytics. The Unit is
              operational since 1977 and has addressed specific training and
              consulting requirements of no less than 1000 industries apart from
              its innovative public programmes in the areas of Six Sigma & Data
              Analytics. The Unit of Pune empowers private industry, defense,
              and public organizations through rigorous statistical and
              analytical approach.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Link to="/courses" className="btn-gold">
                Explore Training Programs
              </Link>
              <Link
                to="/about"
                className="btn-secondary border-slate-300/30 bg-white/10 text-white hover:bg-white/20"
              >
                About Pune Unit
              </Link>
            </div>

            <div className="mt-8 pt-6 border-t border-brand-700/60 grid grid-cols-3 gap-3">
              <div className="bg-[#001530] p-3 rounded-lg border border-isi-gold-500/40 shadow-md">
                <div className="font-serif text-xl sm:text-2xl font-extrabold text-isi-gold-400 drop-shadow-sm">
                  1931
                </div>
                <div className="text-[11px] font-semibold text-slate-100 mt-0.5 leading-snug">
                  Founded by Prof. P.C. Mahalanobis
                </div>
              </div>
              <div className="bg-[#001530] p-3 rounded-lg border border-isi-gold-500/40 shadow-md">
                <div className="font-serif text-xl sm:text-2xl font-extrabold text-isi-gold-400 drop-shadow-sm">
                  MoSPI
                </div>
                <div className="text-[11px] font-semibold text-slate-100 mt-0.5 leading-snug">
                  Govt. of India Ministry
                </div>
              </div>
              <div className="bg-[#001530] p-3 rounded-lg border border-isi-gold-500/40 shadow-md">
                <div className="font-serif text-xl sm:text-2xl font-extrabold text-isi-gold-400 drop-shadow-sm">
                  SQC & OR
                </div>
                <div className="text-[11px] font-semibold text-slate-100 mt-0.5 leading-snug">
                  Specialized Division
                </div>
              </div>
            </div>
          </div>

          {/* Featured Programme Card */}
          <div className="rounded-xl border border-isi-gold-500/30 bg-gradient-to-br from-brand-800/90 to-brand-900/90 p-6 shadow-2xl backdrop-blur-md">
            <div className="flex items-center justify-between border-b border-brand-700/80 pb-3 mb-4">
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-isi-gold-400 flex items-center gap-1.5">
                <Award size={14} />
                Spotlight Programme
              </span>
              <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-isi-crimson-700 text-white">
                Featured
              </span>
            </div>

            <h2 className="font-serif text-xl font-bold text-white leading-snug">
              Training Program of Advanced Data Analytics for Defence Officers
            </h2>
            <p className="mt-3 text-xs text-slate-300 leading-relaxed">
              Open for registration — an intensive 120-day specialized
              curriculum covering statistical modeling, predictive analytics,
              and decision analytics.
            </p>

            <div className="mt-5 space-y-2 text-xs text-slate-200 bg-brand-950/60 p-3.5 rounded border border-brand-700/50">
              <div className="flex items-center justify-between">
                <span className="text-brand-300">Duration:</span>
                <span className="font-semibold text-white">
                  120 Days Full-Time
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-brand-300">Location:</span>
                <span className="font-semibold text-white">
                  ISI Pune Office
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-brand-300">Target Audience:</span>
                <span className="font-semibold text-white">
                  Defense & Public Sector Officers
                </span>
              </div>
            </div>

            <div className="mt-5 flex gap-3">
              <Link
                to="/courses"
                className="w-full btn-gold text-center text-xs py-2"
              >
                Program Details & Registration
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ================= CORE SPECIALIZATION AREAS ================= */}
      <section className="section-space">
        <div className="container-shell">
          <SectionHeading
            eyebrow="Core Divisions"
            title="Professional Learning & Applied Expertise"
            description="The Pune Unit focuses on statistics, quality management, analytics, and performance improvement for industry and public-sector organizations."
          />

          <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {featureCards.map(({ title, icon: Icon, description }) => (
              <div
                key={title}
                className="card-academic p-6 flex flex-col justify-between"
              >
                <div>
                  <div className="mb-4 inline-flex rounded-lg bg-brand-50 p-3 text-brand-700 border border-brand-200">
                    <Icon size={24} />
                  </div>
                  <h3 className="font-serif text-lg font-bold text-brand-900">
                    {title}
                  </h3>
                  <p className="mt-2 text-xs leading-relaxed text-slate-600">
                    {description}
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-slate-100 flex items-center text-xs font-semibold text-brand-700">
                  <span>Learn more</span>
                  <ArrowRight size={13} className="ml-1" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= UPCOMING COURSES ================= */}
      <section className="bg-slate-100/80 border-y border-slate-200">
        <div className="container-shell section-space">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <SectionHeading
              eyebrow="Programmes"
              title="Upcoming Training & Certification Courses"
              description="Certification courses and training modules delivered through open-house and organization-specific programmes."
            />
            <Link
              to="/courses"
              className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-brand-700 hover:text-brand-900 bg-white px-4 py-2 rounded border border-brand-200 shadow-sm transition"
            >
              View All Courses <ArrowRight size={14} />
            </Link>
          </div>

          <div className="mt-8 grid gap-6 lg:grid-cols-3">
            {featuredCourses.map((course) => (
              <article
                key={course.id}
                className="card-gold-accent p-6 flex flex-col justify-between"
              >
                <div>
                  <div className="mb-3 flex items-center justify-between gap-4">
                    <span className="status-badge bg-emerald-100 text-emerald-800 border border-emerald-200">
                      {course.status}
                    </span>
                    <span className="text-[11px] font-semibold uppercase tracking-wider text-slate-500">
                      {course.mode}
                    </span>
                  </div>
                  <h3 className="font-serif text-lg font-bold text-brand-900 leading-snug">
                    {course.title}
                  </h3>
                  <p className="mt-2 text-xs leading-relaxed text-slate-600">
                    {course.description}
                  </p>

                  <dl className="mt-4 space-y-2 text-xs text-slate-600 bg-slate-50 p-3 rounded border border-slate-200">
                    <div className="flex justify-between gap-3">
                      <dt className="font-medium text-slate-500">Schedule:</dt>
                      <dd className="text-right font-semibold text-slate-800">
                        {course.dates}
                      </dd>
                    </div>
                    <div className="flex justify-between gap-3">
                      <dt className="font-medium text-slate-500">Duration:</dt>
                      <dd className="text-right font-semibold text-slate-800">
                        {course.duration}
                      </dd>
                    </div>
                  </dl>
                </div>

                <div className="mt-6 flex items-center gap-3">
                  {course.brochureUrl ? (
                    <a
                      href={course.brochureUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="flex-1 btn-secondary text-xs text-center py-2"
                    >
                      View Brochure
                    </a>
                  ) : null}
                  <a
                    href={course.registrationUrl}
                    className="flex-1 btn-primary text-xs text-center py-2"
                  >
                    Register
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ================= ABOUT THE SQC & OR PUNE UNIT ================= */}
      <section className="section-space">
        <div className="container-shell">
          <SectionHeading
            eyebrow="Institutional Heritage"
            title="About SQC & OR Division, Pune Unit"
            description="The Pune unit provides high-quality training, consulting, and research applying statistics and operations research."
          />

          <div className="grid gap-8 lg:grid-cols-2">
            <div className="space-y-4 text-sm leading-relaxed text-slate-700">
              <p className="font-medium text-slate-900">
                The Indian Statistical Institute (ISI) Pune Unit functions under
                the Statistical Quality Control and Operations Research (SQC &
                OR) Division of ISI Headquarters Kolkata.
              </p>
              <p>
                We bring statistical discipline to initiatives such as Total
                Quality Management (TQM), TPM, Six Sigma, quality management
                systems, business improvement, and industrial data analytics
                across India.
              </p>
              <div className="p-4 bg-brand-50 rounded-lg border-l-4 border-brand-700 text-xs text-brand-900 leading-relaxed font-serif">
                "Statistics is a universal key for modern scientific research,
                governance, and industrial management."
                <div className="mt-1 font-sans font-bold text-brand-700 text-[11px]">
                  — Prof. Prasanta Chandra Mahalanobis
                </div>
              </div>
            </div>

            <div className="card-academic p-6">
              <h3 className="font-serif text-lg font-bold text-brand-900 border-b border-slate-200 pb-2">
                Core Mandate & Objectives
              </h3>
              <ul className="mt-4 space-y-3 text-xs text-slate-700">
                <li className="flex gap-3">
                  <span className="mt-1 h-2 w-2 rounded-full bg-isi-gold-500 shrink-0"></span>
                  <span>
                    Promote the use of statistics and quantitative methods in
                    planning, operations, and governance.
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="mt-1 h-2 w-2 rounded-full bg-isi-gold-500 shrink-0"></span>
                  <span>
                    Provide executive training, professional certification, and
                    applied research in quality control.
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="mt-1 h-2 w-2 rounded-full bg-isi-gold-500 shrink-0"></span>
                  <span>
                    Support private and public industries with statistical
                    consulting and evidence-based decision-making.
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ================= NOTICES SECTION ================= */}
      <section className="bg-slate-100/80 border-t border-slate-200">
        <div className="container-shell section-space">
          <div className="flex items-end justify-between gap-4">
            <SectionHeading
              eyebrow="Official Circulars"
              title="Latest Notices & Announcements"
              description="Institutional updates and official announcements for programmes, exams, and workshops."
            />
            <Link
              to="/notices"
              className="hidden text-xs font-bold uppercase tracking-wider text-brand-700 hover:text-brand-900 md:inline-flex"
            >
              View All Notices →
            </Link>
          </div>

          <div className="mt-8 grid gap-5 lg:grid-cols-3">
            {topNotices.map((notice) => (
              <article key={notice.id} className="card-surface p-6">
                <div className="mb-3 flex items-center justify-between gap-3">
                  <span className="status-badge bg-amber-100 text-amber-800 border border-amber-200">
                    {notice.category}
                  </span>
                  {notice.isNew && (
                    <span className="status-badge bg-isi-crimson-700 text-white">
                      New
                    </span>
                  )}
                </div>
                <h3 className="font-serif text-base font-bold text-brand-900 leading-snug">
                  {notice.title}
                </h3>
                <p className="mt-2 text-[11px] font-medium text-slate-400">
                  Published:{" "}
                  {new Date(notice.date).toLocaleDateString("en-GB", {
                    day: "2-digit",
                    month: "short",
                    year: "numeric",
                  })}
                </p>
                <p className="mt-3 text-xs leading-relaxed text-slate-600">
                  {notice.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
