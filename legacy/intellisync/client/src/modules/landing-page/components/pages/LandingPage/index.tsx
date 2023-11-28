import { CTA } from '../../CTA';
import { FAQ } from '../../FAQ';
import { Features } from '../../Features';
import { Footer } from '../../Footer';
import { Header } from '../../Header';
import { Hero } from '../../Hero';
import { NotifiedArea } from '../../NotifiedArea';
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
        <NotifiedArea />
        {/* <CTA /> */}
        <Footer />
      </main>
    </>
  );
}
