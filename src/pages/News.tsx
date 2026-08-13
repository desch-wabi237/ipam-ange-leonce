import { useState } from 'react';
import Layout from '../components/layout/Layout';

const News = () => {
  // État pour le filtre et la pagination
  const [activeFilter, setActiveFilter] = useState('all');
  const [visibleCount, setVisibleCount] = useState(6);

  // Catégories
  const categories = [
    { id: 'all', name: 'Toutes', icon: '📰' },
    { id: 'evenement', name: 'Événements', icon: '🎉' },
    { id: 'resultats', name: 'Résultats', icon: '🎓' },
    { id: 'inscriptions', name: 'Inscriptions', icon: '📝' },
    { id: 'partenariat', name: 'Partenariats', icon: '🤝' },
    { id: 'annonce', name: 'Annonces', icon: '📢' }
  ];

  // Données des actualités
  const allNews = [
    {
      id: 1,
      title: "Journée portes ouvertes 2026",
      category: "evenement",
      date: "15 Juin 2026",
      author: "Direction",
      image: "https://images.unsplash.com/photo-1571260899304-425eee4c7efc?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      excerpt: "Venez découvrir nos établissements et rencontrer notre équipe pédagogique. Une occasion unique de visiter nos infrastructures et d'échanger avec nos enseignants.",
      content: "L'IPPAM et le Groupe Scolaire Bilingue Ange & Léonce organisent leur journée portes ouvertes annuelle. Au programme : visites guidées des établissements, rencontres avec les enseignants, démonstrations pédagogiques, ateliers pour les enfants et informations sur les inscriptions. Venez nombreux découvrir notre cadre d'exception !",
      tags: ["Portes ouvertes", "Visite", "Inscriptions"]
    },
    {
      id: 2,
      title: "Excellents résultats au BAC 2025",
      category: "resultats",
      date: "10 Juillet 2025",
      author: "Direction Pédagogique",
      image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      excerpt: "98% de réussite avec 15 mentions Très Bien et 25 mentions Bien. Une performance exceptionnelle qui témoigne de la qualité de notre enseignement.",
      content: "Nous sommes fiers d'annoncer les excellents résultats obtenus par nos élèves aux examens du BAC 2025. Avec un taux de réussite de 98%, notre établissement se distingue une fois de plus par la qualité de son enseignement. Félicitations à tous nos lauréats et à l'ensemble de l'équipe pédagogique pour ce remarquable travail.",
      tags: ["BAC", "Réussite", "Mentions"]
    },
    {
      id: 3,
      title: "Inscriptions 2026-2027 ouvertes",
      category: "inscriptions",
      date: "1er Août 2025",
      author: "Service Scolarité",
      image: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      excerpt: "Les inscriptions pour la nouvelle année scolaire sont désormais ouvertes. Inscrivez votre enfant dès maintenant.",
      content: "Les inscriptions pour l'année scolaire 2026-2027 sont officiellement ouvertes. Nous accueillons les élèves de la maternelle à la terminale, ainsi que les étudiants en formation professionnelle. Des facilités de paiement et des bourses sont disponibles pour les familles méritantes. Rendez-vous au secrétariat pour retirer votre dossier d'inscription.",
      tags: ["Inscriptions", "Rentrée", "Dossiers"]
    },
    {
      id: 4,
      title: "Nouveau partenariat avec l'Université de Yaoundé",
      category: "partenariat",
      date: "5 Mars 2025",
      author: "Direction",
      image: "https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      excerpt: "Signature d'une convention de partenariat pour faciliter l'accès à l'enseignement supérieur.",
      content: "Nous avons le plaisir d'annoncer la signature d'une convention de partenariat avec l'Université de Yaoundé. Ce partenariat permettra à nos élèves de bénéficier d'un accompagnement privilégié pour leur orientation et leur admission dans les filières supérieures. Des conférences et des ateliers seront organisés tout au long de l'année.",
      tags: ["Partenariat", "Université", "Orientation"]
    },
    {
      id: 5,
      title: "Journée internationale des droits de l'enfant",
      category: "evenement",
      date: "20 Novembre 2025",
      author: "Vie Scolaire",
      image: "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      excerpt: "Une journée de sensibilisation et d'activités autour des droits des enfants.",
      content: "À l'occasion de la Journée internationale des droits de l'enfant, notre établissement a organisé une série d'activités de sensibilisation. Ateliers, conférences et animations ont permis à nos élèves de mieux comprendre leurs droits et leurs devoirs. Un moment fort de partage et d'apprentissage.",
      tags: ["Droits de l'enfant", "Sensibilisation", "Éducation"]
    },
    {
      id: 6,
      title: "Olympiades sportives inter-écoles",
      category: "evenement",
      date: "15 Mai 2025",
      author: "Service Sportif",
      image: "https://images.unsplash.com/photo-1517466787929-bc90951d0974?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      excerpt: "Nos élèves ont brillé lors des olympiades sportives inter-écoles.",
      content: "Nos élèves ont participé avec brio aux olympiades sportives inter-écoles organisées à Yaoundé. Ils ont remporté plusieurs médailles en football, basket-ball et athlétisme. Cette compétition a été l'occasion de mettre en valeur les talents sportifs de nos élèves et de renforcer l'esprit d'équipe.",
      tags: ["Sport", "Olympiades", "Compétition"]
    },
    {
      id: 7,
      title: "Nouveau programme de soutien scolaire",
      category: "annonce",
      date: "10 Janvier 2025",
      author: "Direction Pédagogique",
      image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      excerpt: "Un nouveau programme de soutien scolaire est mis en place pour accompagner nos élèves.",
      content: "Nous mettons en place un nouveau programme de soutien scolaire pour accompagner nos élèves dans leur apprentissage. Des cours de renforcement en mathématiques, français et anglais seront proposés, ainsi qu'un accompagnement personnalisé pour les élèves en difficulté. Un dispositif complet pour assurer la réussite de tous.",
      tags: ["Soutien", "Apprentissage", "Réussite"]
    },
    {
      id: 8,
      title: "Remise des diplômes de la promotion 2025",
      category: "evenement",
      date: "30 Juin 2025",
      author: "Direction",
      image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      excerpt: "Une cérémonie solennelle pour célébrer la réussite de nos diplômés.",
      content: "La cérémonie de remise des diplômes de la promotion 2025 s'est déroulée en présence des autorités éducatives, des enseignants et des familles. Nos diplômés ont été félicités pour leur parcours exemplaire et invités à poursuivre leur chemin vers l'excellence.",
      tags: ["Diplômes", "Cérémonie", "Promotion"]
    },
    {
      id: 9,
      title: "Partenariat avec le British Council",
      category: "partenariat",
      date: "20 Février 2025",
      author: "Direction",
      image: "https://images.unsplash.com/photo-1571260899304-425eee4c7efc?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      excerpt: "Un nouveau partenariat pour renforcer l'enseignement de l'anglais.",
      content: "Nous avons signé un partenariat avec le British Council pour renforcer l'enseignement de l'anglais dans notre établissement. Ce partenariat permettra à nos élèves de bénéficier de ressources pédagogiques de qualité et de participer à des programmes d'échange.",
      tags: ["Anglais", "Partenariat", "British Council"]
    }
  ];

  // Filtrer les actualités
  const filteredNews = activeFilter === 'all' 
    ? allNews 
    : allNews.filter(news => news.category === activeFilter);

  // Actualités visibles (pagination)
  const visibleNews = filteredNews.slice(0, visibleCount);

  // Charger plus d'actualités
  const loadMore = () => {
    setVisibleCount(prev => prev + 3);
  };

  // Fonction pour obtenir la couleur de la catégorie
  const getCategoryColor = (category: string) => {
    const colors: Record<string, string> = {
      evenement: 'bg-gold/10 text-gold',
      resultats: 'bg-turquoise/10 text-turquoise',
      inscriptions: 'bg-navy/10 text-navy',
      partenariat: 'bg-purple-100 text-purple-600',
      annonce: 'bg-orange-100 text-orange-600'
    };
    return colors[category] || 'bg-gray-100 text-gray-600';
  };

  // Fonction pour obtenir l'icône de la catégorie
  const getCategoryIcon = (category: string) => {
    const icons: Record<string, string> = {
      evenement: '🎉',
      resultats: '🎓',
      inscriptions: '📝',
      partenariat: '🤝',
      annonce: '📢'
    };
    return icons[category] || '📰';
  };

  return (
    <Layout>
      {/* ============================================ */}
      {/* SECTION 1: HERO ACTUALITÉS */}
      {/* ============================================ */}
      <section className="relative min-h-[50vh] flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 bg-gradient-to-br from-navy/90 via-navy/80 to-turquoise/40">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')] bg-cover bg-center opacity-20"></div>
        </div>
        
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <span className="text-gold font-semibold text-sm tracking-wider uppercase">Actualités</span>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mt-4 mb-6">
            Toutes les nouvelles
          </h1>
          <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto">
            Restez informés des événements et des résultats de notre établissement.
          </p>
        </div>
      </section>

      {/* ============================================ */}
      {/* SECTION 2: FILTRES ET RECHERCHE */}
      {/* ============================================ */}
      <section className="py-8 bg-white border-b border-gray-100 sticky top-20 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-between gap-4">
            {/* Filtres */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => {
                    setActiveFilter(category.id);
                    setVisibleCount(6);
                  }}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    activeFilter === category.id
                      ? 'bg-gold text-navy shadow-lg scale-105'
                      : 'bg-cream text-gray-600 hover:bg-gold/10 hover:text-gold'
                  }`}
                >
                  <span className="mr-1">{category.icon}</span>
                  {category.name}
                </button>
              ))}
            </div>

            {/* Résultats */}
            <div className="text-sm text-gray-500">
              {filteredNews.length} article{filteredNews.length > 1 ? 's' : ''}
            </div>
          </div>
        </div>
      </section>

      {/* ============================================ */}
      {/* SECTION 3: GRILLE ACTUALITÉS */}
      {/* ============================================ */}
      <section className="py-16 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Message si aucun résultat */}
          {filteredNews.length === 0 ? (
            <div className="text-center py-12">
              <div className="text-6xl mb-4">📭</div>
              <h3 className="text-xl font-bold text-navy mb-2">Aucune actualité</h3>
              <p className="text-gray-500">Aucune actualité disponible dans cette catégorie.</p>
            </div>
          ) : (
            <>
              {/* Grille */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {visibleNews.map((news) => (
                  <div
                    key={news.id}
                    className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
                  >
                    {/* Image */}
                    <div className="relative h-56 overflow-hidden">
                      <img 
                        src={news.image}
                        alt={news.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        onError={(e) => {
                          e.currentTarget.src = `https://placehold.co/800x400/F8F6F0/D4AF37?text=${encodeURIComponent(news.title)}`;
                        }}
                      />
                      {/* Overlay gradient */}
                      <div className="absolute inset-0 bg-gradient-to-t from-navy/60 via-transparent to-transparent"></div>
                      
                      {/* Badge catégorie */}
                      <div className="absolute top-4 left-4">
                        <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getCategoryColor(news.category)}`}>
                          {getCategoryIcon(news.category)} {categories.find(c => c.id === news.category)?.name}
                        </span>
                      </div>
                      
                      {/* Date */}
                      <div className="absolute bottom-4 right-4 bg-black/50 backdrop-blur-sm px-3 py-1 rounded-lg">
                        <span className="text-white text-xs font-medium">{news.date}</span>
                      </div>
                    </div>

                    {/* Contenu */}
                    <div className="p-6">
                      <div className="flex items-center gap-2 text-xs text-gray-400 mb-2">
                        <span>👤 {news.author}</span>
                        <span>•</span>
                        <span>📅 {news.date}</span>
                      </div>
                      
                      <h3 className="text-xl font-bold text-navy mb-2 group-hover:text-gold transition-colors">
                        {news.title}
                      </h3>
                      
                      <p className="text-gray-600 text-sm leading-relaxed mb-4">
                        {news.excerpt}
                      </p>
                      
                      {/* Tags */}
                      <div className="flex flex-wrap gap-2 mb-4">
                        {news.tags.map((tag, index) => (
                          <span key={index} className="px-2 py-1 bg-cream text-gray-500 text-xs rounded-full">
                            #{tag}
                          </span>
                        ))}
                      </div>
                      
                      {/* Bouton Lire la suite */}
                      <button className="text-gold font-semibold text-sm hover:underline transition-all flex items-center gap-1 group-hover:gap-2">
                        Lire la suite 
                        <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              {/* Bouton Charger plus */}
              {visibleCount < filteredNews.length && (
                <div className="text-center mt-12">
                  <button
                    onClick={loadMore}
                    className="group relative overflow-hidden bg-gold text-navy px-8 py-3 rounded-full font-semibold transition-all duration-300 hover:scale-105 hover:shadow-xl"
                  >
                    <span className="relative z-10">Charger plus d'actualités</span>
                    <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
                  </button>
                </div>
              )}

              {/* Indicateur de fin */}
              {visibleCount >= filteredNews.length && filteredNews.length > 0 && (
                <div className="text-center mt-12 text-gray-400 text-sm">
                  <span>🎯 Vous avez vu toutes les actualités</span>
                </div>
              )}
            </>
          )}
        </div>
      </section>

      {/* ============================================ */}
      {/* SECTION 4: NEWSLETTER */}
      {/* ============================================ */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-navy mb-2">
            Restez informés
          </h2>
          <p className="text-gray-500 mb-6">
            Recevez nos actualités directement dans votre boîte mail.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Votre adresse email"
              className="flex-1 px-4 py-3 rounded-full border-2 border-gray-200 focus:border-gold focus:outline-none transition-colors"
            />
            <button className="bg-gold text-navy px-6 py-3 rounded-full font-semibold hover:bg-gold/90 transition-all hover:scale-105">
              S'abonner
            </button>
          </div>
        </div>
      </section>

      {/* ============================================ */}
      {/* SECTION 5: ACTUALITÉS À LA UNE */}
      {/* ============================================ */}
      {filteredNews.length > 0 && (
        <section className="py-16 bg-gradient-to-r from-navy to-navy/90 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              À la une
            </h2>
            <p className="text-white/80 text-lg mb-6 max-w-2xl mx-auto">
              {filteredNews[0].title}
            </p>
            <p className="text-white/60 text-sm max-w-xl mx-auto">
              {filteredNews[0].excerpt}
            </p>
            <button className="mt-6 bg-gold text-navy px-8 py-2 rounded-full font-semibold hover:bg-gold/90 transition-all hover:scale-105">
              Lire l'article
            </button>
          </div>
        </section>
      )}
    </Layout>
  );
};

export default News;