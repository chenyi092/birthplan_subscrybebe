
import React, { useEffect } from 'react';
import { HashRouter, Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Plans from './components/Plans';
import Services from './components/Services';
import HowItWorks from './components/HowItWorks';
import ContactFooter from './components/ContactFooter';
import PlanA from './components/PlanA';
import PlanB from './components/PlanB';
import PlanC from './components/PlanC';
import PlanD from './components/PlanD';
import Promotion from './components/Promotion';
import ServiceDetail from './components/ServiceDetail';
import Terms from './components/Terms';
import SubscriptionForm from './components/SubscriptionForm';
import ConsultationForm from './components/ConsultationForm';
import DiscountPopup from './components/DiscountPopup';

// Component to handle scroll restoration on route change
const ScrollToTop = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    // If there is a hash (anchor), scroll to that element
    if (hash) {
      const id = hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        // A small timeout helps ensure the page layout is ready
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    } else {
      // If no hash, scroll to top
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);

  return null;
};

// Component to force navigation to home on initial load/refresh
const ForceHomeOnLoad = () => {
  const navigate = useNavigate();
  useEffect(() => {
    // Navigate to root when the app mounts (page refresh)
    navigate('/');
  }, []); // Empty dependency array means this runs once on mount
  return null;
};

// Landing Page Component that aggregates all sections
const LandingPage: React.FC = () => {
  return (
    <>
      <Hero />
      <div id="about-section">
        <About />
      </div>
      <div id="plans-section">
        <Plans />
      </div>
      <div id="service-section">
        <Services />
      </div>
      <div id="process-section">
        <HowItWorks />
      </div>
      <div id="contact-section">
        <ContactFooter />
      </div>
    </>
  );
};

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col font-body text-brand-text">
      <Header />
      <main className="flex-grow">
        {children}
      </main>
      <div className="bg-white py-6 border-t border-gray-200 text-center text-sm text-gray-600 font-body">
        © 2025 birthplan+subscrybebe.
      </div>
    </div>
  );
};

const App: React.FC = () => {
  return (
    <HashRouter>
      <ForceHomeOnLoad />
      <ScrollToTop />
      <Layout>
        {/* Global Popup Component */}
        <DiscountPopup />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/plan/A" element={<PlanA />} />
          <Route path="/plan/B" element={<PlanB />} />
          <Route path="/plan/C" element={<PlanC />} />
          <Route path="/plan/D" element={<PlanD />} />
          <Route path="/subscribe/:planId/:type" element={<SubscriptionForm />} />
          {/* New Route for Consultation */}
          <Route path="/subscribe/D/consultation" element={<ConsultationForm />} />
          <Route path="/promotion" element={<Promotion />} />
          <Route path="/service/gene" element={<ServiceDetail type="gene" />} />
          <Route path="/service/education" element={<ServiceDetail type="education" />} />
          <Route path="/service/medical" element={<ServiceDetail type="medical" />} />
          <Route path="/terms" element={<Terms />} />
        </Routes>
      </Layout>
    </HashRouter>
  );
};

export default App;
