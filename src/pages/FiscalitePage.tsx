import { useScrollReveal } from "@/hooks/useScrollReveal";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import PageCTA from "@/components/PageCTA";
import TrustBand from "@/components/TrustBand";
import ContentBlock from "@/components/ContentBlock";
import StickyScroll from "@/components/StickyScroll";

const dispositifs = [
  { title: "Déficit foncier", desc: "Réduction de votre base imposable grâce aux travaux de rénovation sur l'immobilier ancien." },
  { title: "Dispositif Pinel / Denormandie", desc: "Réduction d'impôt sur le revenu en contrepartie d'un investissement locatif dans le neuf ou l'ancien rénové." },
  { title: "Girardin industriel", desc: "Réduction d'impôt en investissant dans des équipements productifs en Outre-mer. Rendement fiscal élevé." },
  { title: "PER et déductions", desc: "Optimisation fiscale via les versements déductibles sur le Plan Épargne Retraite." },
  { title: "Holding patrimoniale", desc: "Structuration juridique pour optimiser la détention et la transmission de vos actifs." },
  { title: "Démembrement de propriété", desc: "Stratégie avancée pour réduire l'IFI et optimiser la transmission intergénérationnelle." },
];

const methode = [
  { title: "Diagnostic fiscal complet", description: "Analyse de votre imposition (IR, IFI, plus-values, revenus fonciers) et identification des leviers d'optimisation." },
  { title: "Simulation chiffrée", description: "Modélisation précise de l'impact fiscal de chaque dispositif envisagé, sur votre situation réelle." },
  { title: "Recommandations ciblées", description: "Sélection des solutions les plus pertinentes en fonction de votre profil, de vos revenus et de vos objectifs." },
  { title: "Mise en œuvre coordonnée", description: "Déploiement des solutions retenues en coordination avec votre notaire et votre expert-comptable." },
  { title: "Veille et ajustements", description: "Suivi des évolutions législatives et adaptation de votre stratégie fiscale année après année." },
];

export default function FiscalitePage() {
  useScrollReveal();

  return (
    <>
      <Header />
      <PageHero
        title="Fiscalité"
        highlight="du patrimoine"
        subtitle="Maîtriser votre fiscalité pour préserver et développer votre patrimoine. Des stratégies légales, éprouvées et sur-mesure."
        breadcrumb="Fiscalité du patrimoine"
      />

      <ContentBlock
        title="L'optimisation fiscale, un levier stratégique"
        text={[
          "La fiscalité représente souvent le premier poste de « dépense » involontaire pour les patrimoines importants. Pourtant, de nombreux dispositifs légaux permettent de réduire significativement votre pression fiscale.",
          "Notre rôle est d'identifier les mécanismes les plus adaptés à votre situation et de les articuler dans une stratégie cohérente et pérenne, sans excès ni risque inutile.",
        ]}
        features={[
          "Analyse de l'impôt sur le revenu, IFI, plus-values",
          "Stratégies de défiscalisation immobilière et financière",
          "Coordination avec vos conseillers juridiques et comptables",
        ]}
      />

      <section className="section-padding section-ivory">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 reveal">
            <div className="gold-line mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-heading font-semibold text-primary mb-4">
              Dispositifs d'optimisation fiscale
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {dispositifs.map((d, i) => (
              <div key={d.title} className={`reveal reveal-delay-${(i % 3) + 1} bg-card border border-border/50 rounded-sm p-7 hover-lift`}>
                <h3 className="font-heading text-lg font-semibold text-primary mb-2">{d.title}</h3>
                <p className="text-gray-text text-sm leading-relaxed">{d.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <StickyScroll
        title="Notre approche fiscale"
        subtitle="Une méthodologie rigoureuse pour construire votre stratégie d'optimisation."
        steps={methode}
      />

      <TrustBand />

      <PageCTA
        title="Réduisez votre pression fiscale"
        subtitle="Bénéficiez d'une analyse personnalisée de votre situation fiscale et découvrez les leviers d'optimisation adaptés à votre profil."
      />

      <Footer />
    </>
  );
}
