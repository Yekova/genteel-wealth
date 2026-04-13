import { useScrollReveal } from "@/hooks/useScrollReveal";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import PageCTA from "@/components/PageCTA";

const articles = [
  {
    date: "12 avril 2026",
    tag: "Investissement",
    title: "SCPI : faut-il encore investir en 2026 ?",
    excerpt: "Analyse des rendements, de la fiscalité et des perspectives du marché des SCPI dans le contexte économique actuel. Les clés pour faire le bon choix.",
  },
  {
    date: "28 mars 2026",
    tag: "Épargne",
    title: "Assurance-vie : les clés d'une allocation performante",
    excerpt: "Comment construire une allocation diversifiée et résiliente au sein de votre contrat d'assurance-vie. Fonds en euros, UC, gestion pilotée.",
  },
  {
    date: "15 mars 2026",
    tag: "Transmission",
    title: "Transmission : anticiper pour mieux protéger",
    excerpt: "Les stratégies de transmission patrimoniale pour optimiser la fiscalité successorale et protéger vos proches. Donation, démembrement, assurance-vie.",
  },
  {
    date: "2 mars 2026",
    tag: "Fiscalité",
    title: "Loi de finances 2026 : ce qui change pour votre patrimoine",
    excerpt: "Décryptage des principales mesures fiscales de la loi de finances et leur impact sur votre stratégie patrimoniale.",
  },
  {
    date: "18 février 2026",
    tag: "Retraite",
    title: "PER : le plan épargne retraite est-il fait pour vous ?",
    excerpt: "Avantages fiscaux, conditions de sortie, arbitrages : tout comprendre du PER pour préparer sereinement votre retraite.",
  },
  {
    date: "5 février 2026",
    tag: "Immobilier",
    title: "Investir en nue-propriété : une stratégie méconnue",
    excerpt: "La nue-propriété permet d'acquérir un bien à prix réduit tout en échappant à l'IFI. Décryptage de cette stratégie patrimoniale.",
  },
  {
    date: "22 janvier 2026",
    tag: "Dirigeants",
    title: "Cession d'entreprise : préparer sa sortie dès aujourd'hui",
    excerpt: "Anticiper la cession de votre entreprise pour maximiser le prix de vente et optimiser la fiscalité de la plus-value.",
  },
  {
    date: "10 janvier 2026",
    tag: "Allocation",
    title: "Diversification : les nouvelles frontières de l'investissement",
    excerpt: "Private equity, dette privée, crypto-actifs, forêts : tour d'horizon des classes d'actifs alternatives pour diversifier votre patrimoine.",
  },
  {
    date: "28 décembre 2025",
    tag: "Prévoyance",
    title: "Protéger sa famille : les indispensables de la prévoyance",
    excerpt: "Assurance décès, invalidité, dépendance : les contrats essentiels pour protéger vos proches face aux aléas de la vie.",
  },
];

export default function ActualitesPage() {
  useScrollReveal();

  return (
    <>
      <Header />
      <PageHero
        title="Actualités"
        highlight="patrimoniales"
        subtitle="Décryptages, analyses et conseils pour éclairer vos décisions patrimoniales. Une veille permanente au service de votre stratégie."
        breadcrumb="Actualités"
      />

      <section className="section-padding bg-background">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.map((a, i) => (
              <article
                key={a.title}
                className={`reveal reveal-delay-${(i % 3) + 1} group bg-card rounded-sm overflow-hidden hover-lift border border-border/50 cursor-pointer`}
              >
                <div className="h-44 bg-navy/5 flex items-center justify-center">
                  <span className="text-sm font-medium text-navy/30 tracking-wider uppercase">{a.tag}</span>
                </div>
                <div className="p-6">
                  <p className="text-xs text-gold font-medium mb-2 tracking-wide uppercase">{a.date}</p>
                  <h3 className="font-heading text-lg font-semibold text-primary mb-3 group-hover:text-gold transition-colors duration-300">
                    {a.title}
                  </h3>
                  <p className="text-gray-text text-sm leading-relaxed">{a.excerpt}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <PageCTA
        variant="ivory"
        title="Restez informé"
        subtitle="Recevez nos analyses patrimoniales et nos conseils directement dans votre boîte mail."
        buttonText="S'inscrire à la newsletter"
      />

      <Footer />
    </>
  );
}
