import { Link } from "react-router-dom";

const articles = [
  {
    date: "Avril 2026",
    title: "SCPI en 2026 : ce qu'il faut savoir avant d'investir",
    excerpt: "Après deux années de correction, le marché des SCPI se stabilise. Analyse des rendements, de la liquidité et des critères de sélection.",
    tag: "Investissement",
  },
  {
    date: "Mars 2026",
    title: "Assurance-vie : quand faut-il arbitrer ?",
    excerpt: "Un contrat d'assurance-vie n'est pas un placement qu'on oublie. Quand et comment réallouer pour rester aligné avec vos objectifs.",
    tag: "Épargne",
  },
  {
    date: "Mars 2026",
    title: "Donation : les règles à connaître pour transmettre sereinement",
    excerpt: "Abattements, délais de rappel, démembrement : les mécanismes essentiels pour préparer une transmission efficace et conforme.",
    tag: "Transmission",
  },
];

export default function Actualites() {
  return (
    <section id="actualites" className="section-padding section-navy">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-14 reveal">
          <div>
            <p className="text-[13px] tracking-widest uppercase text-gold/80 mb-4">Éclairages</p>
            <h2 className="text-3xl md:text-4xl font-heading font-semibold mb-2">
              Analyses & décryptages
            </h2>
          </div>
          <Link to="/actualites" className="text-sm font-medium text-gold border-b border-gold/30 hover:border-gold transition-colors pb-0.5 mt-4 md:mt-0">
            Toutes les actualités →
          </Link>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {articles.map((a, i) => (
            <article
              key={a.title}
              className={`reveal reveal-delay-${i + 1} group cursor-pointer`}
            >
              <p className="text-xs text-primary-foreground/40 tracking-wide uppercase mb-3">{a.date} — {a.tag}</p>
              <h3 className="font-heading text-xl font-semibold text-primary-foreground mb-3 group-hover:text-gold transition-colors duration-300 leading-snug">
                {a.title}
              </h3>
              <p className="text-primary-foreground/50 text-sm leading-relaxed">{a.excerpt}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
