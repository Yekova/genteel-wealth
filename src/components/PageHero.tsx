interface PageHeroProps {
  title: string;
  subtitle: string;
  highlight?: string;
  breadcrumb?: string;
}

export default function PageHero({ title, subtitle, highlight, breadcrumb }: PageHeroProps) {
  return (
    <section className="relative min-h-[60vh] flex items-end overflow-hidden section-navy">
      {/* Decorative gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-navy-deep via-navy to-navy-light opacity-90" />
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-gold/5 to-transparent" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 pb-16 pt-32 w-full">
        {breadcrumb && (
          <div className="flex items-center gap-2 text-sm text-primary-foreground/40 mb-6 tracking-wide">
            <a href="/" className="hover:text-gold transition-colors">Accueil</a>
            <span>/</span>
            <span className="text-gold">{breadcrumb}</span>
          </div>
        )}
        <div className="gold-line mb-6" />
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-semibold text-primary-foreground leading-tight mb-4">
          {title}
          {highlight && (
            <>
              <br />
              <span className="italic font-normal text-gold/80">{highlight}</span>
            </>
          )}
        </h1>
        <p className="text-lg md:text-xl text-primary-foreground/65 max-w-2xl leading-relaxed">
          {subtitle}
        </p>
      </div>
    </section>
  );
}
