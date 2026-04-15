import { Link } from "react-router-dom";

const expertises = [
  {
    tag: "Épargne & placements",
    title: "Gestion patrimoniale",
    description: "Allocation d'actifs, assurance-vie, PER, compte-titres, SCPI — une stratégie d'épargne construite pour durer.",
    benefit: "Faire travailler votre capital en cohérence avec vos projets de vie.",
    href: "/gestion-patrimoniale",
    featured: true,
  },
  {
    tag: "Fiscalité",
    title: "Fiscalité du patrimoine",
    description: "Audit fiscal, IFI, revenus fonciers, structuration — réduire votre pression fiscale sans prendre de risques inutiles.",
    benefit: "Identifier vos marges de manœuvre fiscales réelles.",
    href: "/fiscalite",
    featured: true,
  },
  {
    tag: "Dirigeants",
    title: "Patrimoine professionnel",
    description: "Rémunération du dirigeant, trésorerie d'entreprise, holding, prévoyance, cession et transmission d'activité.",
    benefit: "Articuler patrimoine privé et professionnel avec méthode.",
    href: "/patrimoine-professionnel",
  },
  {
    tag: "Financement",
    title: "Financement & crédit",
    description: "Courtage indépendant, négociation des meilleures conditions, montages patrimoniaux adaptés à chaque projet.",
    benefit: "Obtenir les conditions de crédit les plus compétitives.",
    href: "/financement",
  },
  {
    tag: "Succession",
    title: "Transmission & prévoyance",
    description: "Donation, démembrement, assurance-vie, pacte Dutreil — anticiper pour protéger ceux qui comptent.",
    benefit: "Préparer la transmission en maîtrisant la fiscalité.",
    href: "/transmission-patrimoine-famille",
  },
  {
    tag: "Immobilier",
    title: "Immobilier patrimonial",
    description: "Résidence principale, locatif, SCI, nue-propriété — chaque investissement pensé dans une logique globale.",
    benefit: "Structurer vos actifs immobiliers intelligemment.",
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
          <p className="text-muted-foreground max-w-xl">
            Chaque domaine est traité en lien avec les autres. C'est cette approche transversale qui fait la différence.
          </p>
        </div>

        {/* Bento grid: 2 featured large + 4 smaller */}
        <div className="grid md:grid-cols-2 gap-6 mb-6">
          {expertises.filter(e => e.featured).map((item, i) => (
            <Link
              to={item.href}
              key={item.title}
              className={`reveal reveal-delay-${i + 1} group block bg-card border border-border p-8 md:p-10 card-hover relative overflow-hidden`}
            >
              <div className="absolute top-0 left-0 w-full h-[2px] bg-gold scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
              <span className="text-[11px] tracking-widest uppercase text-gold font-medium">{item.tag}</span>
              <h3 className="font-heading text-2xl md:text-3xl font-semibold text-primary mt-3 mb-4 group-hover:text-gold transition-colors duration-300">{item.title}</h3>
              <p className="text-muted-foreground leading-relaxed text-sm mb-4">{item.description}</p>
              <p className="text-primary text-sm font-medium">{item.benefit}</p>
              <span className="inline-flex items-center gap-1 text-sm text-gold mt-6 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-0 group-hover:translate-x-1">
                Découvrir
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </span>
            </Link>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {expertises.filter(e => !e.featured).map((item, i) => (
            <Link
              to={item.href}
              key={item.title}
              className={`reveal reveal-delay-${i + 1} group block bg-card border border-border p-6 card-hover relative overflow-hidden`}
            >
              <div className="absolute top-0 left-0 w-full h-[2px] bg-gold scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
              <span className="text-[11px] tracking-widest uppercase text-gold font-medium">{item.tag}</span>
              <h3 className="font-heading text-lg font-semibold text-primary mt-2 mb-3 group-hover:text-gold transition-colors duration-300">{item.title}</h3>
              <p className="text-muted-foreground leading-relaxed text-[13px] mb-3">{item.description}</p>
              <span className="inline-flex items-center gap-1 text-[13px] text-gold opacity-0 group-hover:opacity-100 transition-all duration-300">
                En savoir plus →
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
