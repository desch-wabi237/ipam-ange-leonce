import { useState } from 'react';
import Layout from '../components/layout/Layout';
import { siteConfig } from '../data/config';

const Contact = () => {
  // État pour le formulaire
  const [formData, setFormData] = useState({
    nom: '',
    email: '',
    telephone: '',
    sujet: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Gestion des changements du formulaire
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  // Gestion de la soumission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulation d'envoi
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({
        nom: '',
        email: '',
        telephone: '',
        sujet: '',
        message: ''
      });
    }, 2000);
  };

  // Coordonnées
  const contactInfo = [
    {
      id: 1,
      icon: '📍',
      title: 'Adresse',
      details: siteConfig.contacts.adresse,
      action: 'Voir sur la carte',
      link: '#map'
    },
    {
      id: 2,
      icon: '📞',
      title: 'Téléphone',
      details: siteConfig.contacts.telephone,
      action: 'Appeler maintenant',
      link: `tel:${siteConfig.contacts.telephone}`
    },
    {
      id: 3,
      icon: '💬',
      title: 'WhatsApp',
      details: siteConfig.contacts.whatsapp,
      action: 'Écrire sur WhatsApp',
      link: `https://wa.me/${siteConfig.contacts.whatsapp.replace(/[^0-9]/g, '')}`
    },
    {
      id: 4,
      icon: '✉️',
      title: 'Email',
      details: siteConfig.contacts.email,
      action: 'Envoyer un email',
      link: `mailto:${siteConfig.contacts.email}`
    }
  ];

  // Réseaux sociaux
  const socialLinks = [
    { id: 1, name: 'Facebook', icon: '📘', url: siteConfig.social.facebook, color: 'hover:bg-blue-600' },
    { id: 2, name: 'Instagram', icon: '📸', url: siteConfig.social.instagram, color: 'hover:bg-pink-600' },
    { id: 3, name: 'LinkedIn', icon: '🔗', url: siteConfig.social.linkedin, color: 'hover:bg-blue-700' },
    { id: 4, name: 'YouTube', icon: '▶️', url: '#', color: 'hover:bg-red-600' },
    { id: 5, name: 'Twitter', icon: '🐦', url: '#', color: 'hover:bg-blue-400' }
  ];

  // Horaires
  const horaires = [
    { day: 'Lundi - Vendredi', hours: '7h30 - 17h30' },
    { day: 'Samedi', hours: '8h00 - 12h00' },
    { day: 'Dimanche', hours: 'Fermé' }
  ];

  return (
    <Layout>
      {/* ============================================ */}
      {/* SECTION 1: HERO CONTACT */}
      {/* ============================================ */}
      <section className="relative min-h-[45vh] flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 bg-gradient-to-br from-navy/90 via-navy/80 to-turquoise/40">
        </div>
        
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <span className="text-gold font-semibold text-sm tracking-wider uppercase">Contact</span>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mt-4 mb-6">
            Restons en contact
          </h1>
          <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto">
            Une question, une suggestion ? N'hésitez pas à nous contacter. Nous sommes là pour vous.
          </p>
        </div>
      </section>

      {/* ============================================ */}
      {/* SECTION 2: INFORMATIONS DE CONTACT */}
      {/* ============================================ */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((info) => (
              <a
                key={info.id}
                href={info.link}
                className="group bg-cream rounded-2xl p-6 text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className="text-4xl mb-3 group-hover:scale-110 transition-transform">{info.icon}</div>
                <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider">{info.title}</h3>
                <p className="text-navy font-medium mt-1">{info.details}</p>
                <span className="text-gold text-sm font-medium group-hover:underline">
                  {info.action} →
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================ */}
      {/* SECTION 3: FORMULAIRE + CARTE */}
      {/* ============================================ */}
      <section className="py-16 bg-cream" id="map">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Formulaire */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h2 className="text-2xl font-bold text-navy mb-2">Envoyez-nous un message</h2>
              <p className="text-gray-500 text-sm mb-6">
                Nous vous répondrons dans les plus brefs délais.
              </p>

              {isSubmitted ? (
                <div className="text-center py-8">
                  <div className="text-6xl mb-4">✅</div>
                  <h3 className="text-xl font-bold text-navy mb-2">Message envoyé !</h3>
                  <p className="text-gray-500">Nous vous répondrons dans les plus brefs délais.</p>
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="mt-4 text-gold font-semibold hover:underline"
                  >
                    Envoyer un autre message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Nom complet *
                      </label>
                      <input
                        type="text"
                        name="nom"
                        value={formData.nom}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-gold focus:outline-none transition-colors"
                        placeholder="Votre nom"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Email *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-gold focus:outline-none transition-colors"
                        placeholder="votre@email.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Téléphone
                    </label>
                    <input
                      type="tel"
                      name="telephone"
                      value={formData.telephone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-gold focus:outline-none transition-colors"
                      placeholder="+237 6XX XXX XXX"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Sujet *
                    </label>
                    <select
                      name="sujet"
                      value={formData.sujet}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-gold focus:outline-none transition-colors"
                    >
                      <option value="">Choisissez un sujet</option>
                      <option value="inscription">Inscription</option>
                      <option value="information">Demande d'information</option>
                      <option value="visite">Visite de l'établissement</option>
                      <option value="partenariat">Partenariat</option>
                      <option value="reclamation">Réclamation</option>
                      <option value="autre">Autre</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Message *
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-gold focus:outline-none transition-colors resize-none"
                      placeholder="Votre message..."
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full bg-gold text-navy py-3 rounded-xl font-semibold transition-all duration-300 ${
                      isSubmitting ? 'opacity-70 cursor-not-allowed' : 'hover:bg-gold/90 hover:shadow-lg hover:scale-[1.02]'
                    }`}
                  >
                    {isSubmitting ? (
                      <span className="flex items-center justify-center gap-2">
                        <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                        </svg>
                        Envoi en cours...
                      </span>
                    ) : (
                      'Envoyer le message'
                    )}
                  </button>
                </form>
              )}
            </div>

            {/* Informations et carte */}
            <div className="space-y-6">
              {/* Horaires */}
              <div className="bg-white rounded-2xl p-6 shadow-lg">
                <h3 className="text-lg font-bold text-navy mb-4">🕐 Nos horaires</h3>
                <div className="space-y-2">
                  {horaires.map((horaire, index) => (
                    <div key={index} className="flex justify-between items-center border-b border-gray-100 pb-2 last:border-0 last:pb-0">
                      <span className="text-gray-600">{horaire.day}</span>
                      <span className="font-medium text-navy">{horaire.hours}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Réseaux sociaux */}
              <div className="bg-white rounded-2xl p-6 shadow-lg">
                <h3 className="text-lg font-bold text-navy mb-4">📱 Suivez-nous</h3>
                <div className="flex flex-wrap gap-3">
                  {socialLinks.map((social) => (
                    <a
                      key={social.id}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex items-center gap-2 px-4 py-2 bg-cream rounded-xl transition-all duration-300 hover:text-white ${social.color}`}
                    >
                      <span>{social.icon}</span>
                      <span className="text-sm font-medium">{social.name}</span>
                    </a>
                  ))}
                </div>
              </div>

              {/* Carte */}
              <div className="bg-white rounded-2xl overflow-hidden shadow-lg">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d254209.67342811115!2d11.451812049999998!3d3.848032!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x108fcf84f5c11bdd%3A0x7b5f7b8e8b6b8b8b!2sYaound%C3%A9!5e0!3m2!1sfr!2scm!4v1700000000000"
                  className="w-full h-64"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Localisation IPPAM & Ange & Léonce"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================ */}
      {/* SECTION 4: FAQ CONTACT */}
      {/* ============================================ */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-navy mb-2">Questions fréquentes</h2>
          <p className="text-gray-500 mb-8">
            Les réponses aux questions les plus posées.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
            <div className="bg-cream rounded-xl p-4 hover:shadow-md transition-shadow">
              <h4 className="font-semibold text-navy mb-1">📅 Comment visiter l'établissement ?</h4>
              <p className="text-gray-500 text-sm">Contactez-nous pour prendre rendez-vous. Nous organisons des visites guidées sur demande.</p>
            </div>
            <div className="bg-cream rounded-xl p-4 hover:shadow-md transition-shadow">
              <h4 className="font-semibold text-navy mb-1">📝 Quand sont les inscriptions ?</h4>
              <p className="text-gray-500 text-sm">Les inscriptions sont ouvertes toute l'année. Contactez-nous pour plus d'informations.</p>
            </div>
            <div className="bg-cream rounded-xl p-4 hover:shadow-md transition-shadow">
              <h4 className="font-semibold text-navy mb-1">💰 Y a-t-il des bourses ?</h4>
              <p className="text-gray-500 text-sm">Oui, des bourses sont disponibles pour les familles méritantes. Renseignez-vous auprès du secrétariat.</p>
            </div>
            <div className="bg-cream rounded-xl p-4 hover:shadow-md transition-shadow">
              <h4 className="font-semibold text-navy mb-1">🚌 Proposez-vous le transport ?</h4>
              <p className="text-gray-500 text-sm">Oui, un service de transport scolaire est disponible sur plusieurs itinéraires.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================ */}
      {/* SECTION 5: APPEL À L'ACTION */}
      {/* ============================================ */}
      <section className="py-16 bg-gradient-to-r from-navy to-navy/90 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Prêt à rejoindre notre famille ?
          </h2>
          <p className="text-white/80 text-lg mb-6 max-w-2xl mx-auto">
            Inscrivez votre enfant dès maintenant pour lui offrir le meilleur départ dans la vie.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gold text-navy px-8 py-3 rounded-full font-semibold hover:bg-gold/90 transition-all hover:scale-105">
              Formulaire d'inscription
            </button>
            <button className="bg-transparent border-2 border-white/50 text-white px-8 py-3 rounded-full font-semibold hover:border-gold hover:text-gold transition-all">
              Nous contacter
            </button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;