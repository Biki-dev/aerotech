import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Timeline from './components/Timeline';
import Sponsors from './components/Sponsors';
import Team from './components/Team';
import Gallery from './components/Gallery';
import About from './components/About';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="relative w-full min-h-screen bg-dark">
      <Navbar />
      <Hero />

      <div className="w-full h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />
      <Timeline />

      <div className="w-full h-px bg-gradient-to-r from-transparent via-brand-green/10 to-transparent" />
      <Sponsors />

      <div className="w-full h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />
      <Team />

      <div className="w-full h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />
      <Gallery />

      <div className="w-full h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />
      <About />

      <Footer />
    </div>
  );
}
