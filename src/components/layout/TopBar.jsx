import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Search, Globe, Home } from 'lucide-react';
import { setFontSizeLevel, toggleLanguage, setSearchQuery } from '../../store/slices/uiSlice';

export default function TopBar() {
  const dispatch = useDispatch();
  const { fontSizeLevel, language, searchQuery } = useSelector((state) => state.ui);
  const [localSearch, setLocalSearch] = useState(searchQuery || '');

  const handleSearch = (e) => {
    e.preventDefault();
    dispatch(setSearchQuery(localSearch));
  };

  return (
    <div className="bg-brand-900 border-b border-brand-800 text-white text-xs py-1.5 px-4 shadow-sm">
      <div className="container-shell flex flex-wrap items-center justify-between gap-2">
        {/* Left: Ministry & National Importance Tag */}
        <div className="flex items-center gap-3 font-medium tracking-wide text-brand-100">
          <span className="inline-flex items-center gap-1">
            <span className="inline-block w-2 h-2 rounded-full bg-isi-gold-500"></span>
            Institution of National Importance
          </span>
          <span className="hidden md:inline text-brand-300">|</span>
          <span className="hidden md:inline text-brand-200 text-[11px]">
            Ministry of Statistics & Programme Implementation (MoSPI), Govt. of India
          </span>
        </div>

        {/* Right: Utility Bar Controls (matching ISICAL style) */}
        <div className="flex items-center gap-3 ml-auto">
          {/* Main ISICAL site shortcut */}
          <a
            href="https://www.isical.ac.in/"
            target="_blank"
            rel="noreferrer"
            className="hidden sm:flex items-center gap-1 px-2 py-0.5 rounded bg-brand-800 hover:bg-brand-700 text-brand-100 hover:text-white transition border border-brand-700 text-[11px]"
            title="Official ISICAL Main Portal"
          >
            <Home size={12} />
            <span>ISICAL Main</span>
          </a>

          {/* Text Size Controls: A- A A+ */}
          <div className="flex items-center rounded bg-brand-800/80 p-0.5 border border-brand-700 text-[11px]">
            <button
              type="button"
              onClick={() => dispatch(setFontSizeLevel(-1))}
              className={`px-1.5 py-0.5 rounded transition ${fontSizeLevel === -1 ? 'bg-isi-gold-500 text-brand-900 font-bold' : 'text-brand-100 hover:text-white'}`}
              title="Decrease text size"
            >
              A−
            </button>
            <button
              type="button"
              onClick={() => dispatch(setFontSizeLevel(0))}
              className={`px-1.5 py-0.5 rounded transition ${fontSizeLevel === 0 ? 'bg-isi-gold-500 text-brand-900 font-bold' : 'text-brand-100 hover:text-white'}`}
              title="Reset text size"
            >
              A
            </button>
            <button
              type="button"
              onClick={() => dispatch(setFontSizeLevel(1))}
              className={`px-1.5 py-0.5 rounded transition ${fontSizeLevel === 1 ? 'bg-isi-gold-500 text-brand-900 font-bold' : 'text-brand-100 hover:text-white'}`}
              title="Increase text size"
            >
              A+
            </button>
          </div>

          {/* Language Toggle */}
          <button
            type="button"
            onClick={() => dispatch(toggleLanguage())}
            className="flex items-center gap-1 px-2 py-0.5 rounded bg-brand-800 hover:bg-brand-700 text-isi-gold-400 font-medium transition border border-brand-700 text-[11px]"
          >
            <Globe size={12} />
            <span>{language === 'EN' ? 'हिंदी' : 'English'}</span>
          </button>

          {/* Quick Search Box */}
          <form onSubmit={handleSearch} className="hidden lg:flex items-center gap-1">
            <div className="relative">
              <input
                type="text"
                placeholder="Search ISI Pune..."
                value={localSearch}
                onChange={(e) => setLocalSearch(e.target.value)}
                className="w-40 py-0.5 pl-7 pr-2 text-xs bg-brand-800 text-white placeholder-brand-300 rounded border border-brand-700 focus:outline-none focus:ring-1 focus:ring-isi-gold-500"
              />
              <Search size={12} className="absolute left-2 top-1.5 text-brand-300" />
            </div>
            <button
              type="submit"
              className="px-2 py-0.5 rounded bg-isi-gold-500 hover:bg-isi-gold-600 text-brand-900 font-semibold text-[11px] transition"
            >
              Search
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

