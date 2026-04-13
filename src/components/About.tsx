export default function About() {
  return (
    <section id="about" className="section-padding section-ivory">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="reveal">
            <div className="gold-line mb-6" />
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-semibold text-primary leading-tight mb-6">
              Une vision globale<br />de votre patrimoine
            </h2>
            <p className="text-gray-text leading-relaxed mb-6 text-lg">
              Chez Patrimonia, nous croyons que chaque patrimoine est unique. Notre approche repose sur une compréhension profonde de vos objectifs, de votre situation et de vos aspirations pour construire une stratégie patrimoniale véritablement sur-mesure.
            </p>
            <p className="text-gray-text leading-relaxed mb-8">
              Indépendants et libres de tout conflit d'intérêts, nous sélectionnons pour vous les meilleures solutions du marché. Notre engagement : transformer vos enjeux financiers en opportunités durables, avec transparence et rigueur.
            </p>
            <div className="flex gap-8">
              <div>
                <p className="text-3xl font-heading font-bold text-primary">15+</p>
                <p className="text-sm text-gray-text mt-1">Années d'expertise</p>
              </div>
              <div>
                <p className="text-3xl font-heading font-bold text-primary">500+</p>
                <p className="text-sm text-gray-text mt-1">Familles accompagnées</p>
              </div>
              <div>
                <p className="text-3xl font-heading font-bold text-primary">98%</p>
                <p className="text-sm text-gray-text mt-1">Taux de fidélisation</p>
              </div>
            </div>
          </div>
          <div className="reveal reveal-delay-2">
            <div className="bg-navy rounded-sm p-10 text-primary-foreground">
              <h3 className="font-heading text-2xl mb-6 text-gold">Notre philosophie</h3>
              <ul className="space-y-4">
                {[
                  "Approche personnalisée et non standardisée",
                  "Vision patrimoniale globale et cohérente",
                  "Indépendance totale dans le choix des solutions",
                  "Accompagnement durable et suivi régulier",
                  "Transparence absolue sur les frais et la rémunération",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-1.5 w-2 h-2 rounded-full bg-gold flex-shrink-0" />
                    <span className="text-primary-foreground/85 leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
