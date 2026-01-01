import { Helmet } from 'react-helmet-async';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import MarqueeSection from '@/components/Marquee';
import Works from '@/components/Works';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Preetham Satti | Visual Designer & Motion Graphics</title>
        <meta
          name="description"
          content="Portfolio of Preetham Satti - Visual Designer, Graphic Designer, and Motion & Video Editor. Creating aesthetic, visually engaging designs through graphics, motion, and video."
        />
        <meta
          name="keywords"
          content="visual designer, graphic designer, motion graphics, video editor, branding, poster design, UI/UX"
        />
        <link rel="canonical" href="https://preetham-satti.com" />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Header />
        <main>
          <Hero />
          <MarqueeSection />
          <Works />
          <About />
          <Skills />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Index;
