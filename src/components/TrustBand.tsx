import { Shield, Award, Eye, Lock } from "lucide-react";

const badges = [
  { icon: Shield, label: "Réglementé", desc: "Enregistré à l'ORIAS" },
  { icon: Award, label: "Certifié", desc: "Membre CNCGP — Supervision AMF" },
  { icon: Eye, label: "Transparent", desc: "Honoraires clairs" },
  { icon: Lock, label: "Sécurisé", desc: "RC Pro et garantie financière" },
];

export default function TrustBand() {
  return (
    <section className="py-12 bg-background border-y border-border/50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {badges.map((b) => (
            <div key={b.label} className="reveal flex items-center gap-3">
              <div className="w-10 h-10 rounded-full border border-gold/30 flex items-center justify-center flex-shrink-0">
                <b.icon className="w-5 h-5 text-gold" strokeWidth={1.5} />
              </div>
              <div>
                <p className="text-sm font-semibold text-primary">{b.label}</p>
                <p className="text-xs text-gray-text">{b.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
