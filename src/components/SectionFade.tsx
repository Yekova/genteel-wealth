interface SectionFadeProps {
  variant?: "light" | "dark" | "to-dark" | "to-light";
  height?: number;
}

/**
 * Soft glass-morphing transition between two sections.
 * Drop between sections to create a fluid fade with backdrop blur.
 */
export default function SectionFade({ variant = "light", height = 120 }: SectionFadeProps) {
  const variantClass =
    variant === "dark"
      ? "section-fade-dark"
      : variant === "to-dark"
      ? "section-fade-to-dark"
      : variant === "to-light"
      ? "section-fade-to-light"
      : "section-fade-light";

  return (
    <div
      aria-hidden="true"
      className={`section-fade ${variantClass}`}
      style={{ height: `${height}px` }}
    />
  );
}
