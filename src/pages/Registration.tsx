import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Layout from '../components/layout/Layout';

interface UserData {
  nom: string;
  prenom: string;
  email: string;
  telephone: string;
  password: string;
  confirmPassword: string;
  niveau: string;
  classe: string;
  section: string;
  filiere: string;
  acceptConditions: boolean;
}

interface FormErrors {
  nom?: string;
  prenom?: string;
  email?: string;
  telephone?: string;
  password?: string;
  confirmPassword?: string;
  niveau?: string;
  classe?: string;
  section?: string;
  filiere?: string;
  acceptConditions?: string;
}

const Registration = () => {
  const navigate = useNavigate();

  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [accountError, setAccountError] = useState('');

  const [formData, setFormData] = useState<UserData>({
    nom: '',
    prenom: '',
    email: '',
    telephone: '',
    password: '',
    confirmPassword: '',
    niveau: '',
    classe: '',
    section: '',
    filiere: '',
    acceptConditions: false,
  });

  const [errors, setErrors] = useState<FormErrors>({});

  const niveaux = [
    'Maternelle',
    'Primaire',
    'Secondaire Général',
    'Secondaire Technique',
    'Supérieur / Formation Professionnelle',
  ];

  const classesMaternelle = [
    'Petite Section',
    'Moyenne Section',
    'Grande Section',
  ];

  const classesPrimaire = [
    'SIL',
    'CP',
    'CE1',
    'CE2',
    'CM1',
    'CM2',
  ];

  const classesSecondaireGeneral = [
    '6ème',
    '5ème',
    '4ème',
    '3ème',
    'Seconde',
    'Première',
    'Terminale',
  ];

  const classesSecondaireTechnique = [
    '6ème',
    '5ème',
    '4ème',
    '3ème',
    'Seconde',
    'Première',
    'Terminale',
  ];

  const classesSuperieur = [
    '1ère année',
    '2ème année',
    '3ème année',
  ];

  const sections = [
    'Francophone',
    'Anglophone',
  ];

  const filieres = [
    'Gestion des Entreprises',
    'Informatique et Technologies',
    'Art et Design',
    'Bâtiment et Travaux Publics',
    'Hôtellerie et Tourisme',
  ];

  const isSecondaire =
    formData.niveau === 'Secondaire Général' ||
    formData.niveau === 'Secondaire Technique';

  const isSuperieur =
    formData.niveau === 'Supérieur / Formation Professionnelle';

  const getClasses = () => {
    if (formData.niveau === 'Maternelle') {
      return classesMaternelle;
    }

    if (formData.niveau === 'Primaire') {
      return classesPrimaire;
    }

    if (formData.niveau === 'Secondaire Général') {
      return classesSecondaireGeneral;
    }

    if (formData.niveau === 'Secondaire Technique') {
      return classesSecondaireTechnique;
    }

    if (isSuperieur) {
      return classesSuperieur;
    }

    return [];
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = e.target;

    const newValue =
      type === 'checkbox'
        ? (e.target as HTMLInputElement).checked
        : value;

    setAccountError('');

    if (name === 'niveau') {
      setFormData((prev) => ({
        ...prev,
        niveau: value,
        classe: '',
        section: '',
        filiere: '',
      }));

      setErrors((prev) => ({
        ...prev,
        niveau: undefined,
        classe: undefined,
        section: undefined,
        filiere: undefined,
      }));

      return;
    }

    setFormData((prev) => ({
      ...prev,
      [name]: newValue,
    }));

    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({
        ...prev,
        [name]: undefined,
      }));
    }
  };

  const validateStep = (): boolean => {
    const newErrors: FormErrors = {};

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

      const users = JSON.parse(
        localStorage.getItem('users') || '[]'
      );

      const oldUser = users.find(
        (user: UserData) =>
          user.email.toLowerCase() === formData.email.trim().toLowerCase()
      );

      const currentUser = JSON.parse(
        localStorage.getItem('user') || 'null'
      );

      if (oldUser || currentUser?.email?.toLowerCase() === formData.email.trim().toLowerCase()) {
        newErrors.email = 'Cette adresse email possède déjà un compte';
      }
    }

    if (step === 2) {
      if (!formData.niveau) {
        newErrors.niveau = 'Veuillez sélectionner un niveau';
      }

      if (!formData.classe) {
        newErrors.classe = 'Veuillez sélectionner une classe';
      }

      if (isSecondaire && !formData.section) {
        newErrors.section = 'Veuillez sélectionner une section';
      }

      if (isSuperieur && !formData.filiere) {
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

  const nextStep = () => {
    setAccountError('');

    if (validateStep()) {
      setStep((prev) => prev + 1);

      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    }
  };

  const prevStep = () => {
    setAccountError('');
    setStep((prev) => prev - 1);

    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!validateStep()) {
      return;
    }

    setIsSubmitting(true);
    setAccountError('');

    setTimeout(() => {
      const users = JSON.parse(
        localStorage.getItem('users') || '[]'
      );

      const email = formData.email.trim().toLowerCase();

      const existingUser = users.find(
        (user: UserData) =>
          user.email.toLowerCase() === email
      );

      if (existingUser) {
        setAccountError(
          'Cette adresse email possède déjà un compte. Connectez-vous avec votre compte existant.'
        );
        setIsSubmitting(false);
        return;
      }

      const userData = {
        id: Date.now().toString(),
        nom: formData.nom.trim(),
        prenom: formData.prenom.trim(),
        email,
        telephone: formData.telephone.trim(),
        password: formData.password,
        niveau: formData.niveau,
        classe: formData.classe,
        section: formData.section,
        filiere: formData.filiere,
        isLoggedIn: true,
        inscriptionDate: new Date().toLocaleDateString('fr-FR'),
        statutInscription: 'Inscription reçue',
      };

      users.push(userData);

      localStorage.setItem(
        'users',
        JSON.stringify(users)
      );

      localStorage.setItem(
        'user',
        JSON.stringify(userData)
      );

      setIsSubmitting(false);

      navigate('/');
      window.location.reload();
    }, 1000);
  };

  return (
    <Layout>
      <section className="relative min-h-[40vh] flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 bg-linear-to-br from-navy/90 via-navy/80 to-turquoise/40">
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

      <section className="py-16 bg-cream">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
            <div className="bg-linear-to-r from-navy to-navy/90 px-8 py-6">
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

            <form
              onSubmit={handleSubmit}
              className="p-8"
            >
              {accountError && (
                <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-xl text-red-500 text-sm">
                  <p>{accountError}</p>

                  <button
                    type="button"
                    onClick={() => navigate('/connexion')}
                    className="mt-2 text-gold font-semibold hover:underline"
                  >
                    Se connecter
                  </button>
                </div>
              )}

              {step === 1 && (
                <div className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
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

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
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

              {step === 2 && (
                <div className="space-y-4">
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

                  {formData.niveau && (
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Classe *
                      </label>

                      <select
                        name="classe"
                        value={formData.classe}
                        onChange={handleChange}
                        className={`w-full px-4 py-3 rounded-xl border-2 ${
                          errors.classe
                            ? 'border-red-400'
                            : 'border-gray-200'
                        } focus:border-gold focus:outline-none transition-colors`}
                      >
                        <option value="">
                          Sélectionnez une classe
                        </option>

                        {getClasses().map((classe) => (
                          <option
                            key={classe}
                            value={classe}
                          >
                            {classe}
                          </option>
                        ))}
                      </select>

                      {errors.classe && (
                        <p className="text-red-400 text-xs mt-1">
                          {errors.classe}
                        </p>
                      )}
                    </div>
                  )}

                  {isSecondaire && (
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Section *
                      </label>

                      <select
                        name="section"
                        value={formData.section}
                        onChange={handleChange}
                        className={`w-full px-4 py-3 rounded-xl border-2 ${
                          errors.section
                            ? 'border-red-400'
                            : 'border-gray-200'
                        } focus:border-gold focus:outline-none transition-colors`}
                      >
                        <option value="">
                          Sélectionnez une section
                        </option>

                        {sections.map((section) => (
                          <option
                            key={section}
                            value={section}
                          >
                            {section}
                          </option>
                        ))}
                      </select>

                      {errors.section && (
                        <p className="text-red-400 text-xs mt-1">
                          {errors.section}
                        </p>
                      )}
                    </div>
                  )}

                  {isSuperieur && (
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
                  )}

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

              <div className="flex gap-4 mt-8">
                {step > 1 && (
                  <button
                    type="button"
                    onClick={prevStep}
                    className="flex-1 px-6 py-3 rounded-xl border-2 border-gray-200 text-gray-600 font-semibold hover:bg-gray-50 transition-colors"
                  >
                    ← Retour
                  </button>
                )}

                {step < 2 ? (
                  <button
                    type="button"
                    onClick={nextStep}
                    className="flex-1 bg-gold text-navy px-6 py-3 rounded-xl font-semibold hover:bg-gold/90 transition-all hover:shadow-lg"
                  >
                    Suivant →
                  </button>
                ) : (
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

            <div className="bg-cream px-8 py-4 border-t border-gray-100">
              <p className="text-center text-sm text-gray-500">
                Vous avez déjà un compte ?{' '}
                <button
                  type="button"
                  onClick={() => navigate('/connexion')}
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