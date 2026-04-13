interface PageCTAProps {
  title?: string;
  subtitle?: string;
  buttonText?: string;
  buttonHref?: string;
  variant?: "navy" | "ivory";
}

export default function PageCTA({
  title = "Parlons de votre projet",
  subtitle = "Bénéficiez d'un premier échange de 30 minutes, sans engagement, pour faire le point sur votre situation patrimoniale.",
  buttonText = "Prendre rendez-vous",
  buttonHref = "/contact",
  variant = "navy",
}: PageCTAProps) {
  const isNavy = variant === "navy";
  return (
    <section className={`section-padding ${isNavy ? "section-navy" : "section-ivory"}`}>
      <div className="max-w-3xl mx-auto text-center reveal">
        <div className="gold-line mx-auto mb-6" />
        <h2 className={`text-3xl md:text-4xl font-heading font-semibold mb-4 ${isNavy ? "" : "text-primary"}`}>
          {title}
        </h2>
        <p className={`text-lg leading-relaxed mb-8 ${isNavy ? "text-primary-foreground/70" : "text-gray-text"}`}>
          {subtitle}
        </p>
        <a
          href={buttonHref}
          className="inline-block px-8 py-3.5 bg-gold text-navy-deep font-medium tracking-wide rounded-sm hover:bg-gold-light transition-all duration-300"
        >
          {buttonText}
        </a>
      </div>
    </section>
  );
}
