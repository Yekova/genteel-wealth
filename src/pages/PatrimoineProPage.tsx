import { useScrollReveal } from "@/hooks/useScrollReveal";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import PageCTA from "@/components/PageCTA";
import TrustBand from "@/components/TrustBand";
import ContentBlock from "@/components/ContentBlock";
import StickyScroll from "@/components/StickyScroll";

const expertises = [
  { title: "Rémunération du dirigeant", desc: "Optimisation du mix salaire / dividendes / avantages en nature pour maximiser vos revenus nets." },
  { title: "Épargne salariale", desc: "Mise en place de dispositifs d'intéressement, participation et PEE/PERCO pour fidéliser vos collaborateurs." },
  { title: "Protection du chef d'entreprise", desc: "Prévoyance, assurance homme-clé, garantie croisée entre associés pour sécuriser l'entreprise." },
  { title: "Cession & transmission", desc: "Préparation de la transmission d'entreprise : valorisation, pacte Dutreil, holding de reprise." },
  { title: "Structuration juridique", desc: "Choix de la forme sociale, création de holding, opérations de restructuration pour optimiser la fiscalité." },
  { title: "Trésorerie d'entreprise", desc: "Placement de la trésorerie excédentaire sur des supports adaptés au profil de risque de l'entreprise." },
];

const methode = [
  { title: "Compréhension de votre entreprise", description: "Analyse de votre activité, de votre structure juridique, de votre rémunération et de vos projets de développement." },
  { title: "Audit patrimonial croisé", description: "Vision globale intégrant patrimoine privé et professionnel pour identifier les synergies et les risques." },
  { title: "Recommandations structurantes", description: "Propositions d'optimisation de la rémunération, de la protection et de la structuration juridique." },
  { title: "Préparation de la transmission", description: "Anticipation de la cession ou de la transmission familiale avec les meilleurs outils juridiques et fiscaux." },
];

export default function PatrimoineProPage() {
  useScrollReveal();

  return (
    <>
      <Header />
      <PageHero
        title="Patrimoine"
        highlight="professionnel"
        subtitle="Dirigeants et entrepreneurs : optimisez votre rémunération, protégez votre entreprise et préparez sereinement votre transmission."
        breadcrumb="Patrimoine professionnel"
      />

      <ContentBlock
        title="Votre entreprise, votre premier actif patrimonial"
        text={[
          "Pour un chef d'entreprise, patrimoine privé et professionnel sont indissociables. Les décisions prises dans l'un impactent directement l'autre.",
          "Nous vous accompagnons dans l'optimisation globale de votre situation : rémunération, protection, structuration juridique et préparation de la cession ou de la transmission de votre entreprise.",
        ]}
        features={[
          "Optimisation de la rémunération globale du dirigeant",
          "Protection du chef d'entreprise et des associés",
          "Préparation de la transmission avec le pacte Dutreil",
        ]}
      />

      <section className="section-padding section-ivory">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 reveal">
            <div className="gold-line mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-heading font-semibold text-primary mb-4">
              Nos expertises pour les dirigeants
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {expertises.map((e, i) => (
              <div key={e.title} className={`reveal reveal-delay-${(i % 3) + 1} bg-card border border-border/50 rounded-sm p-7 hover-lift`}>
                <h3 className="font-heading text-lg font-semibold text-primary mb-2">{e.title}</h3>
                <p className="text-gray-text text-sm leading-relaxed">{e.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <StickyScroll
        title="Notre accompagnement"
        subtitle="Un parcours structuré pour les dirigeants et entrepreneurs."
        steps={methode}
      />

      <TrustBand />

      <PageCTA
        title="Entrepreneurs, parlons stratégie"
        subtitle="Un premier échange confidentiel pour analyser votre situation de dirigeant et identifier les axes d'optimisation."
      />

      <Footer />
    </>
  );
}
