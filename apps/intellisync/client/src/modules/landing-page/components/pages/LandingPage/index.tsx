import { CTA } from '../../CTA';
import { FAQ } from '../../FAQ';
import { Features } from '../../Features';
import { Footer } from '../../Footer';
import { Header } from '../../Header';
import { Hero } from '../../Hero';
import { Pricing } from '../../Pricing';

export function LandingPage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Features />
        <Pricing />
        <FAQ />
        <CTA />
        <Footer />
      </main>
    </>
  );
}
