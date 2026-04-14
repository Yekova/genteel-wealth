import { Link } from "react-router-dom";

const expertises = [
  {
    title: "Gestion patrimoniale",
    description: "Allocation d'actifs, assurance-vie, PER, compte-titres, SCPI — une stratégie d'épargne construite pour durer.",
    href: "/gestion-patrimoniale",
  },
  {
    title: "Fiscalité du patrimoine",
    description: "Audit fiscal, IFI, revenus fonciers, structuration — réduire votre pression fiscale sans prendre de risques inutiles.",
    href: "/fiscalite",
  },
  {
    title: "Patrimoine professionnel",
    description: "Rémunération du dirigeant, trésorerie d'entreprise, holding, prévoyance, cession et transmission d'activité.",
    href: "/patrimoine-professionnel",
  },
  {
    title: "Financement & crédit",
    description: "Courtage indépendant, négociation des meilleures conditions, montages patrimoniaux adaptés à chaque projet.",
    href: "/financement",
  },
  {
    title: "Transmission & succession",
    description: "Donation, démembrement, assurance-vie, pacte Dutreil — anticiper pour protéger ceux qui comptent.",
    href: "/transmission-patrimoine-famille",
  },
  {
    title: "Immobilier patrimonial",
    description: "Résidence principale, locatif, SCI, nue-propriété — chaque investissement pensé dans une logique globale.",
    href: "/patrimoine-immobilier-strategie",
  },
];

export default function Expertises() {
  return (
    <section id="expertises" className="section-padding section-ivory">
      <div className="max-w-6xl mx-auto">
        <div className="mb-14 reveal">
          <p className="text-[13px] tracking-widest uppercase text-gold mb-4">Expertises</p>
          <h2 className="text-3xl md:text-4xl font-heading font-semibold text-primary mb-4">
            Ce que nous faisons, concrètement
          </h2>
          <p className="text-gray-text max-w-xl">
            Chaque domaine est traité en lien avec les autres. C'est cette approche transversale qui fait la différence.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-x-12 gap-y-10">
          {expertises.map((item, i) => (
            <Link
              to={item.href}
              key={item.title}
              className={`reveal reveal-delay-${(i % 2) + 1} group block border-t border-border pt-6 hover:border-gold/50 transition-colors duration-300`}
            >
              <h3 className="font-heading text-xl font-semibold text-primary mb-2 group-hover:text-gold transition-colors duration-300">{item.title}</h3>
              <p className="text-gray-text leading-relaxed text-sm">{item.description}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
