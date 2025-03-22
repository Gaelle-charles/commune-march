
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';

const Hero = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const scrollToUserTypes = () => {
    document.getElementById('user-types')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-accent/30 to-white dark:from-background dark:via-accent/5 dark:to-background -z-10" />
      
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden -z-10">
        <div className="absolute top-1/3 -right-64 w-96 h-96 bg-primary/10 rounded-full filter blur-3xl opacity-70 animate-pulse" />
        <div className="absolute -top-24 -left-24 w-72 h-72 bg-blue-300/20 rounded-full filter blur-3xl opacity-70" />
        <div className="absolute bottom-0 left-1/3 w-64 h-64 bg-indigo-300/20 rounded-full filter blur-3xl opacity-70" />
      </div>

      <div className="container mx-auto max-w-7xl px-6 pt-40 pb-24 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className={cn("space-y-8", isLoaded && "animate-slideUp")}>
            <div className="inline-block">
              <div className="bg-primary/10 text-primary px-4 py-1.5 rounded-full text-sm font-medium">
                Simplifiez la gestion de vos marchés
              </div>
            </div>
            
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-display font-semibold leading-tight">
              La solution digitale pour <span className="text-primary">les marchés</span> de France
            </h1>
            
            <p className="text-lg text-muted-foreground max-w-lg">
              Une plateforme unique qui connecte les mairies, les commerçants et les visiteurs pour une expérience de marché optimale.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button asChild size="lg" className="text-base font-medium px-8">
                <Link to="/register">Démarrer gratuitement</Link>
              </Button>
              <Button variant="outline" size="lg" className="text-base font-medium px-8" onClick={scrollToUserTypes}>
                Découvrir les fonctionnalités
              </Button>
            </div>
            
            <div className="pt-6">
              <p className="text-sm text-muted-foreground">
                Déjà utilisé par <span className="font-medium text-foreground">150+ communes</span> et <span className="font-medium text-foreground">2,500+ commerçants</span> à travers la France
              </p>
            </div>
          </div>
          
          <div className={cn("relative", isLoaded && "animate-scaleUp")}>
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-accent/30 rounded-3xl transform rotate-3 scale-105 opacity-70" />
            <div className="glass-card p-6 md:p-8 overflow-hidden">
              <div className="rounded-xl overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1595123550441-d377e017de6a?q=80&w=1073&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                  alt="Marché local en France" 
                  className="w-full h-auto object-cover aspect-video rounded-lg"
                  loading="lazy"
                />
              </div>
              
              <div className="mt-6 space-y-6">
                <div className="grid grid-cols-3 gap-4">
                  <div className="text-center">
                    <div className="font-semibold text-lg md:text-xl">10K+</div>
                    <div className="text-xs md:text-sm text-muted-foreground">Marchés</div>
                  </div>
                  <div className="text-center">
                    <div className="font-semibold text-lg md:text-xl">2.5K+</div>
                    <div className="text-xs md:text-sm text-muted-foreground">Commerçants</div>
                  </div>
                  <div className="text-center">
                    <div className="font-semibold text-lg md:text-xl">150+</div>
                    <div className="text-xs md:text-sm text-muted-foreground">Communes</div>
                  </div>
                </div>
                
                <div className="pt-4">
                  <div className="flex items-center gap-2">
                    <div className="flex -space-x-2">
                      {[1, 2, 3, 4].map((i) => (
                        <div key={i} className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center border-2 border-white text-xs font-medium">
                          {String.fromCharCode(64 + i)}
                        </div>
                      ))}
                    </div>
                    <span className="text-sm text-muted-foreground ml-2">
                      +1.2k nouveaux utilisateurs ce mois
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
