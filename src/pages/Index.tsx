import { useScrollReveal } from "@/hooks/useScrollReveal";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Expertises from "@/components/Expertises";
import Methode from "@/components/Methode";
import HomeCasClients from "@/components/HomeCasClients";
import Equipe from "@/components/Equipe";
import Confiance from "@/components/Confiance";
import Actualites from "@/components/Actualites";
import Contact from "@/components/Contact";
import TrustBand from "@/components/TrustBand";
import Footer from "@/components/Footer";
import SectionFade from "@/components/SectionFade";

const Index = () => {
  useScrollReveal();

  return (
    <>
      <Header />
      <Hero />
      {/* Hero (dark) → About (light) */}
      <SectionFade variant="to-light" height={180} />
      <About />
      <Expertises />
      <Methode />
      {/* Méthode (dark) → Cas clients (light) */}
      <SectionFade variant="to-light" height={180} />
      <HomeCasClients />
      <Equipe />
      <Confiance />
      <Actualites />
      {/* Actualités (light) → Contact (dark) */}
      <SectionFade variant="to-dark" height={180} />
      <Contact />
      <TrustBand />
      <Footer />
    </>
  );
};

export default Index;
