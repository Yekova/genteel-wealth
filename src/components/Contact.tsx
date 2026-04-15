import { Link } from "react-router-dom";

export default function Contact() {
  return (
    <section id="contact" className="section-padding bg-background texture-paper">
      <div className="max-w-5xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div className="reveal">
            <p className="text-[13px] tracking-widest uppercase text-gold mb-4">Contact</p>
            <h2 className="text-3xl md:text-4xl font-heading font-semibold text-primary leading-tight mb-6">
              Un premier échange, sans engagement
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Vous avez un projet, une question, ou simplement besoin d'un regard extérieur sur votre situation patrimoniale ? Nous vous proposons un premier rendez-vous de 30 minutes, gratuit, pour faire le point ensemble.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8 text-sm">
              Ce rendez-vous n'est pas un entretien commercial. C'est un échange entre vous et un conseiller expérimenté, pour clarifier vos priorités et voir si un accompagnement a du sens.
            </p>
            <div className="space-y-3 text-sm text-muted-foreground">
              <p>12 Cours de l'Intendance, 33000 Bordeaux</p>
              <p>05 56 00 00 00</p>
              <p>contact@kanti.fr</p>
              <p className="text-muted-foreground/60 pt-2 text-xs">
                Du lundi au vendredi, 9h–18h — Sur rendez-vous
              </p>
            </div>
          </div>
          <div className="reveal reveal-delay-2">
            <div className="space-y-4">
              <Link
                to="/contact"
                className="block w-full py-4 px-6 bg-gold text-navy-deep text-center text-sm font-medium tracking-wide hover:bg-gold-light transition-all duration-300 btn-hover"
              >
                Prendre rendez-vous
              </Link>
              <Link
                to="/bilan-patrimonial-bordeaux"
                className="block w-full py-4 px-6 border border-border text-primary text-center text-sm font-medium tracking-wide hover:border-gold/50 transition-all duration-300 btn-hover"
              >
                Demander un bilan patrimonial
              </Link>
              <Link
                to="/contact"
                className="block w-full py-4 px-6 border border-border text-primary text-center text-sm font-medium tracking-wide hover:border-gold/50 transition-all duration-300 btn-hover"
              >
                Être rappelé
              </Link>
            </div>
            <p className="text-xs text-muted-foreground/50 mt-6 text-center">
              Réponse sous 24 heures ouvrées
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
