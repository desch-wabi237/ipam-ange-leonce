import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { siteConfig } from '../../data/config';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const [user, setUser] = useState<any>(null);

  // Détecter le scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Récupérer les données utilisateur
  useEffect(() => {
    const userData = localStorage.getItem('user');
    if (userData) {
      setUser(JSON.parse(userData));
    }
  }, []);

  // Gestion de la déconnexion
  const handleLogout = () => {
    localStorage.removeItem('user');
    setUser(null);
    setIsUserMenuOpen(false);
    window.location.reload();
  };

  const navLinks = [
    { name: 'Accueil', path: '/' },
    { name: 'À propos', path: '/a-propos' },
    { name: 'Nos établissements', path: '/etablissements' },
    { name: 'Galerie', path: '/galerie' },
    { name: 'Actualités', path: '/actualites' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        isScrolled 
          ? 'bg-white/98 backdrop-blur-md shadow-premium py-2' 
          : 'bg-white/95 backdrop-blur-sm py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="relative">
              <div className="absolute inset-0 rounded-xl bg-gold/20 blur-xl group-hover:bg-gold/30 transition-all duration-300"></div>
              <img 
                src={siteConfig.images.logo} 
                alt="IPPAM & Ange & Léonce Logo"
                className="relative w-12 h-12 object-contain rounded-lg transition-all duration-300 group-hover:scale-105"
                onError={(e) => {
                  e.currentTarget.src = 'https://placehold.co/48x48/0F172A/D4AF37?text=AL';
                }}
              />
            </div>
            
            <div className="hidden sm:block">
              <span className="font-bold text-xl tracking-tight text-navy">
                IPPAM 
                <span className="text-gold">&</span>
              </span>
              <span className="font-bold text-xl tracking-tight text-navy">
                {' '}Ange & Léonce
              </span>
              <p className="text-xs text-gold/70 font-medium tracking-wide -mt-1">
                Excellence éducative
              </p>
            </div>
            
            <span className="font-bold text-lg tracking-tight text-navy sm:hidden">
              IPPAM & AL
            </span>
          </Link>

          {/* Navigation Desktop */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="relative text-navy/80 hover:text-gold font-medium transition-all duration-300 group py-2"
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-gold to-gold/50 transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ))}
          </nav>

          {/* CTA ou Espace Utilisateur */}
          <div className="hidden lg:flex items-center gap-4">
            {user ? (
              // Espace Utilisateur connecté
              <div className="relative">
                <button
                  onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}
                  className="flex items-center gap-2 px-4 py-2 rounded-full bg-cream hover:bg-gold/10 transition-colors"
                >
                  <div className="w-8 h-8 rounded-full bg-gold flex items-center justify-center text-white font-bold text-sm">
                    {user.prenom?.charAt(0)}{user.nom?.charAt(0)}
                  </div>
                  <span className="text-sm font-medium text-navy">
                    {user.prenom} {user.nom}
                  </span>
                  <svg className={`w-4 h-4 text-gray-400 transition-transform ${isUserMenuOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                {/* Menu déroulant utilisateur */}
                {isUserMenuOpen && (
                  <div className="absolute right-0 mt-2 w-72 bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden z-50">
                    <div className="px-4 py-3 bg-gradient-to-r from-navy to-navy/90">
                      <p className="text-white font-semibold">{user.prenom} {user.nom}</p>
                      <p className="text-white/60 text-sm">{user.email}</p>
                    </div>
                    <div className="p-3 space-y-1">
                      <div className="px-3 py-2 hover:bg-cream rounded-xl transition-colors">
                        <p className="text-xs text-gray-500">Niveau</p>
                        <p className="text-sm font-medium text-navy">{user.niveau || 'Non défini'}</p>
                      </div>
                      <div className="px-3 py-2 hover:bg-cream rounded-xl transition-colors">
                        <p className="text-xs text-gray-500">Filière</p>
                        <p className="text-sm font-medium text-navy">{user.filiere || 'Non défini'}</p>
                      </div>
                      <div className="px-3 py-2 hover:bg-cream rounded-xl transition-colors">
                        <p className="text-xs text-gray-500">Inscrit le</p>
                        <p className="text-sm font-medium text-navy">{user.inscriptionDate || 'N/A'}</p>
                      </div>
                      <hr className="my-2 border-gray-100" />
                      <button
                        onClick={handleLogout}
                        className="w-full text-left px-3 py-2 text-red-500 hover:bg-red-50 rounded-xl transition-colors font-medium text-sm"
                      >
                        🚪 Se déconnecter
                      </button>
                    </div>
                  </div>
                )}
              </div>
            ) : (
              // Bouton Inscription
              <Link
                to="/inscription"
                className="relative overflow-hidden bg-gradient-to-r from-turquoise to-turquoise/80 text-white px-7 py-2.5 rounded-full font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg group"
              >
                <span className="relative z-10">S'inscrire</span>
                <div className="absolute inset-0 bg-gradient-to-r from-gold to-gold/80 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
              </Link>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden relative w-10 h-10 rounded-full bg-cream hover:bg-gold/10 transition-all duration-300 flex items-center justify-center group"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <div className="relative w-5 h-5">
              <span className={`absolute w-5 h-0.5 bg-navy rounded-full transition-all duration-300 ${isMenuOpen ? 'rotate-45 top-2' : 'top-1'}`}></span>
              <span className={`absolute w-5 h-0.5 bg-navy rounded-full transition-all duration-300 top-2 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
              <span className={`absolute w-5 h-0.5 bg-navy rounded-full transition-all duration-300 ${isMenuOpen ? '-rotate-45 top-2' : 'top-3'}`}></span>
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className={`lg:hidden transition-all duration-400 overflow-hidden ${isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="bg-white/98 backdrop-blur-md border-t border-gold/10 shadow-premium">
          <div className="max-w-7xl mx-auto px-4 py-6 space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="block text-navy/80 hover:text-gold font-medium transition-colors py-2 text-lg"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <div className="pt-4 border-t border-gold/10">
              {user ? (
                <div className="space-y-2">
                  <div className="flex items-center gap-3 px-4 py-2 bg-cream rounded-xl">
                    <div className="w-10 h-10 rounded-full bg-gold flex items-center justify-center text-white font-bold">
                      {user.prenom?.charAt(0)}{user.nom?.charAt(0)}
                    </div>
                    <div>
                      <p className="font-semibold text-navy text-sm">{user.prenom} {user.nom}</p>
                      <p className="text-gray-400 text-xs">{user.email}</p>
                    </div>
                  </div>
                  <button
                    onClick={handleLogout}
                    className="block w-full text-center text-red-500 px-6 py-3 rounded-full font-semibold hover:bg-red-50 transition-all"
                  >
                    Se déconnecter
                  </button>
                </div>
              ) : (
                <Link
                  to="/inscription"
                  className="block bg-gradient-to-r from-turquoise to-turquoise/80 text-white px-6 py-3 rounded-full font-semibold text-center hover:shadow-lg transition-all"
                  onClick={() => setIsMenuOpen(false)}
                >
                  S'inscrire
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;