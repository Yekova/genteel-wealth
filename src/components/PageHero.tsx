interface PageHeroProps {
  title: string;
  subtitle: string;
  highlight?: string;
  breadcrumb?: string;
}

export default function PageHero({ title, subtitle, highlight, breadcrumb }: PageHeroProps) {
  return (
    <section className="relative min-h-[50vh] flex items-end overflow-hidden section-navy">
      <div className="absolute inset-0 bg-gradient-to-b from-navy-deep to-navy opacity-90" />

      <div className="relative z-10 max-w-5xl mx-auto px-6 pb-14 pt-32 w-full">
        {breadcrumb && (
          <div className="flex items-center gap-2 text-xs text-primary-foreground/35 mb-5 tracking-wide">
            <a href="/" className="hover:text-gold transition-colors">Accueil</a>
            <span>/</span>
            <span className="text-primary-foreground/50">{breadcrumb}</span>
          </div>
        )}
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-heading font-semibold text-primary-foreground leading-tight mb-4">
          {title}
          {highlight && (
            <>
              {" "}
              <span className="italic font-normal text-primary-foreground/70">{highlight}</span>
            </>
          )}
        </h1>
        <p className="text-base md:text-lg text-primary-foreground/55 max-w-2xl leading-relaxed">
          {subtitle}
        </p>
      </div>
    </section>
  );
}
