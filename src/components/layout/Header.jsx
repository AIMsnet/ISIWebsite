import { useSelector, useDispatch } from "react-redux";
import { Menu, X, ExternalLink } from "lucide-react";
import { Link, NavLink } from "react-router-dom";
import { navigation } from "../../data/navigation";
import { closeMobileMenu, toggleMobileMenu } from "../../store/slices/uiSlice";

export default function Header() {
  const dispatch = useDispatch();
  const { mobileMenuOpen, language } = useSelector((state) => state.ui);

  const navLinkClass = ({ isActive }) =>
    `px-3.5 py-2.5 text-xs font-semibold uppercase tracking-wider transition-all duration-200 flex items-center gap-1.5 ${
      isActive
        ? "bg-brand-800 text-isi-gold-400 border-b-2 border-isi-gold-500 shadow-inner"
        : "text-slate-100 hover:bg-brand-800/60 hover:text-isi-gold-300"
    }`;

  return (
    <header className="w-full bg-brand-900">
      {/* ================= IDENTITY BANNER (ISICAL INSTITUTIONAL HEADER) ================= */}
      <div className="bg-gradient-to-r from-brand-900 via-brand-800 to-brand-900 border-b border-brand-700/60 py-3 px-4 text-white">
        <div className="container-shell flex flex-row items-center justify-between gap-4">
          {/* Main Logo & Title Group */}
          <Link
            to="/"
            className="flex items-center gap-3.5 group"
            aria-label="ISI Pune Home"
          >
            {/* Logo Container with High Contrast & Crisp Display */}
            <div className="relative flex items-center justify-center p-1 bg-white rounded-lg shadow-md border border-isi-gold-500/40 shrink-0 group-hover:border-isi-gold-400 transition-all duration-300">
              <img
                src="/Indian-statistical-institute-logo.png"
                alt="Indian Statistical Institute Emblem"
                className="h-12 sm:h-14 md:h-16 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
              />
            </div>

            {/* Institution Typography */}
            <div className="flex flex-col justify-center text-left">
              <div className="flex items-center gap-2">
                <span className="font-serif text-base sm:text-lg md:text-xl font-bold tracking-tight text-white leading-tight">
                  {language === "HI"
                    ? "भारतीय सांख्यिकीय संस्थान"
                    : "Indian Statistical Institute, SQC & OR DIVISION"}
                </span>
              </div>
              <div className="text-xs font-semibold text-isi-gold-400 tracking-wide flex items-center gap-2 mt-0.5">
                <span>{language === "HI" ? "पुणे केंद्र" : "PUNE UNIT"}</span>
                <span className="text-brand-400 hidden sm:inline">•</span>
                <span className="text-brand-100 text-[11px] hidden sm:inline font-normal">
                  {language === "HI"
                    ? "सांख्यिकी एवं कार्यक्रम कार्यान्वयन मंत्रालय"
                    : "An Autonomous Institute of National Importance"}
                </span>
              </div>
              <div className="hidden lg:block text-[10px] text-brand-200/90 font-light mt-0.5 tracking-wider">
                Founded by Prof. P. C. Mahalanobis | Act of Parliament 1959
              </div>
            </div>
          </Link>

          {/* Right Header Badges / Portal Shortcut */}
          <div className="hidden md:flex items-center gap-3">
            <div className="text-right border-r border-brand-700 pr-4">
              <div className="text-xs font-semibold text-isi-gold-400 uppercase tracking-widest">
                Statistical Quality Control
              </div>
              <div className="text-[11px] text-brand-200">
                SQC & OR Division, Pune
              </div>
            </div>
            <a
              href="https://www.isical.ac.in/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded bg-gradient-to-r from-isi-gold-500 to-isi-gold-600 hover:from-isi-gold-400 hover:to-isi-gold-500 text-brand-900 font-bold text-xs shadow transition-all duration-200"
            >
              <span>ISICAL Portal</span>
              <ExternalLink size={12} />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-brand-600 bg-brand-800 text-white lg:hidden hover:bg-brand-700 focus:outline-none focus:ring-2 focus:ring-isi-gold-500"
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileMenuOpen}
            onClick={() => dispatch(toggleMobileMenu())}
          >
            {mobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {/* ================= STICKY MAIN NAVIGATION BAR (OFFICIAL ISI BLUE) ================= */}
      <div className="sticky top-0 z-40 bg-brand-700 border-t border-b border-brand-600/60 shadow-header">
        <div className="container-shell flex items-center justify-between">
          <nav
            className="hidden lg:flex items-center gap-0.5 overflow-x-auto py-0"
            aria-label="Main navigation"
          >
            {navigation.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={navLinkClass}
                end={item.path === "/"}
              >
                {item.label}
              </NavLink>
            ))}
          </nav>

          {/* Quick Mobile Bar indicator */}
          <div className="lg:hidden py-2 text-xs font-semibold text-isi-gold-400 uppercase tracking-wider flex items-center justify-between w-full">
            <span>ISI Pune Menu</span>
            <span className="text-[10px] text-brand-200 font-normal">
              Tap icon for full navigation
            </span>
          </div>

          <div className="hidden lg:flex items-center gap-2 py-1">
            <Link
              to="/notices"
              className="inline-flex items-center gap-1.5 px-3 py-1 text-xs font-semibold text-white bg-isi-crimson-700 hover:bg-isi-crimson-600 rounded transition shadow-sm"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-white animate-ping"></span>
              Announcements
            </Link>
          </div>
        </div>

        {/* Mobile Drawer Menu inside sticky bar */}
        {mobileMenuOpen && (
          <div className="border-t border-brand-700 bg-brand-900 text-white lg:hidden">
            <nav
              className="container-shell flex flex-col py-3 space-y-1"
              aria-label="Mobile navigation"
            >
              {navigation.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  className={({ isActive }) =>
                    `rounded-md px-4 py-2.5 text-sm font-semibold uppercase tracking-wider flex items-center justify-between ${
                      isActive
                        ? "bg-brand-800 text-isi-gold-400 border-l-4 border-isi-gold-500"
                        : "text-slate-200 hover:bg-brand-800"
                    }`
                  }
                  end={item.path === "/"}
                  onClick={() => dispatch(closeMobileMenu())}
                >
                  <span>{item.label}</span>
                  {item.path === "/notices" && (
                    <span className="text-[10px] bg-isi-crimson-700 text-white px-2 py-0.5 rounded-full">
                      New
                    </span>
                  )}
                </NavLink>
              ))}
              <div className="pt-2 border-t border-brand-800 flex items-center justify-between px-4">
                <a
                  href="https://www.isical.ac.in/"
                  target="_blank"
                  rel="noreferrer"
                  className="text-xs text-isi-gold-400 hover:underline flex items-center gap-1"
                >
                  Official ISICAL Kolkata Portal <ExternalLink size={12} />
                </a>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
