import logo from "../assets/images/logo.png";
import heroBackground from "../assets/images/hero-bg.png";

// Configuration centralisée du site
export const getImage = (image: string, _category?: string) => {
  return image;
};

export const siteConfig = {
  // Informations générales
  name: "IPAM & Groupe Scolaire Bilingue Ange & Léonce",
  shortName: "IPAM & Ange - Léonce",
  description: "Établissement d'Excellence",

  // Configuration des images
  images: {
    logo,
    heroBackground,
    placeholders: {
      default:
        "https://placehold.co/600x400/F8F6F0/D4AF37?text=Image+%C3%A0+venir",
      hero:
        "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
    },
  },

  // Contenu principal de la page d'accueil
  hero: {
    badge: "Établissement d'Excellence",
    title: "L'Excellence Éducative",
    highlightedText: "à Yaoundé",
    description:
      "IPAM & Groupe Scolaire Bilingue Ange & Léonce forment les leaders de demain dans un environnement d'excellence, alliant tradition et modernité.",
    primaryButton: "Découvrir nos écoles",
    secondaryButton: "Nous contacter",
  },

  // Liens de navigation
  navLinks: [
    { name: "Accueil", path: "/" },
    { name: "À propos", path: "/a-propos" },
    { name: "Nos établissements", path: "/etablissements" },
    { name: "Galerie", path: "/galerie" },
    { name: "Actualités", path: "/actualites" },
    { name: "Contact", path: "/contact" },
  ],

  // Chiffres clés
  stats: {
    anneeCreation: 2005,
    nombreEleves: 1250,
    nombreEnseignants: 85,
    tauxReussite: 98,
  },

  // Contacts
  contacts: {
    adresse: "Yaoundé, Cameroun",
    telephone: "+237 6XX XXX XXX",
    whatsapp: "+237 6XX XXX XXX",
    email: "contact@ippam-angeleonce.com",
  },

  social: {
  facebook: "https://facebook.com/votre-page",
  instagram: "https://instagram.com/votre-compte",
  linkedin: "https://linkedin.com/company/votre-entreprise",
}
};
