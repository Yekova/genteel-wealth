import { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({ nom: "", email: "", telephone: "", message: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <section id="contact" className="section-padding section-navy">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16">
          <div className="reveal">
            <div className="gold-line mb-6" />
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-semibold mb-6">
              Parlons de votre projet
            </h2>
            <p className="text-primary-foreground/70 text-lg leading-relaxed mb-8">
              Bénéficiez d'un premier échange de 30 minutes, sans engagement, pour faire le point sur votre situation patrimoniale et identifier vos priorités.
            </p>
            <div className="space-y-4 text-primary-foreground/80">
              <p>📍 12 Cours de l'Intendance, 33000 Bordeaux</p>
              <p>📞 05 56 00 00 00</p>
              <p>✉️ contact@patrimonia-conseil.fr</p>
              <p className="text-sm text-primary-foreground/50 mt-6">
                Du lundi au vendredi, 9h–18h<br />
                Sur rendez-vous uniquement
              </p>
            </div>
          </div>
          <div className="reveal reveal-delay-2">
            <form
              onSubmit={(e) => e.preventDefault()}
              className="bg-navy-light/50 backdrop-blur-sm rounded-sm p-8 space-y-5 border border-primary-foreground/10"
            >
              <div>
                <label htmlFor="nom" className="block text-sm font-medium text-primary-foreground/70 mb-1.5">Nom complet</label>
                <input
                  id="nom"
                  name="nom"
                  type="text"
                  value={form.nom}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-navy-deep/50 border border-primary-foreground/15 rounded-sm text-primary-foreground placeholder:text-primary-foreground/30 focus:outline-none focus:border-gold transition-colors"
                  placeholder="Votre nom"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-primary-foreground/70 mb-1.5">Email</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-navy-deep/50 border border-primary-foreground/15 rounded-sm text-primary-foreground placeholder:text-primary-foreground/30 focus:outline-none focus:border-gold transition-colors"
                  placeholder="votre@email.fr"
                />
              </div>
              <div>
                <label htmlFor="telephone" className="block text-sm font-medium text-primary-foreground/70 mb-1.5">Téléphone</label>
                <input
                  id="telephone"
                  name="telephone"
                  type="tel"
                  value={form.telephone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-navy-deep/50 border border-primary-foreground/15 rounded-sm text-primary-foreground placeholder:text-primary-foreground/30 focus:outline-none focus:border-gold transition-colors"
                  placeholder="06 00 00 00 00"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-primary-foreground/70 mb-1.5">Votre projet</label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={form.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-navy-deep/50 border border-primary-foreground/15 rounded-sm text-primary-foreground placeholder:text-primary-foreground/30 focus:outline-none focus:border-gold transition-colors resize-none"
                  placeholder="Décrivez brièvement votre situation ou votre projet..."
                />
              </div>
              <button
                type="submit"
                className="w-full py-3.5 bg-gold text-navy-deep font-medium tracking-wide rounded-sm hover:bg-gold-light transition-colors duration-300"
              >
                Demander un rendez-vous
              </button>
              <p className="text-xs text-primary-foreground/40 text-center">
                Premier échange de 30 minutes — Sans engagement
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
