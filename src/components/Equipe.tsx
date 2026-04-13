const team = [
  {
    name: "Alexandre Dumont",
    role: "Associé fondateur — Ingénierie patrimoniale",
    bio: "20 ans d'expérience en gestion de patrimoine et conseil aux dirigeants. Ancien directeur de clientèle privée en banque.",
  },
  {
    name: "Claire Lefèvre",
    role: "Directrice — Stratégie fiscale",
    bio: "Experte en optimisation fiscale et structuration patrimoniale. Diplômée du Master Gestion de Patrimoine de Clermont-Ferrand.",
  },
  {
    name: "Thomas Bernier",
    role: "Associé — Investissements & Marchés",
    bio: "Spécialiste des marchés financiers et de l'allocation d'actifs. Certifié CIF et titulaire du CFA.",
  },
];

export default function Equipe() {
  return (
    <section id="equipe" className="section-padding section-ivory">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 reveal">
          <div className="gold-line mx-auto mb-6" />
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-semibold text-primary mb-4">
            Notre équipe
          </h2>
          <p className="text-gray-text max-w-2xl mx-auto text-lg">
            Des professionnels expérimentés, engagés à vos côtés
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {team.map((member, i) => (
            <div key={member.name} className={`reveal reveal-delay-${i + 1} text-center group`}>
              <div className="w-48 h-48 mx-auto mb-6 rounded-full bg-navy/10 flex items-center justify-center overflow-hidden">
                <span className="font-heading text-4xl text-navy/40">
                  {member.name.split(" ").map((n) => n[0]).join("")}
                </span>
              </div>
              <h3 className="font-heading text-xl font-semibold text-primary mb-1">{member.name}</h3>
              <p className="text-gold text-sm font-medium mb-3">{member.role}</p>
              <p className="text-gray-text text-sm leading-relaxed max-w-xs mx-auto">{member.bio}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
