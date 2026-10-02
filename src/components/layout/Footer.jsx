import { ArrowUpRight, Mail, MapPin, Phone, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';
import { siteConfig } from '../../data/siteConfig';
import { navigation } from '../../data/navigation';

export default function Footer() {
  return (
    <footer className="border-t-4 border-isi-gold-500 bg-brand-900 text-slate-200 shadow-xl">
      <div className="container-shell py-12">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          
          {/* Column 1: Logo & Overview */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-white rounded-lg shadow-md border border-isi-gold-500/40 inline-flex items-center justify-center">
                <img
                  src="/Indian-statistical-institute-logo.png"
                  alt="Indian Statistical Institute Logo"
                  className="h-12 w-auto object-contain"
                />
              </div>
              <div>
                <div className="font-serif text-base font-bold text-white leading-snug">Indian Statistical Institute</div>
                <div className="text-xs uppercase tracking-widest text-isi-gold-400 font-semibold">Pune Centre</div>
              </div>
            </div>
            <p className="text-xs text-slate-300 leading-relaxed">
              An Autonomous Institute of National Importance under the Ministry of Statistics & Programme Implementation (MoSPI), Government of India.
            </p>
            <div className="text-[11px] text-brand-300 font-light border-l-2 border-isi-gold-500 pl-3.5 py-0.5">
              SQC & OR Division | Dedicated to Statistical Research, Quality Management & Data Analytics.
            </div>
          </div>

          {/* Column 2: Navigation Links */}
          <div>
            <h3 className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-isi-gold-400 border-b border-brand-800 pb-2">
              Centre Navigation
            </h3>
            <ul className="space-y-2 text-xs text-slate-300">
              {navigation.map((item) => (
                <li key={item.path}>
                  <Link to={item.path} className="transition hover:text-isi-gold-300 flex items-center gap-1.5">
                    <span className="text-isi-gold-500 text-[10px]">›</span>
                    <span>{item.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Institutional Portals */}
          <div>
            <h3 className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-isi-gold-400 border-b border-brand-800 pb-2">
              Official Portals
            </h3>
            <ul className="space-y-2.5 text-xs text-slate-300">
              <li>
                <a href="https://www.isical.ac.in/" target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 hover:text-isi-gold-300 transition">
                  <ExternalLink size={13} className="text-isi-gold-500" />
                  <span>ISI Main Headquarters (Kolkata)</span>
                </a>
              </li>
              <li>
                <a href="http://www.isical.ac.in/~deanweb/academic" target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 hover:text-isi-gold-300 transition">
                  <ArrowUpRight size={13} className="text-isi-gold-500" />
                  <span>Academic Programmes & Dean Office</span>
                </a>
              </li>
              <li>
                <a href="https://mospi.gov.in/" target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 hover:text-isi-gold-300 transition">
                  <ArrowUpRight size={13} className="text-isi-gold-500" />
                  <span>MoSPI, Govt. of India Portal</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact Information */}
          <div>
            <h3 className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-isi-gold-400 border-b border-brand-800 pb-2">
              Contact Centre
            </h3>
            <ul className="space-y-3 text-xs text-slate-300">
              <li className="flex items-start gap-2.5">
                <MapPin size={16} className="mt-0.5 shrink-0 text-isi-gold-400" />
                <span className="leading-relaxed">{siteConfig.address}</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone size={14} className="shrink-0 text-isi-gold-400" />
                <a href="tel:+912025352621" className="hover:text-white transition">{siteConfig.phone}</a>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail size={14} className="shrink-0 text-isi-gold-400" />
                <a href={`mailto:${siteConfig.email}`} className="hover:text-white transition">{siteConfig.email}</a>
              </li>
            </ul>
          </div>

        </div>
      </div>

      {/* Copyright Bar */}
      <div className="border-t border-brand-800 bg-brand-950/80 py-4">
        <div className="container-shell flex flex-col gap-2 text-xs text-slate-400 sm:flex-row sm:items-center sm:justify-between">
          <div>
            © {new Date().getFullYear()} Indian Statistical Institute Pune Unit. All rights reserved.
          </div>
          <div className="flex items-center gap-4 text-[11px]">
            <Link to="/about" className="hover:text-isi-gold-300 transition">About Centre</Link>
            <span>•</span>
            <Link to="/contact" className="hover:text-isi-gold-300 transition">Contact Us</Link>
            <span>•</span>
            <a href="https://www.isical.ac.in/" target="_blank" rel="noreferrer" className="hover:text-isi-gold-300 transition">ISICAL Main Site</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

