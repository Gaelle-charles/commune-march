
import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, CalendarDays, MessageSquare, Share2, ThumbsUp, User, Tag, Facebook, Twitter, Linkedin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import Header from '@/components/Header';
import Footer from '@/components/Footer';

// Sample blog posts data (same as in Blog.tsx)
const blogPostsData = [
  {
    id: 1,
    title: "Comment les marchés locaux dynamisent l'économie des communes",
    excerpt: "Découvrez l'impact économique des marchés locaux sur les petites communes et comment ils peuvent revitaliser les centres-villes.",
    content: `
      <p>Les marchés locaux jouent un rôle crucial dans l'économie des communes françaises. Bien plus qu'une simple tradition, ils constituent un véritable levier de développement économique et social.</p>
      
      <h2>Un impact économique direct</h2>
      <p>Selon une étude récente menée par l'Association des Maires de France, chaque euro dépensé sur un marché local génère en moyenne 2,3 euros de retombées économiques pour la commune. Ce multiplicateur s'explique par plusieurs facteurs :</p>
      <ul>
        <li>Les commerçants du marché dépensent souvent leurs revenus localement</li>
        <li>Les visiteurs du marché profitent généralement de leur venue pour fréquenter d'autres commerces du centre-ville</li>
        <li>Les producteurs locaux peuvent développer leur activité grâce à ce canal de distribution direct</li>
      </ul>
      
      <p>De plus, les marchés créent des emplois directs et indirects. On estime qu'un marché hebdomadaire de taille moyenne (30-40 stands) génère l'équivalent de 5 à 8 emplois à temps plein dans la commune.</p>
      
      <h2>Une revitalisation des centres-villes</h2>
      <p>Face à la désertification commerciale qui touche de nombreuses petites et moyennes communes, les marchés constituent une réponse efficace. Ils attirent des visiteurs, créent une animation régulière et redonnent vie aux places et rues commerçantes.</p>
      
      <p>L'exemple de Saint-Martin-de-Ré est particulièrement éloquent. Cette commune de 2 500 habitants a vu son centre-ville se transformer après avoir développé son marché quotidien. En trois ans, le taux de vacance commerciale est passé de 15% à moins de 5%, avec l'installation de nouveaux commerces attirés par l'afflux de visiteurs généré par le marché.</p>
      
      <h2>Un lien social renforcé</h2>
      <p>Au-delà des aspects économiques, les marchés jouent un rôle social fondamental. Ils sont des lieux de rencontre, d'échange et de convivialité qui renforcent le sentiment d'appartenance à la communauté. Cette dimension est difficile à quantifier mais reste essentielle pour la vitalité d'une commune.</p>
      
      <h2>Comment développer son marché local ?</h2>
      <p>Pour les municipalités souhaitant dynamiser leur marché, plusieurs leviers existent :</p>
      <ul>
        <li>Diversifier l'offre de produits pour attirer différents types de clientèle</li>
        <li>Organiser des animations spéciales (marchés nocturnes, thématiques, etc.)</li>
        <li>Faciliter l'accès (parkings, transports en commun)</li>
        <li>Communiquer efficacement sur les réseaux sociaux et dans la presse locale</li>
        <li>Impliquer les commerçants dans la gouvernance du marché</li>
      </ul>
      
      <p>La plateforme CommuneMarch propose justement aux communes des outils numériques pour faciliter la gestion et la promotion de leurs marchés.</p>
      
      <h2>Conclusion</h2>
      <p>Dans un contexte où les centres-villes doivent se réinventer face à la concurrence des zones commerciales périphériques et du e-commerce, les marchés représentent un atout majeur pour les communes. Leur impact va bien au-delà de l'activité économique directe : ils façonnent l'identité d'un territoire et contribuent significativement à sa qualité de vie.</p>
    `,
    date: "15 juin 2023",
    author: "Marie Dubois",
    authorPosition: "Économiste spécialisée en développement local",
    authorAvatar: "https://randomuser.me/api/portraits/women/65.jpg",
    category: "Économie locale",
    tags: ["économie", "développement local", "commerce"],
    image: "https://images.unsplash.com/photo-1519999482648-25049ddd37b1?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
    readTime: "5 min",
    relatedPosts: [2, 3, 5]
  },
  {
    id: 2,
    title: "Les meilleurs marchés de Provence à visiter cet été",
    excerpt: "Notre sélection des marchés provençaux incontournables pour découvrir les produits du terroir et l'artisanat local pendant vos vacances d'été.",
    content: "<p>Contenu détaillé de l'article...</p>",
    date: "28 mai 2023",
    author: "Thomas Martin",
    authorPosition: "Journaliste touristique",
    authorAvatar: "https://randomuser.me/api/portraits/men/32.jpg",
    category: "Tourisme",
    tags: ["provence", "été", "tourisme", "produits locaux"],
    image: "https://images.unsplash.com/photo-1471858122504-2b1e2bca5b6d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
    readTime: "8 min",
    relatedPosts: [1, 3, 6]
  },
  {
    id: 3,
    title: "Guide pour les commerçants : comment réussir sur les marchés",
    excerpt: "Conseils pratiques et astuces pour les commerçants qui souhaitent se lancer ou améliorer leur présence sur les marchés de plein air.",
    content: "<p>Contenu détaillé de l'article...</p>",
    date: "5 avril 2023",
    author: "Jeanne Moreau",
    authorPosition: "Consultante en développement commercial",
    authorAvatar: "https://randomuser.me/api/portraits/women/45.jpg",
    category: "Conseils pratiques",
    tags: ["commerçants", "stratégie", "vente"],
    image: "https://images.unsplash.com/photo-1518458028785-8fbcd101ebb9?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
    readTime: "6 min",
    relatedPosts: [1, 4, 5]
  },
  {
    id: 4,
    title: "L'évolution numérique des marchés traditionnels",
    excerpt: "Comment la technologie transforme l'expérience des marchés traditionnels et les adapte aux attentes des consommateurs modernes.",
    content: "<p>Contenu détaillé de l'article...</p>",
    date: "17 mars 2023",
    author: "Alex Bernard",
    authorPosition: "Expert en transformation digitale",
    authorAvatar: "https://randomuser.me/api/portraits/men/22.jpg",
    category: "Innovation",
    tags: ["technologie", "innovation", "digitalisation"],
    image: "https://images.unsplash.com/photo-1519337265831-281ec6cc8514?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
    readTime: "7 min",
    relatedPosts: [3, 5, 6]
  },
  {
    id: 5,
    title: "Interview : Le maire qui a sauvé son marché de village",
    excerpt: "Rencontre avec Jean Moretti, maire d'un petit village qui a réussi à revitaliser son marché hebdomadaire et à attirer de nouveaux visiteurs.",
    content: "<p>Contenu détaillé de l'article...</p>",
    date: "2 février 2023",
    author: "Caroline Petit",
    authorPosition: "Journaliste spécialisée collectivités",
    authorAvatar: "https://randomuser.me/api/portraits/women/28.jpg",
    category: "Interview",
    tags: ["témoignage", "mairie", "revitalisation"],
    image: "https://images.unsplash.com/photo-1497644083578-611b798c60f3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
    readTime: "4 min",
    relatedPosts: [1, 3, 6]
  },
  {
    id: 6,
    title: "Le retour des marchés bio et locaux : une tendance durable ?",
    excerpt: "Analyse de la croissance des marchés bio et circuits courts en France et perspectives d'avenir pour ce modèle de consommation responsable.",
    content: "<p>Contenu détaillé de l'article...</p>",
    date: "12 janvier 2023",
    author: "Pierre Lambert",
    authorPosition: "Analyste des tendances de consommation",
    authorAvatar: "https://randomuser.me/api/portraits/men/76.jpg",
    category: "Tendances",
    tags: ["bio", "circuit court", "développement durable"],
    image: "https://images.unsplash.com/photo-1464454709131-ffd692591ee5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
    readTime: "9 min",
    relatedPosts: [1, 2, 5]
  },
];

const BlogPost = () => {
  const { postId } = useParams();
  const [post, setPost] = useState(null);
  const [relatedPosts, setRelatedPosts] = useState([]);
  const [likes, setLikes] = useState(0);
  const [hasLiked, setHasLiked] = useState(false);
  
  useEffect(() => {
    // Find the post with the matching id
    const currentPost = blogPostsData.find(p => p.id === parseInt(postId, 10));
    
    if (currentPost) {
      setPost(currentPost);
      
      // Get related posts
      const related = currentPost.relatedPosts
        .map(id => blogPostsData.find(p => p.id === id))
        .filter(p => p); // Filter out any undefined posts
      
      setRelatedPosts(related);
      
      // Reset like state when changing post
      setLikes(Math.floor(Math.random() * 50) + 5); // Random likes between 5 and 55
      setHasLiked(false);
    }
    
    // Scroll to top when post changes
    window.scrollTo(0, 0);
  }, [postId]);
  
  const handleLike = () => {
    if (!hasLiked) {
      setLikes(likes + 1);
      setHasLiked(true);
    } else {
      setLikes(likes - 1);
      setHasLiked(false);
    }
  };
  
  if (!post) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 py-16 page-content">
          <div className="container px-4 md:px-6">
            <div className="text-center py-20">
              <h1 className="text-2xl font-bold mb-4">Article non trouvé</h1>
              <p className="text-muted-foreground mb-6">
                L'article que vous recherchez n'existe pas ou a été supprimé.
              </p>
              <Button asChild>
                <Link to="/blog">Retour au blog</Link>
              </Button>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }
  
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 py-16 page-content">
        <div className="container px-4 md:px-6">
          {/* Back button */}
          <div className="mb-8">
            <Button variant="ghost" asChild className="group flex items-center text-muted-foreground hover:text-primary">
              <Link to="/blog">
                <ArrowLeft className="mr-2 h-4 w-4 transition group-hover:-translate-x-1" />
                Retour aux articles
              </Link>
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="md:col-span-2">
              {/* Article header */}
              <div className="mb-8">
                <Badge className="mb-4">{post.category}</Badge>
                <h1 className="text-3xl md:text-4xl font-display font-semibold mb-4">
                  {post.title}
                </h1>
                
                <div className="flex items-center space-x-4 mb-6">
                  <Avatar>
                    <AvatarImage src={post.authorAvatar} alt={post.author} />
                    <AvatarFallback>{post.author.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="font-medium">{post.author}</div>
                    <div className="text-sm text-muted-foreground">{post.authorPosition}</div>
                  </div>
                </div>
                
                <div className="flex flex-wrap items-center text-sm text-muted-foreground gap-4">
                  <span className="flex items-center">
                    <CalendarDays className="mr-1 h-4 w-4" />
                    {post.date}
                  </span>
                  <span>{post.readTime} de lecture</span>
                  <span className="flex items-center">
                    <ThumbsUp className={`mr-1 h-4 w-4 ${hasLiked ? 'text-primary' : ''}`} />
                    {likes} j'aime
                  </span>
                </div>
              </div>
              
              {/* Featured image */}
              <div className="mb-8 overflow-hidden rounded-xl">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full object-cover max-h-[400px]"
                />
              </div>
              
              {/* Article content */}
              <div className="prose prose-lg max-w-none mb-8" dangerouslySetInnerHTML={{ __html: post.content }} />
              
              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-8">
                {post.tags.map(tag => (
                  <Badge key={tag} variant="outline" className="py-1">
                    <Tag className="mr-1 h-3 w-3" />
                    {tag}
                  </Badge>
                ))}
              </div>
              
              {/* Actions bar */}
              <div className="flex justify-between items-center mb-12 pt-4 border-t">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={handleLike}
                  className={hasLiked ? 'bg-primary/10 border-primary/20' : ''}
                >
                  <ThumbsUp className={`mr-2 h-4 w-4 ${hasLiked ? 'text-primary fill-primary' : ''}`} />
                  {hasLiked ? 'Aimé' : 'J\'aime'} ({likes})
                </Button>
                
                <div className="flex space-x-2">
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button variant="outline" size="sm">
                        <Share2 className="mr-2 h-4 w-4" />
                        Partager
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-2">
                      <div className="flex space-x-2">
                        <Button variant="outline" size="icon" className="h-9 w-9">
                          <Facebook className="h-4 w-4" />
                        </Button>
                        <Button variant="outline" size="icon" className="h-9 w-9">
                          <Twitter className="h-4 w-4" />
                        </Button>
                        <Button variant="outline" size="icon" className="h-9 w-9">
                          <Linkedin className="h-4 w-4" />
                        </Button>
                      </div>
                    </PopoverContent>
                  </Popover>
                  
                  <Button variant="outline" size="sm">
                    <MessageSquare className="mr-2 h-4 w-4" />
                    Commenter
                  </Button>
                </div>
              </div>
              
              {/* Author section */}
              <Card className="mb-12 bg-muted/30">
                <CardContent className="flex flex-col md:flex-row items-center gap-6 p-6">
                  <Avatar className="w-20 h-20">
                    <AvatarImage src={post.authorAvatar} alt={post.author} />
                    <AvatarFallback>{post.author.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                  </Avatar>
                  <div>
                    <h3 className="text-xl font-medium mb-2">À propos de {post.author}</h3>
                    <p className="text-muted-foreground mb-4">
                      {post.authorPosition}. Passionné(e) par les dynamiques économiques locales et l'animation des territoires.
                    </p>
                    <div className="flex space-x-3">
                      <Button variant="outline" size="sm">
                        <User className="mr-2 h-4 w-4" />
                        Voir le profil
                      </Button>
                      <Button size="sm">
                        Suivre
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
            
            {/* Sidebar */}
            <div className="space-y-8">
              {/* Related posts */}
              <div>
                <h3 className="text-lg font-medium mb-4">Articles similaires</h3>
                <div className="space-y-4">
                  {relatedPosts.map(relPost => (
                    <Card key={relPost.id} className="overflow-hidden hover-card">
                      <Link to={`/blog/${relPost.id}`} className="block">
                        <div className="grid grid-cols-3 gap-4">
                          <div className="overflow-hidden">
                            <img
                              src={relPost.image}
                              alt={relPost.title}
                              className="w-full h-full object-cover aspect-square"
                            />
                          </div>
                          <div className="col-span-2 p-3">
                            <Badge className="mb-2 text-xs">{relPost.category}</Badge>
                            <h4 className="font-medium text-sm mb-1 line-clamp-2">{relPost.title}</h4>
                            <div className="flex items-center text-xs text-muted-foreground">
                              <CalendarDays className="mr-1 h-3 w-3" />
                              {relPost.date}
                            </div>
                          </div>
                        </div>
                      </Link>
                    </Card>
                  ))}
                </div>
              </div>
              
              {/* Newsletter */}
              <Card className="bg-primary/5 border-primary/20">
                <CardContent className="p-6 space-y-4">
                  <h3 className="text-lg font-medium">Newsletter</h3>
                  <p className="text-sm text-muted-foreground">
                    Abonnez-vous à notre newsletter hebdomadaire pour recevoir nos derniers articles.
                  </p>
                  <div className="space-y-2">
                    <input
                      type="email"
                      placeholder="Votre email"
                      className="w-full px-3 py-2 border rounded-md"
                    />
                    <Button className="w-full">S'abonner</Button>
                  </div>
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

export default BlogPost;
