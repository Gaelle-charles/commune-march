
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { CalendarDays, ChevronRight, Search, Tag, User } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

// Sample blog posts data
const blogPostsData = [
  {
    id: 1,
    title: "Comment les marchés locaux dynamisent l'économie des communes",
    excerpt: "Découvrez l'impact économique des marchés locaux sur les petites communes et comment ils peuvent revitaliser les centres-villes.",
    date: "15 juin 2023",
    author: "Marie Dubois",
    category: "Économie locale",
    tags: ["économie", "développement local", "commerce"],
    image: "https://images.unsplash.com/photo-1519999482648-25049ddd37b1?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    readTime: "5 min"
  },
  {
    id: 2,
    title: "Les meilleurs marchés de Provence à visiter cet été",
    excerpt: "Notre sélection des marchés provençaux incontournables pour découvrir les produits du terroir et l'artisanat local pendant vos vacances d'été.",
    date: "28 mai 2023",
    author: "Thomas Martin",
    category: "Tourisme",
    tags: ["provence", "été", "tourisme", "produits locaux"],
    image: "https://images.unsplash.com/photo-1471858122504-2b1e2bca5b6d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    readTime: "8 min"
  },
  {
    id: 3,
    title: "Guide pour les commerçants : comment réussir sur les marchés",
    excerpt: "Conseils pratiques et astuces pour les commerçants qui souhaitent se lancer ou améliorer leur présence sur les marchés de plein air.",
    date: "5 avril 2023",
    author: "Jeanne Moreau",
    category: "Conseils pratiques",
    tags: ["commerçants", "stratégie", "vente"],
    image: "https://images.unsplash.com/photo-1518458028785-8fbcd101ebb9?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    readTime: "6 min"
  },
  {
    id: 4,
    title: "L'évolution numérique des marchés traditionnels",
    excerpt: "Comment la technologie transforme l'expérience des marchés traditionnels et les adapte aux attentes des consommateurs modernes.",
    date: "17 mars 2023",
    author: "Alex Bernard",
    category: "Innovation",
    tags: ["technologie", "innovation", "digitalisation"],
    image: "https://images.unsplash.com/photo-1519337265831-281ec6cc8514?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    readTime: "7 min"
  },
  {
    id: 5,
    title: "Interview : Le maire qui a sauvé son marché de village",
    excerpt: "Rencontre avec Jean Moretti, maire d'un petit village qui a réussi à revitaliser son marché hebdomadaire et à attirer de nouveaux visiteurs.",
    date: "2 février 2023",
    author: "Caroline Petit",
    category: "Interview",
    tags: ["témoignage", "mairie", "revitalisation"],
    image: "https://images.unsplash.com/photo-1497644083578-611b798c60f3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    readTime: "4 min"
  },
  {
    id: 6,
    title: "Le retour des marchés bio et locaux : une tendance durable ?",
    excerpt: "Analyse de la croissance des marchés bio et circuits courts en France et perspectives d'avenir pour ce modèle de consommation responsable.",
    date: "12 janvier 2023",
    author: "Pierre Lambert",
    category: "Tendances",
    tags: ["bio", "circuit court", "développement durable"],
    image: "https://images.unsplash.com/photo-1464454709131-ffd692591ee5?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    readTime: "9 min"
  },
];

// Extract unique categories
const categories = [...new Set(blogPostsData.map(post => post.category))];

// Extract unique tags
const allTags = blogPostsData.flatMap(post => post.tags);
const uniqueTags = [...new Set(allTags)];

const Blog = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  
  // Filter blog posts based on search term and category
  const filteredPosts = blogPostsData.filter(post => {
    const matchesSearch = 
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.author.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesCategory = selectedCategory === '' || post.category === selectedCategory;
    
    return matchesSearch && matchesCategory;
  });
  
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 py-16 page-content">
        <div className="container px-4 md:px-6">
          <div className="max-w-3xl mx-auto mb-12 text-center">
            <h1 className="text-4xl md:text-5xl font-display font-semibold mb-4">
              Notre Blog
            </h1>
            <p className="text-xl text-muted-foreground">
              Actualités, conseils et témoignages autour des marchés et de la vie locale
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="md:col-span-2">
              {/* Search */}
              <div className="mb-8 relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                <Input
                  placeholder="Rechercher un article..."
                  className="pl-10"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              
              {/* Blog posts */}
              <div className="space-y-8">
                {filteredPosts.length > 0 ? (
                  filteredPosts.map(post => (
                    <Card key={post.id} className="overflow-hidden hover-card">
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div className="overflow-hidden">
                          <img
                            src={post.image}
                            alt={post.title}
                            className="w-full h-44 object-cover transition-transform hover:scale-105"
                          />
                        </div>
                        <div className="md:col-span-2 flex flex-col p-6">
                          <CardHeader className="p-0 mb-2">
                            <Badge className="w-fit mb-2">{post.category}</Badge>
                            <CardTitle className="text-xl mb-1">
                              <Link to={`/blog/${post.id}`} className="hover:text-primary transition-colors">
                                {post.title}
                              </Link>
                            </CardTitle>
                            <div className="flex items-center space-x-3 text-sm text-muted-foreground">
                              <span className="flex items-center">
                                <User className="mr-1 h-3 w-3" />
                                {post.author}
                              </span>
                              <span className="flex items-center">
                                <CalendarDays className="mr-1 h-3 w-3" />
                                {post.date}
                              </span>
                              <span>{post.readTime} de lecture</span>
                            </div>
                          </CardHeader>
                          
                          <CardContent className="p-0 mb-4 flex-grow">
                            <p className="text-muted-foreground mt-2">
                              {post.excerpt}
                            </p>
                          </CardContent>
                          
                          <CardFooter className="p-0 mt-auto">
                            <Button variant="ghost" size="sm" asChild className="text-primary hover:text-primary/80 hover:bg-primary/5 -ml-2">
                              <Link to={`/blog/${post.id}`}>
                                Lire la suite
                                <ChevronRight className="ml-1 h-4 w-4" />
                              </Link>
                            </Button>
                          </CardFooter>
                        </div>
                      </div>
                    </Card>
                  ))
                ) : (
                  <div className="text-center py-12">
                    <p className="text-lg text-muted-foreground">
                      Aucun article ne correspond à votre recherche. Essayez avec d'autres termes.
                    </p>
                    <Button
                      onClick={() => {
                        setSearchTerm('');
                        setSelectedCategory('');
                      }}
                      className="mt-4"
                    >
                      Réinitialiser la recherche
                    </Button>
                  </div>
                )}
              </div>
            </div>
            
            {/* Sidebar */}
            <div className="space-y-8">
              {/* Categories */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Catégories</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <Button 
                      variant={selectedCategory === '' ? "default" : "ghost"} 
                      className="w-full justify-start" 
                      onClick={() => setSelectedCategory('')}
                    >
                      Toutes les catégories
                    </Button>
                    {categories.map(category => (
                      <Button
                        key={category}
                        variant={selectedCategory === category ? "default" : "ghost"}
                        className="w-full justify-start"
                        onClick={() => setSelectedCategory(category)}
                      >
                        {category}
                      </Button>
                    ))}
                  </div>
                </CardContent>
              </Card>
              
              {/* Tags */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Tags populaires</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {uniqueTags.map(tag => (
                      <Badge key={tag} variant="outline" className="py-1 cursor-pointer hover:bg-primary/10">
                        <Tag className="mr-1 h-3 w-3" />
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
              
              {/* Recent posts or newsletter */}
              <Card className="bg-primary/5 border-primary/20">
                <CardHeader>
                  <CardTitle className="text-lg">Newsletter</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-sm text-muted-foreground">
                    Abonnez-vous à notre newsletter pour recevoir nos derniers articles et actualités.
                  </p>
                  <Input placeholder="Votre adresse email" />
                  <Button className="w-full">S'abonner</Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Blog;
