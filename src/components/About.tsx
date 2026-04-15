import { Link } from "react-router-dom";
import { useEffect, useRef, useState } from "react";

function useCountUp(target: number, suffix = "", duration = 2000) {
  const [value, setValue] = useState("0");
  const ref = useRef<HTMLDivElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          const start = performance.now();
          const animate = (now: number) => {
            const progress = Math.min((now - start) / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            const current = Math.round(eased * target);
            setValue(current + suffix);
            if (progress < 1) requestAnimationFrame(animate);
          };
          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.5 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [target, suffix, duration]);

  return { ref, value };
}

export default function About() {
  const years = useCountUp(15, " ans");
  const clients = useCountUp(500, "+");
  const fidelity = useCountUp(98, " %");

  return (
    <section id="about" className="section-padding bg-background texture-paper">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-5 gap-16 items-start">
          <div className="lg:col-span-3 reveal">
            <p className="text-[13px] tracking-widest uppercase text-gold mb-4">Le cabinet</p>
            <h2 className="text-3xl md:text-4xl font-heading font-semibold text-primary leading-tight mb-6">
              Un regard global sur votre patrimoine, pas une collection de produits
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-5">
              La plupart des conseils patrimoniaux partent d'un produit. Chez KANTI, nous partons de vous : votre situation familiale, vos revenus, votre fiscalité, vos projets, vos inquiétudes. Ensuite seulement, nous cherchons les bonnes réponses.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Cabinet indépendant inscrit à l'ORIAS et membre de la CNCGP, nous ne dépendons d'aucun réseau bancaire ni d'aucun groupe financier. Cette liberté nous permet de travailler exclusivement dans votre intérêt — et de vous le démontrer, année après année.
            </p>
            <Link to="/cabinet" className="text-sm font-medium text-primary border-b border-primary/30 hover:border-primary transition-colors pb-0.5 link-underline">
              En savoir plus sur le cabinet →
            </Link>
          </div>
          <div className="lg:col-span-2 reveal reveal-delay-2">
            <div className="border-l-2 border-gold/40 pl-8 space-y-8">
              <div ref={years.ref}>
                <p className="text-2xl font-heading font-semibold text-primary">{years.value}</p>
                <p className="text-sm text-muted-foreground mt-1">d'exercice à Bordeaux</p>
              </div>
              <div ref={clients.ref}>
                <p className="text-2xl font-heading font-semibold text-primary">{clients.value}</p>
                <p className="text-sm text-muted-foreground mt-1">familles et dirigeants accompagnés</p>
              </div>
              <div ref={fidelity.ref}>
                <p className="text-2xl font-heading font-semibold text-primary">{fidelity.value}</p>
                <p className="text-sm text-muted-foreground mt-1">de clients fidèles chaque année</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
