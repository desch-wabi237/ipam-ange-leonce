import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Layout from '../components/layout/Layout';

// ============================================
// INTERFACE POUR LES DONNÉES UTILISATEUR
// ============================================
interface UserData {
  nom: string;
  prenom: string;
  email: string;
  telephone: string;
  password: string;
  confirmPassword: string;
  niveau: string;
  filiere: string;
  acceptConditions: boolean;
}

// ============================================
// INTERFACE POUR LES ERREURS
// ============================================
// IMPORTANT :
// Les données du formulaire et les messages d'erreur
// doivent avoir des types différents.
// ============================================
interface FormErrors {
  nom?: string;
  prenom?: string;
  email?: string;
  telephone?: string;
  password?: string;
  confirmPassword?: string;
  niveau?: string;
  filiere?: string;
  acceptConditions?: string;
}

const Registration = () => {
  const navigate = useNavigate();

  // Étape actuelle du formulaire
  const [step, setStep] = useState(1);

  // État de soumission
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Affichage du mot de passe
  const [showPassword, setShowPassword] = useState(false);

  // ============================================
  // DONNÉES DU FORMULAIRE
  // ============================================
  const [formData, setFormData] = useState<UserData>({
    nom: '',
    prenom: '',
    email: '',
    telephone: '',
    password: '',
    confirmPassword: '',
    niveau: '',
    filiere: '',
    acceptConditions: false,
  });

  // ============================================
  // ERREURS DU FORMULAIRE
  // ============================================
  const [errors, setErrors] = useState<FormErrors>({});

  // ============================================
  // NIVEAUX DISPONIBLES
  // ============================================
  const niveaux = [
    'Maternelle',
    'Primaire',
    'Secondaire Général',
    'Secondaire Technique',
    'Formation Professionnelle',
  ];

  // ============================================
  // FILIÈRES DISPONIBLES
  // ============================================
  const filieres = [
    'Gestion des Entreprises',
    'Informatique et Technologies',
    'Art et Design',
    'Bâtiment et Travaux Publics',
    'Hôtellerie et Tourisme',
  ];

  // ============================================
  // GESTION DES CHANGEMENTS
  // ============================================
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = e.target;

    const newValue =
      type === 'checkbox'
        ? (e.target as HTMLInputElement).checked
        : value;

    setFormData((prev) => ({
      ...prev,
      [name]: newValue,
    }));

    // Effacer l'erreur du champ lorsqu'il est modifié
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({
        ...prev,
        [name]: undefined,
      }));
    }
  };

  // ============================================
  // VALIDATION DU FORMULAIRE
  // ============================================
  const validateStep = (): boolean => {
    const newErrors: FormErrors = {};

    // ==========================================
    // ÉTAPE 1
    // ==========================================
    if (step === 1) {
      if (!formData.nom.trim()) {
        newErrors.nom = 'Le nom est requis';
      }

      if (!formData.prenom.trim()) {
        newErrors.prenom = 'Le prénom est requis';
      }

      if (!formData.email.trim()) {
        newErrors.email = "L'email est requis";
      } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
        newErrors.email = 'Email invalide';
      }

      if (!formData.telephone.trim()) {
        newErrors.telephone = 'Le téléphone est requis';
      }

      if (!formData.password) {
        newErrors.password = 'Le mot de passe est requis';
      } else if (formData.password.length < 6) {
        newErrors.password =
          'Le mot de passe doit contenir au moins 6 caractères';
      }

      if (!formData.confirmPassword) {
        newErrors.confirmPassword =
          'Veuillez confirmer votre mot de passe';
      } else if (formData.password !== formData.confirmPassword) {
        newErrors.confirmPassword =
          'Les mots de passe ne correspondent pas';
      }
    }

    // ==========================================
    // ÉTAPE 2
    // ==========================================
    if (step === 2) {
      if (!formData.niveau) {
        newErrors.niveau = 'Veuillez sélectionner un niveau';
      }

      if (!formData.filiere) {
        newErrors.filiere = 'Veuillez sélectionner une filière';
      }

      if (!formData.acceptConditions) {
        newErrors.acceptConditions =
          'Vous devez accepter les conditions';
      }
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  // ============================================
  // PASSER À L'ÉTAPE SUIVANTE
  // ============================================
  const nextStep = () => {
    if (validateStep()) {
      setStep((prev) => prev + 1);

      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    }
  };

  // ============================================
  // REVENIR À L'ÉTAPE PRÉCÉDENTE
  // ============================================
  const prevStep = () => {
    setStep((prev) => prev - 1);

    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  // ============================================
  // SOUMISSION DU FORMULAIRE
  // ============================================
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!validateStep()) {
      return;
    }

    setIsSubmitting(true);

    // Simulation d'inscription
    setTimeout(() => {
      // ========================================
      // DONNÉES À SAUVEGARDER
      // ========================================
      const userData = {
        nom: formData.nom,
        prenom: formData.prenom,
        email: formData.email,
        telephone: formData.telephone,
        niveau: formData.niveau,
        filiere: formData.filiere,
        isLoggedIn: true,
        inscriptionDate: new Date().toLocaleDateString('fr-FR'),
      };

      // ========================================
      // SAUVEGARDE DANS LOCALSTORAGE
      // ========================================
      localStorage.setItem('user', JSON.stringify(userData));

      setIsSubmitting(false);

      // ========================================
      // RETOUR À L'ACCUEIL
      // ========================================
      navigate('/');

      // Recharger la page afin que le Header
      // détecte immédiatement le nouvel utilisateur
      window.location.reload();
    }, 2000);
  };

  return (
    <Layout>
      {/* ============================================ */}
      {/* SECTION 1 : HERO INSCRIPTION */}
      {/* ============================================ */}

      <section className="relative min-h-[40vh] flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 bg-gradient-to-br from-navy/90 via-navy/80 to-turquoise/40">
          <div
            className="absolute inset-0 bg-cover bg-center opacity-20"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')",
            }}
          />
        </div>

        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <span className="text-gold font-semibold text-sm tracking-wider uppercase">
            Inscription
          </span>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mt-4 mb-6">
            Rejoignez notre famille
          </h1>

          <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto">
            Inscrivez votre enfant dès maintenant pour lui offrir une
            éducation d'excellence.
          </p>
        </div>
      </section>

      {/* ============================================ */}
      {/* SECTION 2 : FORMULAIRE */}
      {/* ============================================ */}

      <section className="py-16 bg-cream">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl shadow-xl overflow-hidden">

            {/* ======================================== */}
            {/* EN-TÊTE AVEC PROGRESSION */}
            {/* ======================================== */}

            <div className="bg-gradient-to-r from-navy to-navy/90 px-8 py-6">
              <div className="flex justify-between items-center">
                <div>
                  <h2 className="text-white text-xl font-bold">
                    {step === 1
                      ? 'Informations personnelles'
                      : 'Choix pédagogique'}
                  </h2>

                  <p className="text-white/60 text-sm">
                    Étape {step} sur 2
                  </p>
                </div>

                <div className="flex gap-2">
                  <div
                    className={`w-3 h-3 rounded-full ${
                      step >= 1
                        ? 'bg-gold'
                        : 'bg-white/30'
                    }`}
                  />

                  <div
                    className={`w-3 h-3 rounded-full ${
                      step >= 2
                        ? 'bg-gold'
                        : 'bg-white/30'
                    }`}
                  />
                </div>
              </div>
            </div>

            {/* ======================================== */}
            {/* FORMULAIRE */}
            {/* ======================================== */}

            <form
              onSubmit={handleSubmit}
              className="p-8"
            >
              {/* ====================================== */}
              {/* ÉTAPE 1 */}
              {/* ====================================== */}

              {step === 1 && (
                <div className="space-y-4">

                  {/* NOM + PRÉNOM */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

                    {/* NOM */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Nom *
                      </label>

                      <input
                        type="text"
                        name="nom"
                        value={formData.nom}
                        onChange={handleChange}
                        className={`w-full px-4 py-3 rounded-xl border-2 ${
                          errors.nom
                            ? 'border-red-400'
                            : 'border-gray-200'
                        } focus:border-gold focus:outline-none transition-colors`}
                        placeholder="Nom de l'élève"
                      />

                      {errors.nom && (
                        <p className="text-red-400 text-xs mt-1">
                          {errors.nom}
                        </p>
                      )}
                    </div>

                    {/* PRÉNOM */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Prénom *
                      </label>

                      <input
                        type="text"
                        name="prenom"
                        value={formData.prenom}
                        onChange={handleChange}
                        className={`w-full px-4 py-3 rounded-xl border-2 ${
                          errors.prenom
                            ? 'border-red-400'
                            : 'border-gray-200'
                        } focus:border-gold focus:outline-none transition-colors`}
                        placeholder="Prénom de l'élève"
                      />

                      {errors.prenom && (
                        <p className="text-red-400 text-xs mt-1">
                          {errors.prenom}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* EMAIL */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Email *
                    </label>

                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 rounded-xl border-2 ${
                        errors.email
                          ? 'border-red-400'
                          : 'border-gray-200'
                      } focus:border-gold focus:outline-none transition-colors`}
                      placeholder="email@exemple.com"
                    />

                    {errors.email && (
                      <p className="text-red-400 text-xs mt-1">
                        {errors.email}
                      </p>
                    )}
                  </div>

                  {/* TÉLÉPHONE */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Téléphone *
                    </label>

                    <input
                      type="tel"
                      name="telephone"
                      value={formData.telephone}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 rounded-xl border-2 ${
                        errors.telephone
                          ? 'border-red-400'
                          : 'border-gray-200'
                      } focus:border-gold focus:outline-none transition-colors`}
                      placeholder="+237 6XX XXX XXX"
                    />

                    {errors.telephone && (
                      <p className="text-red-400 text-xs mt-1">
                        {errors.telephone}
                      </p>
                    )}
                  </div>

                  {/* MOT DE PASSE + CONFIRMATION */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

                    {/* MOT DE PASSE */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Mot de passe *
                      </label>

                      <div className="relative">
                        <input
                          type={
                            showPassword
                              ? 'text'
                              : 'password'
                          }
                          name="password"
                          value={formData.password}
                          onChange={handleChange}
                          className={`w-full px-4 py-3 rounded-xl border-2 ${
                            errors.password
                              ? 'border-red-400'
                              : 'border-gray-200'
                          } focus:border-gold focus:outline-none transition-colors pr-12`}
                          placeholder="Minimum 6 caractères"
                        />

                        <button
                          type="button"
                          onClick={() =>
                            setShowPassword(!showPassword)
                          }
                          className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gold transition-colors"
                          aria-label={
                            showPassword
                              ? 'Masquer le mot de passe'
                              : 'Afficher le mot de passe'
                          }
                        >
                          {showPassword ? '🙈' : '👁️'}
                        </button>
                      </div>

                      {errors.password && (
                        <p className="text-red-400 text-xs mt-1">
                          {errors.password}
                        </p>
                      )}
                    </div>

                    {/* CONFIRMATION */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Confirmer le mot de passe *
                      </label>

                      <input
                        type="password"
                        name="confirmPassword"
                        value={formData.confirmPassword}
                        onChange={handleChange}
                        className={`w-full px-4 py-3 rounded-xl border-2 ${
                          errors.confirmPassword
                            ? 'border-red-400'
                            : 'border-gray-200'
                        } focus:border-gold focus:outline-none transition-colors`}
                        placeholder="Confirmez votre mot de passe"
                      />

                      {errors.confirmPassword && (
                        <p className="text-red-400 text-xs mt-1">
                          {errors.confirmPassword}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              )}

              {/* ====================================== */}
              {/* ÉTAPE 2 */}
              {/* ====================================== */}

              {step === 2 && (
                <div className="space-y-4">

                  {/* NIVEAU */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Niveau d'études *
                    </label>

                    <select
                      name="niveau"
                      value={formData.niveau}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 rounded-xl border-2 ${
                        errors.niveau
                          ? 'border-red-400'
                          : 'border-gray-200'
                      } focus:border-gold focus:outline-none transition-colors`}
                    >
                      <option value="">
                        Sélectionnez un niveau
                      </option>

                      {niveaux.map((niveau) => (
                        <option
                          key={niveau}
                          value={niveau}
                        >
                          {niveau}
                        </option>
                      ))}
                    </select>

                    {errors.niveau && (
                      <p className="text-red-400 text-xs mt-1">
                        {errors.niveau}
                      </p>
                    )}
                  </div>

                  {/* FILIÈRE */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Filière *
                    </label>

                    <select
                      name="filiere"
                      value={formData.filiere}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 rounded-xl border-2 ${
                        errors.filiere
                          ? 'border-red-400'
                          : 'border-gray-200'
                      } focus:border-gold focus:outline-none transition-colors`}
                    >
                      <option value="">
                        Sélectionnez une filière
                      </option>

                      {filieres.map((filiere) => (
                        <option
                          key={filiere}
                          value={filiere}
                        >
                          {filiere}
                        </option>
                      ))}
                    </select>

                    {errors.filiere && (
                      <p className="text-red-400 text-xs mt-1">
                        {errors.filiere}
                      </p>
                    )}
                  </div>

                  {/* CONDITIONS */}
                  <div className="bg-cream rounded-xl p-4">
                    <div className="flex items-start gap-3">

                      <input
                        type="checkbox"
                        name="acceptConditions"
                        checked={formData.acceptConditions}
                        onChange={handleChange}
                        className="mt-1 w-5 h-5 rounded border-2 border-gray-300 focus:border-gold focus:ring-gold"
                      />

                      <div>
                        <label className="text-sm text-gray-700">
                          J'accepte les conditions générales
                          d'inscription *
                        </label>

                        <p className="text-xs text-gray-500 mt-1">
                          En cochant cette case, vous acceptez
                          que vos données soient traitées pour
                          l'inscription.
                        </p>
                      </div>
                    </div>

                    {errors.acceptConditions && (
                      <p className="text-red-400 text-xs mt-2">
                        {errors.acceptConditions}
                      </p>
                    )}
                  </div>
                </div>
              )}

              {/* ====================================== */}
              {/* BOUTONS */}
              {/* ====================================== */}

              <div className="flex gap-4 mt-8">

                {/* RETOUR */}
                {step > 1 && (
                  <button
                    type="button"
                    onClick={prevStep}
                    className="flex-1 px-6 py-3 rounded-xl border-2 border-gray-200 text-gray-600 font-semibold hover:bg-gray-50 transition-colors"
                  >
                    ← Retour
                  </button>
                )}

                {/* SUIVANT */}
                {step < 2 ? (
                  <button
                    type="button"
                    onClick={nextStep}
                    className="flex-1 bg-gold text-navy px-6 py-3 rounded-xl font-semibold hover:bg-gold/90 transition-all hover:shadow-lg"
                  >
                    Suivant →
                  </button>
                ) : (
                  /* ================================== */
                  /* BOUTON INSCRIPTION */
                  /* ================================== */
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`flex-1 bg-gold text-navy px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
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

                        Inscription en cours...
                      </span>
                    ) : (
                      "S'inscrire"
                    )}
                  </button>
                )}
              </div>
            </form>

            {/* ======================================== */}
            {/* PIED DU FORMULAIRE */}
            {/* ======================================== */}

            <div className="bg-cream px-8 py-4 border-t border-gray-100">
              <p className="text-center text-sm text-gray-500">
                Vous avez déjà un compte ?{' '}
                <button
                  type="button"
                  onClick={() => navigate('/espace-utilisateur')}
                  className="text-gold font-semibold hover:underline"
                >
                  Se connecter
                </button>
              </p>
            </div>

          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Registration;