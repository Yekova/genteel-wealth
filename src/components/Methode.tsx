const steps = [
  {
    number: "01",
    title: "Découverte",
    description: "Un premier échange pour comprendre votre situation, vos objectifs et vos préoccupations patrimoniales.",
  },
  {
    number: "02",
    title: "Audit patrimonial",
    description: "Analyse approfondie de votre patrimoine existant, de votre fiscalité et de vos flux financiers.",
  },
  {
    number: "03",
    title: "Stratégie",
    description: "Élaboration de recommandations personnalisées et définition d'une feuille de route patrimoniale claire.",
  },
  {
    number: "04",
    title: "Mise en œuvre",
    description: "Sélection et souscription des solutions retenues, avec un accompagnement à chaque étape.",
  },
  {
    number: "05",
    title: "Suivi durable",
    description: "Rendez-vous annuels de suivi, ajustements stratégiques et veille réglementaire permanente.",
  },
];

export default function Methode() {
  return (
    <section id="methode" className="section-padding section-navy">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 reveal">
          <div className="gold-line mx-auto mb-6" />
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-semibold mb-4">
            Notre méthode
          </h2>
          <p className="text-primary-foreground/70 max-w-2xl mx-auto text-lg">
            Un accompagnement structuré, pensé pour durer
          </p>
        </div>
        <div className="relative">
          {/* Timeline line */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px bg-gold/30 -translate-x-1/2" />
          <div className="space-y-12 lg:space-y-0">
            {steps.map((step, i) => (
              <div
                key={step.number}
                className={`reveal reveal-delay-${i + 1} lg:flex items-center gap-12 ${
                  i % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                } ${i > 0 ? "lg:mt-12" : ""}`}
              >
                <div className={`lg:w-5/12 ${i % 2 === 0 ? "lg:text-right" : "lg:text-left"}`}>
                  <span className="text-gold font-heading text-4xl font-bold opacity-60">{step.number}</span>
                  <h3 className="font-heading text-2xl font-semibold mt-2 mb-3">{step.title}</h3>
                  <p className="text-primary-foreground/70 leading-relaxed">{step.description}</p>
                </div>
                <div className="hidden lg:flex w-2/12 justify-center relative">
                  <div className="w-4 h-4 rounded-full bg-gold border-4 border-navy z-10" />
                </div>
                <div className="lg:w-5/12" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
