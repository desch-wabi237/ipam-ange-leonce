import { siteConfig } from '../../data/config';

const Footer = () => {
  return (
    <footer className="bg-navy text-white pt-12 pb-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* About */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-gold">IPAM & Ange & Léonce</h3>
            <p className="text-gray-300 text-sm">
              Excellence éducative à Yaoundé, Cameroun. Former les leaders de demain dans un environnement d'excellence.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-gold">Liens rapides</h3>
            <ul className="space-y-2 text-sm">
              {siteConfig.navLinks.map((link) => (
                <li key={link.path}>
                  <a href={link.path} className="text-gray-300 hover:text-gold transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-gold">Contact</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>📍 {siteConfig.contacts.adresse}</li>
              <li>📞 {siteConfig.contacts.telephone}</li>
              <li>💬 WhatsApp: {siteConfig.contacts.whatsapp}</li>
              <li>✉️ {siteConfig.contacts.email}</li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-gold">Horaires</h3>
            <p className="text-sm text-gray-300">Lundi - Vendredi: 7h30 - 17h30</p>
            <p className="text-sm text-gray-300 mt-2">Samedi: 8h00 - 12h00</p>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-700 pt-6 text-center text-sm text-gray-400">
          <p>&copy; {new Date().getFullYear()} IPAM & Groupe Scolaire Bilingue Ange & Léonce. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;