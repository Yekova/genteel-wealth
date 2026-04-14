import { Link } from "react-router-dom";
import heroBg from "@/assets/hero-bg.jpg";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-end overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      <div className="absolute inset-0 bg-navy-deep/70" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 pb-20 md:pb-28 pt-40 w-full">
        <div className="max-w-3xl">
          <p
            className="text-[13px] tracking-widest uppercase text-gold/80 mb-6 opacity-0"
            style={{ animation: "fade-in 0.8s ease-out 0.3s forwards" }}
          >
            Cabinet indépendant — Bordeaux
          </p>
          <h1
            className="text-4xl md:text-5xl lg:text-6xl font-heading font-semibold text-primary-foreground leading-[1.15] mb-8 opacity-0"
            style={{ animation: "fade-in 0.8s ease-out 0.5s forwards" }}
          >
            Votre patrimoine mérite<br />
            <span className="italic font-normal text-primary-foreground/85">un conseil à la hauteur</span>
          </h1>
          <p
            className="text-base md:text-lg text-primary-foreground/65 max-w-xl leading-relaxed mb-10 opacity-0"
            style={{ animation: "fade-in 0.8s ease-out 0.8s forwards" }}
          >
            Nous accompagnons les particuliers, les dirigeants et les familles dans la structuration, l'optimisation et la transmission de leur patrimoine. À Bordeaux, depuis plus de quinze ans.
          </p>
          <div
            className="flex flex-col sm:flex-row gap-4 opacity-0"
            style={{ animation: "fade-in 0.8s ease-out 1s forwards" }}
          >
            <Link
              to="/bilan-patrimonial-bordeaux"
              className="px-7 py-3 bg-gold text-navy-deep text-sm font-medium tracking-wide hover:bg-gold-light transition-colors duration-300"
            >
              Demander un bilan patrimonial
            </Link>
            <Link
              to="/contact"
              className="px-7 py-3 border border-primary-foreground/25 text-primary-foreground text-sm font-medium tracking-wide hover:border-primary-foreground/50 transition-colors duration-300"
            >
              Prendre rendez-vous
            </Link>
          </div>
        </div>
      </div>

      {/* Subtle bottom border */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-primary-foreground/10" />
    </section>
  );
}
