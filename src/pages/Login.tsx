import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import Layout from '../components/layout/Layout';

interface StoredUser {
  id?: string;
  nom: string;
  prenom: string;
  email: string;
  telephone: string;
  password: string;
  niveau: string;
  classe?: string;
  section?: string;
  filiere: string;
  isLoggedIn?: boolean;
  inscriptionDate?: string;
  lastLogin?: string;
  statutInscription?: string;
}

const Login = () => {
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');

  const [formData, setFormData] = useState({
    email: '',
    password: '',
    rememberMe: false,
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { name, value, type, checked } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));

    if (error) {
      setError('');
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.email || !formData.password) {
      setError('Veuillez remplir tous les champs');
      return;
    }

    setIsSubmitting(true);
    setError('');

    setTimeout(() => {
      const users: StoredUser[] = JSON.parse(
        localStorage.getItem('users') || '[]'
      );

      const email = formData.email.trim().toLowerCase();

      const user = users.find(
        (item) =>
          item.email.toLowerCase() === email
      );

      if (!user) {
        setError(
          "Aucun compte n'est associé à cette adresse email. Veuillez d'abord vous inscrire."
        );
        setIsSubmitting(false);
        return;
      }

      if (user.password !== formData.password) {
        setError('Email ou mot de passe incorrect');
        setIsSubmitting(false);
        return;
      }

      const updatedUser: StoredUser = {
        ...user,
        isLoggedIn: true,
        lastLogin: new Date().toLocaleDateString(
          'fr-FR',
          {
            day: '2-digit',
            month: '2-digit',
            year: 'numeric',
            hour: '2-digit',
            minute: '2-digit',
          }
        ),
      };

      const updatedUsers = users.map((item) =>
        item.email.toLowerCase() === email
          ? updatedUser
          : item
      );

      localStorage.setItem(
        'users',
        JSON.stringify(updatedUsers)
      );

      localStorage.setItem(
        'user',
        JSON.stringify(updatedUser)
      );

      setIsSubmitting(false);

      navigate('/');
      window.location.reload();
    }, 800);
  };

  return (
    <Layout>
      <section className="relative min-h-[40vh] flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 bg-linear-to-br from-navy/90 via-navy/80 to-turquoise/40">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')] bg-cover bg-center opacity-20"></div>
        </div>

        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <span className="text-gold font-semibold text-sm tracking-wider uppercase">
            Connexion
          </span>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mt-4 mb-6">
            Bienvenue à nouveau
          </h1>

          <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto">
            Connectez-vous pour accéder à votre espace personnel.
          </p>
        </div>
      </section>

      <section className="py-16 bg-cream">
        <div className="max-w-md mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
            <div className="bg-linear-to-r from-navy to-navy/90 px-8 py-6">
              <h2 className="text-white text-xl font-bold text-center">
                Connectez-vous
              </h2>

              <p className="text-white/60 text-sm text-center">
                Accédez à votre espace personnel
              </p>
            </div>

            <form
              onSubmit={handleSubmit}
              className="p-8"
            >
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
                    <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                      ✉️
                    </span>

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
                    <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                      🔒
                    </span>

                    <input
                      type={
                        showPassword
                          ? 'text'
                          : 'password'
                      }
                      name="password"
                      value={formData.password}
                      onChange={handleChange}
                      className="w-full pl-10 pr-12 py-3 rounded-xl border-2 border-gray-200 focus:border-gold focus:outline-none transition-colors"
                      placeholder="Votre mot de passe"
                    />

                    <button
                      type="button"
                      onClick={() =>
                        setShowPassword(!showPassword)
                      }
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

                  <span className="text-sm text-gray-400 font-medium">
                    Mot de passe oublié ?
                  </span>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full bg-gold text-navy py-3 rounded-xl font-semibold transition-all duration-300 ${
                    isSubmitting
                      ? 'opacity-70 cursor-not-allowed'
                      : 'hover:bg-gold/90 hover:shadow-lg hover:scale-[1.02]'
                  }`}
                >
                  {isSubmitting ? (
                    <span className="flex items-center justify-center gap-2">
                      <svg
                        className="animate-spin h-5 w-5"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                          fill="none"
                        />

                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 0 12 0s6.627 5.373 12 12h-4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        />
                      </svg>

                      Connexion en cours...
                    </span>
                  ) : (
                    'Se connecter'
                  )}
                </button>
              </div>
            </form>

            <div className="bg-cream px-8 py-4 border-t border-gray-100">
              <p className="text-center text-sm text-gray-500">
                Vous n'avez pas encore de compte ?{' '}

                <Link
                  to="/inscription"
                  className="text-gold font-semibold hover:underline"
                >
                  S'inscrire
                </Link>
              </p>
            </div>
          </div>

          <div className="mt-8 text-center">
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-3">
                Pour vous connecter
              </h3>

              <div className="flex flex-wrap justify-center gap-4 text-sm">
                <div className="flex items-center gap-2">
                  <span className="text-gold">✅</span>
                  <span className="text-gray-600">
                    Email valide
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  <span className="text-gold">✅</span>
                  <span className="text-gray-600">
                    Mot de passe
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  <span className="text-gold">✅</span>
                  <span className="text-gray-600">
                    Accès sécurisé
                  </span>
                </div>
              </div>

              <p className="text-xs text-gray-400 mt-3">
                Si vous n'avez pas encore de compte,
                inscrivez-vous pour accéder à toutes les
                fonctionnalités.
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Login;