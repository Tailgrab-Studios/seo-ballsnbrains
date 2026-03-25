import HeroSection from './components/HeroSection/HeroSection';
import IngredientsSection from './components/IngredientsSection/IngredientsSection';
import HowToMake from './components/HowToMake/HowToMake';
import SocialProof from './components/SocialProof/SocialProof';
import Comparison from './components/Comparison/Comparison';
import Reviews from './components/Reviews/Reviews';
import Guarantee from './components/Guarantee/Guarantee';
import FAQ from './components/FAQ/FAQ';
import Footer from './components/Footer/Footer';

export default function SnoringPage() {
  return (
    <div>
      <HeroSection />
      <IngredientsSection />
      <HowToMake />
      <SocialProof />
      <Comparison />
      <Reviews />
      <Guarantee />
      <FAQ />
      <Footer />
    </div>
  );
}
