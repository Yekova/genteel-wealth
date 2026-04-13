const articles = [
  {
    date: "12 avril 2026",
    title: "SCPI : faut-il encore investir en 2026 ?",
    excerpt: "Analyse des rendements, de la fiscalité et des perspectives du marché des SCPI dans le contexte économique actuel.",
    tag: "Investissement",
  },
  {
    date: "28 mars 2026",
    title: "Assurance-vie : les clés d'une allocation performante",
    excerpt: "Comment construire une allocation diversifiée et résiliente au sein de votre contrat d'assurance-vie.",
    tag: "Épargne",
  },
  {
    date: "15 mars 2026",
    title: "Transmission : anticiper pour mieux protéger",
    excerpt: "Les stratégies de transmission patrimoniale pour optimiser la fiscalité successorale et protéger vos proches.",
    tag: "Transmission",
  },
];

export default function Actualites() {
  return (
    <section id="actualites" className="section-padding section-ivory">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 reveal">
          <div className="gold-line mx-auto mb-6" />
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-semibold text-primary mb-4">
            Actualités patrimoniales
          </h2>
          <p className="text-gray-text max-w-2xl mx-auto text-lg">
            Décryptages et analyses pour éclairer vos décisions
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {articles.map((a, i) => (
            <article
              key={a.title}
              className={`reveal reveal-delay-${i + 1} group bg-card rounded-sm overflow-hidden hover-lift border border-border/50 cursor-pointer`}
            >
              <div className="h-48 bg-navy/5 flex items-center justify-center">
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
  );
}
