import { TrendingUp, PiggyBank, Briefcase, Receipt, Landmark, Building2 } from "lucide-react";

const expertises = [
  {
    icon: TrendingUp,
    title: "Gestion patrimoniale",
    description: "Élaboration d'une stratégie patrimoniale globale, alignée sur vos objectifs de vie et votre horizon d'investissement.",
  },
  {
    icon: PiggyBank,
    title: "Placer son épargne",
    description: "Sélection rigoureuse des meilleurs supports d'investissement : assurance-vie, PER, compte-titres, SCPI et placements alternatifs.",
  },
  {
    icon: Briefcase,
    title: "Patrimoine professionnel",
    description: "Optimisation de la rémunération du dirigeant, structuration juridique et préparation de la transmission d'entreprise.",
  },
  {
    icon: Receipt,
    title: "Fiscalité du patrimoine",
    description: "Réduction de votre pression fiscale grâce à des dispositifs adaptés : déficit foncier, Pinel, Girardin, holding patrimoniale.",
  },
  {
    icon: Landmark,
    title: "Crédit & financement",
    description: "Négociation des meilleures conditions de crédit et structuration de vos financements immobiliers et professionnels.",
  },
  {
    icon: Building2,
    title: "Immobilier patrimonial",
    description: "Sélection d'investissements immobiliers à forte valeur ajoutée : SCPI, LMNP, immobilier direct, nue-propriété.",
  },
];

export default function Expertises() {
  return (
    <section id="expertises" className="section-padding bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 reveal">
          <div className="gold-line mx-auto mb-6" />
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-semibold text-primary mb-4">
            Nos expertises
          </h2>
          <p className="text-gray-text max-w-2xl mx-auto text-lg">
            Un accompagnement complet pour chaque dimension de votre patrimoine
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {expertises.map((item, i) => (
            <div
              key={item.title}
              className={`reveal reveal-delay-${(i % 3) + 1} group bg-card rounded-sm p-8 hover-lift border border-border/50`}
            >
              <item.icon className="w-8 h-8 text-gold mb-5 transition-transform duration-300 group-hover:scale-110" strokeWidth={1.5} />
              <h3 className="font-heading text-xl font-semibold text-primary mb-3">{item.title}</h3>
              <p className="text-gray-text leading-relaxed text-sm">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
