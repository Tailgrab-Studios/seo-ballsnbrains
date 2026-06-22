import { useState, useEffect } from 'react';
import Lenis from 'lenis';

import AnnouncementBar from './components/AnnouncementBar';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import PressStrip from './components/PressStrip';
import OptimizeSection from './components/OptimizeSection';
import Level1Section from './components/Level1Section';
import Level2Section from './components/Level2Section';
import Level3Section from './components/Level3Section';
import BonusSection from './components/BonusSection';
import FounderSection from './components/FounderSection';
import HealthIssuesSection from './components/HealthIssuesSection';
import CheaperSection from './components/CheaperSection';
import ResultsSection from './components/ResultsSection';
import CompareSection from './components/CompareSection';
import FaqSection from './components/FaqSection';
import ReviewsSection from './components/ReviewsSection';
import Footer from './components/Footer';
import CartUpsellPopup from './components/CartUpsellPopup';
import ExitIntentPopup from './components/ExitIntentPopup';

export default function App() {
  const [mode, setMode] = useState('sub');
  const [qty, setQty] = useState(2);
  const [popupOpen, setPopupOpen] = useState(false);
  const [exitPopupOpen, setExitPopupOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = (popupOpen || exitPopupOpen) ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [popupOpen, exitPopupOpen]);

  useEffect(() => {
    let triggered = false;
    const handleMouseLeave = (e) => {
      if (e.clientY <= 0 && !triggered) {
        triggered = true;
        setExitPopupOpen(true);
      }
    };
    document.addEventListener('mouseleave', handleMouseLeave);
    return () => document.removeEventListener('mouseleave', handleMouseLeave);
  }, []);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.4,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });

    let frame;
    const raf = (time) => {
      lenis.raf(time);
      frame = requestAnimationFrame(raf);
    };
    frame = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(frame);
      lenis.destroy();
    };
  }, []);

  return (
    <div className="min-h-screen w-full bg-bb-dark text-white overflow-x-hidden">
      <AnnouncementBar />
      <Navbar onCartClick={() => setPopupOpen(true)} />
      <HeroSection mode={mode} qty={qty} setMode={setMode} setQty={setQty} onOpenPopup={() => setPopupOpen(true)} />
      <PressStrip />
      <OptimizeSection />
      <Level1Section />
      <Level2Section />
      <Level3Section />
      <BonusSection />
      <FounderSection />
      <HealthIssuesSection />
      <CheaperSection />
      <ResultsSection />
      <CompareSection />
      <FaqSection />
      <ReviewsSection />
      <Footer />

      {popupOpen && (
        <CartUpsellPopup mode={mode} onClose={() => setPopupOpen(false)} />
      )}

      {exitPopupOpen && (
        <ExitIntentPopup onClose={() => setExitPopupOpen(false)} />
      )}
    </div>
  );
}
