
import React from 'react';
import { CheckIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

// Pricing plans data
const pricingPlans = [
  {
    id: 'mairie-basique',
    title: 'Basique',
    description: 'Essentiel pour les petites communes',
    price: '39',
    period: 'mensuel',
    annual: '390',
    features: [
      'Gestion d\'un marché',
      'Emplacements limités à 50',
      'Tableau de bord de base',
      'Assistance par email',
      'Outils de réservation',
    ],
    highlight: false,
    type: 'mairie',
  },
  {
    id: 'mairie-standard',
    title: 'Standard',
    description: 'Idéal pour les communes moyennes',
    price: '89',
    period: 'mensuel',
    annual: '890',
    features: [
      'Gestion de 3 marchés',
      'Emplacements illimités',
      'Tableau de bord avancé',
      'Assistance prioritaire',
      'Outils de communication',
      'Système de paiement intégré',
    ],
    highlight: true,
    type: 'mairie',
  },
  {
    id: 'mairie-premium',
    title: 'Premium',
    description: 'Solution complète pour grandes communes',
    price: '149',
    period: 'mensuel',
    annual: '1490',
    features: [
      'Gestion illimitée de marchés',
      'Emplacements illimités',
      'Tableau de bord premium',
      'Assistance dédiée 7j/7',
      'Outils d\'analyse avancés',
      'Système de paiement intégré',
      'Événements spéciaux illimités',
    ],
    highlight: false,
    type: 'mairie',
  },
  {
    id: 'commercant-basique',
    title: 'Essentiel',
    description: 'Pour les commerçants indépendants',
    price: '19',
    period: 'mensuel',
    annual: '190',
    features: [
      'Profil commerçant complet',
      'Site vitrine de base',
      'Liste de produits (max 50)',
      'Notifications de fin de marché',
      'Assistance par email',
    ],
    highlight: false,
    type: 'commercant',
  },
  {
    id: 'commercant-premium',
    title: 'Premium',
    description: 'Pour les commerçants professionnels',
    price: '49',
    period: 'mensuel',
    annual: '490',
    features: [
      'Profil commerçant avancé',
      'Site vitrine personnalisable',
      'Produits illimités avec prix',
      'Notifications programmables',
      'Statistiques de vente',
      'Assistance prioritaire',
      'Visibilité renforcée',
    ],
    highlight: true,
    type: 'commercant',
  },
];

const Pricing = () => {
  const [userType, setUserType] = React.useState<'mairie' | 'commercant'>('mairie');
  const [annually, setAnnually] = React.useState(false);

  const filteredPlans = pricingPlans.filter(plan => plan.type === userType);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 py-16 bg-background">
        <div className="container px-4 md:px-6">
          <div className="text-center space-y-4 max-w-3xl mx-auto mb-12">
            <h1 className="text-4xl md:text-5xl font-display font-semibold">
              Des tarifs adaptés à chaque besoin
            </h1>
            <p className="text-xl text-muted-foreground">
              Choisissez le forfait qui vous convient pour optimiser la gestion de vos marchés.
            </p>
            
            {/* User type selector */}
            <div className="flex justify-center mt-8 mb-8">
              <div className="inline-flex items-center bg-muted p-1 rounded-lg">
                <button
                  onClick={() => setUserType('mairie')}
                  className={`px-5 py-2 rounded-md text-sm font-medium transition-colors ${
                    userType === 'mairie'
                      ? 'bg-white text-primary shadow-sm'
                      : 'text-muted-foreground hover:text-foreground'
                  }`}
                >
                  Mairies
                </button>
                <button
                  onClick={() => setUserType('commercant')}
                  className={`px-5 py-2 rounded-md text-sm font-medium transition-colors ${
                    userType === 'commercant'
                      ? 'bg-white text-primary shadow-sm'
                      : 'text-muted-foreground hover:text-foreground'
                  }`}
                >
                  Commerçants
                </button>
              </div>
            </div>
            
            {/* Billing period toggle */}
            <div className="flex justify-center items-center gap-2">
              <span className={`text-sm font-medium ${!annually ? 'text-foreground' : 'text-muted-foreground'}`}>
                Mensuel
              </span>
              <button
                onClick={() => setAnnually(!annually)}
                className="relative inline-flex h-6 w-11 items-center rounded-full bg-primary/20"
              >
                <span
                  className={`inline-block h-4 w-4 transform rounded-full bg-primary transition-transform ${
                    annually ? 'translate-x-6' : 'translate-x-1'
                  }`}
                />
              </button>
              <span className={`text-sm font-medium ${annually ? 'text-foreground' : 'text-muted-foreground'}`}>
                Annuel <span className="text-xs text-green-600 font-medium">(-15%)</span>
              </span>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {filteredPlans.map((plan) => (
              <Card 
                key={plan.id} 
                className={`flex flex-col h-full border-2 ${
                  plan.highlight 
                    ? 'border-primary shadow-lg scale-105 relative' 
                    : 'border-border'
                }`}
              >
                {plan.highlight && (
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-primary text-white text-xs font-medium px-3 py-1 rounded-full">
                    Recommandé
                  </div>
                )}
                <CardHeader>
                  <CardTitle className="text-2xl">{plan.title}</CardTitle>
                  <CardDescription>{plan.description}</CardDescription>
                  <div className="mt-4">
                    <span className="text-4xl font-display font-bold">
                      {annually ? 
                        `${(parseInt(plan.annual) * 0.85).toFixed(0)}€` : 
                        `${plan.price}€`}
                    </span>
                    <span className="text-muted-foreground ml-1">
                      /{annually ? 'an' : plan.period}
                    </span>
                    {annually && (
                      <div className="text-green-600 text-sm font-medium mt-1">
                        Économisez {(parseInt(plan.annual) * 0.15).toFixed(0)}€ par an
                      </div>
                    )}
                  </div>
                </CardHeader>
                <CardContent className="flex-1">
                  <ul className="space-y-3">
                    {plan.features.map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <CheckIcon className="h-5 w-5 text-primary shrink-0 mr-3" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button className={`w-full ${plan.highlight ? '' : 'bg-primary/90 hover:bg-primary'}`}>
                    Sélectionner
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
          
          <div className="mt-20 text-center max-w-3xl mx-auto">
            <h2 className="text-2xl font-display font-semibold mb-4">
              Vous avez des besoins spécifiques ?
            </h2>
            <p className="text-muted-foreground mb-8">
              Nous proposons également des solutions sur mesure pour les collectivités et associations 
              de commerçants. Contactez notre équipe pour discuter de vos besoins.
            </p>
            <Button asChild variant="outline" size="lg">
              <Link to="/contact">Nous contacter</Link>
            </Button>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Pricing;
