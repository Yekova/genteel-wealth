import { useScrollReveal } from "@/hooks/useScrollReveal";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import PageCTA from "@/components/PageCTA";
import TrustBand from "@/components/TrustBand";
import ContentBlock from "@/components/ContentBlock";

const values = [
  { title: "Indépendance", desc: "Aucun lien capitalistique avec un groupe financier. Nous sélectionnons les solutions les plus adaptées à vos objectifs, sans conflit d'intérêts." },
  { title: "Expertise", desc: "Une équipe de conseillers diplômés, certifiés et constamment formés aux évolutions réglementaires et fiscales." },
  { title: "Transparence", desc: "Honoraires clairs, reporting détaillé, communication régulière. Vous savez exactement ce que nous faisons et pourquoi." },
  { title: "Durabilité", desc: "Nous construisons des relations de long terme. Notre accompagnement s'inscrit dans la durée, avec des rendez-vous de suivi annuels." },
];

export default function CabinetPage() {
  useScrollReveal();

  return (
    <>
      <Header />
      <PageHero
        title="Le Cabinet"
        highlight="Patrimonia Conseil"
        subtitle="Un cabinet indépendant de conseil en gestion de patrimoine, fondé sur la conviction que chaque situation mérite une approche véritablement personnalisée."
        breadcrumb="Le Cabinet"
      />

      <ContentBlock
        title="Notre histoire"
        text={[
          "Fondé à Bordeaux, Patrimonia Conseil est né de la volonté de proposer un conseil patrimonial d'excellence, libéré des contraintes des réseaux bancaires traditionnels.",
          "Forts de plus de 15 ans d'expérience auprès de clients privés et de chefs d'entreprise, nous avons fait le choix de l'indépendance totale pour servir exclusivement les intérêts de nos clients.",
        ]}
        features={[
          "Plus de 500 familles accompagnées",
          "Un taux de fidélisation de 98%",
          "Une approche patrimoniale globale et sur-mesure",
        ]}
      />

      <section className="section-padding section-ivory">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 reveal">
            <div className="gold-line mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-semibold text-primary mb-4">
              Nos valeurs
            </h2>
            <p className="text-gray-text max-w-2xl mx-auto text-lg">
              Les piliers de notre engagement à vos côtés
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {values.map((v, i) => (
              <div key={v.title} className={`reveal reveal-delay-${i + 1} bg-card border border-border/50 rounded-sm p-8 hover-lift`}>
                <h3 className="font-heading text-xl font-semibold text-primary mb-3">{v.title}</h3>
                <p className="text-gray-text leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ContentBlock
        title="Notre approche"
        text={[
          "Nous ne proposons pas de solutions pré-formatées. Chaque recommandation est le fruit d'une analyse approfondie de votre situation personnelle, professionnelle et fiscale.",
          "Notre rôle est celui d'un architecte patrimonial : nous concevons, structurons et pilotons votre stratégie dans le temps, en coordination avec vos autres conseils (notaire, avocat, expert-comptable).",
        ]}
        variant="ivory"
        reversed
      />

      <TrustBand />
      <PageCTA />
      <Footer />
    </>
  );
}
