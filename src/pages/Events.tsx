
import React, { useState } from 'react';
import { CalendarDays, Search, MapPin, ArrowRight, Users, Filter } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

// Sample events data
const eventsData = [
  {
    id: 1,
    title: 'Marché de Noël',
    commune: 'Saint-Rémy-de-Provence',
    date: 'Du 15 au 24 décembre 2023',
    description: 'Découvrez notre traditionnel marché de Noël avec plus de 40 artisans et commerçants locaux, animations pour enfants et décorations féeriques.',
    image: 'https://images.unsplash.com/photo-1512201078372-9c6b2a0d528a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    type: 'Festif',
    merchants: 42,
    status: 'upcoming'
  },
  {
    id: 2,
    title: 'Marché des Producteurs',
    commune: 'Arles',
    date: 'Tous les lundis de mai à septembre - 17h à 22h',
    description: 'Un marché estival où les producteurs locaux vous proposent leurs produits frais et de saison. Dégustations et animations culinaires au programme.',
    image: 'https://images.unsplash.com/photo-1488459716781-31db52582fe9?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    type: 'Gastronomie',
    merchants: 25,
    status: 'active'
  },
  {
    id: 3,
    title: 'Foire aux vins',
    commune: 'Aix-en-Provence',
    date: 'Du 10 au 12 juin 2023',
    description: 'Rencontrez les vignerons de la région et dégustez les meilleurs crus provençaux dans une ambiance conviviale au cœur de la ville.',
    image: 'https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    type: 'Gastronomie',
    merchants: 30,
    status: 'past'
  },
  {
    id: 4,
    title: 'Marché artisanal nocturne',
    commune: 'Cassis',
    date: 'Les vendredis de juillet et août - 18h à minuit',
    description: 'Profitez des douces soirées d\'été pour découvrir l\'artisanat local dans une ambiance festive, avec musique et restauration sur place.',
    image: 'https://images.unsplash.com/photo-1519248200454-8f2590ed22b7?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    type: 'Artisanat',
    merchants: 35,
    status: 'upcoming'
  },
  {
    id: 5,
    title: 'Salon des Santonniers',
    commune: 'Marseille',
    date: 'Du 18 novembre au 31 décembre 2023',
    description: 'Le traditionnel salon qui réunit les meilleurs santonniers de la région pour vous faire découvrir cet art provençal unique.',
    image: 'https://images.unsplash.com/photo-1544113559-1ef595ce024f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    type: 'Artisanat',
    merchants: 20,
    status: 'upcoming'
  },
  {
    id: 6,
    title: 'Marché des Créateurs',
    commune: 'Avignon',
    date: 'Chaque premier dimanche du mois',
    description: 'Découvrez les talents locaux qui proposent leurs créations originales : bijoux, vêtements, objets de décoration, arts plastiques...',
    image: 'https://images.unsplash.com/photo-1515377905703-c4788e51af15?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    type: 'Artisanat',
    merchants: 15,
    status: 'active'
  },
];

const Events = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCommune, setSelectedCommune] = useState('all');
  const [selectedType, setSelectedType] = useState('all');
  const [selectedStatus, setSelectedStatus] = useState('all');
  
  // List of unique communes for the filter
  const communes = [...new Set(eventsData.map(event => event.commune))].sort();
  
  // List of unique event types for the filter
  const eventTypes = [...new Set(eventsData.map(event => event.type))].sort();
  
  // Apply filters
  const filteredEvents = eventsData.filter(event => {
    const matchesSearch = event.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          event.commune.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          event.description.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesCommune = selectedCommune === 'all' || event.commune === selectedCommune;
    const matchesType = selectedType === 'all' || event.type === selectedType;
    const matchesStatus = selectedStatus === 'all' || event.status === selectedStatus;
    
    return matchesSearch && matchesCommune && matchesType && matchesStatus;
  });
  
  const clearFilters = () => {
    setSearchTerm('');
    setSelectedCommune('all');
    setSelectedType('all');
    setSelectedStatus('all');
  };
  
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 py-16 bg-background">
        <div className="container px-4 md:px-6">
          <div className="max-w-3xl mx-auto mb-12 text-center">
            <h1 className="text-4xl md:text-5xl font-display font-semibold mb-4">
              Événements des marchés
            </h1>
            <p className="text-xl text-muted-foreground">
              Découvrez les marchés spéciaux et événements organisés par les communes
            </p>
          </div>
          
          {/* Filters */}
          <div className="mb-12 max-w-5xl mx-auto">
            <Card>
              <CardContent className="p-6">
                <div className="grid grid-cols-1 lg:grid-cols-5 gap-4">
                  <div className="lg:col-span-2">
                    <div className="relative">
                      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                      <Input
                        placeholder="Rechercher un événement ou une commune..."
                        className="pl-10"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                      />
                    </div>
                  </div>
                  
                  <div>
                    <Select value={selectedCommune} onValueChange={setSelectedCommune}>
                      <SelectTrigger>
                        <SelectValue placeholder="Commune" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">Toutes les communes</SelectItem>
                        {communes.map(commune => (
                          <SelectItem key={commune} value={commune}>{commune}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div>
                    <Select value={selectedType} onValueChange={setSelectedType}>
                      <SelectTrigger>
                        <SelectValue placeholder="Type d'événement" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">Tous les types</SelectItem>
                        {eventTypes.map(type => (
                          <SelectItem key={type} value={type}>{type}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div>
                    <Select value={selectedStatus} onValueChange={setSelectedStatus}>
                      <SelectTrigger>
                        <SelectValue placeholder="Statut" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">Tous les événements</SelectItem>
                        <SelectItem value="active">En cours</SelectItem>
                        <SelectItem value="upcoming">À venir</SelectItem>
                        <SelectItem value="past">Passés</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div className="lg:col-span-5 flex justify-end">
                    {(searchTerm || selectedCommune !== 'all' || selectedType !== 'all' || selectedStatus !== 'all') && (
                      <Button variant="outline" onClick={clearFilters} className="flex items-center">
                        <Filter className="mr-2 h-4 w-4" />
                        Effacer les filtres
                      </Button>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          
          {/* Events list */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredEvents.length > 0 ? (
              filteredEvents.map(event => (
                <Card key={event.id} className="overflow-hidden hover-card">
                  <div className="relative aspect-[4/3] w-full overflow-hidden">
                    <img
                      src={event.image}
                      alt={event.title}
                      className="object-cover w-full h-full transition-transform hover:scale-105"
                    />
                    <div className="absolute top-4 right-4">
                      <Badge 
                        className={`
                          ${event.status === 'active' ? 'bg-green-100 text-green-800 hover:bg-green-200' : 
                            event.status === 'upcoming' ? 'bg-blue-100 text-blue-800 hover:bg-blue-200' : 
                            'bg-gray-100 text-gray-800 hover:bg-gray-200'}
                        `}
                      >
                        {event.status === 'active' ? 'En cours' : 
                         event.status === 'upcoming' ? 'À venir' : 'Passé'}
                      </Badge>
                    </div>
                  </div>
                  
                  <CardHeader>
                    <div className="flex items-center text-muted-foreground mb-2">
                      <MapPin className="mr-1 h-4 w-4" />
                      <span className="text-sm">{event.commune}</span>
                    </div>
                    <CardTitle className="text-xl">{event.title}</CardTitle>
                    <CardDescription className="flex items-center">
                      <CalendarDays className="mr-1 h-4 w-4 inline" />
                      {event.date}
                    </CardDescription>
                  </CardHeader>
                  
                  <CardContent>
                    <div className="space-y-4">
                      <p className="text-muted-foreground line-clamp-3">{event.description}</p>
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Badge variant="outline" className="mr-2">{event.type}</Badge>
                        <Users className="mr-1 h-4 w-4" />
                        <span>{event.merchants} commerçants</span>
                      </div>
                    </div>
                  </CardContent>
                  
                  <CardFooter>
                    <Button variant="outline" className="w-full">
                      Voir les détails
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </CardFooter>
                </Card>
              ))
            ) : (
              <div className="col-span-3 text-center py-12">
                <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center mx-auto mb-4">
                  <CalendarDays className="h-8 w-8 text-muted-foreground" />
                </div>
                <h3 className="text-lg font-medium mb-2">Aucun événement trouvé</h3>
                <p className="text-muted-foreground">
                  Essayez de modifier vos critères de recherche ou de consulter tous les événements.
                </p>
                <Button onClick={clearFilters} className="mt-4">
                  Voir tous les événements
                </Button>
              </div>
            )}
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Events;
