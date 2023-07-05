import { Features } from '../../Features';
import { Header } from '../../Header';
import { Hero } from '../../Hero';

export function LandingPage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Features />
      </main>
    </>
  );
}
