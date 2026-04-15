import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-navy-deep text-primary-foreground/50 px-6 py-16">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-4 gap-10 mb-14">
          <div className="md:col-span-2">
            <p className="font-heading text-xl font-semibold text-primary-foreground tracking-[0.15em] mb-4">KANTI</p>
            <p className="text-sm leading-relaxed max-w-md mb-4">
              Cabinet indépendant de conseil en gestion de patrimoine à Bordeaux. Nous accompagnons les particuliers et les dirigeants dans la structuration, l'optimisation fiscale et la transmission de leur patrimoine.
            </p>
            <p className="text-xs text-primary-foreground/30">
              12 Cours de l'Intendance — 33000 Bordeaux<br />
              05 56 00 00 00 — contact@kanti.fr
            </p>
          </div>
          <div>
            <h4 className="text-xs font-medium text-primary-foreground/40 tracking-widest uppercase mb-4">Navigation</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/cabinet" className="hover:text-gold transition-colors link-underline-light">Le Cabinet</Link></li>
              <li><Link to="/notre-methode" className="hover:text-gold transition-colors link-underline-light">Notre méthode</Link></li>
              <li><Link to="/cas-clients" className="hover:text-gold transition-colors link-underline-light">Cas clients</Link></li>
              <li><Link to="/actualites" className="hover:text-gold transition-colors link-underline-light">Actualités</Link></li>
              <li><Link to="/faq-patrimoniale" className="hover:text-gold transition-colors link-underline-light">FAQ</Link></li>
              <li><Link to="/contact" className="hover:text-gold transition-colors link-underline-light">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-xs font-medium text-primary-foreground/40 tracking-widest uppercase mb-4">Expertises</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/gestion-patrimoniale" className="hover:text-gold transition-colors link-underline-light">Gestion patrimoniale</Link></li>
              <li><Link to="/fiscalite" className="hover:text-gold transition-colors link-underline-light">Fiscalité</Link></li>
              <li><Link to="/patrimoine-professionnel" className="hover:text-gold transition-colors link-underline-light">Patrimoine professionnel</Link></li>
              <li><Link to="/financement" className="hover:text-gold transition-colors link-underline-light">Financement</Link></li>
              <li><Link to="/transmission-patrimoine-famille" className="hover:text-gold transition-colors link-underline-light">Transmission</Link></li>
              <li><Link to="/patrimoine-immobilier-strategie" className="hover:text-gold transition-colors link-underline-light">Immobilier</Link></li>
            </ul>
          </div>
        </div>

        <div className="separator-fine mb-8" />

        <div className="text-xs leading-relaxed mb-6 text-primary-foreground/30">
          <p>
            KANTI — SAS au capital de 10 000 € — RCS Bordeaux 000 000 000 — Siège social : 12 Cours de l'Intendance, 33000 Bordeaux.
            Conseiller en Investissements Financiers (CIF) enregistré à l'ORIAS sous le n° 00 000 000. Membre de la Chambre Nationale des Conseils en Gestion de Patrimoine (CNCGP), association agréée par l'Autorité des Marchés Financiers (AMF).
            Courtier en assurances (COA) — Courtier en opérations de banque et services de paiement (COBSP). Activité de transaction immobilière — Carte professionnelle n° CPI 0000 0000 000 000 000 délivrée par la CCI de Bordeaux.
            Responsabilité civile professionnelle et garantie financière conformes aux articles L.541-3 et L.512-6 du Code monétaire et financier.
          </p>
        </div>
        <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4 text-xs text-primary-foreground/30">
          <div className="flex flex-wrap gap-4">
            <a href="#" className="hover:text-gold transition-colors">Mentions légales</a>
            <a href="#" className="hover:text-gold transition-colors">Politique de confidentialité</a>
            <a href="#" className="hover:text-gold transition-colors">Réclamations</a>
          </div>
          <p>© 2026 KANTI — Tous droits réservés</p>
        </div>
      </div>
    </footer>
  );
}
