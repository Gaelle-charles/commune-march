
import { useEffect, useRef, useState } from 'react';
import { Search, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { cn } from '@/lib/utils';

const mockMarkets = [
  { id: 1, name: "Marché de Rungis", city: "Rungis", lat: 48.7566, lng: 2.3522 },
  { id: 2, name: "Marché de Nice", city: "Nice", lat: 43.7102, lng: 7.2620 },
  { id: 3, name: "Marché de Lyon", city: "Lyon", lat: 45.7589, lng: 4.8414 },
  { id: 4, name: "Marché de Bordeaux", city: "Bordeaux", lat: 44.8378, lng: -0.5792 },
  { id: 5, name: "Marché de Strasbourg", city: "Strasbourg", lat: 48.5734, lng: 7.7521 },
];

const Map = () => {
  const mapRef = useRef<HTMLDivElement>(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredMarkets, setFilteredMarkets] = useState(mockMarkets);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    // Filter markets based on search query
    if (searchQuery.trim() === '') {
      setFilteredMarkets(mockMarkets);
    } else {
      const query = searchQuery.toLowerCase();
      setFilteredMarkets(
        mockMarkets.filter(
          market => 
            market.name.toLowerCase().includes(query) || 
            market.city.toLowerCase().includes(query)
        )
      );
    }
  }, [searchQuery]);

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto max-w-7xl px-6">
        <div className="text-center mx-auto max-w-3xl mb-16">
          <h2 className="text-3xl sm:text-4xl font-display font-semibold mb-4">
            Découvrez les marchés près de chez vous
          </h2>
          <p className="text-lg text-muted-foreground">
            Explorez notre carte interactive pour trouver les marchés locaux, leurs horaires et les commerçants présents.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="relative aspect-[16/9] overflow-hidden rounded-2xl shadow-lg bg-muted">
              {/* Placeholder pour la future intégration de la carte */}
              <div 
                ref={mapRef}
                className={cn(
                  "absolute inset-0 bg-accent/50 transition-opacity duration-1000",
                  isLoaded ? "opacity-0" : "opacity-100"
                )}
              >
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-12 h-12 rounded-full border-4 border-primary border-t-transparent animate-spin"></div>
                </div>
              </div>
              
              <div className={cn(
                "absolute inset-0 transition-opacity duration-1000",
                isLoaded ? "opacity-100" : "opacity-0"
              )}>
                <img 
                  src="https://images.unsplash.com/photo-1569336415962-a4bd9f69275e?q=80&w=1469&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                  alt="Carte des marchés de France" 
                  className="w-full h-full object-cover"
                />
                
                {/* Markers sur la carte */}
                {filteredMarkets.map(market => (
                  <div 
                    key={market.id}
                    className="absolute transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group"
                    style={{ 
                      top: `${(1 - (market.lat - 43) / (48.8 - 43)) * 100}%`,
                      left: `${((market.lng - (-0.6)) / (7.3 - (-0.6))) * 100}%`
                    }}
                  >
                    <div className="relative">
                      <MapPin size={24} className="text-primary" />
                      <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 opacity-0 group-hover:opacity-100 transition-opacity">
                        <div className="bg-white rounded-lg shadow-lg p-2 whitespace-nowrap text-sm">
                          {market.name}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-2xl shadow-lg p-6 h-fit">
            <h3 className="text-xl font-display font-medium mb-4">Rechercher un marché</h3>
            
            <div className="relative mb-6">
              <Search size={18} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
              <Input
                className="pl-10"
                placeholder="Nom du marché ou ville..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            
            <div className="space-y-2 mb-6 max-h-[300px] overflow-y-auto pr-2">
              {filteredMarkets.length > 0 ? (
                filteredMarkets.map(market => (
                  <div 
                    key={market.id}
                    className="p-3 hover:bg-accent/50 rounded-lg transition-colors cursor-pointer"
                  >
                    <div className="font-medium">{market.name}</div>
                    <div className="text-sm text-muted-foreground">{market.city}</div>
                  </div>
                ))
              ) : (
                <div className="text-center text-muted-foreground py-4">
                  Aucun marché trouvé
                </div>
              )}
            </div>
            
            <Button className="w-full">Voir tous les marchés</Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Map;
