const team = [
  {
    name: "Alexandre Dumont",
    role: "Fondateur — Ingénierie patrimoniale",
    bio: "Ancien directeur de clientèle privée en banque, Alexandre a fondé le cabinet après 12 ans passés à structurer des patrimoines familiaux et professionnels. Il intervient sur les dossiers complexes : holding, cession, transmission internationale.",
  },
  {
    name: "Claire Lefèvre",
    role: "Associée — Stratégie fiscale",
    bio: "Diplômée du Master Gestion de Patrimoine de Clermont-Ferrand, Claire est spécialisée en optimisation fiscale et structuration successorale. Elle coordonne les dossiers impliquant notaires et avocats fiscalistes.",
  },
  {
    name: "Thomas Bernier",
    role: "Associé — Allocations & marchés",
    bio: "Certifié CFA et CIF, Thomas pilote l'allocation d'actifs et la sélection des supports d'investissement. Il assure le suivi de performance et les arbitrages stratégiques sur les portefeuilles.",
  },
];

export default function Equipe() {
  return (
    <section id="equipe" className="section-padding bg-background texture-paper">
      <div className="max-w-6xl mx-auto">
        <div className="mb-14 reveal">
          <p className="text-[13px] tracking-widest uppercase text-gold mb-4">L'équipe</p>
          <h2 className="text-3xl md:text-4xl font-heading font-semibold text-primary mb-4">
            Trois associés, une même exigence
          </h2>
          <p className="text-gray-text max-w-xl">
            Chaque client a un interlocuteur dédié. L'ensemble de l'équipe collabore sur les dossiers qui l'exigent.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-10">
          {team.map((member, i) => (
            <div key={member.name} className={`reveal reveal-delay-${i + 1}`}>
              <div className="w-full aspect-[3/4] bg-navy/6 mb-5 flex items-end justify-center overflow-hidden">
                <span className="font-heading text-6xl text-navy/15 pb-4">
                  {member.name.split(" ").map((n) => n[0]).join("")}
                </span>
              </div>
              <h3 className="font-heading text-xl font-semibold text-primary mb-1">{member.name}</h3>
              <p className="text-gold text-[13px] font-medium mb-3">{member.role}</p>
              <p className="text-gray-text text-sm leading-relaxed">{member.bio}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
