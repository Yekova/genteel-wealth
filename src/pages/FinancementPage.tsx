import { useScrollReveal } from "@/hooks/useScrollReveal";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import PageCTA from "@/components/PageCTA";
import TrustBand from "@/components/TrustBand";
import ContentBlock from "@/components/ContentBlock";

const avantages = [
  { title: "Accès à de multiples partenaires", desc: "Nous comparons les offres de nombreux établissements bancaires pour vous obtenir les meilleures conditions." },
  { title: "Négociation experte", desc: "Notre volume de dossiers et notre expertise nous permettent de négocier des taux et des conditions privilégiés." },
  { title: "Gain de temps", desc: "Nous constituons votre dossier, gérons les relations bancaires et vous accompagnons jusqu'au déblocage des fonds." },
  { title: "Stratégie globale", desc: "Le financement s'inscrit dans votre stratégie patrimoniale : nous intégrons l'impact fiscal, successoral et financier." },
];

const types = [
  { title: "Résidence principale", desc: "Achat, renégociation ou rachat de crédit pour votre résidence principale." },
  { title: "Investissement locatif", desc: "Financement de vos projets immobiliers patrimoniaux avec optimisation de l'effet de levier." },
  { title: "Crédit professionnel", desc: "Financement de l'acquisition, du développement ou de la restructuration de votre entreprise." },
  { title: "Crédit lombard", desc: "Emprunt adossé à vos actifs financiers pour financer un projet sans céder vos placements." },
  { title: "Regroupement de crédits", desc: "Simplification et optimisation de vos engagements bancaires existants." },
  { title: "SCI & Holding", desc: "Financement structuré via des personnes morales pour optimiser votre montage patrimonial." },
];

export default function FinancementPage() {
  useScrollReveal();

  return (
    <>
      <Header />
      <PageHero
        title="Financement"
        highlight="& crédit"
        subtitle="Obtenir le meilleur financement pour vos projets immobiliers et professionnels. Courtage indépendant et négociation des meilleures conditions."
        breadcrumb="Financement"
      />

      <ContentBlock
        title="Le crédit, un outil patrimonial stratégique"
        text={[
          "Le financement n'est pas qu'une question de taux. C'est un levier patrimonial puissant qui, bien utilisé, peut accélérer la constitution de votre patrimoine tout en optimisant votre fiscalité.",
          "En tant que courtier indépendant, nous avons accès à un large panel d'établissements bancaires et nous négocions pour vous les meilleures conditions : taux, assurance, garanties et flexibilité.",
        ]}
      />

      <section className="section-padding section-ivory">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 reveal">
            <div className="gold-line mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-heading font-semibold text-primary mb-4">
              Pourquoi passer par un courtier indépendant ?
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {avantages.map((a, i) => (
              <div key={a.title} className={`reveal reveal-delay-${i + 1} flex gap-5`}>
                <div className="flex-shrink-0 w-12 h-12 rounded-full border-2 border-gold/30 flex items-center justify-center">
                  <span className="text-gold font-heading font-bold">{String(i + 1).padStart(2, "0")}</span>
                </div>
                <div>
                  <h3 className="font-heading text-lg font-semibold text-primary mb-2">{a.title}</h3>
                  <p className="text-gray-text leading-relaxed text-sm">{a.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 reveal">
            <div className="gold-line mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-heading font-semibold text-primary mb-4">
              Types de financement
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {types.map((t, i) => (
              <div key={t.title} className={`reveal reveal-delay-${(i % 3) + 1} bg-card border border-border/50 rounded-sm p-7 hover-lift`}>
                <h3 className="font-heading text-lg font-semibold text-primary mb-2">{t.title}</h3>
                <p className="text-gray-text text-sm leading-relaxed">{t.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <TrustBand />

      <PageCTA
        title="Financez vos projets au meilleur taux"
        subtitle="Parlez-nous de votre projet de financement. Nous vous obtenons les meilleures conditions du marché."
      />

      <Footer />
    </>
  );
}
