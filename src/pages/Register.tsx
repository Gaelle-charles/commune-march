import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Building2, Store, Eye, EyeOff, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import { cn } from '@/lib/utils';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { supabase } from '@/lib/supabaseClient';

type UserType = 'mairie' | 'commercant';
type RegisterStep = 'type' | 'info' | 'confirmation';

const Register = () => {
  const navigate = useNavigate();
  const [userType, setUserType] = useState<UserType>('mairie');
  const [currentStep, setCurrentStep] = useState<RegisterStep>('type');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    termsAccepted: false
  });
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Redirection automatique après inscription réussie
  useEffect(() => {
    if (currentStep === 'confirmation') {
      const timer = setTimeout(() => {
        navigate(userType === 'commercant' ? '/commercantAccount' : '/mairieAccount');
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [currentStep, navigate, userType]);

  const updateFormData = (field: string, value: string | boolean) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleNext = async () => {
    if (currentStep === 'type') {
      setCurrentStep('info');
    } else if (currentStep === 'info') {
      // Validation des champs
      if (formData.password !== formData.confirmPassword) {
        setError('Les mots de passe ne correspondent pas.');
        return;
      }

      if (!formData.termsAccepted) {
        setError('Vous devez accepter les conditions d\'utilisation.');
        return;
      }

      setIsLoading(true);
      setError(null);

      try {
        // Inscription avec Supabase
        const { data: authData, error: authError } = await supabase.auth.signUp({
          email: formData.email,
          password: formData.password,
          options: {
            data: {
              name: formData.name,
              user_type: userType
            }
          }
        });

        if (authError) throw authError;

        // Ajout dans la table profiles
        const { error: profileError } = await supabase
          .from('profiles')
          .upsert({
            id: authData.user?.id,
            name: formData.name,
            user_type: userType,
            email: formData.email,
            updated_at: new Date().toISOString()
          });

        if (profileError) throw profileError;

        setCurrentStep('confirmation');
      } catch (error: any) {
        console.error('Erreur d\'inscription:', error);
        setError(error.message || 'Une erreur est survenue lors de l\'inscription.');
      } finally {
        setIsLoading(false);
      }
    }
  };

  const renderUserTypeStep = () => (
    <div className="space-y-6 animate-fadeIn">
      <h3 className="text-xl font-display font-medium text-center">Choisissez votre profil</h3>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <button
          type="button"
          className={cn(
            "flex flex-col items-center p-6 rounded-xl transition-all",
            userType === 'mairie' 
              ? "bg-accent border-2 border-primary shadow-lg" 
              : "bg-white border border-muted hover:border-primary/50"
          )}
          onClick={() => setUserType('mairie')}
        >
          <div className={cn(
            "w-16 h-16 rounded-full flex items-center justify-center mb-4",
            userType === 'mairie' ? "bg-primary text-white" : "bg-muted text-muted-foreground"
          )}>
            <Building2 size={32} />
          </div>
          <h4 className="font-medium">Mairie</h4>
          <p className="text-sm text-muted-foreground mt-2 text-center">
            Gérez vos marchés et suivez les réservations
          </p>
        </button>
        
        <button
          type="button"
          className={cn(
            "flex flex-col items-center p-6 rounded-xl transition-all",
            userType === 'commercant' 
              ? "bg-accent border-2 border-primary shadow-lg" 
              : "bg-white border border-muted hover:border-primary/50"
          )}
          onClick={() => setUserType('commercant')}
        >
          <div className={cn(
            "w-16 h-16 rounded-full flex items-center justify-center mb-4",
            userType === 'commercant' ? "bg-primary text-white" : "bg-muted text-muted-foreground"
          )}>
            <Store size={32} />
          </div>
          <h4 className="font-medium">Commerçant</h4>
          <p className="text-sm text-muted-foreground mt-2 text-center">
            Gérez vos produits et emplacements
          </p>
        </button>
      </div>
      
      <Button className="w-full" onClick={handleNext}>
        Continuer
      </Button>
    </div>
  );

  const renderInfoStep = () => (
    <div className="space-y-6 animate-fadeIn">
      <div className="flex items-center justify-center mb-4">
        <div className={cn(
          "w-12 h-12 rounded-full flex items-center justify-center",
          userType === 'mairie' ? "bg-primary/20 text-primary" : 
          userType === 'commercant' ? "bg-primary/20 text-primary" : 
          "bg-primary/20 text-primary"
        )}>
          {userType === 'mairie' ? <Building2 size={24} /> : <Store size={24} />}
        </div>
        <h3 className="text-xl font-display font-medium ml-3">
          Inscription - {userType === 'mairie' ? 'Mairie' : 'Commerçant'}
        </h3>
      </div>

      {error && (
        <div className="p-3 bg-red-100 text-red-700 rounded-md text-sm">
          {error}
        </div>
      )}
      
      <div className="space-y-4">
        <div className="space-y-1">
          <Label htmlFor="name">
            {userType === 'mairie' ? 'Nom de la commune' : 'Nom de l\'entreprise'}
          </Label>
          <Input
            id="name"
            placeholder={userType === 'mairie' ? 'Commune de...' : 'Nom de votre commerce'}
            value={formData.name}
            onChange={(e) => updateFormData('name', e.target.value)}
            required
          />
        </div>
        
        <div className="space-y-1">
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            type="email"
            placeholder="exemple@domaine.com"
            value={formData.email}
            onChange={(e) => updateFormData('email', e.target.value)}
            required
          />
        </div>
        
        <div className="space-y-1">
          <Label htmlFor="password">Mot de passe</Label>
          <div className="relative">
            <Input
              id="password"
              type={showPassword ? 'text' : 'password'}
              placeholder="••••••••"
              value={formData.password}
              onChange={(e) => updateFormData('password', e.target.value)}
              required
            />
            <button
              type="button"
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
            </button>
          </div>
        </div>
        
        <div className="space-y-1">
          <Label htmlFor="confirmPassword">Confirmez le mot de passe</Label>
          <div className="relative">
            <Input
              id="confirmPassword"
              type={showPassword ? 'text' : 'password'}
              placeholder="••••••••"
              value={formData.confirmPassword}
              onChange={(e) => updateFormData('confirmPassword', e.target.value)}
              required
            />
          </div>
        </div>
        
        <div className="flex items-center space-x-2 pt-2">
          <Checkbox 
            id="terms" 
            checked={formData.termsAccepted}
            onCheckedChange={(checked) => updateFormData('termsAccepted', Boolean(checked))}
            required
          />
          <label
            htmlFor="terms"
            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          >
            J'accepte les{' '}
            <Link to="/terms" className="text-primary hover:underline">
              conditions d'utilisation
            </Link>{' '}
            et la{' '}
            <Link to="/privacy" className="text-primary hover:underline">
              politique de confidentialité
            </Link>
          </label>
        </div>
      </div>
      
      <div className="flex flex-col-reverse sm:flex-row gap-4">
        <Button variant="outline" className="sm:flex-1" onClick={() => setCurrentStep('type')}>
          Retour
        </Button>
        <Button 
          className="sm:flex-1" 
          onClick={handleNext} 
          disabled={isLoading || !formData.name || !formData.email || !formData.password || formData.password !== formData.confirmPassword || !formData.termsAccepted}
        >
          {isLoading ? (
            <span className="flex items-center">
              <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Création en cours...
            </span>
          ) : (
            "Créer mon compte"
          )}
        </Button>
      </div>
    </div>
  );

  const renderConfirmationStep = () => (
    <div className="text-center space-y-6 animate-fadeIn">
      <div className="flex justify-center">
        <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center text-green-600">
          <Check size={40} />
        </div>
      </div>
      
      <h3 className="text-2xl font-display font-medium">Inscription réussie !</h3>
      
      <p className="text-muted-foreground">
        {userType === 'mairie'
          ? 'Votre compte mairie a été créé avec succès. Vous serez redirigé vers votre espace dans quelques secondes.'
          : 'Votre compte commerçant a été créé avec succès. Vous serez redirigé vers votre espace dans quelques secondes.'}
      </p>
      
      <Button asChild className="w-full">
        <Link to={userType === 'commercant' ? '/commercantAccount' : '/mairieAccount'}>
          Accéder à mon compte maintenant
        </Link>
      </Button>
    </div>
  );

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      
      <main className="flex-1 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-xl">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-display font-semibold">Créer un compte</h2>
            <p className="mt-2 text-muted-foreground">
              Rejoignez CommuneMarch pour une meilleure expérience de marché
            </p>
          </div>
          
          <div className="bg-white shadow-md rounded-2xl p-8">
            {currentStep === 'type' && renderUserTypeStep()}
            {currentStep === 'info' && renderInfoStep()}
            {currentStep === 'confirmation' && renderConfirmationStep()}
          </div>
          
          {(currentStep === 'type' || currentStep === 'info') && (
            <div className="mt-6 text-center text-sm">
              <p>
                Déjà inscrit ?{' '}
                <Link to="/login" className="text-primary hover:underline">
                  Se connecter
                </Link>
              </p>
            </div>
          )}
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Register;
