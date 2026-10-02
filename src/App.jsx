import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { Suspense, lazy } from 'react';
import { store } from './store/store';
import AppLayout from './components/layout/AppLayout';
import HomePage from './pages/HomePage';
import NotFoundPage from './pages/NotFoundPage';

const AboutPage = lazy(() => import('./pages/AboutPage'));
const ServicesPage = lazy(() => import('./pages/ServicesPage'));
const TrainingPage = lazy(() => import('./pages/TrainingPage'));
const AcademicPage = lazy(() => import('./pages/AcademicPage'));
const CoursesPage = lazy(() => import('./pages/CoursesPage'));
const NoticesPage = lazy(() => import('./pages/NoticesPage'));
const ContactPage = lazy(() => import('./pages/ContactPage'));

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <AppLayout>
          <Suspense fallback={<div className="min-h-[40vh] flex items-center justify-center text-sm text-slate-600">Loading page...</div>}>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/services" element={<ServicesPage />} />
              <Route path="/training" element={<TrainingPage />} />
              <Route path="/academic" element={<AcademicPage />} />
              <Route path="/courses" element={<CoursesPage />} />
              <Route path="/notices" element={<NoticesPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
          </Suspense>
        </AppLayout>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
