import Layout from '../components/layout/Layout';

const About = () => {
  // Données des valeurs
  const valeurs = [
    {
      id: 1,
      icon: "🎯",
      title: "Excellence",
      description: "Nous visons l'excellence dans tous les domaines : académique, sportif, culturel et humain."
    },
    {
      id: 2,
      icon: "🤝",
      title: "Intégrité",
      description: "Nous cultivons l'honnêteté, la transparence et le respect des valeurs morales."
    },
    {
      id: 3,
      icon: "💡",
      title: "Innovation",
      description: "Nous adoptons les méthodes pédagogiques modernes et les technologies éducatives."
    },
    {
      id: 4,
      icon: "🌍",
      title: "Ouverture",
      description: "Nous formons des citoyens du monde, ouverts aux autres cultures et au multilinguisme."
    },
    {
      id: 5,
      icon: "❤️",
      title: "Humanisme",
      description: "Nous plaçons l'humain au cœur de notre projet éducatif."
    },
    {
      id: 6,
      icon: "⭐",
      title: "Discipline",
      description: "Nous inculquons le sens de la responsabilité et du travail bien fait."
    }
  ];

  // Données de l'équipe
  const equipe = [
    {
      id: 1,
      name: "Dr. Jean Nguema",
      role: "Directeur Général",
      image: "👨‍🏫",
      description: "Docteur en Sciences de l'Éducation, 25 ans d'expérience dans l'enseignement."
    },
    {
      id: 2,
      name: "Mme. Marie-Claire Abega",
      role: "Directrice Pédagogique",
      image: "👩‍🏫",
      description: "Expert en curriculum et pédagogie active, 20 ans d'expérience."
    },
    {
      id: 3,
      name: "M. Paul Essomba",
      role: "Directeur Administratif",
      image: "👨‍💼",
      description: "Spécialiste en gestion administrative des établissements scolaires."
    },
    {
      id: 4,
      name: "Mme. Christine Mballa",
      role: "Responsable Vie Scolaire",
      image: "👩‍🏫",
      description: "Psychologue scolaire, experte en accompagnement des élèves."
    }
  ];

  return (
    <Layout>
      {/* ============================================ */}
      {/* SECTION 1: HERO À PROPOS */}
      {/* ============================================ */}
  <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden pt-20">
  
  {/* Image de fond */}
  <div
    className="absolute inset-0 bg-cover bg-center bg-no-repeat"
    style={{
      backgroundImage: "url('/images/about-bg.png')",
    }}
  ></div>

  {/* Overlay sombre pour rendre le texte lisible */}
  <div className="absolute inset-0 bg-gradient-to-br from-navy/90 via-navy/75 to-turquoise/50"></div>

  {/* Contenu */}
  <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
    
    <span className="text-gold font-semibold text-sm tracking-wider uppercase">
      À propos
    </span>

    <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mt-4 mb-6">
      Qui sommes-nous ?
    </h1>

    <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto">
      Découvrez l'histoire, les valeurs et l'engagement de l'IPAM et du Groupe
      Scolaire Bilingue Ange & Léonce.
    </p>

  </div>
</section>

      {/* ============================================ */}
      {/* SECTION 2: HISTOIRE */}
      {/* ============================================ */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-gold font-semibold text-sm tracking-wider uppercase">Notre histoire</span>
              <h2 className="text-3xl md:text-4xl font-bold text-navy mt-2 mb-6">
                Une tradition d'excellence depuis 2005
              </h2>
              <div className="w-16 h-1 bg-gold mb-6"></div>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  L'Institut Privé Polyvalent des Arts et Métiers (IPAM) et le Groupe Scolaire Bilingue Ange & Léonce ont été fondés en 2005 avec une vision claire : offrir une éducation d'excellence aux enfants et jeunes du Cameroun.
                </p>
                <p>
                  Depuis sa création, l'établissement n'a cessé de croître et de se développer, passant d'une petite école à un groupe scolaire complet comprenant la maternelle, le primaire, le secondaire et la formation professionnelle.
                </p>
                <p>
                  Notre histoire est marquée par des générations d'élèves formés dans un cadre d'exception, qui ont réussi brillamment leurs examens et se sont distingués dans les universités et les entreprises.
                </p>
              </div>
              <div className="mt-6 flex gap-4">
                <div className="text-center">
                  <div className="text-3xl font-bold text-gold">20+</div>
                  <div className="text-sm text-gray-500">Années d'excellence</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-gold">1250+</div>
                  <div className="text-sm text-gray-500">Élèves formés</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-gold">98%</div>
                  <div className="text-sm text-gray-500">Taux de réussite</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1580582932707-520aed937b7b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="Histoire de l'établissement"
                  className="w-full h-96 object-cover"
                  onError={(e) => {
                    e.currentTarget.src = 'https://placehold.co/800x600/F8F6F0/D4AF37?text=Notre+Histoire';
                  }}
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gold/10 rounded-full blur-2xl"></div>
              <div className="absolute -top-6 -left-6 w-24 h-24 bg-turquoise/10 rounded-full blur-2xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================ */}
      {/* SECTION 3: MISSION - VISION - VALEURS */}
      {/* ============================================ */}
      <section className="py-20 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-gold font-semibold text-sm tracking-wider uppercase">Notre identité</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-navy mt-2 mb-4">
              Mission, Vision & Valeurs
            </h2>
            <div className="w-24 h-1 bg-gold mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Mission */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 text-center group">
              <div className="w-20 h-20 bg-gold/10 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-gold/20 transition-colors">
                <span className="text-4xl">🚀</span>
              </div>
              <h3 className="text-2xl font-bold text-navy mb-4">Notre Mission</h3>
              <p className="text-gray-600 leading-relaxed">
                Former des citoyens compétents, responsables et épanouis, capables de s'adapter aux défis du monde moderne tout en restant ancrés dans leurs valeurs.
              </p>
            </div>

            {/* Vision */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 text-center group">
              <div className="w-20 h-20 bg-turquoise/10 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-turquoise/20 transition-colors">
                <span className="text-4xl">🌟</span>
              </div>
              <h3 className="text-2xl font-bold text-navy mb-4">Notre Vision</h3>
              <p className="text-gray-600 leading-relaxed">
                Devenir le groupe scolaire de référence au Cameroun, reconnu pour son excellence académique, son innovation pédagogique et sa contribution au développement du pays.
              </p>
            </div>

            {/* Valeurs */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 text-center group">
              <div className="w-20 h-20 bg-navy/10 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-navy/20 transition-colors">
                <span className="text-4xl">💎</span>
              </div>
              <h3 className="text-2xl font-bold text-navy mb-4">Nos Valeurs</h3>
              <p className="text-gray-600 leading-relaxed">
                L'excellence, l'intégrité, l'innovation, l'ouverture au monde, l'humanisme et la discipline sont les piliers de notre engagement éducatif.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================ */}
      {/* SECTION 4: NOS VALEURS EN DÉTAIL */}
      {/* ============================================ */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-gold font-semibold text-sm tracking-wider uppercase">Nos piliers</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-navy mt-2 mb-4">
              Les valeurs qui nous animent
            </h2>
            <div className="w-24 h-1 bg-gold mx-auto"></div>
            <p className="text-gray-600 max-w-2xl mx-auto mt-4">
              Six valeurs fondamentales qui guident notre action au quotidien.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {valeurs.map((valeur) => (
              <div
                key={valeur.id}
                className="group bg-cream rounded-2xl p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className="text-5xl mb-4 group-hover:scale-110 transition-transform">{valeur.icon}</div>
                <h3 className="text-xl font-bold text-navy mb-3">{valeur.title}</h3>
                <p className="text-gray-600 leading-relaxed">{valeur.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================ */}
      {/* SECTION 5: MESSAGE DU DIRECTEUR */}
      {/* ============================================ */}
      <section className="py-20 bg-gradient-to-r from-navy to-navy/90 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
            <div className="lg:col-span-1 text-center">
              <div className="w-48 h-48 rounded-full bg-gold/20 border-4 border-gold/50 flex items-center justify-center mx-auto">
                <span className="text-7xl">👨‍🏫</span>
              </div>
              <h3 className="text-2xl font-bold mt-4">Dr. Jean Nguema</h3>
              <p className="text-gold text-sm">Directeur Général</p>
            </div>
            <div className="lg:col-span-2">
              <span className="text-gold font-semibold text-sm tracking-wider uppercase">Mot du directeur</span>
              <h2 className="text-3xl md:text-4xl font-bold text-white mt-2 mb-6">
                Un mot de bienvenue
              </h2>
              <div className="space-y-4 text-white/90 leading-relaxed">
                <p>
                  Chers parents, chers élèves, bienvenue à l'IPPAM et au Groupe Scolaire Bilingue Ange & Léonce.
                </p>
                <p>
                  Notre établissement est bien plus qu'une simple école. C'est une famille, un lieu d'épanouissement où chaque enfant est accompagné avec bienveillance et rigueur vers la réussite.
                </p>
                <p>
                  Nous croyons fermement que chaque élève est unique et possède des talents que nous nous engageons à révéler. Notre équipe pédagogique est dévouée à offrir un encadrement de qualité, dans un cadre moderne et sécurisé.
                </p>
                <p className="text-gold">
                  Ensemble, construisons l'avenir de nos enfants.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================ */}
      {/* SECTION 6: ÉQUIPE */}
      {/* ============================================ */}
      <section className="py-20 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-gold font-semibold text-sm tracking-wider uppercase">Notre équipe</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-navy mt-2 mb-4">
              Une équipe dévouée
            </h2>
            <div className="w-24 h-1 bg-gold mx-auto"></div>
            <p className="text-gray-600 max-w-2xl mx-auto mt-4">
              Des professionnels passionnés au service de la réussite de vos enfants.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {equipe.map((membre) => (
              <div
                key={membre.id}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 text-center group"
              >
                <div className="bg-gradient-to-b from-navy/5 to-transparent p-6">
                  <div className="w-32 h-32 rounded-full bg-cream mx-auto flex items-center justify-center text-6xl group-hover:scale-110 transition-transform border-4 border-gold/20">
                    {membre.image}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-navy">{membre.name}</h3>
                  <p className="text-gold text-sm font-semibold mb-2">{membre.role}</p>
                  <p className="text-gray-600 text-sm">{membre.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================ */}
      {/* SECTION 7: CHIFFRES CLÉS */}
      {/* ============================================ */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-gold font-semibold text-sm tracking-wider uppercase">Notre impact</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-navy mt-2 mb-4">
              IPAM & Ange & Léonce en chiffres
            </h2>
            <div className="w-24 h-1 bg-gold mx-auto"></div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="p-6 rounded-2xl bg-cream hover:shadow-xl transition-shadow">
              <div className="text-4xl md:text-5xl font-bold text-gold mb-2">2005</div>
              <div className="text-sm uppercase tracking-wider text-gray-600">Année de création</div>
            </div>
            <div className="p-6 rounded-2xl bg-cream hover:shadow-xl transition-shadow">
              <div className="text-4xl md:text-5xl font-bold text-gold mb-2">1250+</div>
              <div className="text-sm uppercase tracking-wider text-gray-600">Élèves formés</div>
            </div>
            <div className="p-6 rounded-2xl bg-cream hover:shadow-xl transition-shadow">
              <div className="text-4xl md:text-5xl font-bold text-gold mb-2">85+</div>
              <div className="text-sm uppercase tracking-wider text-gray-600">Enseignants qualifiés</div>
            </div>
            <div className="p-6 rounded-2xl bg-cream hover:shadow-xl transition-shadow">
              <div className="text-4xl md:text-5xl font-bold text-gold mb-2">98%</div>
              <div className="text-sm uppercase tracking-wider text-gray-600">Taux de réussite</div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;