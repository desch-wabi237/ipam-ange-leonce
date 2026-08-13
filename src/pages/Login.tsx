import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import Layout from '../components/layout/Layout';

const Login = () => {
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');

  // Données du formulaire
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    rememberMe: false
  });

  // Gestion des changements
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    });
    // Effacer l'erreur
    if (error) setError('');
  };

  // Gestion de la soumission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.email || !formData.password) {
      setError('Veuillez remplir tous les champs');
      return;
    }

    setIsSubmitting(true);
    setError('');

    // Simulation de connexion
    setTimeout(() => {
      // Vérifier si l'utilisateur existe dans localStorage
      const storedUser = localStorage.getItem('user');
      
      if (storedUser) {
        const userData = JSON.parse(storedUser);
        
        // Vérifier les identifiants (simulation)
        if (formData.email === userData.email && formData.password.length >= 6) {
          // Mettre à jour le statut de connexion
          const updatedUser = {
            ...userData,
            isLoggedIn: true,
            lastLogin: new Date().toLocaleDateString('fr-FR', {
              day: '2-digit',
              month: '2-digit',
              year: 'numeric',
              hour: '2-digit',
              minute: '2-digit'
            })
          };
          localStorage.setItem('user', JSON.stringify(updatedUser));
          
          setIsSubmitting(false);
          navigate('/');
          window.location.reload();
        } else {
          setError('Email ou mot de passe incorrect');
          setIsSubmitting(false);
        }
      } else {
        // Si l'utilisateur n'existe pas, on simule une connexion
        // Dans un vrai projet, on vérifierait dans une base de données
        const mockUser = {
          nom: 'Doe',
          prenom: 'John',
          email: formData.email,
          telephone: '+237 6XX XXX XXX',
          niveau: 'Secondaire Général',
          filiere: 'Gestion des Entreprises',
          isLoggedIn: true,
          inscriptionDate: new Date().toLocaleDateString('fr-FR'),
          lastLogin: new Date().toLocaleDateString('fr-FR', {
            day: '2-digit',
            month: '2-digit',
            year: 'numeric',
            hour: '2-digit',
            minute: '2-digit'
          })
        };
        localStorage.setItem('user', JSON.stringify(mockUser));
        
        setIsSubmitting(false);
        navigate('/');
        window.location.reload();
      }
    }, 1500);
  };

  return (
    <Layout>
      {/* ============================================ */}
      {/* SECTION 1: HERO CONNEXION */}
      {/* ============================================ */}
      <section className="relative min-h-[40vh] flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 bg-gradient-to-br from-navy/90 via-navy/80 to-turquoise/40">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')] bg-cover bg-center opacity-20"></div>
        </div>
        
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <span className="text-gold font-semibold text-sm tracking-wider uppercase">Connexion</span>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mt-4 mb-6">
            Bienvenue à nouveau
          </h1>
          <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto">
            Connectez-vous pour accéder à votre espace personnel.
          </p>
        </div>
      </section>

      {/* ============================================ */}
      {/* SECTION 2: FORMULAIRE DE CONNEXION */}
      {/* ============================================ */}
      <section className="py-16 bg-cream">
        <div className="max-w-md mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
            {/* En-tête */}
            <div className="bg-gradient-to-r from-navy to-navy/90 px-8 py-6">
              <h2 className="text-white text-xl font-bold text-center">
                Connectez-vous
              </h2>
              <p className="text-white/60 text-sm text-center">
                Accédez à votre espace personnel
              </p>
            </div>

            {/* Formulaire */}
            <form onSubmit={handleSubmit} className="p-8">
              {error && (
                <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded-xl text-red-500 text-sm text-center">
                  ⚠️ {error}
                </div>
              )}

              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Email *
                  </label>
                  <div className="relative">
                    <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">✉️</span>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full pl-10 pr-4 py-3 rounded-xl border-2 border-gray-200 focus:border-gold focus:outline-none transition-colors"
                      placeholder="email@exemple.com"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Mot de passe *
                  </label>
                  <div className="relative">
                    <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">🔒</span>
                    <input
                      type={showPassword ? 'text' : 'password'}
                      name="password"
                      value={formData.password}
                      onChange={handleChange}
                      className="w-full pl-10 pr-12 py-3 rounded-xl border-2 border-gray-200 focus:border-gold focus:outline-none transition-colors"
                      placeholder="Votre mot de passe"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gold transition-colors"
                    >
                      {showPassword ? '🙈' : '👁️'}
                    </button>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <label className="flex items-center gap-2 text-sm text-gray-600 cursor-pointer">
                    <input
                      type="checkbox"
                      name="rememberMe"
                      checked={formData.rememberMe}
                      onChange={handleChange}
                      className="w-4 h-4 rounded border-gray-300 focus:border-gold focus:ring-gold"
                    />
                    Se souvenir de moi
                  </label>
                  <a href="#" className="text-sm text-gold hover:underline font-medium">
                    Mot de passe oublié ?
                  </a>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full bg-gold text-navy py-3 rounded-xl font-semibold transition-all duration-300 ${
                    isSubmitting ? 'opacity-70 cursor-not-allowed' : 'hover:bg-gold/90 hover:shadow-lg hover:scale-[1.02]'
                  }`}
                >
                  {isSubmitting ? (
                    <span className="flex items-center justify-center gap-2">
                      <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                      </svg>
                      Connexion en cours...
                    </span>
                  ) : (
                    'Se connecter'
                  )}
                </button>
              </div>
            </form>

            {/* Pied de formulaire */}
            <div className="bg-cream px-8 py-4 border-t border-gray-100">
              <p className="text-center text-sm text-gray-500">
                Vous n'avez pas encore de compte ?{' '}
                <Link to="/inscription" className="text-gold font-semibold hover:underline">
                  S'inscrire
                </Link>
              </p>
            </div>
          </div>

          {/* Informations supplémentaires */}
          <div className="mt-8 text-center">
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-3">
                Pour vous connecter
              </h3>
              <div className="flex flex-wrap justify-center gap-4 text-sm">
                <div className="flex items-center gap-2">
                  <span className="text-gold">✅</span>
                  <span className="text-gray-600">Email valide</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-gold">✅</span>
                  <span className="text-gray-600">Mot de passe</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-gold">✅</span>
                  <span className="text-gray-600">Accès sécurisé</span>
                </div>
              </div>
              <p className="text-xs text-gray-400 mt-3">
                Si vous n'avez pas encore de compte, inscrivez-vous pour accéder à toutes les fonctionnalités.
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Login;