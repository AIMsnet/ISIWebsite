import { useSelector } from 'react-redux';
import TopBar from './TopBar';
import Header from './Header';
import Footer from './Footer';

export default function AppLayout({ children }) {
  const fontSizeLevel = useSelector((state) => state.ui.fontSizeLevel);

  const fontClass =
    fontSizeLevel === -1 ? 'text-[92%]' : fontSizeLevel === 1 ? 'text-[108%]' : 'text-[100%]';

  return (
    <div className={`min-h-screen bg-slate-50 text-slate-900 ${fontClass} flex flex-col font-sans transition-all duration-150`}>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:bg-white focus:px-4 focus:py-2 focus:text-brand-900 focus:shadow-lg focus:ring-2 focus:ring-isi-gold-500"
      >
        Skip to main content
      </a>
      <TopBar />
      <Header />
      <main id="main-content" className="flex-1 min-h-[60vh]">
        {children}
      </main>
      <Footer />
    </div>
  );
}

