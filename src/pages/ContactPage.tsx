import { useState } from "react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import TrustBand from "@/components/TrustBand";

export default function ContactPage() {
  useScrollReveal();
  const [form, setForm] = useState({ nom: "", email: "", telephone: "", sujet: "", message: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <>
      <Header />
      <PageHero
        title="Contactez-nous"
        highlight="et prenez rendez-vous"
        subtitle="Un premier échange de 30 minutes, sans engagement, pour faire le point sur votre situation patrimoniale et identifier vos priorités."
        breadcrumb="Contact"
      />

      <section className="section-padding bg-background">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-5 gap-16">
          <div className="lg:col-span-3 reveal">
            <h2 className="text-2xl md:text-3xl font-heading font-semibold text-primary mb-6">
              Demande de rendez-vous
            </h2>
            <form onSubmit={(e) => e.preventDefault()} className="space-y-5">
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="nom" className="block text-sm font-medium text-primary mb-1.5">Nom complet *</label>
                  <input id="nom" name="nom" type="text" value={form.nom} onChange={handleChange} required className="w-full px-4 py-3 border border-border rounded-sm bg-background text-foreground focus:outline-none focus:border-gold transition-colors" placeholder="Votre nom" />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-primary mb-1.5">Email *</label>
                  <input id="email" name="email" type="email" value={form.email} onChange={handleChange} required className="w-full px-4 py-3 border border-border rounded-sm bg-background text-foreground focus:outline-none focus:border-gold transition-colors" placeholder="votre@email.fr" />
                </div>
              </div>
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="telephone" className="block text-sm font-medium text-primary mb-1.5">Téléphone</label>
                  <input id="telephone" name="telephone" type="tel" value={form.telephone} onChange={handleChange} className="w-full px-4 py-3 border border-border rounded-sm bg-background text-foreground focus:outline-none focus:border-gold transition-colors" placeholder="06 00 00 00 00" />
                </div>
                <div>
                  <label htmlFor="sujet" className="block text-sm font-medium text-primary mb-1.5">Sujet</label>
                  <select id="sujet" name="sujet" value={form.sujet} onChange={handleChange} className="w-full px-4 py-3 border border-border rounded-sm bg-background text-foreground focus:outline-none focus:border-gold transition-colors">
                    <option value="">Sélectionner un sujet</option>
                    <option value="gestion">Gestion patrimoniale</option>
                    <option value="fiscalite">Fiscalité</option>
                    <option value="professionnel">Patrimoine professionnel</option>
                    <option value="financement">Financement / Crédit</option>
                    <option value="immobilier">Immobilier</option>
                    <option value="autre">Autre</option>
                  </select>
                </div>
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-primary mb-1.5">Votre projet</label>
                <textarea id="message" name="message" rows={5} value={form.message} onChange={handleChange} className="w-full px-4 py-3 border border-border rounded-sm bg-background text-foreground focus:outline-none focus:border-gold transition-colors resize-none" placeholder="Décrivez brièvement votre situation ou votre projet..." />
              </div>
              <button type="submit" className="px-8 py-3.5 bg-gold text-navy-deep font-medium tracking-wide rounded-sm hover:bg-gold-light transition-all duration-300">
                Envoyer ma demande
              </button>
              <p className="text-xs text-gray-text">
                En soumettant ce formulaire, vous acceptez que vos données soient traitées conformément à notre politique de confidentialité.
              </p>
            </form>
          </div>

          <div className="lg:col-span-2 reveal reveal-delay-2">
            <div className="bg-navy rounded-sm p-8 text-primary-foreground mb-8">
              <h3 className="font-heading text-xl font-semibold mb-6 text-gold">Informations pratiques</h3>
              <div className="space-y-5 text-sm">
                <div>
                  <p className="font-medium mb-1">Adresse</p>
                  <p className="text-primary-foreground/70">12 Cours de l'Intendance<br />33000 Bordeaux</p>
                </div>
                <div>
                  <p className="font-medium mb-1">Téléphone</p>
                  <p className="text-primary-foreground/70">05 56 00 00 00</p>
                </div>
                <div>
                  <p className="font-medium mb-1">Email</p>
                  <p className="text-primary-foreground/70">contact@patrimonia-conseil.fr</p>
                </div>
                <div>
                  <p className="font-medium mb-1">Horaires</p>
                  <p className="text-primary-foreground/70">Lundi — Vendredi : 9h–18h<br />Sur rendez-vous uniquement</p>
                </div>
              </div>
            </div>
            <div className="bg-ivory-warm rounded-sm p-8 border border-border/50">
              <h3 className="font-heading text-lg font-semibold text-primary mb-3">Premier rendez-vous</h3>
              <p className="text-gray-text text-sm leading-relaxed">
                Votre premier échange dure environ 30 minutes. Il est gratuit et sans engagement. C'est l'occasion de nous présenter votre situation et vos objectifs, et de comprendre comment nous pouvons vous accompagner.
              </p>
            </div>
          </div>
        </div>
      </section>

      <TrustBand />
      <Footer />
    </>
  );
}
