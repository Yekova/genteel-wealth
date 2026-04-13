import { useState, useEffect } from "react";

const navLinks = [
  { label: "Le Cabinet", href: "#about" },
  { label: "Expertises", href: "#expertises" },
  { label: "Méthode", href: "#methode" },
  { label: "Équipe", href: "#equipe" },
  { label: "Actualités", href: "#actualites" },
  { label: "Contact", href: "#contact" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-navy-deep/95 backdrop-blur-md shadow-lg py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <a href="#" className="font-heading text-2xl font-bold tracking-wide text-primary-foreground">
          PATRIMONIA
        </a>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium tracking-wide text-primary-foreground/80 hover:text-gold transition-colors duration-300"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            className="ml-4 px-6 py-2.5 text-sm font-medium tracking-wide border border-gold text-gold hover:bg-gold hover:text-navy-deep transition-all duration-300 rounded-sm"
          >
            Prendre rendez-vous
          </a>
        </nav>

        {/* Mobile burger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="lg:hidden flex flex-col gap-1.5 p-2"
          aria-label="Menu"
        >
          <span className={`block w-6 h-0.5 bg-primary-foreground transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
          <span className={`block w-6 h-0.5 bg-primary-foreground transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`} />
          <span className={`block w-6 h-0.5 bg-primary-foreground transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`lg:hidden fixed inset-0 top-0 bg-navy-deep/98 backdrop-blur-lg transition-all duration-500 flex flex-col items-center justify-center gap-8 ${
          menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <button
          onClick={() => setMenuOpen(false)}
          className="absolute top-6 right-6 p-2 text-primary-foreground"
          aria-label="Fermer"
        >
          <span className="block w-6 h-0.5 bg-primary-foreground rotate-45 translate-y-0.5" />
          <span className="block w-6 h-0.5 bg-primary-foreground -rotate-45 -translate-y-0" />
        </button>
        {navLinks.map((link) => (
          <a
            key={link.href}
            href={link.href}
            onClick={() => setMenuOpen(false)}
            className="text-lg font-heading tracking-wide text-primary-foreground/90 hover:text-gold transition-colors"
          >
            {link.label}
          </a>
        ))}
        <a
          href="#contact"
          onClick={() => setMenuOpen(false)}
          className="mt-4 px-8 py-3 border border-gold text-gold hover:bg-gold hover:text-navy-deep transition-all duration-300 rounded-sm"
        >
          Prendre rendez-vous
        </a>
      </div>
    </header>
  );
}
