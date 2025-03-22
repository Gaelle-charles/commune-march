
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Tab, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent } from '@/components/ui/card';
import { Calendar, MapPin, ShoppingBag, Users } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

// Temporary mock data
const communeData = {
  commune: "Saint-Rémy-de-Provence",
  description: "Située au cœur de la Provence, Saint-Rémy est connue pour ses marchés traditionnels riches en produits régionaux.",
  image: "https://images.unsplash.com/photo-1569383746724-6c918b7d2808?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
  markets: [
    {
      id: 1,
      name: "Marché Provençal",
      day: "Mercredi",
      hours: "8h - 13h",
      location: "Place de la République",
      description: "Marché traditionnel avec produits locaux, fruits, légumes, fromages et artisanat."
    },
    {
      id: 2,
      name: "Marché Nocturne",
      day: "Vendredi (été)",
      hours: "18h - 23h",
      location: "Centre-ville",
      description: "Marché estival avec artisanat local, bijoux, objets décoratifs et spécialités culinaires."
    }
  ],
  merchants: [
    {
      id: 1,
      name: "Fromagerie Dupont",
      type: "Fromager",
      description: "Fromages artisanaux de chèvre et de brebis produits localement",
      image: "https://images.unsplash.com/photo-1452195100486-9cc805987862?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
    },
    {
      id: 2,
      name: "Les Fruits de Marie",
      type: "Primeur",
      description: "Fruits et légumes bio cultivés dans la région",
      image: "https://images.unsplash.com/photo-1518843875459-f738682238a6?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
    },
    {
      id: 3,
      name: "L'Olivier Provençal",
      type: "Huiles & Condiments",
      description: "Huiles d'olive, tapenades et condiments traditionnels",
      image: "https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
    }
  ],
  events: [
    {
      id: 1,
      title: "Fête de la Lavande",
      date: "15 juillet 2023",
      description: "Célébration annuelle de la lavande avec marché spécial, démonstrations et dégustations."
    },
    {
      id: 2,
      title: "Marché de Noël",
      date: "10-24 décembre 2023",
      description: "Marché traditionnel de Noël avec artisanat, produits régionaux et animations."
    }
  ]
};

const CommuneDetails = () => {
  const { communeName } = useParams<{ communeName: string }>();
  const [activeTab, setActiveTab] = useState("marches");
  
  // In a real app, you would fetch data based on the commune name
  const commune = communeData;
  
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 py-24 bg-background">
        <div className="container px-4 md:px-6">
          {/* Commune header */}
          <div className="relative rounded-xl overflow-hidden h-64 mb-8">
            <img 
              src={commune.image} 
              alt={commune.commune} 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
              <div className="p-6 text-white">
                <h1 className="text-3xl md:text-4xl font-display font-semibold mb-2">
                  {commune.commune}
                </h1>
                <div className="flex items-center">
                  <MapPin className="h-4 w-4 mr-1" />
                  <span>Provence-Alpes-Côte d'Azur</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mb-8">
            <p className="text-muted-foreground text-lg">
              {commune.description}
            </p>
          </div>
          
          {/* Tabs */}
          <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
            <TabsList className="grid grid-cols-3 mb-8">
              <TabsTrigger value="marches" className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                <span>Marchés</span>
              </TabsTrigger>
              <TabsTrigger value="commercants" className="flex items-center gap-2">
                <ShoppingBag className="h-4 w-4" />
                <span>Commerçants</span>
              </TabsTrigger>
              <TabsTrigger value="evenements" className="flex items-center gap-2">
                <Users className="h-4 w-4" />
                <span>Événements</span>
              </TabsTrigger>
            </TabsList>
            
            <TabsContent value="marches" className="space-y-6">
              <h2 className="text-2xl font-display font-semibold mb-4">Les marchés de {commune.commune}</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {commune.markets.map(market => (
                  <Card key={market.id}>
                    <CardContent className="p-6">
                      <h3 className="text-xl font-medium mb-2">{market.name}</h3>
                      <div className="text-muted-foreground mb-4">
                        <p><strong>Jour:</strong> {market.day}</p>
                        <p><strong>Horaires:</strong> {market.hours}</p>
                        <p><strong>Lieu:</strong> {market.location}</p>
                      </div>
                      <p>{market.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="commercants" className="space-y-6">
              <h2 className="text-2xl font-display font-semibold mb-4">Commerçants à {commune.commune}</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {commune.merchants.map(merchant => (
                  <Card key={merchant.id} className="overflow-hidden">
                    <div className="aspect-video w-full overflow-hidden">
                      <img src={merchant.image} alt={merchant.name} className="w-full h-full object-cover" />
                    </div>
                    <CardContent className="p-6">
                      <h3 className="text-xl font-medium mb-1">{merchant.name}</h3>
                      <p className="text-sm text-muted-foreground mb-3">{merchant.type}</p>
                      <p>{merchant.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="evenements" className="space-y-6">
              <h2 className="text-2xl font-display font-semibold mb-4">Événements à {commune.commune}</h2>
              <div className="space-y-4">
                {commune.events.map(event => (
                  <Card key={event.id}>
                    <CardContent className="p-6">
                      <h3 className="text-xl font-medium mb-2">{event.title}</h3>
                      <p className="text-muted-foreground mb-3">
                        <Calendar className="inline mr-2 h-4 w-4" />
                        {event.date}
                      </p>
                      <p>{event.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default CommuneDetails;
