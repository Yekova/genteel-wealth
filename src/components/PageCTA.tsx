import { Link } from "react-router-dom";

interface PageCTAProps {
  title?: string;
  subtitle?: string;
  buttonText?: string;
  buttonHref?: string;
  secondaryText?: string;
  secondaryHref?: string;
  variant?: "navy" | "ivory";
}

export default function PageCTA({
  title = "Parlons de votre situation",
  subtitle = "Un premier échange de 30 minutes, gratuit et sans engagement, pour faire le point sur votre patrimoine et vos priorités.",
  buttonText = "Prendre rendez-vous",
  buttonHref = "/contact",
  secondaryText,
  secondaryHref,
  variant = "navy",
}: PageCTAProps) {
  const isNavy = variant === "navy";
  return (
    <section className={`section-padding ${isNavy ? "section-navy" : "section-ivory"}`}>
      <div className="max-w-3xl mx-auto text-center reveal">
        <h2 className={`text-3xl md:text-4xl font-heading font-semibold mb-4 ${isNavy ? "" : "text-primary"}`}>
          {title}
        </h2>
        <p className={`text-base leading-relaxed mb-8 ${isNavy ? "text-primary-foreground/60" : "text-gray-text"}`}>
          {subtitle}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to={buttonHref}
            className="inline-block px-7 py-3 bg-gold text-navy-deep text-sm font-medium tracking-wide hover:bg-gold-light transition-colors duration-300"
          >
            {buttonText}
          </Link>
          {secondaryText && secondaryHref && (
            <Link
              to={secondaryHref}
              className={`inline-block px-7 py-3 border text-sm font-medium tracking-wide transition-colors duration-300 ${
                isNavy ? "border-primary-foreground/20 text-primary-foreground hover:border-primary-foreground/40" : "border-border text-primary hover:border-gold/50"
              }`}
            >
              {secondaryText}
            </Link>
          )}
        </div>
      </div>
    </section>
  );
}
