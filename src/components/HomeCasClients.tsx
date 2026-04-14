import { Link } from "react-router-dom";

const cas = [
  {
    profil: "Cadre dirigeant",
    situation: "Tranche marginale à 45 %, patrimoine financier important, peu d'optimisation fiscale en place.",
    axes: "Restructuration de l'épargne, PER, démembrement, création d'une holding patrimoniale.",
  },
  {
    profil: "Couple avec enfants",
    situation: "Patrimoine immobilier et assurance-vie, aucune disposition successorale prévue.",
    axes: "Donation-partage, clause bénéficiaire, démembrement de la résidence principale.",
  },
  {
    profil: "Chef d'entreprise",
    situation: "Trésorerie excédentaire en société, projet de cession à moyen terme.",
    axes: "Placement de la trésorerie, préparation à la cession, pacte Dutreil, réinvestissement post-cession.",
  },
];

export default function HomeCasClients() {
  return (
    <section className="section-padding section-ivory">
      <div className="max-w-6xl mx-auto">
        <div className="mb-14 reveal">
          <p className="text-[13px] tracking-widest uppercase text-gold mb-4">Situations concrètes</p>
          <h2 className="text-3xl md:text-4xl font-heading font-semibold text-primary mb-4">
            Des cas proches du vôtre
          </h2>
          <p className="text-gray-text max-w-xl">
            Chaque situation est différente. Voici comment nous avons accompagné des profils similaires — de façon anonymisée.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {cas.map((c, i) => (
            <div key={c.profil} className={`reveal reveal-delay-${i + 1} border-t border-border pt-6`}>
              <p className="text-xs tracking-widest uppercase text-gold mb-3">{c.profil}</p>
              <p className="text-gray-text text-sm leading-relaxed mb-3">{c.situation}</p>
              <p className="text-primary text-sm font-medium leading-relaxed">{c.axes}</p>
            </div>
          ))}
        </div>
        <div className="mt-10 reveal">
          <Link to="/cas-clients" className="text-sm font-medium text-primary border-b border-primary/30 hover:border-primary transition-colors pb-0.5">
            Voir tous les cas clients →
          </Link>
        </div>
      </div>
    </section>
  );
}
