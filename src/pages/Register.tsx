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
import { useToast } from '@/hooks/use-toast';

type UserType = 'mairie' | 'commercant';
type RegisterStep = 'type' | 'info' | 'confirmation';

const Register = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
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

  const validateForm = () => {
    if (!formData.name) {
      setError('Le nom est requis');
      return false;
    }
    if (!formData.email.includes('@')) {
      setError('Email invalide');
      return false;
    }
    if (formData.password.length < 6) {
      setError('Le mot de passe doit contenir au moins 6 caractères');
      return false;
    }
    if (formData.password !== formData.confirmPassword) {
      setError('Les mots de passe ne correspondent pas');
      return false;
    }
    if (!formData.termsAccepted) {
      setError('Vous devez accepter les conditions');
      return false;
    }
    return true;
  };

  const handleNext = async () => {
    if (currentStep === 'type') {
      setCurrentStep('info');
      return;
    }

    if (!validateForm()) return;

    setIsLoading(true);
    setError(null);

    try {
      // 1. Création du compte auth
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
      if (!authData.user) throw new Error('No user returned');

      // 2. Création du profil
      const { error: profileError } = await supabase
        .from('profiles')
        .upsert({
          id: authData.user.id,
          name: formData.name,
          user_type: userType,
          email: formData.email,
          updated_at: new Date().toISOString()
        });

      if (profileError) throw profileError;

      // 3. Confirmation réussie
      setCurrentStep('confirmation');
      toast({
        title: "Inscription réussie !",
        description: `Bienvenue ${formData.name}`,
        variant: "default"
      });

    } catch (error: any) {
      console.error('Erreur:', error);
      const errorMsg = error.message || "Erreur lors de l'inscription";
      setError(errorMsg);
      toast({
        title: "Erreur",
        description: errorMsg,
        variant: "destructive"
      });
    } finally {
      setIsLoading(false);
    }
  };

  const renderUserTypeStep = () => (
    <div className="space-y-6 animate-fadeIn">
      <h3 className="text-xl font-display font-medium text-center">Choisissez votre profil</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {['mairie', 'commercant'].map((type) => (
          <button
            key={type}
            type="button"
            className={cn(
              "flex flex-col items-center p-6 rounded-xl transition-all",
              userType === type 
                ? "bg-accent border-2 border-primary shadow-lg" 
                : "bg-white border border-muted hover:border-primary/50"
            )}
            onClick={() => setUserType(type as UserType)}
          >
            <div className={cn(
              "w-16 h-16 rounded-full flex items-center justify-center mb-4",
              userType === type ? "bg-primary text-white" : "bg-muted text-muted-foreground"
            )}>
              {type === 'mairie' ? <Building2 size={32} /> : <Store size={32} />}
            </div>
            <h4 className="font-medium">{type === 'mairie' ? 'Mairie' : 'Commerçant'}</h4>
            <p className="text-sm text-muted-foreground mt-2 text-center">
              {type === 'mairie' 
                ? 'Gérez vos marchés et suivez les réservations' 
                : 'Gérez vos produits et emplacements'}
            </p>
          </button>
        ))}
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
            {userType === 'mairie' ? 'Nom de la commune' : 'Nom de votre commerce'}
          </Label>
          <Input
            id="name"
            placeholder={userType === 'mairie' ? 'Ex: Mairie de Paris' : 'Ex: Boulangerie Dupont'}
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
          <Label htmlFor="password">Mot de passe (6 caractères minimum)</Label>
          <div className="relative">
            <Input
              id="password"
              type={showPassword ? 'text' : 'password'}
              placeholder="••••••••"
              value={formData.password}
              onChange={(e) => updateFormData('password', e.target.value)}
              minLength={6}
              required
            />
            <button
              type="button"
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground"
              onClick={() => setShowPassword(!showPassword)}
              aria-label={showPassword ? "Cacher le mot de passe" : "Afficher le mot de passe"}
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
              minLength={6}
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
          <label htmlFor="terms" className="text-sm font-medium leading-none">
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
        <Button 
          variant="outline" 
          className="sm:flex-1" 
          onClick={() => setCurrentStep('type')}
          disabled={isLoading}
        >
          Retour
        </Button>
        <Button 
          className="sm:flex-1" 
          onClick={handleNext}
          disabled={isLoading}
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
          ? 'Votre compte mairie a été créé avec succès. Redirection en cours...'
          : 'Votre compte commerçant a été créé avec succès. Redirection en cours...'}
      </p>
      
      <div className="flex flex-col gap-2">
        <Button asChild>
          <Link to={userType === 'commercant' ? '/commercantAccount' : '/mairieAccount'}>
            Accéder à mon compte maintenant
          </Link>
        </Button>
        <Button variant="outline" asChild>
          <Link to="/">
            Retour à l'accueil
          </Link>
        </Button>
      </div>
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
              Rejoignez notre plateforme pour {userType === 'mairie' 
                ? 'gérer vos marchés' 
                : 'développer votre activité'}
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
