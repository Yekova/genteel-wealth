import { Link } from "react-router-dom";

export default function About() {
  return (
    <section id="about" className="section-padding bg-background texture-paper">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-5 gap-16 items-start">
          <div className="lg:col-span-3 reveal">
            <p className="text-[13px] tracking-widest uppercase text-gold mb-4">Le cabinet</p>
            <h2 className="text-3xl md:text-4xl font-heading font-semibold text-primary leading-tight mb-6">
              Un regard global sur votre patrimoine, pas une collection de produits
            </h2>
            <p className="text-gray-text leading-relaxed mb-5">
              La plupart des conseils patrimoniaux partent d'un produit. Nous partons de vous : votre situation familiale, vos revenus, votre fiscalité, vos projets, vos inquiétudes. Ensuite seulement, nous cherchons les bonnes réponses.
            </p>
            <p className="text-gray-text leading-relaxed mb-8">
              Cabinet indépendant inscrit à l'ORIAS et membre de la CNCGP, nous ne dépendons d'aucun réseau bancaire ni d'aucun groupe financier. Cette liberté nous permet de travailler exclusivement dans votre intérêt — et de vous le démontrer, année après année.
            </p>
            <Link to="/cabinet" className="text-sm font-medium text-primary border-b border-primary/30 hover:border-primary transition-colors pb-0.5">
              En savoir plus sur le cabinet →
            </Link>
          </div>
          <div className="lg:col-span-2 reveal reveal-delay-2">
            <div className="border-l-2 border-gold/40 pl-8 space-y-8">
              <div>
                <p className="text-2xl font-heading font-semibold text-primary">15 ans</p>
                <p className="text-sm text-gray-text mt-1">d'exercice à Bordeaux</p>
              </div>
              <div>
                <p className="text-2xl font-heading font-semibold text-primary">500+</p>
                <p className="text-sm text-gray-text mt-1">familles et dirigeants accompagnés</p>
              </div>
              <div>
                <p className="text-2xl font-heading font-semibold text-primary">98 %</p>
                <p className="text-sm text-gray-text mt-1">de clients fidèles chaque année</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
