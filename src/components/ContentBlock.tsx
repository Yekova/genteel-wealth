interface ContentBlockProps {
  title: string;
  text: string[];
  features?: string[];
  variant?: "ivory" | "white";
  reversed?: boolean;
  visual?: React.ReactNode;
}

export default function ContentBlock({
  title,
  text,
  features,
  variant = "white",
  reversed = false,
  visual,
}: ContentBlockProps) {
  return (
    <section className={`section-padding ${variant === "ivory" ? "section-ivory" : "bg-background"}`}>
      <div className="max-w-6xl mx-auto">
        <div className={`grid lg:grid-cols-2 gap-16 items-center ${reversed ? "lg:[direction:rtl]" : ""}`}>
          <div className={`reveal ${reversed ? "lg:[direction:ltr]" : ""}`}>
            <div className="gold-line mb-6" />
            <h2 className="text-3xl md:text-4xl font-heading font-semibold text-primary leading-tight mb-6">
              {title}
            </h2>
            {text.map((p, i) => (
              <p key={i} className="text-gray-text leading-relaxed mb-4 text-lg">
                {p}
              </p>
            ))}
            {features && features.length > 0 && (
              <ul className="mt-6 space-y-3">
                {features.map((f) => (
                  <li key={f} className="flex items-start gap-3">
                    <span className="mt-2 w-2 h-2 rounded-full bg-gold flex-shrink-0" />
                    <span className="text-gray-text leading-relaxed">{f}</span>
                  </li>
                ))}
              </ul>
            )}
          </div>
          <div className={`reveal reveal-delay-2 ${reversed ? "lg:[direction:ltr]" : ""}`}>
            {visual || (
              <div className="bg-navy/5 rounded-sm aspect-[4/3] flex items-center justify-center">
                <div className="w-16 h-16 rounded-full border-2 border-gold/20 flex items-center justify-center">
                  <div className="w-3 h-3 rounded-full bg-gold/40" />
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
