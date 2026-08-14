import { useState, useEffect } from 'react';
import { siteConfig } from '../../data/config';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Détecter le scroll pour changer le style du header
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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

          {/* =========================
              LOGO
          ========================== */}
          <a href="/" className="flex items-center gap-3 group">

            {/* Conteneur du logo */}
            <div className="relative">
              <div className="absolute inset-0 rounded-xl bg-gold/20 blur-xl group-hover:bg-gold/30 transition-all duration-300"></div>

              <img
                src={siteConfig.images.logo}
                alt="IPAM & Ange-Léonce Logo"
                className="relative w-12 h-12 object-contain rounded-lg transition-all duration-300 group-hover:scale-105"
                onError={(e) => {
                  e.currentTarget.src =
                    'https://placehold.co/48x48/0F172A/D4AF37?text=AL';
                }}
              />
            </div>

            {/* Texte du logo - Desktop */}
            <div className="hidden sm:block">
              <span className="font-bold text-xl tracking-tight text-navy">
                IPAM{' '}
                <span className="text-gold">&</span>
              </span>

              <span className="font-bold text-xl tracking-tight text-navy">
                {' '}Ange - Léonce
              </span>

              <p className="text-xs text-gold/70 font-medium tracking-wide -mt-1">
                Excellence educative
              </p>
            </div>

            {/* Version mobile */}
            <span className="font-bold text-lg tracking-tight text-navy sm:hidden">
              IPAM & AL
            </span>
          </a>

          {/* =========================
              NAVIGATION DESKTOP
          ========================== */}
          <nav className="hidden lg:flex items-center gap-8">
            {siteConfig.navLinks.map((link) => (
              <a
                key={link.path}
                href={link.path}
                className="relative text-navy/80 hover:text-gold font-medium transition-all duration-300 group py-2"
              >
                {link.name}

                {/* Soulignement animé */}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-linear-to-r from-gold to-gold/50 transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </nav>

          {/* =========================
              BOUTONS DESKTOP
          ========================== */}
          <div className="hidden lg:flex items-center gap-4">

            {/* Bouton Contact */}
            <a
              href="/contact"
              className="text-navy/70 hover:text-gold transition-colors duration-300 font-medium"
            >
              Contact
            </a>

            {/* Bouton Inscription */}
            <a
              href="/inscription"
              className="relative overflow-hidden bg-linear-to-r from-turquoise to-turquoise/80 text-white px-7 py-2.5 rounded-full font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg group"
            >
              <span className="relative z-10">
                Inscription
              </span>

              {/* Animation dorée */}
              <div className="absolute inset-0 bg-linear-to-r from-gold to-gold/80 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
            </a>
          </div>

          {/* =========================
              BOUTON MENU MOBILE
          ========================== */}
          <button
            type="button"
            aria-label={isMenuOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
            aria-expanded={isMenuOpen}
            className="lg:hidden relative w-10 h-10 rounded-full bg-cream hover:bg-gold/10 transition-all duration-300 flex items-center justify-center group"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <div className="relative w-5 h-5">

              {/* Ligne 1 */}
              <span
                className={`absolute w-5 h-0.5 bg-navy rounded-full transition-all duration-300 ${
                  isMenuOpen
                    ? 'rotate-45 top-2'
                    : 'top-1'
                }`}
              ></span>

              {/* Ligne 2 */}
              <span
                className={`absolute w-5 h-0.5 bg-navy rounded-full transition-all duration-300 top-2 ${
                  isMenuOpen ? 'opacity-0' : 'opacity-100'
                }`}
              ></span>

              {/* Ligne 3 */}
              <span
                className={`absolute w-5 h-0.5 bg-navy rounded-full transition-all duration-300 ${
                  isMenuOpen
                    ? '-rotate-45 top-2'
                    : 'top-3'
                }`}
              ></span>

            </div>
          </button>
        </div>
      </div>

      {/* =========================
          NAVIGATION MOBILE
      ========================== */}

      <div
        className={`lg:hidden transition-all duration-500 overflow-hidden ${
          isMenuOpen
            ? 'max-h-[700px] opacity-100'
            : 'max-h-0 opacity-0'
        }`}
      >
        <div className="bg-white/98 backdrop-blur-md border-t border-gold/10 shadow-premium">

          <div className="max-w-7xl mx-auto px-4 py-6 space-y-4">

            {/* Liens de navigation */}
            {siteConfig.navLinks.map((link) => (
              <a
                key={link.path}
                href={link.path}
                className="block text-navy/80 hover:text-gold font-medium transition-colors py-2 text-lg"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}

            {/* Séparation */}
            <div className="pt-4 border-t border-gold/10">

              {/* Contact */}
              <a
                href="/contact"
                className="block text-navy/70 hover:text-gold transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </a>

              {/* =========================
                  BOUTON INSCRIPTION MOBILE
              ========================== */}
              <a
                href="/inscription"
                className="block bg-linear-to-r from-turquoise to-turquoise/80 text-white px-6 py-3 rounded-full font-semibold text-center hover:shadow-lg transition-all duration-300 mt-4"
                onClick={() => setIsMenuOpen(false)}
              >
                Inscription
              </a>

            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;