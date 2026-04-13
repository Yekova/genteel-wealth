import { Link } from "react-router-dom";
import heroBg from "@/assets/hero-bg.jpg";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Parallax background */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${heroBg})`,
          transform: "scale(1.1)",
        }}
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-navy-deep/75" />

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center py-32">
        <div className="gold-line mx-auto mb-8 opacity-0 animate-[fade-in_1s_ease-out_0.3s_forwards]" style={{ opacity: 0 }} />
        <h1
          className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-heading font-semibold text-primary-foreground leading-tight mb-6 opacity-0"
          style={{ animation: "fade-in 1s ease-out 0.5s forwards", opacity: 0 }}
        >
          Construire et protéger<br />
          <span className="italic font-normal">votre patrimoine</span>
        </h1>
        <p
          className="text-lg md:text-xl text-primary-foreground/75 max-w-2xl mx-auto leading-relaxed mb-10 opacity-0"
          style={{ animation: "fade-in 1s ease-out 0.8s forwards", opacity: 0 }}
        >
          Conseil indépendant en gestion de patrimoine. Stratégie personnalisée, optimisation fiscale, placements et transmission — un accompagnement sur-mesure pour chaque étape de votre vie.
        </p>
        <div
          className="flex flex-col sm:flex-row gap-4 justify-center opacity-0"
          style={{ animation: "fade-in 1s ease-out 1.1s forwards", opacity: 0 }}
        >
          <Link
            to="/cabinet"
            className="px-8 py-3.5 bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/30 text-primary-foreground font-medium tracking-wide rounded-sm hover:bg-primary-foreground/20 transition-all duration-300"
          >
            Découvrir le cabinet
          </Link>
          <Link
            to="/contact"
            className="px-8 py-3.5 bg-gold text-navy-deep font-medium tracking-wide rounded-sm hover:bg-gold-light transition-all duration-300"
          >
            Parler de votre projet
          </Link>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-0" style={{ animation: "fade-in 1s ease-out 1.5s forwards", opacity: 0 }}>
        <span className="text-xs text-primary-foreground/40 tracking-widest uppercase">Découvrir</span>
        <div className="w-px h-8 bg-gold/50 animate-pulse" />
      </div>
    </section>
  );
}
