import { useState, lazy, Suspense } from "react";
import { Link } from "react-router-dom";

const EpargneSimulator = lazy(() => import("./simulators/EpargneSimulator"));
const FiscaliteSimulator = lazy(() => import("./simulators/FiscaliteSimulator"));
const PatrimoineProSimulator = lazy(() => import("./simulators/PatrimoineProSimulator"));
const CreditSimulator = lazy(() => import("./simulators/CreditSimulator"));
const TransmissionSimulator = lazy(() => import("./simulators/TransmissionSimulator"));
const ImmobilierSimulator = lazy(() => import("./simulators/ImmobilierSimulator"));

const expertises = [
  {
    tag: "Épargne & placements",
    title: "Gestion patrimoniale",
    description: "Allocation d'actifs, assurance-vie, PER, compte-titres, SCPI — une stratégie d'épargne construite pour durer.",
    benefit: "Faire travailler votre capital en cohérence avec vos projets de vie.",
    href: "/gestion-patrimoniale",
    simulatorLabel: "Simuler la croissance de votre épargne",
    simulator: "epargne",
    stat: { value: "4,2 %", label: "rendement moyen annualisé" },
    featured: true,
  },
  {
    tag: "Fiscalité",
    title: "Fiscalité du patrimoine",
    description: "Audit fiscal, IFI, revenus fonciers, structuration — réduire votre pression fiscale sans prendre de risques inutiles.",
    benefit: "Identifier vos marges de manœuvre fiscales réelles.",
    href: "/fiscalite",
    simulatorLabel: "Estimer votre économie fiscale",
    simulator: "fiscalite",
    stat: { value: "28 %", label: "d'économie moyenne constatée" },
    featured: true,
  },
  {
    tag: "Dirigeants",
    title: "Patrimoine professionnel",
    description: "Rémunération du dirigeant, trésorerie d'entreprise, holding, prévoyance, cession et transmission d'activité.",
    benefit: "Articuler patrimoine privé et professionnel avec méthode.",
    href: "/patrimoine-professionnel",
    simulatorLabel: "Comparer les scénarios de rémunération",
    simulator: "pro",
    stat: { value: "65 %", label: "de nos clients sont dirigeants" },
  },
  {
    tag: "Financement",
    title: "Financement & crédit",
    description: "Courtage indépendant, négociation des meilleures conditions, montages patrimoniaux adaptés à chaque projet.",
    benefit: "Obtenir les conditions de crédit les plus compétitives.",
    href: "/financement",
    simulatorLabel: "Calculer vos mensualités",
    simulator: "credit",
    stat: { value: "0,3 pt", label: "d'écart moyen négocié" },
  },
  {
    tag: "Succession",
    title: "Transmission & prévoyance",
    description: "Donation, démembrement, assurance-vie, pacte Dutreil — anticiper pour protéger ceux qui comptent.",
    benefit: "Préparer la transmission en maîtrisant la fiscalité.",
    href: "/transmission-patrimoine-famille",
    simulatorLabel: "Estimer vos droits de succession",
    simulator: "transmission",
    stat: { value: "100k €", label: "abattement par enfant" },
  },
  {
    tag: "Immobilier",
    title: "Immobilier patrimonial",
    description: "Résidence principale, locatif, SCI, nue-propriété — chaque investissement pensé dans une logique globale.",
    benefit: "Structurer vos actifs immobiliers intelligemment.",
    href: "/patrimoine-immobilier-strategie",
    simulatorLabel: "Analyser votre rendement locatif",
    simulator: "immobilier",
    stat: { value: "5,2 %", label: "rendement net moyen visé" },
  },
];

const SimulatorLoader = () => (
  <div className="h-[300px] flex items-center justify-center">
    <div className="w-5 h-5 border-2 border-gold border-t-transparent rounded-full animate-spin" />
  </div>
);

function SimulatorComponent({ type }: { type: string }) {
  switch (type) {
    case "epargne": return <EpargneSimulator />;
    case "fiscalite": return <FiscaliteSimulator />;
    case "pro": return <PatrimoineProSimulator />;
    case "credit": return <CreditSimulator />;
    case "transmission": return <TransmissionSimulator />;
    case "immobilier": return <ImmobilierSimulator />;
    default: return null;
  }
}

export default function Expertises() {
  const [openSim, setOpenSim] = useState<string | null>(null);

  return (
    <section id="expertises" className="section-padding section-ivory texture-paper">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-16 reveal">
          <div className="gold-line mb-4" />
          <p className="text-[12px] tracking-[0.25em] uppercase text-gold mb-4 font-medium">Nos expertises</p>
          <h2 className="text-3xl md:text-5xl font-heading font-semibold text-primary mb-5 leading-tight">
            Ce que nous faisons,<br className="hidden md:block" /> concrètement
          </h2>
          <p className="text-muted-foreground max-w-2xl text-[15px] leading-relaxed">
            Chaque domaine est traité en lien avec les autres. C'est cette approche transversale qui fait la différence.
            Chaque carte intègre un simulateur interactif pour vous donner une première vision.
          </p>
        </div>

        {/* Featured cards — 2 large with simulators */}
        <div className="grid md:grid-cols-2 gap-6 mb-6">
          {expertises.filter(e => e.featured).map((item, i) => (
            <div
              key={item.title}
              className={`reveal reveal-delay-${i + 1} group bg-card border border-border relative overflow-hidden transition-all duration-500 hover:border-gold/30 hover:shadow-[0_16px_48px_-12px_hsl(210_25%_18%/0.12)]`}
            >
              {/* Gold top line */}
              <div className="absolute top-0 left-0 w-full h-[2px] bg-gold scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left" />
              
              <div className="p-8 md:p-10">
                {/* Tag + Stat */}
                <div className="flex items-start justify-between mb-4">
                  <span className="text-[11px] tracking-[0.2em] uppercase text-gold font-medium">{item.tag}</span>
                  <div className="text-right">
                    <span className="block text-xl font-heading font-bold text-primary">{item.stat.value}</span>
                    <span className="text-[10px] text-muted-foreground">{item.stat.label}</span>
                  </div>
                </div>

                <h3 className="font-heading text-2xl md:text-3xl font-semibold text-primary mb-4 group-hover:text-gold transition-colors duration-300">
                  {item.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed text-sm mb-3">{item.description}</p>
                <p className="text-primary text-sm font-medium mb-6">{item.benefit}</p>

                {/* Simulator toggle */}
                <button
                  onClick={() => setOpenSim(openSim === item.simulator ? null : item.simulator)}
                  className="inline-flex items-center gap-2 text-[13px] text-gold font-medium hover:text-gold-light transition-colors duration-200 mb-2"
                >
                  <svg
                    className={`w-4 h-4 transition-transform duration-300 ${openSim === item.simulator ? "rotate-45" : ""}`}
                    fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                  </svg>
                  {item.simulatorLabel}
                </button>

                {/* Simulator panel */}
                <div
                  className={`overflow-hidden transition-all duration-500 ease-out ${
                    openSim === item.simulator ? "max-h-[500px] opacity-100 mt-4" : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="bg-ivory-warm border border-border rounded p-4">
                    <Suspense fallback={<SimulatorLoader />}>
                      <SimulatorComponent type={item.simulator} />
                    </Suspense>
                  </div>
                </div>

                {/* CTA link */}
                <Link
                  to={item.href}
                  className="inline-flex items-center gap-1.5 text-sm text-gold mt-4 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-0 group-hover:translate-x-1"
                >
                  Découvrir l'expertise
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Secondary cards — 4 smaller with simulators */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {expertises.filter(e => !e.featured).map((item, i) => (
            <div
              key={item.title}
              className={`reveal reveal-delay-${i + 1} group bg-card border border-border relative overflow-hidden transition-all duration-500 hover:border-gold/30 hover:shadow-[0_12px_36px_-8px_hsl(210_25%_18%/0.10)] hover:-translate-y-1`}
            >
              <div className="absolute top-0 left-0 w-full h-[2px] bg-gold scale-x-0 group-hover:scale-x-100 transition-transform duration-600 origin-left" />
              
              <div className="p-6">
                {/* Tag + stat */}
                <div className="flex items-start justify-between mb-3">
                  <span className="text-[10px] tracking-[0.2em] uppercase text-gold font-medium">{item.tag}</span>
                  <span className="text-lg font-heading font-bold text-primary leading-none">{item.stat.value}</span>
                </div>

                <h3 className="font-heading text-lg font-semibold text-primary mb-2 group-hover:text-gold transition-colors duration-300">
                  {item.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed text-[13px] mb-3">{item.description}</p>

                {/* Simulator toggle */}
                <button
                  onClick={() => setOpenSim(openSim === item.simulator ? null : item.simulator)}
                  className="inline-flex items-center gap-1.5 text-[12px] text-gold font-medium hover:text-gold-light transition-colors duration-200 mb-2"
                >
                  <svg
                    className={`w-3.5 h-3.5 transition-transform duration-300 ${openSim === item.simulator ? "rotate-45" : ""}`}
                    fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                  </svg>
                  {item.simulatorLabel}
                </button>

                {/* Simulator panel */}
                <div
                  className={`overflow-hidden transition-all duration-500 ease-out ${
                    openSim === item.simulator ? "max-h-[500px] opacity-100 mt-3" : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="bg-ivory-warm border border-border rounded p-3">
                    <Suspense fallback={<SimulatorLoader />}>
                      <SimulatorComponent type={item.simulator} />
                    </Suspense>
                  </div>
                </div>

                {/* Link */}
                <Link
                  to={item.href}
                  className="inline-flex items-center gap-1 text-[12px] text-gold mt-3 opacity-0 group-hover:opacity-100 transition-all duration-300"
                >
                  En savoir plus →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
