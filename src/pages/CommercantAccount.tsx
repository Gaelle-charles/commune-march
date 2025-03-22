
import React, { useState } from 'react';
import { 
  Store, 
  Package, 
  CalendarDays, 
  BarChart3, 
  MessageCircle,
  Bell,
  Settings,
  ArrowUp,
  ArrowDown,
  Edit,
  Plus,
  Image,
  Phone,
  Mail,
  MapPin
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '@/components/ui/navigation-menu';
import { Textarea } from '@/components/ui/textarea';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Link } from 'react-router-dom';

const CommercantSidebar = () => {
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
            <Store className="mr-3 h-5 w-5" />
            Tableau de bord
          </Button>
          
          <Button variant="ghost" className="w-full justify-start mb-1 text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-foreground">
            <Package className="mr-3 h-5 w-5" />
            Mes produits
          </Button>
          
          <Button variant="ghost" className="w-full justify-start mb-1 text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-foreground">
            <MapPin className="mr-3 h-5 w-5" />
            Marchés
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

const CommercantAccount = () => {
  const [editingProfile, setEditingProfile] = useState(false);
  
  return (
    <div className="min-h-screen bg-background">
      <CommercantSidebar />
      
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
                        <Store className="mr-2 h-4 w-4" />
                        Tableau de bord
                      </Button>
                    </NavigationMenuLink>
                    
                    <NavigationMenuLink asChild>
                      <Button variant="ghost" className="w-full justify-start mb-1">
                        <Package className="mr-2 h-4 w-4" />
                        Mes produits
                      </Button>
                    </NavigationMenuLink>
                    
                    <NavigationMenuLink asChild>
                      <Button variant="ghost" className="w-full justify-start mb-1">
                        <MapPin className="mr-2 h-4 w-4" />
                        Marchés
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
            <h1 className="text-3xl font-display font-semibold">Bienvenue, Pierre Durand</h1>
            <p className="text-muted-foreground">Fromager traditionnel</p>
          </header>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">Ventes mensuelles</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">4,670 €</div>
                <div className="flex items-center text-xs text-green-500 mt-1">
                  <ArrowUp className="h-3 w-3 mr-1" />
                  <span>12% vs dernier mois</span>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">Marchés participés</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">8 / 12</div>
                <div className="flex items-center text-xs text-red-500 mt-1">
                  <ArrowDown className="h-3 w-3 mr-1" />
                  <span>1 absence</span>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">Produits en ligne</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">24</div>
                <div className="flex items-center text-xs text-green-500 mt-1">
                  <ArrowUp className="h-3 w-3 mr-1" />
                  <span>3 nouveaux</span>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">Événements à venir</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">2</div>
                <div className="flex items-center text-xs text-muted-foreground mt-1">
                  <span>2 inscriptions</span>
                </div>
              </CardContent>
            </Card>
          </div>
          
          <Tabs defaultValue="vitrine">
            <TabsList className="mb-6">
              <TabsTrigger value="vitrine">Ma Vitrine</TabsTrigger>
              <TabsTrigger value="produits">Mes Produits</TabsTrigger>
              <TabsTrigger value="marches">Mes Marchés</TabsTrigger>
            </TabsList>
            
            <TabsContent value="vitrine" className="space-y-6">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-semibold">Ma Vitrine Commerçant</h2>
                <Button onClick={() => setEditingProfile(!editingProfile)}>
                  {editingProfile ? 'Annuler' : 'Modifier'}
                  {!editingProfile && <Edit className="ml-2 h-4 w-4" />}
                </Button>
              </div>
              
              {!editingProfile ? (
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                  <Card className="lg:col-span-2">
                    <CardHeader>
                      <CardTitle>Présentation</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="flex flex-col md:flex-row gap-6">
                        <div className="relative w-full md:w-1/3 aspect-square bg-muted rounded-md overflow-hidden">
                          <img 
                            src="https://images.unsplash.com/photo-1552767059-ce182eda88a5?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                            alt="Stand fromager" 
                            className="object-cover w-full h-full"
                          />
                        </div>
                        <div className="w-full md:w-2/3">
                          <h3 className="text-lg font-semibold mb-2">Fromagerie Durand</h3>
                          <p className="text-muted-foreground mb-4">
                            Artisan fromager depuis 3 générations, nous proposons une large sélection de fromages
                            traditionnels français. Notre spécialité : les fromages affinés de montagne et 
                            les créations fromagères uniques. Venez déguster nos produits fabriqués selon
                            des méthodes traditionnelles respectueuses de l'environnement.
                          </p>
                          <div className="space-y-2">
                            <div className="flex items-center">
                              <MapPin className="h-4 w-4 mr-2 text-muted-foreground" />
                              <span>Présent sur les marchés de Saint-Rémy, Arles et Avignon</span>
                            </div>
                            <div className="flex items-center">
                              <Phone className="h-4 w-4 mr-2 text-muted-foreground" />
                              <span>06 12 34 56 78</span>
                            </div>
                            <div className="flex items-center">
                              <Mail className="h-4 w-4 mr-2 text-muted-foreground" />
                              <span>contact@fromagerie-durand.fr</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardHeader>
                      <CardTitle>Photos du stand</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="grid grid-cols-2 gap-2">
                        <div className="aspect-square bg-muted rounded-md overflow-hidden">
                          <img 
                            src="https://images.unsplash.com/photo-1486297678162-eb2a19b0a32d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                            alt="Stand photo 1" 
                            className="object-cover w-full h-full"
                          />
                        </div>
                        <div className="aspect-square bg-muted rounded-md overflow-hidden">
                          <img 
                            src="https://images.unsplash.com/photo-1470858831619-ca02d796b2a5?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                            alt="Stand photo 2" 
                            className="object-cover w-full h-full"
                          />
                        </div>
                        <div className="aspect-square bg-muted rounded-md overflow-hidden">
                          <img 
                            src="https://images.unsplash.com/photo-1589367920969-ab8e050bbb04?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                            alt="Stand photo 3" 
                            className="object-cover w-full h-full"
                          />
                        </div>
                        <div className="aspect-square bg-muted rounded-md flex items-center justify-center">
                          <Button variant="ghost" className="flex flex-col items-center">
                            <Plus className="h-6 w-6 mb-1" />
                            <span className="text-xs">Ajouter</span>
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                  
                  <Card className="lg:col-span-3">
                    <CardHeader>
                      <CardTitle>Produits phares</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                        {['Comté 24 mois', 'Brie de Meaux AOP', 'Bleu d\'Auvergne', 'Tomme de montagne'].map((product, index) => (
                          <Card key={index}>
                            <div className="aspect-square bg-muted relative overflow-hidden">
                              <img 
                                src={`https://images.unsplash.com/photo-155${2000 + index}059-ce182eda88a5?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80`}
                                alt={product}
                                className="object-cover w-full h-full"
                              />
                            </div>
                            <CardContent className="p-3">
                              <h4 className="font-medium">{product}</h4>
                              <p className="text-sm text-muted-foreground">
                                {(18 + index * 2).toFixed(2)}€ / kg
                              </p>
                            </CardContent>
                          </Card>
                        ))}
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Button variant="outline" className="w-full">
                        Voir tous les produits
                      </Button>
                    </CardFooter>
                  </Card>
                </div>
              ) : (
                // Form to edit profile
                <Card>
                  <CardHeader>
                    <CardTitle>Modifier ma vitrine</CardTitle>
                    <CardDescription>
                      Personnalisez votre profil commerçant visible par les visiteurs
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <form className="space-y-6">
                      <div className="space-y-4">
                        <div>
                          <Label htmlFor="business-name">Nom de l'entreprise</Label>
                          <Input id="business-name" defaultValue="Fromagerie Durand" />
                        </div>
                        
                        <div>
                          <Label htmlFor="business-type">Type de commerce</Label>
                          <Input id="business-type" defaultValue="Fromager traditionnel" />
                        </div>
                        
                        <div>
                          <Label htmlFor="description">Description</Label>
                          <Textarea 
                            id="description" 
                            rows={6}
                            defaultValue="Artisan fromager depuis 3 générations, nous proposons une large sélection de fromages traditionnels français. Notre spécialité : les fromages affinés de montagne et les créations fromagères uniques. Venez déguster nos produits fabriqués selon des méthodes traditionnelles respectueuses de l'environnement."
                          />
                        </div>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div>
                            <Label htmlFor="phone">Téléphone</Label>
                            <Input id="phone" defaultValue="06 12 34 56 78" />
                          </div>
                          
                          <div>
                            <Label htmlFor="email">Email</Label>
                            <Input id="email" defaultValue="contact@fromagerie-durand.fr" />
                          </div>
                        </div>
                        
                        <div>
                          <Label>Photo principale</Label>
                          <div className="mt-2 flex items-center">
                            <div className="relative w-24 h-24 rounded-md overflow-hidden bg-muted mr-4">
                              <img 
                                src="https://images.unsplash.com/photo-1552767059-ce182eda88a5?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                                alt="Stand fromager" 
                                className="object-cover w-full h-full"
                              />
                            </div>
                            <Button type="button" variant="outline" size="sm">
                              <Image className="mr-2 h-4 w-4" />
                              Changer l'image
                            </Button>
                          </div>
                        </div>
                        
                        <div>
                          <Label>Photos du stand</Label>
                          <div className="mt-2 grid grid-cols-2 sm:grid-cols-4 gap-4">
                            {[1, 2, 3].map((i) => (
                              <div key={i} className="relative aspect-square rounded-md overflow-hidden bg-muted">
                                <img 
                                  src={`https://images.unsplash.com/photo-155${2000 + i}059-ce182eda88a5?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80`}
                                  alt={`Stand photo ${i}`}
                                  className="object-cover w-full h-full"
                                />
                                <Button 
                                  type="button" 
                                  variant="destructive" 
                                  size="icon" 
                                  className="absolute top-1 right-1 h-6 w-6 rounded-full"
                                >
                                  <span className="sr-only">Supprimer</span>
                                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
                                </Button>
                              </div>
                            ))}
                            <div className="aspect-square bg-muted rounded-md flex items-center justify-center">
                              <Button type="button" variant="ghost" className="flex flex-col items-center">
                                <Plus className="h-6 w-6 mb-1" />
                                <span className="text-xs">Ajouter</span>
                              </Button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </form>
                  </CardContent>
                  <CardFooter className="flex justify-between">
                    <Button variant="outline" onClick={() => setEditingProfile(false)}>
                      Annuler
                    </Button>
                    <Button onClick={() => setEditingProfile(false)}>
                      Enregistrer les modifications
                    </Button>
                  </CardFooter>
                </Card>
              )}
            </TabsContent>
            
            <TabsContent value="produits">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-semibold">Mes Produits</h2>
                <Button>
                  <Plus className="mr-2 h-4 w-4" />
                  Ajouter un produit
                </Button>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {[
                  { name: 'Comté 24 mois', price: '28.90', stock: 'En stock' },
                  { name: 'Brie de Meaux AOP', price: '18.50', stock: 'En stock' },
                  { name: 'Bleu d\'Auvergne', price: '22.90', stock: 'En stock' },
                  { name: 'Tomme de montagne', price: '24.90', stock: 'En stock' },
                  { name: 'Reblochon fermier', price: '19.90', stock: 'En stock' },
                  { name: 'Camembert au lait cru', price: '12.90', stock: 'En stock' },
                  { name: 'Saint-Nectaire fermier', price: '26.90', stock: 'En stock' },
                  { name: 'Beaufort d\'été', price: '39.90', stock: 'En stock' },
                ].map((product, index) => (
                  <Card key={index} className="overflow-hidden">
                    <div className="aspect-square bg-muted relative">
                      <img 
                        src={`https://images.unsplash.com/photo-155${2000 + index % 5}059-ce182eda88a5?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80`}
                        alt={product.name}
                        className="object-cover w-full h-full"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 hover:opacity-100 transition-opacity flex items-end p-3">
                        <div className="flex space-x-2">
                          <Button size="sm" variant="secondary">
                            <Edit className="h-4 w-4" />
                          </Button>
                          <Button size="sm" variant="secondary">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 6h18"/><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"/><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"/></svg>
                          </Button>
                        </div>
                      </div>
                    </div>
                    <CardContent className="p-3">
                      <h4 className="font-medium">{product.name}</h4>
                      <div className="flex justify-between items-center mt-1">
                        <p className="font-semibold">{product.price}€ / kg</p>
                        <span className="text-xs text-green-600 font-medium">
                          {product.stock}
                        </span>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="marches">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-semibold">Mes Marchés</h2>
                <Button variant="outline">
                  Rechercher des marchés
                </Button>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <div>
                        <CardTitle>Marché du Centre-Ville</CardTitle>
                        <CardDescription>Saint-Rémy-de-Provence</CardDescription>
                      </div>
                      <div className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-xs font-medium">
                        Abonné
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Jours</span>
                        <span>Mardi et Samedi</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Horaires</span>
                        <span>08:00 - 13:00</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Emplacement</span>
                        <span>A12</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Tarif mensuel</span>
                        <span>120€</span>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button variant="outline" className="w-full">
                      Détails
                    </Button>
                  </CardFooter>
                </Card>
                
                <Card>
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <div>
                        <CardTitle>Marché provençal</CardTitle>
                        <CardDescription>Arles</CardDescription>
                      </div>
                      <div className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-xs font-medium">
                        Abonné
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Jours</span>
                        <span>Mercredi et Samedi</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Horaires</span>
                        <span>08:00 - 12:30</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Emplacement</span>
                        <span>F05</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Tarif mensuel</span>
                        <span>90€</span>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button variant="outline" className="w-full">
                      Détails
                    </Button>
                  </CardFooter>
                </Card>
                
                <Card>
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <div>
                        <CardTitle>Marché des Halles</CardTitle>
                        <CardDescription>Avignon</CardDescription>
                      </div>
                      <div className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-xs font-medium">
                        Abonné
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Jours</span>
                        <span>Dimanche</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Horaires</span>
                        <span>07:30 - 13:30</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Emplacement</span>
                        <span>C08</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Tarif mensuel</span>
                        <span>80€</span>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button variant="outline" className="w-full">
                      Détails
                    </Button>
                  </CardFooter>
                </Card>
                
                <Card>
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <div>
                        <CardTitle>Marché Bio</CardTitle>
                        <CardDescription>Aix-en-Provence</CardDescription>
                      </div>
                      <div className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-xs font-medium">
                        En attente
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Jours</span>
                        <span>Jeudi</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Horaires</span>
                        <span>16:00 - 20:00</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Emplacement</span>
                        <span>À définir</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Tarif mensuel</span>
                        <span>100€</span>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button variant="outline" className="w-full">
                      Détails
                    </Button>
                  </CardFooter>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </main>
      </div>
    </div>
  );
};

export default CommercantAccount;
