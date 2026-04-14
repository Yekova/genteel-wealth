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

const Index = () => {
  useScrollReveal();

  return (
    <>
      <Header />
      <Hero />
      <About />
      <Expertises />
      <Methode />
      <HomeCasClients />
      <Equipe />
      <Confiance />
      <Actualites />
      <Contact />
      <TrustBand />
      <Footer />
    </>
  );
};

export default Index;
