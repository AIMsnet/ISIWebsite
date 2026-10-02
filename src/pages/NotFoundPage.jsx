import { Link } from 'react-router-dom';
import PageHero from '../components/common/PageHero';

export default function NotFoundPage() {
  return (
    <>
      <PageHero title="Page not found" description="The page you are looking for does not exist or has moved." />
      <section className="container-shell section-space">
        <div className="card-surface mx-auto max-w-xl p-10 text-center">
          <p className="eyebrow">404</p>
          <h2 className="text-3xl font-bold text-brand-900">We couldn’t find that page.</h2>
          <p className="mt-4 text-base text-slate-600">You can return to the homepage or explore the main sections of the Institute website.</p>
          <div className="mt-6 flex justify-center gap-3">
            <Link to="/" className="btn-primary">Back to home</Link>
            <Link to="/courses" className="btn-secondary">Browse courses</Link>
          </div>
        </div>
      </section>
    </>
  );
}
