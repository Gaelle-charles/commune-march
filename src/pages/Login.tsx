
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Building2, Store, Eye, EyeOff } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { cn } from '@/lib/utils';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

type UserType = 'mairie' | 'commercant';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [userType, setUserType] = useState<UserType>('mairie');
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Simuler un délai d'authentification
    setTimeout(() => {
      console.log('Login attempt', { email, password, userType });
      setIsLoading(false);
      // Ici, nous ajouterions la logique d'authentification réelle
    }, 1500);
  };

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      
      <main className="flex-1 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-md space-y-8">
          <div className="text-center">
            <h2 className="text-3xl font-display font-semibold">Se connecter</h2>
            <p className="mt-2 text-muted-foreground">
              Accédez à votre espace {userType === 'mairie' ? 'mairie' : 'commerçant'}
            </p>
          </div>
          
          <div className="bg-white shadow-md rounded-2xl p-8 space-y-6 animate-fadeIn">
            {/* User type selector - removed visitor option */}
            <div className="grid grid-cols-2 gap-2 p-1 bg-muted rounded-lg">
              <button
                type="button"
                className={cn(
                  "flex items-center justify-center gap-2 py-2 px-3 rounded-md text-sm transition-colors",
                  userType === 'mairie' 
                    ? "bg-white shadow-sm text-primary" 
                    : "text-muted-foreground hover:text-foreground"
                )}
                onClick={() => setUserType('mairie')}
              >
                <Building2 size={16} />
                <span>Mairie</span>
              </button>
              
              <button
                type="button"
                className={cn(
                  "flex items-center justify-center gap-2 py-2 px-3 rounded-md text-sm transition-colors",
                  userType === 'commercant' 
                    ? "bg-white shadow-sm text-primary" 
                    : "text-muted-foreground hover:text-foreground"
                )}
                onClick={() => setUserType('commercant')}
              >
                <Store size={16} />
                <span>Commerçant</span>
              </button>
            </div>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-1">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="exemple@domaine.com"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              
              <div className="space-y-1">
                <div className="flex items-center justify-between">
                  <Label htmlFor="password">Mot de passe</Label>
                  <Link to="/forgot-password" className="text-sm text-primary hover:underline">
                    Mot de passe oublié ?
                  </Link>
                </div>
                <div className="relative">
                  <Input
                    id="password"
                    type={showPassword ? 'text' : 'password'}
                    placeholder="••••••••"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
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
              
              <Button 
                type="submit" 
                className="w-full" 
                disabled={isLoading}
              >
                {isLoading ? (
                  <span className="flex items-center">
                    <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Connexion en cours...
                  </span>
                ) : (
                  "Se connecter"
                )}
              </Button>
            </form>
            
            <div className="mt-6 text-center text-sm">
              <p>
                Pas encore inscrit ?{' '}
                <Link to="/register" className="text-primary hover:underline">
                  Créer un compte
                </Link>
              </p>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Login;
