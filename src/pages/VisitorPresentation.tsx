
import React from 'react';
import { ArrowRight, MapPin, Calendar, ShoppingBag, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Map from '@/components/Map';

const VisitorPresentation = () => {
  // Sample commune list for display
  const topCommunes = [
    "Paris", "Marseille", "Lyon", "Toulouse", "Nice", 
    "Nantes", "Strasbourg", "Montpellier", "Bordeaux", "Lille"
  ];
  
  // Sample merchant categories
  const merchantCategories = [
    { name: "Producteurs", count: 543, icon: "🌱" },
    { name: "Artisans", count: 328, icon: "🔨" },
    { name: "Alimentaire", count: 651, icon: "🍎" },
    { name: "Vêtements", count: 217, icon: "👕" },
    { name: "Fleuristes", count: 124, icon: "🌸" },
    { name: "Créateurs", count: 198, icon: "✨" }
  ];
  
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 page-content bg-background">
        {/* Hero section */}
        <section className="py-12 md:py-24 bg-accent/10">
          <div className="container px-4 md:px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <h1 className="text-4xl md:text-5xl font-display font-semibold mb-4">
                  Découvrez les marchés près de chez vous
                </h1>
                <p className="text-xl text-muted-foreground mb-8">
                  CommuneMarch vous permet d'explorer les marchés de France, 
                  leurs horaires, les commerçants présents et les événements à venir.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Button size="lg" asChild>
                    <Link to="/register">
                      Espace Visiteur
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                  </Button>
                  <Button variant="outline" size="lg">
                    En savoir plus
                  </Button>
                </div>
              </div>
              <div className="rounded-xl overflow-hidden shadow-lg">
                <img 
                  src="https://images.unsplash.com/photo-1513125370-3460ebe3401b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                  alt="Marché local" 
                  className="w-full h-full object-cover aspect-[4/3]"
                />
              </div>
            </div>
          </div>
        </section>
        
        {/* Map section */}
        <Map />
        
        {/* Communes section */}
        <section className="py-16 bg-background">
          <div className="container px-4 md:px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-display font-semibold mb-4">
                Communes participantes
              </h2>
              <p className="text-xl text-muted-foreground mx-auto max-w-3xl">
                Découvrez les communes qui ont rejoint notre plateforme et explorez leurs marchés
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-8">
              {topCommunes.map(commune => (
                <Card key={commune} className="hover:shadow-md transition-shadow">
                  <CardContent className="p-4 text-center">
                    <Link to={`/commune/${commune}`} className="block">
                      <div className="flex justify-center mb-2">
                        <MapPin className="h-5 w-5 text-primary" />
                      </div>
                      <h3 className="font-medium">{commune}</h3>
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>
            
            <div className="text-center">
              <Button variant="outline" size="lg">
                Voir toutes les communes
              </Button>
            </div>
          </div>
        </section>
        
        {/* Merchants section */}
        <section className="py-16 bg-muted/30">
          <div className="container px-4 md:px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-display font-semibold mb-4">
                Nos commerçants
              </h2>
              <p className="text-xl text-muted-foreground mx-auto max-w-3xl">
                Une grande diversité de commerçants vous attendent sur les marchés
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-8">
              {merchantCategories.map(category => (
                <Card key={category.name} className="hover:shadow-md transition-shadow">
                  <CardContent className="p-4 text-center">
                    <div className="text-4xl mb-3">{category.icon}</div>
                    <h3 className="font-medium mb-1">{category.name}</h3>
                    <p className="text-sm text-muted-foreground">{category.count} commerçants</p>
                  </CardContent>
                </Card>
              ))}
            </div>
            
            <div className="text-center">
              <Button variant="outline" size="lg">
                Explorer les commerçants
              </Button>
            </div>
          </div>
        </section>
        
        {/* Visitor login section */}
        <section className="py-16 bg-primary/5">
          <div className="container px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-display font-semibold mb-4">
                Espace visiteur
              </h2>
              <p className="text-xl text-muted-foreground mb-8">
                Connectez-vous à votre espace visiteur pour recevoir des notifications sur les offres spéciales,
                les événements à venir et suivre vos marchés préférés.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button size="lg" asChild>
                  <Link to="/register">S'inscrire</Link>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <Link to="/login">Se connecter</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default VisitorPresentation;
