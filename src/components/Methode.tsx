import { Link } from "react-router-dom";

const steps = [
  {
    number: "01",
    title: "Écoute",
    description: "Un premier rendez-vous de 30 minutes pour comprendre votre situation, vos projets et vos préoccupations. Gratuit et sans engagement.",
  },
  {
    number: "02",
    title: "Audit",
    description: "Analyse complète de votre patrimoine : actifs, passifs, fiscalité, prévoyance, régimes matrimoniaux. Nous regardons tout.",
  },
  {
    number: "03",
    title: "Stratégie",
    description: "Rédaction d'une lettre de recommandations structurée, avec simulations chiffrées et scénarios comparés.",
  },
  {
    number: "04",
    title: "Mise en œuvre",
    description: "Sélection des meilleurs contrats et supports du marché, ouverture des comptes, coordination avec vos autres conseils.",
  },
  {
    number: "05",
    title: "Suivi",
    description: "Un rendez-vous annuel de bilan, des alertes en cas de changement législatif, un interlocuteur disponible toute l'année.",
  },
];

export default function Methode() {
  return (
    <section id="methode" className="section-padding section-navy">
      <div className="max-w-5xl mx-auto">
        <div className="mb-14 reveal">
          <p className="text-[13px] tracking-widest uppercase text-gold/80 mb-4">Méthode</p>
          <h2 className="text-3xl md:text-4xl font-heading font-semibold mb-4">
            Comment nous travaillons
          </h2>
          <p className="text-primary-foreground/60 max-w-xl">
            Pas de formule standard, mais un processus clair, reproductible, qui respecte votre temps et vos priorités.
          </p>
        </div>
        <div className="space-y-0">
          {steps.map((step, i) => (
            <div
              key={step.number}
              className={`reveal reveal-delay-${Math.min(i + 1, 5)} flex gap-8 py-8 ${i < steps.length - 1 ? "border-b border-primary-foreground/8" : ""}`}
            >
              <span className="text-gold/40 font-heading text-3xl font-semibold flex-shrink-0 w-12">{step.number}</span>
              <div>
                <h3 className="font-heading text-xl font-semibold mb-2">{step.title}</h3>
                <p className="text-primary-foreground/60 leading-relaxed text-sm">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-10 reveal">
          <Link to="/notre-methode" className="text-sm font-medium text-gold border-b border-gold/30 hover:border-gold transition-colors pb-0.5">
            Découvrir notre méthode en détail →
          </Link>
        </div>
      </div>
    </section>
  );
}
