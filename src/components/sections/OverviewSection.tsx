import { useState } from 'react';

const OverviewSection = () => {
  // État pour la FAQ
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  // Données des filières
  const filieres = [
    {
      id: 1,
      name: "Maternelle",
      age: "3 - 5 ans",
      description: "Éveil, socialisation et développement des compétences de base",
      icon: "🧒",
      color: "from-pink-400 to-rose-400"
    },
    {
      id: 2,
      name: "Primaire",
      age: "6 - 11 ans",
      description: "Acquisition des fondamentaux et développement de l'autonomie",
      icon: "📚",
      color: "from-blue-400 to-indigo-400"
    },
    {
      id: 3,
      name: "Secondaire",
      age: "12 - 18 ans",
      description: "Préparation aux examens et orientation vers l'enseignement supérieur",
      icon: "🎓",
      color: "from-purple-400 to-violet-400"
    },
    {
      id: 4,
      name: "Formation Professionnelle",
      age: "18+ ans",
      description: "Formation technique et professionnelle pour une insertion rapide",
      icon: "💼",
      color: "from-emerald-400 to-teal-400"
    }
  ];

  // Données des infrastructures
  const infrastructures = [
    { id: 1, name: "Bibliothèque", icon: "📖", description: "Plus de 5000 ouvrages" },
    { id: 2, name: "Laboratoires", icon: "🔬", description: "Sciences et informatique" },
    { id: 3, name: "Salles informatiques", icon: "💻", description: "Équipées en matériel récent" },
    { id: 4, name: "Salles de classe modernes", icon: "🏫", description: "Équipées en tableaux interactifs" },
    { id: 5, name: "Terrains de sport", icon: "⚽", description: "Football, basket, volley" },
    { id: 6, name: "Espaces verts", icon: "🌳", description: "Cadre de vie agréable" },
    { id: 7, name: "Sécurité 24/7", icon: "🛡️", description: "Vidéo surveillance et gardiens" },
    { id: 8, name: "Accès Internet", icon: "🌐", description: "Wi-Fi haut débit" }
  ];

  // Données des actualités
  const actualites = [
    {
      id: 1,
      title: "Journée portes ouvertes 2026",
      date: "15 Juin 2026",
      description: "Venez découvrir nos établissements et rencontrer notre équipe pédagogique.",
      category: "Événement"
    },
    {
      id: 2,
      title: "Excellents résultats au BAC 2025",
      date: "10 Juillet 2025",
      description: "98% de réussite avec 15 mentions Très Bien et 25 mentions Bien.",
      category: "Résultats"
    },
    {
      id: 3,
      title: "Inscriptions 2026-2027 ouvertes",
      date: "1er Août 2025",
      description: "Les inscriptions pour la nouvelle année scolaire sont désormais ouvertes.",
      category: "Inscriptions"
    },
    {
      id: 4,
      title: "Nouveau partenariat avec l'Université de Yaoundé",
      date: "5 Mars 2025",
      description: "Signature d'une convention de partenariat pour faciliter l'accès à l'enseignement supérieur.",
      category: "Partenariat"
    }
  ];

  // Données des partenaires
  const partenaires = [
    { id: 1, name: "Ministère de l'Éducation", logo: "🏛️" },
    { id: 2, name: "Université de Yaoundé", logo: "🎓" },
    { id: 3, name: "Ambassade de France", logo: "🇫🇷" },
    { id: 4, name: "British Council", logo: "🇬🇧" },
    { id: 5, name: "UNESCO", logo: "🌍" },
    { id: 6, name: "CEMAC", logo: "🏦" },
    { id: 7, name: "Institut Français", logo: "🇫🇷" },
    { id: 8, name: "Goethe Institut", logo: "🇩🇪" }
  ];

  // Données des récompenses
  const recompenses = [
    {
      id: 1,
      title: "Meilleur Établissement du Cameroun 2024",
      icon: "🏆",
      description: "Prix décerné par le Ministère de l'Éducation",
      year: "2024"
    },
    {
      id: 2,
      title: "Certification ISO 9001",
      icon: "📜",
      description: "Qualité de l'enseignement et de la gestion",
      year: "2023"
    },
    {
      id: 3,
      title: "Prix d'Excellence Académique",
      icon: "🥇",
      description: "Meilleurs résultats aux examens nationaux",
      year: "2025"
    },
    {
      id: 4,
      title: "Label École Verte",
      icon: "🌿",
      description: "Engagement pour l'environnement et le développement durable",
      year: "2024"
    },
    {
      id: 5,
      title: "Certification Bilingue",
      icon: "🌍",
      description: "Reconnue pour l'excellence de son enseignement bilingue",
      year: "2025"
    }
  ];

  // Données de la FAQ
  const faqs = [
    {
      id: 1,
      question: "Quelles sont les conditions d'inscription ?",
      answer: "Les inscriptions sont ouvertes aux enfants âgés de 3 ans minimum. Un dossier complet comprenant l'acte de naissance, le carnet de vaccination, les bulletins scolaires des deux dernières années (pour les niveaux supérieurs) et une photo d'identité est requis."
    },
    {
      id: 2,
      question: "Quels sont les frais de scolarité ?",
      answer: "Les frais de scolarité varient selon le niveau et la filière. Nous proposons également des facilités de paiement et des bourses pour les familles méritantes. Contactez notre service financier pour plus d'informations."
    },
    {
      id: 3,
      question: "Proposez-vous des activités extrascolaires ?",
      answer: "Oui, nous proposons de nombreuses activités : sport (football, basket, natation), arts (théâtre, musique, danse), clubs (robotique, sciences, langues) et sorties pédagogiques."
    },
    {
      id: 4,
      question: "Y a-t-il un service de cantine et de transport ?",
      answer: "Oui, nous disposons d'une cantine scolaire proposant des repas équilibrés. Un service de transport scolaire est également disponible sur plusieurs itinéraires dans la ville de Yaoundé."
    },
    {
      id: 5,
      question: "Quel est le ratio élèves/enseignant ?",
      answer: "Nous maintenons un ratio de 25 élèves par enseignant pour garantir un suivi personnalisé et une attention particulière à chaque élève."
    },
    {
      id: 6,
      question: "L'établissement est-il accessible aux enfants à besoins spécifiques ?",
      answer: "Oui, nous avons une politique d'inclusion et disposons d'enseignants formés pour accompagner les enfants à besoins spécifiques. Des aménagements sont prévus en fonction des besoins."
    }
  ];

  return (
    <section className="py-20 bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* ============================================ */}
        {/* BLOC 1: POURQUOI CHOISIR NOTRE ÉCOLE */}
        {/* ============================================ */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <span className="text-gold font-semibold text-sm tracking-wider uppercase">Pourquoi nous choisir</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-navy mt-2 mb-4">
              Les atouts de notre établissement
            </h2>
            <div className="w-24 h-1 bg-gold mx-auto"></div>
            <p className="text-gray-600 max-w-2xl mx-auto mt-4">
              Découvrez ce qui fait la force et la réputation de notre établissement depuis plus de 20 ans.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="group bg-white rounded-xl p-6 text-center shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 hover:border-b-4 hover:border-gold">
              <div className="text-4xl mb-3 group-hover:scale-110 transition-transform">🌍</div>
              <h3 className="font-bold text-navy text-sm">Enseignement Bilingue</h3>
              <p className="text-gray-500 text-xs mt-1">Français - Anglais</p>
            </div>
            <div className="group bg-white rounded-xl p-6 text-center shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 hover:border-b-4 hover:border-gold">
              <div className="text-4xl mb-3 group-hover:scale-110 transition-transform">⭐</div>
              <h3 className="font-bold text-navy text-sm">Excellence Académique</h3>
              <p className="text-gray-500 text-xs mt-1">98% de réussite</p>
            </div>
            <div className="group bg-white rounded-xl p-6 text-center shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 hover:border-b-4 hover:border-gold">
              <div className="text-4xl mb-3 group-hover:scale-110 transition-transform">👨‍🏫</div>
              <h3 className="font-bold text-navy text-sm">Enseignants Qualifiés</h3>
              <p className="text-gray-500 text-xs mt-1">85 experts</p>
            </div>
            <div className="group bg-white rounded-xl p-6 text-center shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 hover:border-b-4 hover:border-gold">
              <div className="text-4xl mb-3 group-hover:scale-110 transition-transform">🎯</div>
              <h3 className="font-bold text-navy text-sm">Encadrement Personnalisé</h3>
              <p className="text-gray-500 text-xs mt-1">Suivi individualisé</p>
            </div>
            <div className="group bg-white rounded-xl p-6 text-center shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 hover:border-b-4 hover:border-gold">
              <div className="text-4xl mb-3 group-hover:scale-110 transition-transform">🛡️</div>
              <h3 className="font-bold text-navy text-sm">Sécurité</h3>
              <p className="text-gray-500 text-xs mt-1">24h/24 - 7j/7</p>
            </div>
            <div className="group bg-white rounded-xl p-6 text-center shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 hover:border-b-4 hover:border-gold">
              <div className="text-4xl mb-3 group-hover:scale-110 transition-transform">💡</div>
              <h3 className="font-bold text-navy text-sm">Innovation Pédagogique</h3>
              <p className="text-gray-500 text-xs mt-1">Méthodes modernes</p>
            </div>
            <div className="group bg-white rounded-xl p-6 text-center shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 hover:border-b-4 hover:border-gold">
              <div className="text-4xl mb-3 group-hover:scale-110 transition-transform">🏗️</div>
              <h3 className="font-bold text-navy text-sm">Infrastructures Modernes</h3>
              <p className="text-gray-500 text-xs mt-1">Équipements de pointe</p>
            </div>
            <div className="group bg-white rounded-xl p-6 text-center shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 hover:border-b-4 hover:border-gold">
              <div className="text-4xl mb-3 group-hover:scale-110 transition-transform">📋</div>
              <h3 className="font-bold text-navy text-sm">Discipline</h3>
              <p className="text-gray-500 text-xs mt-1">Cadre structuré</p>
            </div>
          </div>
        </div>

        {/* ============================================ */}
        {/* BLOC 2: NOS FILIÈRES */}
        {/* ============================================ */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <span className="text-gold font-semibold text-sm tracking-wider uppercase">Nos filières</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-navy mt-2 mb-4">
              Un parcours pour chaque étape
            </h2>
            <div className="w-24 h-1 bg-gold mx-auto"></div>
            <p className="text-gray-600 max-w-2xl mx-auto mt-4">
              De la maternelle à la formation professionnelle, nous accompagnons chaque élève vers la réussite.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {filieres.map((filiere) => (
              <div
                key={filiere.id}
                className="group relative overflow-hidden rounded-2xl bg-white shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className={`h-2 bg-linear-to-r ${filiere.color}`}></div>
                <div className="p-6">
                  <div className="text-5xl mb-4 group-hover:scale-110 transition-transform">{filiere.icon}</div>
                  <h3 className="text-xl font-bold text-navy mb-1">{filiere.name}</h3>
                  <p className="text-gold font-semibold text-sm mb-2">{filiere.age}</p>
                  <p className="text-gray-600 text-sm">{filiere.description}</p>
                  <button className="mt-4 text-gold font-medium text-sm hover:underline transition-all">
                    En savoir plus →
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ============================================ */}
        {/* BLOC 3: NOS INFRASTRUCTURES */}
        {/* ============================================ */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <span className="text-gold font-semibold text-sm tracking-wider uppercase">Infrastructures</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-navy mt-2 mb-4">
              Des équipements modernes
            </h2>
            <div className="w-24 h-1 bg-gold mx-auto"></div>
            <p className="text-gray-600 max-w-2xl mx-auto mt-4">
              Des installations de qualité pour offrir un cadre d'apprentissage exceptionnel.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {infrastructures.map((infra) => (
              <div
                key={infra.id}
                className="group bg-white rounded-xl p-4 text-center shadow hover:shadow-xl transition-all duration-300 hover:-translate-y-1 hover:bg-gold/5"
              >
                <div className="text-3xl mb-2 group-hover:scale-110 transition-transform">{infra.icon}</div>
                <h3 className="font-semibold text-navy text-sm">{infra.name}</h3>
                <p className="text-gray-500 text-xs mt-1">{infra.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* ============================================ */}
        {/* BLOC 4: ACTUALITÉS */}
        {/* ============================================ */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <span className="text-gold font-semibold text-sm tracking-wider uppercase">Actualités</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-navy mt-2 mb-4">
              Les dernières nouvelles
            </h2>
            <div className="w-24 h-1 bg-gold mx-auto"></div>
            <p className="text-gray-600 max-w-2xl mx-auto mt-4">
              Restez informés des événements et des résultats de notre établissement.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {actualites.map((actu) => (
              <div
                key={actu.id}
                className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className="h-2 bg-gold"></div>
                <div className="p-6">
                  <span className="inline-block px-3 py-1 bg-gold/10 text-gold text-xs font-semibold rounded-full mb-3">
                    {actu.category}
                  </span>
                  <h3 className="text-lg font-bold text-navy mb-2 group-hover:text-gold transition-colors">
                    {actu.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-3">{actu.description}</p>
                  <p className="text-gray-400 text-xs">{actu.date}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ============================================ */}
        {/* BLOC 5: PARTENAIRES - Carrousel */}
        {/* ============================================ */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <span className="text-gold font-semibold text-sm tracking-wider uppercase">Partenaires</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-navy mt-2 mb-4">
              Ils nous font confiance
            </h2>
            <div className="w-24 h-1 bg-gold mx-auto"></div>
            <p className="text-gray-600 max-w-2xl mx-auto mt-4">
              Des partenaires prestigieux qui reconnaissent la qualité de notre enseignement.
            </p>
          </div>

          <div className="relative overflow-hidden">
            <div className="flex animate-scroll gap-6 py-4">
              {[...partenaires, ...partenaires].map((partenaire, index) => (
                <div
                  key={index}
                  className="shrink-0 w-36 h-28 bg-white rounded-xl shadow-lg flex flex-col items-center justify-center p-4 hover:shadow-2xl transition-all hover:-translate-y-1 border border-gold/10"
                >
                  <div className="text-5xl">{partenaire.logo}</div>
                  <p className="text-xs text-gray-600 text-center mt-2 font-medium">{partenaire.name}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ============================================ */}
        {/* BLOC 6: RÉCOMPENSES */}
        {/* ============================================ */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <span className="text-gold font-semibold text-sm tracking-wider uppercase">Distinctions</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-navy mt-2 mb-4">
              Nos récompenses
            </h2>
            <div className="w-24 h-1 bg-gold mx-auto"></div>
            <p className="text-gray-600 max-w-2xl mx-auto mt-4">
              Des distinctions qui témoignent de notre engagement pour l'excellence.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {recompenses.map((recompense) => (
              <div
                key={recompense.id}
                className="group bg-white rounded-xl p-6 text-center shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 hover:bg-linear-to-b hover:from-gold/5 hover:to-transparent"
              >
                <div className="text-5xl mb-3 group-hover:scale-110 transition-transform">{recompense.icon}</div>
                <h3 className="font-bold text-navy text-sm leading-tight">{recompense.title}</h3>
                <p className="text-gray-500 text-xs mt-1">{recompense.description}</p>
                <p className="text-gold font-bold text-sm mt-2">{recompense.year}</p>
              </div>
            ))}
          </div>
        </div>

        {/* ============================================ */}
        {/* BLOC 7: FAQ */}
        {/* ============================================ */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <span className="text-gold font-semibold text-sm tracking-wider uppercase">FAQ</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-navy mt-2 mb-4">
              Questions fréquentes
            </h2>
            <div className="w-24 h-1 bg-gold mx-auto"></div>
            <p className="text-gray-600 max-w-2xl mx-auto mt-4">
              Les réponses aux questions les plus posées par les parents.
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-3">
            {faqs.map((faq) => (
              <div
                key={faq.id}
                className="bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg"
              >
                <button
                  className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-cream/50 transition-colors"
                  onClick={() => setActiveFaq(activeFaq === faq.id ? null : faq.id)}
                >
                  <span className="font-semibold text-navy text-sm md:text-base">{faq.question}</span>
                  <span className={`text-gold transition-transform duration-300 text-sm ${activeFaq === faq.id ? 'rotate-180' : ''}`}>
                    ▼
                  </span>
                </button>
                <div
                  className={`px-6 overflow-hidden transition-all duration-300 ${
                    activeFaq === faq.id ? 'max-h-60 pb-4' : 'max-h-0'
                  }`}
                >
                  <p className="text-gray-600 text-sm leading-relaxed">{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ============================================ */}
        {/* BLOC 8: LOCALISATION */}
        {/* ============================================ */}
        <div>
          <div className="text-center mb-12">
            <span className="text-gold font-semibold text-sm tracking-wider uppercase">Nous trouver</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-navy mt-2 mb-4">
              Où nous sommes
            </h2>
            <div className="w-24 h-1 bg-gold mx-auto"></div>
            <p className="text-gray-600 max-w-2xl mx-auto mt-4">
              Venez nous rencontrer dans nos locaux à Yaoundé.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Carte Google Maps */}
            <div className="lg:col-span-2 rounded-2xl overflow-hidden shadow-lg h-80 lg:h-auto">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d254209.67342811115!2d11.451812049999998!3d3.848032!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x108fcf84f5c11bdd%3A0x7b5f7b8e8b6b8b8b!2sYaound%C3%A9!5e0!3m2!1sfr!2scm!4v1700000000000"
                className="w-full h-full"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Localisation IPPAM & Ange & Léonce"
              ></iframe>
            </div>

            {/* Coordonnées */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <h3 className="text-2xl font-bold text-navy mb-6">Coordonnées</h3>
              <ul className="space-y-5">
                <li className="flex items-start gap-3">
                  <span className="text-2xl">📍</span>
                  <div>
                    <p className="font-semibold text-navy">Adresse</p>
                    <p className="text-gray-600 text-sm">Yaoundé, Cameroun</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-2xl">📞</span>
                  <div>
                    <p className="font-semibold text-navy">Téléphone</p>
                    <p className="text-gray-600 text-sm">+237 6XX XXX XXX</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-2xl">✉️</span>
                  <div>
                    <p className="font-semibold text-navy">Email</p>
                    <p className="text-gray-600 text-sm">contact@ippam-angeleonce.com</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-2xl">🕐</span>
                  <div>
                    <p className="font-semibold text-navy">Horaires</p>
                    <p className="text-gray-600 text-sm">Lun - Ven: 7h30 - 17h30</p>
                    <p className="text-gray-600 text-sm">Sam: 8h00 - 12h00</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-2xl">💬</span>
                  <div>
                    <p className="font-semibold text-navy">WhatsApp</p>
                    <p className="text-gray-600 text-sm">+237 6XX XXX XXX</p>
                  </div>
                </li>
              </ul>
              <button className="mt-6 w-full bg-gold text-navy py-3 rounded-xl font-semibold hover:bg-gold/90 transition-colors hover:shadow-lg">
                Obtenir l'itinéraire
              </button>
            </div>
          </div>
        </div>

      </div>

      {/* ============================================ */}
      {/* STYLES POUR LE CARROUSEL */}
      {/* ============================================ */}
      <style>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-scroll {
          animation: scroll 25s linear infinite;
        }
        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
};

export default OverviewSection;