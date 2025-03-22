
import { useEffect, useState } from 'react';
import { Check, Building2, Store, User } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const features = {
  mairies: [
    "Gestion des emplacements de marché",
    "Suivi des réservations et paiements",
    "Tableau de bord d'analyse",
    "Gestion des événements spéciaux",
    "Communication avec les commerçants",
    "Contrôle des dossiers administratifs"
  ],
  commercants: [
    "Réservation d'emplacements simplifiée",
    "Gestion des produits et inventaires",
    "Notifications pour ventes de fin de marché",
    "Promotion des offres spéciales",
    "Analyse des performances de vente",
    "Présence sur la carte interactive"
  ],
  visiteurs: [
    "Carte interactive des marchés",
    "Recherche des produits locaux",
    "Découverte des commerçants",
    "Notifications d'événements",
    "Promotions de dernière minute",
    "Soutien aux commerces locaux"
  ]
};

const UserTypeSection = () => {
  const [activeTab, setActiveTab] = useState<'mairies' | 'commercants' | 'visiteurs'>('mairies');
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById('user-types');
      if (section) {
        const rect = section.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom >= 0) {
          setIsVisible(true);
        }
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check initial position
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section id="user-types" className="py-24 bg-secondary/40">
      <div className="container mx-auto max-w-7xl px-6">
        <div className={cn(
          "text-center mx-auto max-w-3xl mb-16 opacity-0 transform translate-y-8 transition-all duration-700 ease-out",
          isVisible && "opacity-100 transform-none"
        )}>
          <h2 className="text-3xl sm:text-4xl font-display font-semibold mb-4">
            Une solution pour chaque acteur du marché
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Que vous soyez une mairie, un commerçant ou un visiteur, CommuneMarch vous offre les outils adaptés à vos besoins.
          </p>
        </div>

        <div className={cn(
          "bg-white rounded-2xl shadow-lg mb-16 opacity-0 transform translate-y-8 transition-all duration-700 ease-out delay-100",
          isVisible && "opacity-100 transform-none"
        )}>
          <div className="flex flex-wrap border-b">
            <button
              className={cn(
                "flex items-center space-x-2 px-6 py-4 text-sm font-medium transition-colors",
                activeTab === 'mairies'
                  ? "border-b-2 border-primary text-primary"
                  : "text-muted-foreground hover:text-foreground"
              )}
              onClick={() => setActiveTab('mairies')}
            >
              <Building2 size={18} />
              <span>Pour les mairies</span>
            </button>
            <button
              className={cn(
                "flex items-center space-x-2 px-6 py-4 text-sm font-medium transition-colors",
                activeTab === 'commercants'
                  ? "border-b-2 border-primary text-primary"
                  : "text-muted-foreground hover:text-foreground"
              )}
              onClick={() => setActiveTab('commercants')}
            >
              <Store size={18} />
              <span>Pour les commerçants</span>
            </button>
            <button
              className={cn(
                "flex items-center space-x-2 px-6 py-4 text-sm font-medium transition-colors",
                activeTab === 'visiteurs'
                  ? "border-b-2 border-primary text-primary"
                  : "text-muted-foreground hover:text-foreground"
              )}
              onClick={() => setActiveTab('visiteurs')}
            >
              <User size={18} />
              <span>Pour les visiteurs</span>
            </button>
          </div>

          <div className="p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
              <div>
                <h3 className="text-2xl font-display font-medium mb-6">
                  {activeTab === 'mairies' && "Simplifiez la gestion de vos marchés"}
                  {activeTab === 'commercants' && "Développez votre activité sur les marchés"}
                  {activeTab === 'visiteurs' && "Découvrez les marchés près de chez vous"}
                </h3>
                
                <p className="text-muted-foreground mb-8">
                  {activeTab === 'mairies' && "Notre plateforme vous permet de digitaliser entièrement la gestion de vos marchés locaux, d'optimiser les emplacements et d'améliorer la communication avec les commerçants."}
                  {activeTab === 'commercants' && "Gérez vos emplacements, faites la promotion de vos produits et attirez plus de clients grâce à des outils spécialement conçus pour les commerçants de marché."}
                  {activeTab === 'visiteurs' && "Trouvez facilement les marchés proches de chez vous, découvrez les commerçants présents et recevez des notifications sur les promotions de dernière minute."}
                </p>
                
                <ul className="space-y-3 mb-8">
                  {features[activeTab].map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <div className="mr-3 mt-1 bg-primary/10 text-primary p-1 rounded-full">
                        <Check size={14} />
                      </div>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Button asChild size="lg">
                  <Link to="/register">
                    {activeTab === 'mairies' && "Espace mairie"}
                    {activeTab === 'commercants' && "Espace commerçant"}
                    {activeTab === 'visiteurs' && "Découvrir les marchés"}
                  </Link>
                </Button>
              </div>
              
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-accent/50 to-primary/10 rounded-2xl transform rotate-2 scale-105 -z-10" />
                <div className="bg-white rounded-2xl shadow-md p-2 overflow-hidden">
                  <img 
                    src={
                      activeTab === 'mairies' 
                        ? "https://images.unsplash.com/photo-1577017040065-650ee4d43339?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                        : activeTab === 'commercants'
                        ? "https://images.unsplash.com/photo-1488459716781-31db52582fe9?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        : "https://images.unsplash.com/photo-1573246123716-6b1782bfc499?q=80&w=1160&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    }
                    alt={
                      activeTab === 'mairies' 
                        ? "Gestion de marché pour mairies" 
                        : activeTab === 'commercants'
                        ? "Commerçants sur un marché"
                        : "Visiteurs découvrant un marché"
                    }
                    className="w-full h-auto rounded-xl"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UserTypeSection;
