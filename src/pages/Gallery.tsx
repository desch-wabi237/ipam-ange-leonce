import { useState } from 'react';
import Layout from '../components/layout/Layout';

const Gallery = () => {
  // État pour le filtre actif
  const [activeFilter, setActiveFilter] = useState('all');

  // Catégories de la galerie
  const categories = [
    { id: 'all', name: 'Tout voir', icon: '📸' },
    { id: 'classes', name: 'Classes', icon: '🏫' },
    { id: 'activities', name: 'Activités', icon: '⚽' },
    { id: 'staff', name: 'Personnel', icon: '👨‍🏫' },
    { id: 'events', name: 'Événements', icon: '🎉' },
    { id: 'infrastructure', name: 'Infrastructures', icon: '🏗️' }
  ];

  // Données de la galerie
  const galleryItems = [
    // Classes
    {
      id: 1,
      category: 'classes',
      title: 'Salle de classe maternelle',
      description: 'Un espace coloré et adapté aux tout-petits',
      image: 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      date: '2025'
    },
    {
      id: 2,
      category: 'classes',
      title: 'Salle de classe primaire',
      description: 'Un environnement propice à l\'apprentissage',
      image: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      date: '2025'
    },
    {
      id: 3,
      category: 'classes',
      title: 'Salle de classe secondaire',
      description: 'Des équipements modernes pour les grands',
      image: 'https://images.unsplash.com/photo-1571260899304-425eee4c7efc?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      date: '2025'
    },

    // Activités
    {
      id: 4,
      category: 'activities',
      title: 'Journée sportive',
      description: 'Les élèves en pleine activité sportive',
      image: 'https://images.unsplash.com/photo-1517466787929-bc90951d0974?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      date: '2025'
    },
    {
      id: 5,
      category: 'activities',
      title: 'Activités culturelles',
      description: 'Célébration de la diversité culturelle',
      image: 'https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      date: '2025'
    },
    {
      id: 6,
      category: 'activities',
      title: 'Sortie pédagogique',
      description: 'Découverte et apprentissage hors des murs',
      image: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      date: '2025'
    },

    // Personnel
    {
      id: 7,
      category: 'staff',
      title: 'Équipe pédagogique',
      description: 'Des enseignants dévoués et passionnés',
      image: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      date: '2025'
    },
    {
      id: 8,
      category: 'staff',
      title: 'Direction de l\'établissement',
      description: 'Une équipe de direction expérimentée',
      image: 'https://images.unsplash.com/photo-1577962917302-cd874c4e31d2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      date: '2025'
    },
    {
      id: 9,
      category: 'staff',
      title: 'Personnel administratif',
      description: 'Une équipe au service des élèves et des parents',
      image: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      date: '2025'
    },

    // Événements
    {
      id: 10,
      category: 'events',
      title: 'Remise des diplômes',
      description: 'Célébration des réussites de nos élèves',
      image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      date: '2025'
    },
    {
      id: 11,
      category: 'events',
      title: 'Journée portes ouvertes',
      description: 'Accueil des familles et visite de l\'établissement',
      image: 'https://images.unsplash.com/photo-1571260899304-425eee4c7efc?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      date: '2025'
    },
    {
      id: 12,
      category: 'events',
      title: 'Cérémonie de rentrée',
      description: 'Un nouveau départ prometteur',
      image: 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      date: '2025'
    },

    // Infrastructures
    {
      id: 13,
      category: 'infrastructure',
      title: 'Bibliothèque',
      description: 'Un espace dédié à la culture et à la lecture',
      image: 'https://images.unsplash.com/photo-1571260899304-425eee4c7efc?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      date: '2025'
    },
    {
      id: 14,
      category: 'infrastructure',
      title: 'Laboratoire de sciences',
      description: 'Des équipements modernes pour l\'expérimentation',
      image: 'https://images.unsplash.com/photo-1574958269340-fa927503f3dd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      date: '2025'
    },
    {
      id: 15,
      category: 'infrastructure',
      title: 'Terrain de sport',
      description: 'Un espace pour l\'épanouissement physique',
      image: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      date: '2025'
    }
  ];

  // Filtrer les éléments selon la catégorie active
  const filteredItems = activeFilter === 'all' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeFilter);

  return (
    <Layout>
      {/* ============================================ */}
      {/* SECTION 1: HERO GALERIE */}
      {/* ============================================ */}
      <section className="relative min-h-[50vh] flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 bg-gradient-to-br from-navy/90 via-navy/80 to-turquoise/40">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')] bg-cover bg-center opacity-20"></div>
        </div>
        
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <span className="text-gold font-semibold text-sm tracking-wider uppercase">Galerie</span>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mt-4 mb-6">
            Nos moments en images
          </h1>
          <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto">
            Découvrez notre établissement à travers nos photos.
          </p>
        </div>
      </section>

      {/* ============================================ */}
      {/* SECTION 2: FILTRES */}
      {/* ============================================ */}
      <section className="py-8 bg-white border-b border-gray-100 sticky top-20 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-2 sm:gap-3">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveFilter(category.id)}
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
        </div>
      </section>

      {/* ============================================ */}
      {/* SECTION 3: GRILLE GALERIE */}
      {/* ============================================ */}
      <section className="py-16 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Nombre de résultats */}
          <div className="text-center mb-8">
            <p className="text-gray-500 text-sm">
              {filteredItems.length} {filteredItems.length > 1 ? 'photos' : 'photo'} 
              {activeFilter !== 'all' && ` dans la catégorie "${categories.find(c => c.id === activeFilter)?.name}"`}
            </p>
          </div>

          {/* Grille d'images */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredItems.map((item) => (
              <div
                key={item.id}
                className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
              >
                {/* Image */}
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    onError={(e) => {
                      e.currentTarget.src = `https://placehold.co/600x400/F8F6F0/D4AF37?text=${encodeURIComponent(item.title)}`;
                    }}
                  />
                  
                  {/* Overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-navy/80 via-navy/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  {/* Catégorie badge */}
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-gold/90 text-navy text-xs font-semibold rounded-full backdrop-blur-sm">
                      {categories.find(c => c.id === item.category)?.name}
                    </span>
                  </div>
                </div>

                {/* Informations */}
                <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
                  <h3 className="text-white text-lg font-bold mb-1">{item.title}</h3>
                  <p className="text-white/80 text-sm">{item.description}</p>
                  <p className="text-gold text-xs mt-2">{item.date}</p>
                </div>

                {/* Bouton zoom */}
                <button className="absolute top-4 right-4 w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-gold/30">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m3-3H7" />
                  </svg>
                </button>
              </div>
            ))}
          </div>

          {/* Message si aucun résultat */}
          {filteredItems.length === 0 && (
            <div className="text-center py-12">
              <div className="text-6xl mb-4">📸</div>
              <h3 className="text-xl font-bold text-navy mb-2">Aucune photo dans cette catégorie</h3>
              <p className="text-gray-500">Revenez bientôt pour découvrir nos nouvelles images.</p>
            </div>
          )}
        </div>
      </section>

      {/* ============================================ */}
      {/* SECTION 4: STATISTIQUES GALERIE */}
      {/* ============================================ */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-gold">15+</div>
              <div className="text-sm text-gray-500">Photos</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-gold">5</div>
              <div className="text-sm text-gray-500">Catégories</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-gold">2025</div>
              <div className="text-sm text-gray-500">Année en cours</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-gold">∞</div>
              <div className="text-sm text-gray-500">Souvenirs</div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================ */}
      {/* SECTION 5: APPEL À L'ACTION */}
      {/* ============================================ */}
      <section className="py-20 bg-gradient-to-r from-navy to-navy/90 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Envie de découvrir l'établissement ?
          </h2>
          <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">
            Venez visiter nos locaux et découvrir par vous-même notre cadre d'exception.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gold text-navy px-8 py-3 rounded-full font-semibold hover:bg-gold/90 transition-all hover:scale-105">
              Visiter l'établissement
            </button>
            <button className="bg-transparent border-2 border-white/50 text-white px-8 py-3 rounded-full font-semibold hover:border-gold hover:text-gold transition-all">
              Voir plus de photos
            </button>
          </div>
        </div>
      </section>

      {/* ============================================ */}
      {/* SECTION 6: TÉMOIGNAGES VISUELS */}
      {/* ============================================ */}
      <section className="py-20 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-gold font-semibold text-sm tracking-wider uppercase">Témoignages</span>
            <h2 className="text-3xl md:text-4xl font-bold text-navy mt-2 mb-4">
              Ils parlent de nous
            </h2>
            <div className="w-24 h-1 bg-gold mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg text-center hover:shadow-xl transition-shadow">
              <div className="text-6xl mb-4">⭐</div>
              <p className="text-gray-600 italic mb-4">
                "Un cadre exceptionnel où chaque enfant est accompagné vers la réussite."
              </p>
              <h4 className="font-bold text-navy">Mme. Ngoa</h4>
              <p className="text-sm text-gray-500">Parent d'élève</p>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-lg text-center hover:shadow-xl transition-shadow">
              <div className="text-6xl mb-4">⭐</div>
              <p className="text-gray-600 italic mb-4">
                "Une école qui allie excellence académique et développement personnel."
              </p>
              <h4 className="font-bold text-navy">M. Bisseck</h4>
              <p className="text-sm text-gray-500">Ancien élève</p>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-lg text-center hover:shadow-xl transition-shadow">
              <div className="text-6xl mb-4">⭐</div>
              <p className="text-gray-600 italic mb-4">
                "Des enseignants passionnés qui transmettent bien plus que des connaissances."
              </p>
              <h4 className="font-bold text-navy">Mme. Edzoa</h4>
              <p className="text-sm text-gray-500">Enseignante</p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Gallery;