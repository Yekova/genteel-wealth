export default function Footer() {
  return (
    <footer className="bg-navy-deep text-primary-foreground/60 px-6 py-16">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-4 gap-10 mb-12">
          <div className="md:col-span-2">
            <p className="font-heading text-2xl font-bold text-primary-foreground tracking-wide mb-4">PATRIMONIA</p>
            <p className="text-sm leading-relaxed max-w-md">
              Cabinet indépendant de conseil en gestion de patrimoine. Nous accompagnons les particuliers et les chefs d'entreprise dans l'optimisation et la protection de leur patrimoine.
            </p>
          </div>
          <div>
            <h4 className="font-heading text-sm font-semibold text-primary-foreground tracking-wider uppercase mb-4">Navigation</h4>
            <ul className="space-y-2 text-sm">
              {["Le Cabinet", "Expertises", "Méthode", "Équipe", "Actualités", "Contact"].map((l) => (
                <li key={l}>
                  <a href={`#${l.toLowerCase().replace(/ /g, "").replace("é", "e")}`} className="hover:text-gold transition-colors">{l}</a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-heading text-sm font-semibold text-primary-foreground tracking-wider uppercase mb-4">Expertises</h4>
            <ul className="space-y-2 text-sm">
              {["Gestion patrimoniale", "Épargne & placements", "Fiscalité", "Immobilier", "Crédit", "Transmission"].map((l) => (
                <li key={l}><span className="hover:text-gold transition-colors cursor-pointer">{l}</span></li>
              ))}
            </ul>
          </div>
        </div>
        <div className="border-t border-primary-foreground/10 pt-8">
          <div className="text-xs leading-relaxed mb-4">
            <p>
              Patrimonia Conseil — SAS au capital de 10 000 € — RCS Bordeaux 000 000 000 — Siège social : 12 Cours de l'Intendance, 33000 Bordeaux.
              Conseiller en Investissements Financiers (CIF) enregistré à l'ORIAS sous le n°00 000 000. Membre de la CNCGP, association agréée par l'AMF.
              Courtier en assurances (COA) — Courtier en opérations de banque et services de paiement (COBSP). Activité de transaction immobilière — Carte T n°CPI 0000 0000 000 000 000.
            </p>
          </div>
          <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4 text-xs">
            <div className="flex flex-wrap gap-4">
              <a href="#" className="hover:text-gold transition-colors">Mentions légales</a>
              <a href="#" className="hover:text-gold transition-colors">Politique de confidentialité</a>
              <a href="#" className="hover:text-gold transition-colors">CGU</a>
              <a href="#" className="hover:text-gold transition-colors">Réclamations</a>
            </div>
            <p>© 2026 Patrimonia Conseil — Tous droits réservés</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
