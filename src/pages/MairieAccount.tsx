
import React from 'react';
import { 
  Map, 
  Store, 
  CalendarDays, 
  BarChart3, 
  Users, 
  MessageCircle,
  Bell,
  Settings,
  ArrowUp,
  ArrowDown
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '@/components/ui/navigation-menu';
import { Link } from 'react-router-dom';

const MairieSidebar = () => {
  return (
    <aside className="hidden md:flex w-64 flex-col h-screen fixed inset-y-0 bg-sidebar border-r border-sidebar-border">
      <div className="p-6">
        <Link to="/" className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center">
            <span className="text-primary font-bold text-lg">M</span>
          </div>
          <span className="font-display text-lg font-semibold tracking-tight text-sidebar-foreground">
            Commune<span className="text-primary">March</span>
          </span>
        </Link>
      </div>
      
      <nav className="flex-1 p-4">
        <div className="space-y-1">
          <Button variant="ghost" className="w-full justify-start mb-1 text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-foreground">
            <Map className="mr-3 h-5 w-5" />
            Tableau de bord
          </Button>
          
          <Button variant="ghost" className="w-full justify-start mb-1 text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-foreground">
            <Store className="mr-3 h-5 w-5" />
            Marchés
          </Button>
          
          <Button variant="ghost" className="w-full justify-start mb-1 text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-foreground">
            <Users className="mr-3 h-5 w-5" />
            Commerçants
          </Button>
          
          <Button variant="ghost" className="w-full justify-start mb-1 text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-foreground">
            <CalendarDays className="mr-3 h-5 w-5" />
            Événements
          </Button>
          
          <Button variant="ghost" className="w-full justify-start mb-1 text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-foreground">
            <BarChart3 className="mr-3 h-5 w-5" />
            Statistiques
          </Button>
          
          <Button variant="ghost" className="w-full justify-start mb-1 text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-foreground">
            <MessageCircle className="mr-3 h-5 w-5" />
            Messages
          </Button>
          
          <Button variant="ghost" className="w-full justify-start mb-1 text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-foreground">
            <Bell className="mr-3 h-5 w-5" />
            Notifications
          </Button>
        </div>
      </nav>
      
      <div className="p-4 border-t border-sidebar-border">
        <Button variant="ghost" className="w-full justify-start text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-foreground">
          <Settings className="mr-3 h-5 w-5" />
          Paramètres
        </Button>
      </div>
    </aside>
  );
};

const MairieAccount = () => {
  return (
    <div className="min-h-screen bg-background">
      <MairieSidebar />
      
      <div className="md:pl-64">
        {/* Mobile Header */}
        <header className="md:hidden flex items-center justify-between p-4 border-b">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center">
              <span className="text-primary font-bold text-lg">M</span>
            </div>
            <span className="font-display text-lg font-semibold tracking-tight">
              Commune<span className="text-primary">March</span>
            </span>
          </div>

          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Menu</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="w-[200px] p-2">
                    <NavigationMenuLink asChild>
                      <Button variant="ghost" className="w-full justify-start mb-1">
                        <Map className="mr-2 h-4 w-4" />
                        Tableau de bord
                      </Button>
                    </NavigationMenuLink>
                    
                    <NavigationMenuLink asChild>
                      <Button variant="ghost" className="w-full justify-start mb-1">
                        <Store className="mr-2 h-4 w-4" />
                        Marchés
                      </Button>
                    </NavigationMenuLink>
                    
                    <NavigationMenuLink asChild>
                      <Button variant="ghost" className="w-full justify-start mb-1">
                        <Users className="mr-2 h-4 w-4" />
                        Commerçants
                      </Button>
                    </NavigationMenuLink>
                    
                    <NavigationMenuLink asChild>
                      <Button variant="ghost" className="w-full justify-start mb-1">
                        <CalendarDays className="mr-2 h-4 w-4" />
                        Événements
                      </Button>
                    </NavigationMenuLink>
                    
                    <NavigationMenuLink asChild>
                      <Button variant="ghost" className="w-full justify-start mb-1">
                        <BarChart3 className="mr-2 h-4 w-4" />
                        Statistiques
                      </Button>
                    </NavigationMenuLink>
                    
                    <NavigationMenuLink asChild>
                      <Button variant="ghost" className="w-full justify-start mb-1">
                        <MessageCircle className="mr-2 h-4 w-4" />
                        Messages
                      </Button>
                    </NavigationMenuLink>
                    
                    <NavigationMenuLink asChild>
                      <Button variant="ghost" className="w-full justify-start mb-1">
                        <Bell className="mr-2 h-4 w-4" />
                        Notifications
                      </Button>
                    </NavigationMenuLink>
                    
                    <NavigationMenuLink asChild>
                      <Button variant="ghost" className="w-full justify-start mb-1">
                        <Settings className="mr-2 h-4 w-4" />
                        Paramètres
                      </Button>
                    </NavigationMenuLink>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </header>
        
        <main className="p-6">
          <header className="mb-8">
            <h1 className="text-3xl font-display font-semibold">Bienvenue, Mairie de Saint-Rémy</h1>
            <p className="text-muted-foreground">Tableau de bord de gestion des marchés</p>
          </header>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">Total Commerçants</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">87</div>
                <div className="flex items-center text-xs text-green-500 mt-1">
                  <ArrowUp className="h-3 w-3 mr-1" />
                  <span>12% ce mois</span>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">Revenus Mensuels</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">3,420 €</div>
                <div className="flex items-center text-xs text-green-500 mt-1">
                  <ArrowUp className="h-3 w-3 mr-1" />
                  <span>8% ce mois</span>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">Taux d'Occupation</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">93%</div>
                <div className="flex items-center text-xs text-green-500 mt-1">
                  <ArrowUp className="h-3 w-3 mr-1" />
                  <span>5% ce mois</span>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">Événements Actifs</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">3</div>
                <div className="flex items-center text-xs text-red-500 mt-1">
                  <ArrowDown className="h-3 w-3 mr-1" />
                  <span>1 de moins</span>
                </div>
              </CardContent>
            </Card>
          </div>
          
          <Tabs defaultValue="marchés">
            <TabsList className="mb-6">
              <TabsTrigger value="marchés">Marchés</TabsTrigger>
              <TabsTrigger value="commerçants">Commerçants</TabsTrigger>
              <TabsTrigger value="événements">Événements</TabsTrigger>
            </TabsList>
            
            <TabsContent value="marchés" className="space-y-4">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-semibold">Vos Marchés</h2>
                <Button>Ajouter un marché</Button>
              </div>
              
              <Card>
                <CardHeader>
                  <CardTitle>Marché du Centre-Ville</CardTitle>
                  <CardDescription>Mardi et Samedi, 08:00 - 13:00</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div>
                      <div className="text-sm font-medium text-muted-foreground">Commerçants</div>
                      <div className="text-xl font-semibold">42</div>
                    </div>
                    <div>
                      <div className="text-sm font-medium text-muted-foreground">Emplacements</div>
                      <div className="text-xl font-semibold">45 / 50</div>
                    </div>
                    <div>
                      <div className="text-sm font-medium text-muted-foreground">Revenus Mensuels</div>
                      <div className="text-xl font-semibold">2,100 €</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Marché de la Place Nord</CardTitle>
                  <CardDescription>Jeudi, 16:00 - 20:00</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div>
                      <div className="text-sm font-medium text-muted-foreground">Commerçants</div>
                      <div className="text-xl font-semibold">28</div>
                    </div>
                    <div>
                      <div className="text-sm font-medium text-muted-foreground">Emplacements</div>
                      <div className="text-xl font-semibold">28 / 30</div>
                    </div>
                    <div>
                      <div className="text-sm font-medium text-muted-foreground">Revenus Mensuels</div>
                      <div className="text-xl font-semibold">840 €</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Marché Bio</CardTitle>
                  <CardDescription>Dimanche, 09:00 - 14:00</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div>
                      <div className="text-sm font-medium text-muted-foreground">Commerçants</div>
                      <div className="text-xl font-semibold">17</div>
                    </div>
                    <div>
                      <div className="text-sm font-medium text-muted-foreground">Emplacements</div>
                      <div className="text-xl font-semibold">17 / 25</div>
                    </div>
                    <div>
                      <div className="text-sm font-medium text-muted-foreground">Revenus Mensuels</div>
                      <div className="text-xl font-semibold">480 €</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="commerçants">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-semibold">Commerçants</h2>
                <div className="flex space-x-2">
                  <Button variant="outline">Filtrer</Button>
                  <Button variant="outline">Exporter</Button>
                  <Button>Ajouter un commerçant</Button>
                </div>
              </div>
              
              <Card>
                <CardContent className="pt-6">
                  <div className="rounded-md border">
                    <table className="min-w-full divide-y divide-border">
                      <thead>
                        <tr className="bg-muted/50">
                          <th className="px-6 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">Nom</th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">Type</th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">Marché</th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">Statut</th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">Actions</th>
                        </tr>
                      </thead>
                      <tbody className="bg-white divide-y divide-border">
                        {[
                          { id: 1, name: 'Pierre Durand', type: 'Fromager', market: 'Centre-Ville', status: 'Actif' },
                          { id: 2, name: 'Marie Lambert', type: 'Primeur', market: 'Centre-Ville', status: 'Actif' },
                          { id: 3, name: 'Jean Petit', type: 'Boucher', market: 'Place Nord', status: 'Actif' },
                          { id: 4, name: 'Sophie Martin', type: 'Boulanger', market: 'Centre-Ville', status: 'En attente' },
                          { id: 5, name: 'Luc Dubois', type: 'Poissonnier', market: 'Bio', status: 'Actif' },
                        ].map((merchant) => (
                          <tr key={merchant.id}>
                            <td className="px-6 py-4 whitespace-nowrap">{merchant.name}</td>
                            <td className="px-6 py-4 whitespace-nowrap">{merchant.type}</td>
                            <td className="px-6 py-4 whitespace-nowrap">{merchant.market}</td>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <span className={`px-2 py-1 rounded-full text-xs ${
                                merchant.status === 'Actif' 
                                  ? 'bg-green-100 text-green-800' 
                                  : 'bg-yellow-100 text-yellow-800'
                              }`}>
                                {merchant.status}
                              </span>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <div className="flex space-x-2">
                                <Button variant="ghost" size="sm">Voir</Button>
                                <Button variant="ghost" size="sm">Éditer</Button>
                              </div>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="événements">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-semibold">Événements</h2>
                <Button>Créer un événement</Button>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <Card>
                  <CardHeader>
                    <div className="bg-primary/10 text-primary px-3 py-1 rounded-full text-xs font-medium mb-2 inline-block">
                      En cours
                    </div>
                    <CardTitle>Marché de Noël</CardTitle>
                    <CardDescription>Du 15 au 24 décembre</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div>
                        <div className="text-sm font-medium text-muted-foreground">Commerçants inscrits</div>
                        <div className="text-xl font-semibold">32 / 40</div>
                      </div>
                      <div className="flex justify-end">
                        <Button variant="outline" size="sm">Gérer</Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader>
                    <div className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-xs font-medium mb-2 inline-block">
                      À venir
                    </div>
                    <CardTitle>Marché des Producteurs</CardTitle>
                    <CardDescription>Le 5 juin</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div>
                        <div className="text-sm font-medium text-muted-foreground">Commerçants inscrits</div>
                        <div className="text-xl font-semibold">18 / 25</div>
                      </div>
                      <div className="flex justify-end">
                        <Button variant="outline" size="sm">Gérer</Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader>
                    <div className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-xs font-medium mb-2 inline-block">
                      À venir
                    </div>
                    <CardTitle>Fête de la Gastronomie</CardTitle>
                    <CardDescription>Du 20 au 22 septembre</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div>
                        <div className="text-sm font-medium text-muted-foreground">Commerçants inscrits</div>
                        <div className="text-xl font-semibold">7 / 30</div>
                      </div>
                      <div className="flex justify-end">
                        <Button variant="outline" size="sm">Gérer</Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </main>
      </div>
    </div>
  );
};

export default MairieAccount;
