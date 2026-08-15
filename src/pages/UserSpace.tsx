import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Layout from '../components/layout/Layout';

interface User {
  id?: string;
  nom: string;
  prenom: string;
  email: string;
  telephone: string;
  niveau: string;
  classe?: string;
  section?: string;
  filiere?: string;
  inscriptionDate?: string;
  statutInscription?: string;
}

const UserSpace = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const userData = localStorage.getItem('user');

    if (!userData) {
      navigate('/connexion');
      return;
    }

    try {
      const parsedUser = JSON.parse(userData);

      if (!parsedUser.isLoggedIn) {
        navigate('/connexion');
        return;
      }

      setUser(parsedUser);
    } catch {
      navigate('/connexion');
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem('user');
    navigate('/');
    window.location.reload();
  };

  if (!user) {
    return null;
  }

  return (
    <Layout>
      <section className="relative min-h-[40vh] flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 bg-linear-to-br from-navy/90 via-navy/80 to-turquoise/40">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')] bg-cover bg-center opacity-20"></div>
        </div>

        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <span className="text-gold font-semibold text-sm tracking-wider uppercase">
            Espace utilisateur
          </span>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mt-4 mb-6">
            Bienvenue, {user.prenom}
          </h1>

          <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto">
            Retrouvez ici les informations liées à votre inscription.
          </p>
        </div>
      </section>

      <section className="py-16 bg-cream">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="bg-white rounded-3xl shadow-xl p-6">
              <div className="w-16 h-16 rounded-full bg-gold flex items-center justify-center text-white font-bold text-xl mx-auto">
                {user.prenom.charAt(0)}
                {user.nom.charAt(0)}
              </div>

              <h2 className="text-xl font-bold text-navy text-center mt-4">
                {user.prenom} {user.nom}
              </h2>

              <p className="text-gray-500 text-center text-sm mt-1">
                {user.email}
              </p>

              <div className="mt-6 space-y-3">
                <div className="bg-cream rounded-xl p-3">
                  <p className="text-xs text-gray-500">
                    Téléphone
                  </p>
                  <p className="font-medium text-navy">
                    {user.telephone}
                  </p>
                </div>

                <div className="bg-cream rounded-xl p-3">
                  <p className="text-xs text-gray-500">
                    Inscrit le
                  </p>
                  <p className="font-medium text-navy">
                    {user.inscriptionDate || 'N/A'}
                  </p>
                </div>
              </div>

              <button
                onClick={handleLogout}
                className="w-full mt-6 px-5 py-3 rounded-xl text-red-500 font-semibold hover:bg-red-50 transition-colors"
              >
                🚪 Se déconnecter
              </button>
            </div>

            <div className="lg:col-span-2 bg-white rounded-3xl shadow-xl overflow-hidden">
              <div className="bg-linear-to-r from-navy to-navy/90 px-6 py-5">
                <h2 className="text-white text-xl font-bold">
                  Mon inscription
                </h2>

                <p className="text-white/60 text-sm mt-1">
                  Informations scolaires
                </p>
              </div>

              <div className="p-6 space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="bg-cream rounded-xl p-4">
                    <p className="text-xs text-gray-500">
                      Niveau
                    </p>

                    <p className="text-navy font-semibold mt-1">
                      {user.niveau}
                    </p>
                  </div>

                  <div className="bg-cream rounded-xl p-4">
                    <p className="text-xs text-gray-500">
                      Classe
                    </p>

                    <p className="text-navy font-semibold mt-1">
                      {user.classe || 'Non défini'}
                    </p>
                  </div>
                </div>

                {user.section && (
                  <div className="bg-cream rounded-xl p-4">
                    <p className="text-xs text-gray-500">
                      Section
                    </p>

                    <p className="text-navy font-semibold mt-1">
                      {user.section}
                    </p>
                  </div>
                )}

                {user.filiere && (
                  <div className="bg-cream rounded-xl p-4">
                    <p className="text-xs text-gray-500">
                      Filière
                    </p>

                    <p className="text-navy font-semibold mt-1">
                      {user.filiere}
                    </p>
                  </div>
                )}

                <div className="border-t border-gray-100 pt-5">
                  <p className="text-sm text-gray-500">
                    Statut de l'inscription
                  </p>

                  <div className="inline-flex items-center gap-2 mt-2 px-4 py-2 rounded-full bg-gold/10 text-gold font-semibold text-sm">
                    <span className="w-2 h-2 rounded-full bg-gold"></span>
                    {user.statutInscription ||
                      'Inscription reçue'}
                  </div>
                </div>

                <button
                  onClick={() => navigate('/')}
                  className="w-full bg-gold text-navy px-6 py-3 rounded-xl font-semibold hover:bg-gold/90 hover:shadow-lg transition-all"
                >
                  Retour à l'accueil
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default UserSpace;