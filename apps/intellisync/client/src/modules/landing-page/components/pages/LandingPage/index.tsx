import { Features } from '../../Features';
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
      </main>
    </>
  );
}
