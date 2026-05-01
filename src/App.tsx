import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Hero from './components/home/Hero';
import About from './components/home/About';
import Services from './components/home/Services';
import FAQ from './components/home/FAQ';
import Testimonials from './components/home/Testimonials';
import BookingForm from './components/booking/BookingForm';
import BookingSuccess from './components/booking/BookingSuccess';
import AdminDashboard from './components/admin/AdminDashboard';

function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const element = document.getElementById(hash.replace('#', ''));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);

  return null;
}

function HomePage() {
  return (
    <main>
      <Hero />
      <About />
      <Services />
      <Testimonials />
      <FAQ />
    </main>
  );
}

function BookingPage() {
  return (
    <section className="pt-32 pb-24 px-6 min-h-screen bg-brand-cream">
      <div className="container mx-auto">
        <BookingForm />
      </div>
    </section>
  );
}

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen bg-brand-cream">
        <Navbar />
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/booking" element={<BookingPage />} />
            <Route path="/booking/success" element={<BookingSuccess />} />
            <Route path="/admin" element={<AdminDashboard />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

