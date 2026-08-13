import Layout from '../components/layout/Layout';
import { siteConfig, getImage } from '../data/config';
import OverviewSection from '../components/sections/OverviewSection'; 
import colImage from '../assets/images/col.jpeg';
import ensImage from '../assets/images/ens.jpeg';
import fpImage from '../assets/images/fp.jpeg';
import i1Image from '../assets/images/11.jpeg';
import i2Image from '../assets/images/22.jpeg';
import i3Image from '../assets/images/33.jpeg';
import i4Image from '../assets/images/44.jpeg';

const Home = () => {
  return (
    <Layout>
      {/* ============================================ */}
      {/* SECTION 1: HERO AVEC BIENVENUE */}
      {/* ============================================ */}
      <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden pt-20">
        {/* Image de fond */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ 
            backgroundImage: `url(${getImage(siteConfig.images.heroBackground, 'hero')})`,
          }}
        >
          <div className="absolute inset-0 bg-linear-to-br from-navy/85 via-navy/70 to-turquoise/50"></div>
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-linear-to-t from-cream to-transparent"></div>
        </div>

        {/* Contenu */}
        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
          {/* Badge de bienvenue */}
          <div className="inline-block mb-6">
            <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-gold/30">
              <span className="w-2 h-2 rounded-full bg-gold animate-pulse"></span>
              <span className="text-sm font-medium text-gold tracking-wider uppercase">Bienvenue</span>
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-4 leading-tight">
            Dans notre établissement
            <br />
            <span className="text-gold inline-block mt-2 relative">
              d'Excellence
              <span className="absolute -bottom-2 left-0 right-0 h-1 bg-linear-to-r from-transparent via-gold to-transparent rounded-full"></span>
            </span>
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-white/90 mb-8 max-w-2xl mx-auto leading-relaxed">
            IPAM & Groupe Scolaire Bilingue Ange & Léonce forment les leaders de demain 
            dans un environnement d'excellence, alliant tradition et modernité.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="group relative overflow-hidden bg-gold text-navy px-8 py-3 rounded-full font-semibold transition-all duration-300 hover:scale-105 hover:shadow-xl">
              <span className="relative z-10">Découvrir nos écoles</span>
              <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
            </button>
            <button className="group relative overflow-hidden bg-transparent border-2 border-white/50 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 hover:border-gold hover:text-gold hover:scale-105">
              <span className="relative z-10">Nous contacter</span>
            </button>
          </div>

          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
              <div className="w-1 h-2 bg-gold rounded-full mt-2 animate-pulse"></div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================ */}
      {/* SECTION 2: OVERVIEW - COMPOSANT PREMIUM */}
      {/* ============================================ */}
      

      {/* ============================================ */}
      {/* SECTION 3: BIENVENUE DANS NOTRE ÉTABLISSEMENT */}
      {/* ============================================ */}
      <section className="py-20 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-gold font-semibold text-sm tracking-wider uppercase">À propos</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-navy mt-2 mb-4">
              Bienvenue dans notre établissement
            </h2>
            <div className="w-24 h-1 bg-gold mx-auto mb-6"></div>
            <p className="text-gray-600 max-w-3xl mx-auto text-lg">
              Depuis plus de 20 ans, nous formons les élites de demain dans un cadre d'exception 
              alliant excellence académique, développement personnel et valeurs humaines.
            </p>
          </div>

          {/* Bannières d'images */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Bannière 1 */}
            <div className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 h-72">
              <img
  src={colImage}
  alt="Salle de classe moderne"
  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
/>
              <div className="absolute inset-0 bg-linear-to-t from-navy/80 via-navy/30 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="text-white text-xl font-bold">Collégiens d'Excellence</h3>
                <p className="text-white/80 text-sm">Des élèves motivés, préparés pour réussir.</p>
              </div>
            </div>

            {/* Bannière 2 */}
            <div className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 h-72">
             <img
  src={ensImage}
  alt="Salle de classe moderne"
  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
/>
              <div className="absolute inset-0 bg-linear-to-t from-navy/80 via-navy/30 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="text-white text-xl font-bold">Enseignants Qualifiés</h3>
                <p className="text-white/80 text-sm">Un accompagnement de qualité.</p>
              </div>
            </div>

            {/* Bannière 3 */}
            <div className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 h-72">
            <img
  src={fpImage}
  alt="Salle de classe moderne"
  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
/>
              <div className="absolute inset-0 bg-linear-to-t from-navy/80 via-navy/30 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="text-white text-xl font-bold">Joie et Épanouissement
</h3>
                <p className="text-white/80 text-sm">Grandir dans la joie et la découverte.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================ */}
      {/* SECTION 4: NOS VALEURS ET ENGAGEMENTS */}
      {/* ============================================ */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-gold font-semibold text-sm tracking-wider uppercase">Nos valeurs</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-navy mt-2 mb-4">
              Ce qui nous distingue
            </h2>
            <div className="w-24 h-1 bg-gold mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-8 rounded-2xl bg-cream hover:shadow-xl transition-shadow group">
              <div className="w-20 h-20 bg-gold/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-gold/20 transition-colors">
                <svg className="w-10 h-10 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-navy mb-2">Excellence Académique</h3>
              <p className="text-gray-600">Un programme éducatif rigoureux qui prépare les élèves aux meilleures universités nationales et internationales.</p>
            </div>

            <div className="text-center p-8 rounded-2xl bg-cream hover:shadow-xl transition-shadow group">
              <div className="w-20 h-20 bg-turquoise/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-turquoise/20 transition-colors">
                <svg className="w-10 h-10 text-turquoise" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-navy mb-2">Formation Intégrale</h3>
              <p className="text-gray-600">Des activités sportives, culturelles, artistiques et spirituelles pour un développement complet de l'élève.</p>
            </div>

            <div className="text-center p-8 rounded-2xl bg-cream hover:shadow-xl transition-shadow group">
              <div className="w-20 h-20 bg-navy/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-navy/20 transition-colors">
                <svg className="w-10 h-10 text-navy" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-navy mb-2">Encadrement Personnalisé</h3>
              <p className="text-gray-600">Une équipe pédagogique dévouée, à l'écoute, qui accompagne chaque élève vers la réussite.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================ */}
      {/* SECTION 5: GALERIE D'IMAGES SUPPLEMENTAIRE */}
      {/* ============================================ */}
      <section className="py-20 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-gold font-semibold text-sm tracking-wider uppercase">Galerie</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-navy mt-2 mb-4">
              Découvrez notre cadre de vie
            </h2>
            <div className="w-24 h-1 bg-gold mx-auto mb-6"></div>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Des infrastructures modernes et un environnement propice à l'épanouissement de vos enfants.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="relative overflow-hidden rounded-xl h-48 group">
               <img
  src={i1Image}
                alt="Élèves en classe"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-navy/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <span className="text-white text-sm font-medium">Vie scolaire</span>
              </div>
            </div>
            <div className="relative overflow-hidden rounded-xl h-48 group">
              <img
  src={i2Image}
                alt="Bibliothèque"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-navy/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <span className="text-white text-sm font-medium">Remise des Bulletins</span>
              </div>
            </div>
            <div className="relative overflow-hidden rounded-xl h-48 group">
              <img
  src={i3Image}
                alt="Laboratoire"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-navy/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <span className="text-white text-sm font-medium">Activités</span>
              </div>
            </div>
            <div className="relative overflow-hidden rounded-xl h-48 group">
              <img
  src={i4Image}
                alt="Sport"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-navy/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <span className="text-white text-sm font-medium">Enseignants</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================ */}
      {/* SECTION 7: APPEL À L'ACTION - INSCRIPTION */}
      {/* ============================================ */}
      <section className="py-20 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-3xl bg-linear-to-r from-navy to-navy/90 p-12 md:p-16 text-center">
            <div className="absolute top-0 right-0 w-64 h-64 bg-gold/5 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-turquoise/5 rounded-full blur-3xl"></div>
            
            <div className="relative z-10">
              <div className="text-6xl mb-4">🎓</div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Prêt à rejoindre notre famille ?
              </h2>
              <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">
                Inscrivez votre enfant dès maintenant pour lui offrir le meilleur départ dans la vie. 
                Une éducation d'excellence dans un cadre d'exception.
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
          </div>
        </div>
      </section>
      <OverviewSection />  {/* ← AJOUTER CETTE LIGNE */}
    </Layout>
  );
};

export default Home;