interface ContentBlockProps {
  title: string;
  text: string[];
  features?: string[];
  variant?: "ivory" | "white";
  reversed?: boolean;
  children?: React.ReactNode;
}

export default function ContentBlock({
  title,
  text,
  features,
  variant = "white",
  reversed = false,
  children,
}: ContentBlockProps) {
  return (
    <section className={`section-padding ${variant === "ivory" ? "section-ivory" : "bg-background texture-paper"}`}>
      <div className="max-w-5xl mx-auto">
        <div className={`grid lg:grid-cols-5 gap-14 items-start ${reversed ? "lg:[direction:rtl]" : ""}`}>
          <div className={`lg:col-span-3 reveal ${reversed ? "lg:[direction:ltr]" : ""}`}>
            <h2 className="text-2xl md:text-3xl font-heading font-semibold text-primary leading-tight mb-6">
              {title}
            </h2>
            {text.map((p, i) => (
              <p key={i} className="text-gray-text leading-relaxed mb-4">
                {p}
              </p>
            ))}
            {features && features.length > 0 && (
              <ul className="mt-6 space-y-3">
                {features.map((f) => (
                  <li key={f} className="flex items-start gap-3">
                    <span className="mt-2 w-1.5 h-1.5 rounded-full bg-gold flex-shrink-0" />
                    <span className="text-gray-text leading-relaxed text-sm">{f}</span>
                  </li>
                ))}
              </ul>
            )}
          </div>
          <div className={`lg:col-span-2 reveal reveal-delay-2 ${reversed ? "lg:[direction:ltr]" : ""}`}>
            {children || (
              <div className="bg-navy/4 aspect-[4/3] flex items-center justify-center">
                <div className="w-12 h-12 border border-gold/20 flex items-center justify-center">
                  <div className="w-2 h-2 bg-gold/30" />
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
