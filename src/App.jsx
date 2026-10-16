import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { Provider } from "react-redux";
import { Suspense, lazy, useEffect } from "react";
import { store } from "./store/store";
import AppLayout from "./components/layout/AppLayout";
import HomePage from "./pages/HomePage";
import NotFoundPage from "./pages/NotFoundPage";

const AboutPage = lazy(() => import("./pages/AboutPage"));
const ServicesPage = lazy(() => import("./pages/ServicesPage"));
const AcademicPage = lazy(() => import("./pages/AcademicPage"));
const CoursesPage = lazy(() => import("./pages/CoursesPage"));
const ContactPage = lazy(() => import("./pages/ContactPage"));

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <ScrollToTop />
        <AppLayout>
          <Suspense
            fallback={
              <div className="min-h-[40vh] flex items-center justify-center text-sm text-slate-600">
                Loading page...
              </div>
            }
          >
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/services" element={<ServicesPage />} />
              <Route path="/training" element={<CoursesPage />} />
              <Route path="/academic" element={<AcademicPage />} />
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
