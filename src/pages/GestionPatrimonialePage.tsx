import { useScrollReveal } from "@/hooks/useScrollReveal";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import PageCTA from "@/components/PageCTA";
import TrustBand from "@/components/TrustBand";
import ContentBlock from "@/components/ContentBlock";
import StickyScroll from "@/components/StickyScroll";

const solutions = [
  { title: "Assurance-vie", desc: "Contrats haut de gamme avec accès aux fonds en euros performants et aux unités de compte sélectionnées." },
  { title: "PER — Plan Épargne Retraite", desc: "Capitalisation retraite avec avantage fiscal immédiat et sorties flexibles." },
  { title: "Compte-titres & PEA", desc: "Allocation en titres vifs, ETF et fonds thématiques pour dynamiser votre patrimoine financier." },
  { title: "SCPI & Immobilier papier", desc: "Diversification immobilière avec mutualisation du risque et revenus réguliers." },
  { title: "Private equity & dette privée", desc: "Accès à des opportunités de rendement décorrélées des marchés financiers." },
  { title: "Produits structurés", desc: "Solutions de rendement sur-mesure avec protection partielle ou totale du capital." },
];

const methode = [
  { title: "Analyse de votre situation", description: "Nous commençons par un diagnostic complet : patrimoine existant, flux financiers, fiscalité, projets de vie. Chaque détail compte." },
  { title: "Définition de votre profil", description: "Évaluation de votre tolérance au risque, de votre horizon de placement et de vos objectifs : retraite, revenus complémentaires, transmission." },
  { title: "Construction de l'allocation", description: "Élaboration d'une allocation d'actifs diversifiée, cohérente avec vos contraintes et vos ambitions patrimoniales." },
  { title: "Sélection des supports", description: "Choix rigoureux des meilleurs contrats et supports d'investissement du marché, en toute indépendance." },
  { title: "Suivi et ajustements", description: "Reporting régulier, rendez-vous de suivi, arbitrages stratégiques en fonction de l'évolution des marchés et de votre vie." },
];

export default function GestionPatrimonialePage() {
  useScrollReveal();

  return (
    <>
      <Header />
      <PageHero
        title="Gestion patrimoniale"
        highlight="& placements financiers"
        subtitle="Une allocation sur-mesure pour faire fructifier votre épargne avec discernement, en maîtrisant les risques et en optimisant les rendements."
        breadcrumb="Gestion patrimoniale"
      />

      <ContentBlock
        title="Votre patrimoine financier mérite une gestion active"
        text={[
          "Dans un environnement de taux bas et de marchés volatils, la gestion de votre épargne ne peut plus se résumer à un simple placement sur un fonds en euros.",
          "Nous construisons pour vous une allocation d'actifs diversifiée, pensée pour répondre à vos objectifs tout en respectant votre profil de risque. Chaque recommandation est argumentée, chaque arbitrage est expliqué.",
        ]}
        features={[
          "Approche multi-classes d'actifs",
          "Architecture ouverte — accès aux meilleurs gérants",
          "Suivi de performance trimestriel détaillé",
        ]}
      />

      <section className="section-padding section-ivory">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 reveal">
            <div className="gold-line mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-heading font-semibold text-primary mb-4">
              Nos solutions de placement
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {solutions.map((s, i) => (
              <div key={s.title} className={`reveal reveal-delay-${(i % 3) + 1} bg-card border border-border/50 rounded-sm p-7 hover-lift`}>
                <h3 className="font-heading text-lg font-semibold text-primary mb-2">{s.title}</h3>
                <p className="text-gray-text text-sm leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <StickyScroll
        title="Notre méthode"
        subtitle="Un processus rigoureux pour construire et piloter votre allocation patrimoniale."
        steps={methode}
      />

      <TrustBand />

      <PageCTA
        title="Optimisez vos placements"
        subtitle="Prenez rendez-vous pour un audit de votre épargne et découvrez comment optimiser votre allocation patrimoniale."
      />

      <Footer />
    </>
  );
}
