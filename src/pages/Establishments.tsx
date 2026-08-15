import Layout from '../components/layout/Layout';
import { Link } from 'react-router-dom';

const Establishments = () => {
  // Données des établissements
  const etablissements = [
    {
      id: 1,
      name: "IPAM",
      fullName: "Institut Privé Polyvalent des Arts et Métiers",
      founded: 2005,
      levels: ["Formation Professionnelle", "BTS", "Licence", "Master"],
      description: "L'IPPAM est un institut de formation professionnelle et supérieure qui prépare les jeunes aux métiers d'avenir dans les domaines des arts, des métiers et des technologies.",
      image: "https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      icon: "🏛️",
      color: "from-gold/20 to-gold/5",
      borderColor: "border-gold",
      stats: {
        formations: 15,
        etudiants: 450,
        tauxReussite: 96,
        diplomes: 850
      },
      programmes: [
        "Gestion des Entreprises",
        "Informatique et Technologies",
        "Art et Design",
        "Bâtiment et Travaux Publics",
        "Hôtellerie et Tourisme"
      ]
    },
    {
      id: 2,
      name: "Groupe Scolaire Bilingue Ange & Léonce",
      fullName: "Groupe Scolaire Bilingue Ange & Léonce",
      founded: 2005,
      levels: ["Maternelle", "Primaire", "Secondaire Général", "Secondaire Technique"],
      description: "Le Groupe Scolaire Bilingue Ange & Léonce offre un enseignement de qualité de la maternelle au secondaire, avec un accent particulier sur le bilinguisme et l'excellence académique.",
      image: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      icon: "🏫",
      color: "from-turquoise/20 to-turquoise/5",
      borderColor: "border-turquoise",
      stats: {
        niveaux: 15,
        eleves: 800,
        tauxReussite: 98,
        enseignants: 65
      },
      programmes: [
        "Enseignement Général",
        "Enseignement Technique",
        "Bilinguisme Français-Anglais",
        "Activités Sportives",
        "Arts et Culture"
      ]
    }
  ];

  // Données des infrastructures communes
  const infrastructures = [
    { id: 1, icon: "📚", name: "Bibliothèques", description: "Plus de 10 000 ouvrages disponibles" },
    { id: 2, icon: "💻", name: "Salles Informatiques", description: "Équipées en matériel récent" },
    { id: 3, icon: "🔬", name: "Laboratoires", description: "Sciences et technologies" },
    { id: 4, icon: "🏫", name: "Salles de Classe", description: "Modernes et équipées" },
    { id: 5, icon: "⚽", name: "Terrains de Sport", description: "Football, basket, volley" },
    { id: 6, icon: "🌳", name: "Espaces Verts", description: "Cadre de vie agréable" },
    { id: 7, icon: "🎭", name: "Salle Polyvalente", description: "Théâtre, conférences, cérémonies" },
    { id: 8, icon: "🛡️", name: "Sécurité 24/7", description: "Vidéo surveillance et gardiens" }
  ];

  // Données des filières IPPAM
  const filieresIPPAM = [
    { id: 1, name: "Gestion des Entreprises", level: "Licence/Master", icon: "📊" },
    { id: 2, name: "Informatique et Technologies", level: "Licence/Master", icon: "💻" },
    { id: 3, name: "Art et Design", level: "Licence", icon: "🎨" },
    { id: 4, name: "Bâtiment et Travaux Publics", level: "BTS", icon: "🏗️" },
    { id: 5, name: "Hôtellerie et Tourisme", level: "BTS", icon: "🏨" }
  ];

  // Données des niveaux du Groupe Scolaire
  const niveauxGS = [
    { id: 1, name: "Maternelle", age: "3 - 5 ans", icon: "🧒" },
    { id: 2, name: "Primaire", age: "6 - 11 ans", icon: "📚" },
    { id: 3, name: "Secondaire Général", age: "12 - 18 ans", icon: "🎓" },
    { id: 4, name: "Secondaire Technique", age: "12 - 18 ans", icon: "⚙️" }
  ];

  return (
    <Layout>
      {/* ============================================ */}
      {/* SECTION 1: HERO NOS ÉTABLISSEMENTS */}
      {/* ============================================ */}
      <section className="relative min-h-[55vh] flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 bg-linear-to-br from-navy/90 via-navy/80 to-turquoise/40">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1580582932707-520aed937b7b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')] bg-cover bg-center opacity-20"></div>
        </div>
        
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <span className="text-gold font-semibold text-sm tracking-wider uppercase">Nos établissements</span>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mt-4 mb-6">
            Deux écoles, une vision
          </h1>
          <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto">
            Découvrez l'IPAM et le Groupe Scolaire Bilingue Ange & Léonce, 
            deux établissements complémentaires au service de l'excellence éducative.
          </p>
        </div>
      </section>

      {/* ============================================ */}
      {/* SECTION 2: PRÉSENTATION IPPAM */}
      {/* ============================================ */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <span className="text-gold font-semibold text-sm tracking-wider uppercase">Formation supérieure</span>
              <h2 className="text-3xl md:text-4xl font-bold text-navy mt-2 mb-4">
                {etablissements[0].name}
              </h2>
              <p className="text-gold font-medium text-sm mb-4">{etablissements[0].fullName}</p>
              <div className="w-16 h-1 bg-gold mb-6"></div>
              <p className="text-gray-600 leading-relaxed mb-6">
                {etablissements[0].description}
              </p>
              
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="bg-cream rounded-xl p-4 text-center">
                  <div className="text-2xl font-bold text-gold">{etablissements[0].stats.formations}+</div>
                  <div className="text-xs text-gray-500">Formations</div>
                </div>
                <div className="bg-cream rounded-xl p-4 text-center">
                  <div className="text-2xl font-bold text-gold">{etablissements[0].stats.etudiants}+</div>
                  <div className="text-xs text-gray-500">Étudiants</div>
                </div>
                <div className="bg-cream rounded-xl p-4 text-center">
                  <div className="text-2xl font-bold text-gold">{etablissements[0].stats.tauxReussite}%</div>
                  <div className="text-xs text-gray-500">Taux de réussite</div>
                </div>
                <div className="bg-cream rounded-xl p-4 text-center">
                  <div className="text-2xl font-bold text-gold">{etablissements[0].stats.diplomes}+</div>
                  <div className="text-xs text-gray-500">Diplômés</div>
                </div>
              </div>

              <div className="flex flex-wrap gap-2">
                {etablissements[0].programmes.map((prog, index) => (
                  <span key={index} className="px-3 py-1 bg-gold/10 text-gold text-xs font-semibold rounded-full">
                    {prog}
                  </span>
                ))}
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src={etablissements[0].image}
                  alt={etablissements[0].name}
                  className="w-full h-96 object-cover"
                  onError={(e) => {
                    e.currentTarget.src = 'https://placehold.co/800x600/F8F6F0/D4AF37?text=IPPAM';
                  }}
                />
                <div className="absolute top-4 right-4 bg-gold text-navy px-4 py-2 rounded-full font-bold text-sm">
                  {etablissements[0].icon}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================ */}
      {/* SECTION 3: FILIÈRES IPPAM */}
      {/* ============================================ */}
      <section className="py-20 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold text-navy mb-2">
              Nos filières à l'IPAM
            </h3>
            <div className="w-16 h-1 bg-gold mx-auto"></div>
            <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
              Des formations professionnelles et supérieures adaptées aux besoins du marché.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {filieresIPPAM.map((filiere) => (
              <div
                key={filiere.id}
                className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex items-center gap-4"
              >
                <div className="text-3xl">{filiere.icon}</div>
                <div>
                  <h4 className="font-semibold text-navy">{filiere.name}</h4>
                  <p className="text-gold text-xs font-medium">{filiere.level}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================ */}
      {/* SECTION 4: PRÉSENTATION GROUPE SCOLAIRE */}
      {/* ============================================ */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src={etablissements[1].image}
                  alt={etablissements[1].name}
                  className="w-full h-96 object-cover"
                  onError={(e) => {
                    e.currentTarget.src = 'https://placehold.co/800x600/F8F6F0/D4AF37?text=Groupe+Scolaire';
                  }}
                />
                <div className="absolute top-4 right-4 bg-turquoise text-white px-4 py-2 rounded-full font-bold text-sm">
                  {etablissements[1].icon}
                </div>
              </div>
            </div>

            <div>
              <span className="text-turquoise font-semibold text-sm tracking-wider uppercase">Enseignement général</span>
              <h2 className="text-3xl md:text-4xl font-bold text-navy mt-2 mb-4">
                {etablissements[1].name}
              </h2>
              <p className="text-turquoise font-medium text-sm mb-4">{etablissements[1].fullName}</p>
              <div className="w-16 h-1 bg-turquoise mb-6"></div>
              <p className="text-gray-600 leading-relaxed mb-6">
                {etablissements[1].description}
              </p>
              
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="bg-cream rounded-xl p-4 text-center">
                  <div className="text-2xl font-bold text-turquoise">{etablissements[1].stats.niveaux}+</div>
                  <div className="text-xs text-gray-500">Niveaux d'enseignement</div>
                </div>
                <div className="bg-cream rounded-xl p-4 text-center">
                  <div className="text-2xl font-bold text-turquoise">{etablissements[1].stats.eleves}+</div>
                  <div className="text-xs text-gray-500">Élèves</div>
                </div>
                <div className="bg-cream rounded-xl p-4 text-center">
                  <div className="text-2xl font-bold text-turquoise">{etablissements[1].stats.tauxReussite}%</div>
                  <div className="text-xs text-gray-500">Taux de réussite</div>
                </div>
                <div className="bg-cream rounded-xl p-4 text-center">
                  <div className="text-2xl font-bold text-turquoise">{etablissements[1].stats.enseignants}+</div>
                  <div className="text-xs text-gray-500">Enseignants</div>
                </div>
              </div>

              <div className="flex flex-wrap gap-2">
                {etablissements[1].programmes.map((prog, index) => (
                  <span key={index} className="px-3 py-1 bg-turquoise/10 text-turquoise text-xs font-semibold rounded-full">
                    {prog}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================ */}
      {/* SECTION 5: NIVEAUX GROUPE SCOLAIRE */}
      {/* ============================================ */}
      <section className="py-20 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold text-navy mb-2">
              Nos niveaux d'enseignement
            </h3>
            <div className="w-16 h-1 bg-turquoise mx-auto"></div>
            <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
              Un parcours continu de la maternelle au secondaire.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {niveauxGS.map((niveau) => (
              <div
                key={niveau.id}
                className="bg-white rounded-2xl p-8 text-center shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group"
              >
                <div className="text-6xl mb-4 group-hover:scale-110 transition-transform">{niveau.icon}</div>
                <h4 className="text-xl font-bold text-navy mb-2">{niveau.name}</h4>
                <p className="text-gray-500 text-sm">{niveau.age}</p>
                <div className="mt-4 w-12 h-1 bg-turquoise mx-auto"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================ */}
      {/* SECTION 6: INFRASTRUCTURES COMMUNES */}
      {/* ============================================ */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-gold font-semibold text-sm tracking-wider uppercase">Infrastructures</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-navy mt-2 mb-4">
              Des équipements modernes pour tous
            </h2>
            <div className="w-24 h-1 bg-gold mx-auto"></div>
            <p className="text-gray-600 max-w-2xl mx-auto mt-4">
              Nos deux établissements partagent des infrastructures de qualité.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {infrastructures.map((infra) => (
              <div
                key={infra.id}
                className="group bg-cream rounded-xl p-6 text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="text-4xl mb-3 group-hover:scale-110 transition-transform">{infra.icon}</div>
                <h3 className="font-bold text-navy text-sm">{infra.name}</h3>
                <p className="text-gray-500 text-xs mt-1">{infra.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================ */}
      {/* SECTION 7: POURQUOI NOUS CHOISIR */}
      {/* ============================================ */}
      <section className="py-20 bg-linear-to-r from-navy to-navy/90 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-gold font-semibold text-sm tracking-wider uppercase">Pourquoi nous choisir</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mt-2 mb-4">
              Les atouts de nos établissements
            </h2>
            <div className="w-24 h-1 bg-gold mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 text-center hover:bg-white/10 transition-colors">
              <div className="text-5xl mb-4">🎓</div>
              <h3 className="text-xl font-bold text-white mb-2">Excellence Académique</h3>
              <p className="text-white/70">Des résultats exceptionnels aux examens nationaux et internationaux.</p>
            </div>
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 text-center hover:bg-white/10 transition-colors">
              <div className="text-5xl mb-4">🌍</div>
              <h3 className="text-xl font-bold text-white mb-2">Enseignement Bilingue</h3>
              <p className="text-white/70">Une maîtrise parfaite du français et de l'anglais.</p>
            </div>
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 text-center hover:bg-white/10 transition-colors">
              <div className="text-5xl mb-4">🏗️</div>
              <h3 className="text-xl font-bold text-white mb-2">Infrastructures Modernes</h3>
              <p className="text-white/70">Des équipements de qualité pour un apprentissage optimal.</p>
            </div>
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 text-center hover:bg-white/10 transition-colors">
              <div className="text-5xl mb-4">👨‍🏫</div>
              <h3 className="text-xl font-bold text-white mb-2">Enseignants Qualifiés</h3>
              <p className="text-white/70">Une équipe pédagogique expérimentée et passionnée.</p>
            </div>
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 text-center hover:bg-white/10 transition-colors">
              <div className="text-5xl mb-4">🎯</div>
              <h3 className="text-xl font-bold text-white mb-2">Encadrement Personnalisé</h3>
              <p className="text-white/70">Un suivi individualisé pour chaque élève.</p>
            </div>
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 text-center hover:bg-white/10 transition-colors">
              <div className="text-5xl mb-4">🛡️</div>
              <h3 className="text-xl font-bold text-white mb-2">Cadre Sécurisé</h3>
              <p className="text-white/70">Un environnement sûr et propice à l'apprentissage.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================ */}
      {/* SECTION 8: APPEL À L'ACTION */}
      {/* ============================================ */}
      <section className="py-20 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-navy to-navy/90 p-12 md:p-16 text-center">
            <div className="absolute top-0 right-0 w-64 h-64 bg-gold/5 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-turquoise/5 rounded-full blur-3xl"></div>
            
            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Rejoignez nos établissements
              </h2>
              <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">
                Inscrivez votre enfant dès maintenant dans l'un de nos établissements 
                pour lui offrir une éducation d'excellence.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                {/* Bouton Formulaire d'inscription - Redirige vers /inscription */}
                <Link to="/inscription">
                  <button className="bg-gold text-navy px-8 py-3 rounded-full font-semibold hover:bg-gold/90 transition-all hover:scale-105 w-full sm:w-auto">
                    Formulaire d'inscription
                  </button>
                </Link>
                
                {/* Bouton Nous contacter - Redirige vers /contact */}
                <Link to="/contact">
                  <button className="bg-transparent border-2 border-white/50 text-white px-8 py-3 rounded-full font-semibold hover:border-gold hover:text-gold transition-all w-full sm:w-auto">
                    Nous contacter
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Establishments;