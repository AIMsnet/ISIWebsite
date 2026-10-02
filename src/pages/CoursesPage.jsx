import {
  BookOpen,
  Calendar,
  Clock,
  ExternalLink,
  UserCheck,
} from "lucide-react";
import PageHero from "../components/common/PageHero";
import SectionHeading from "../components/common/SectionHeading";
import SEO from "../components/common/SEO";
import { courses } from "../data/courses";

export default function CoursesPage() {
  return (
    <>
      <SEO
        title="Executive Courses & Certification | Indian Statistical Institute Pune"
        description="Course catalogue for the Pune Unit with certifications, dates, status, and registration links."
        canonical="https://isipune.ac.in/courses"
      />
      <PageHero
        title="Executive Courses & Certification"
        description="Professional programmes, certification courses, and statistical analytics offerings from the Pune Unit."
      />

      <section className="container-shell section-space">
        <SectionHeading
          eyebrow="Programme Catalogue"
          title="Current and Upcoming Offerings"
          description="High-impact certification programmes designed for industry executives, engineers, analytics professionals, and officers."
        />

        {/* Desktop Table View */}
        <div className="hidden lg:block overflow-hidden rounded-xl border border-slate-200 bg-white shadow-academic mt-6">
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-slate-200 text-left">
              <thead className="bg-brand-900 text-xs font-bold uppercase tracking-wider text-isi-gold-400">
                <tr>
                  <th className="px-6 py-4">Course Name & Description</th>
                  <th className="px-5 py-4">Mode</th>
                  <th className="px-5 py-4">Schedule / Dates</th>
                  <th className="px-5 py-4">Duration</th>
                  <th className="px-5 py-4">Status</th>
                  <th className="px-6 py-4 text-center">Registration</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 text-xs text-slate-700 bg-white">
                {courses.map((course) => (
                  <tr
                    key={course.id}
                    className="hover:bg-slate-50/80 transition"
                  >
                    <td className="px-6 py-4 max-w-xs">
                      <div className="font-serif text-sm font-bold text-brand-900 leading-snug">
                        {course.title}
                      </div>
                      <div className="mt-1 text-slate-600 leading-relaxed text-[11px]">
                        {course.description}
                      </div>
                    </td>
                    <td className="px-5 py-4 font-semibold text-slate-800">
                      {course.mode}
                    </td>
                    <td className="px-5 py-4 font-medium text-slate-700">
                      {course.dates}
                    </td>
                    <td className="px-5 py-4 font-medium text-slate-700">
                      {course.duration}
                    </td>
                    <td className="px-5 py-4">
                      <span
                        className={`status-badge ${course.status === "Open" ? "bg-emerald-100 text-emerald-800 border border-emerald-300" : course.status === "Closed" ? "bg-slate-200 text-slate-800 border border-slate-300" : "bg-amber-100 text-amber-800 border border-amber-300"}`}
                      >
                        {course.status}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex flex-col sm:flex-row items-center justify-center gap-2">
                        {course.brochureUrl ? (
                          <a
                            href={course.brochureUrl}
                            target="_blank"
                            rel="noreferrer"
                            className="btn-secondary px-3 py-1.5 text-[11px] w-full text-center flex items-center justify-center gap-1"
                          >
                            <ExternalLink size={12} /> Brochure
                          </a>
                        ) : null}
                        <a
                          href={course.registrationUrl}
                          className="btn-primary px-3 py-1.5 text-[11px] w-full text-center flex items-center justify-center gap-1"
                        >
                          <UserCheck size={12} /> Register
                        </a>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Mobile & Tablet Card Layout */}
        <div className="grid gap-6 lg:hidden mt-6">
          {courses.map((course) => (
            <article
              key={course.id}
              className="card-gold-accent p-5 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between gap-3 mb-3">
                  <span
                    className={`status-badge ${course.status === "Open" ? "bg-emerald-100 text-emerald-800 border border-emerald-300" : "bg-amber-100 text-amber-800 border border-amber-300"}`}
                  >
                    {course.status}
                  </span>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500">
                    {course.mode}
                  </span>
                </div>
                <h3 className="font-serif text-base font-bold text-brand-900 leading-snug">
                  {course.title}
                </h3>
                <p className="mt-2 text-xs text-slate-600 leading-relaxed">
                  {course.description}
                </p>

                <div className="mt-4 space-y-2 text-xs bg-slate-50 p-3 rounded border border-slate-200">
                  <div className="flex items-center gap-2 text-slate-700">
                    <Calendar
                      size={14}
                      className="text-isi-gold-600 shrink-0"
                    />
                    <span>
                      <strong className="text-slate-900">Dates:</strong>{" "}
                      {course.dates}
                    </span>
                  </div>
                  <div className="flex items-center gap-2 text-slate-700">
                    <Clock size={14} className="text-isi-gold-600 shrink-0" />
                    <span>
                      <strong className="text-slate-900">Duration:</strong>{" "}
                      {course.duration}
                    </span>
                  </div>
                </div>
              </div>

              <div className="mt-5 flex items-center gap-3">
                {course.brochureUrl ? (
                  <a
                    href={course.brochureUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="flex-1 btn-secondary text-xs text-center py-2 flex items-center justify-center gap-1"
                  >
                    <ExternalLink size={13} /> View Brochure
                  </a>
                ) : null}
                <a
                  href={course.registrationUrl}
                  className="flex-1 btn-primary text-xs text-center py-2 flex items-center justify-center gap-1"
                >
                  <UserCheck size={13} /> Register
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
