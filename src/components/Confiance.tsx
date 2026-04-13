import { Shield, Award, Eye, Lock } from "lucide-react";

const badges = [
  { icon: Shield, label: "Réglementé", desc: "Enregistré à l'ORIAS en tant que CIF, COA et courtier" },
  { icon: Award, label: "Certifié", desc: "Membre de la CNCGP et soumis au contrôle de l'AMF" },
  { icon: Eye, label: "Transparent", desc: "Honoraires clairs, aucune rétrocommission cachée" },
  { icon: Lock, label: "Sécurisé", desc: "Assurance responsabilité civile professionnelle et garantie financière" },
];

export default function Confiance() {
  return (
    <section className="section-padding bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 reveal">
          <div className="gold-line mx-auto mb-6" />
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-semibold text-primary mb-4">
            Des garanties solides
          </h2>
          <p className="text-gray-text max-w-2xl mx-auto text-lg">
            Votre confiance est notre priorité absolue
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {badges.map((b, i) => (
            <div key={b.label} className={`reveal reveal-delay-${i + 1} text-center p-6`}>
              <div className="w-16 h-16 mx-auto mb-5 rounded-full border-2 border-gold/30 flex items-center justify-center">
                <b.icon className="w-7 h-7 text-gold" strokeWidth={1.5} />
              </div>
              <h3 className="font-heading text-lg font-semibold text-primary mb-2">{b.label}</h3>
              <p className="text-gray-text text-sm leading-relaxed">{b.desc}</p>
            </div>
          ))}
        </div>
        <div className="reveal mt-12 text-center text-sm text-gray-text/70">
          Cabinet indépendant — N° ORIAS : 00 000 000 — Membre CNCGP — Supervision AMF / ACPR
        </div>
      </div>
    </section>
  );
}
