
import { useEffect } from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import UserTypeSection from '@/components/UserTypeSection';
import Map from '@/components/Map';
import Footer from '@/components/Footer';

const Index = () => {
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    };

    const handleIntersect = (entries: IntersectionObserverEntry[], observer: IntersectionObserver) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
          observer.unobserve(entry.target);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersect, observerOptions);
    const elements = document.querySelectorAll('.reveal');
    
    elements.forEach(element => {
      observer.observe(element);
    });

    return () => {
      elements.forEach(element => {
        observer.unobserve(element);
      });
    };
  }, []);

  return (
    <div className="min-h-screen flex flex-col overflow-hidden">
      <Header />
      
      <main>
        <Hero />
        <UserTypeSection />
        <Map />
        
        {/* Testimonials Section */}
        <section className="py-24 bg-accent/20">
          <div className="container mx-auto max-w-7xl px-6">
            <div className="text-center mb-16 reveal">
              <h2 className="text-3xl sm:text-4xl font-display font-semibold mb-4">
                Ce qu'ils disent de nous
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Découvrez comment CommuneMarch transforme la gestion des marchés à travers la France.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Testimonial 1 */}
              <div className="bg-white rounded-2xl shadow-lg p-8 reveal hover-card">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center text-primary font-semibold mr-4">
                    ML
                  </div>
                  <div>
                    <div className="font-medium">Marie Lambert</div>
                    <div className="text-sm text-muted-foreground">Maire de Saint-Rémy</div>
                  </div>
                </div>
                <p className="text-muted-foreground mb-4">
                  "CommuneMarch a révolutionné la gestion de notre marché hebdomadaire. Nous avons réduit le temps administratif de 70% et amélioré la satisfaction des commerçants."
                </p>
                <div className="flex text-amber-400">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <svg key={star} xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor" stroke="none">
                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                    </svg>
                  ))}
                </div>
              </div>
              
              {/* Testimonial 2 */}
              <div className="bg-white rounded-2xl shadow-lg p-8 reveal hover-card">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center text-primary font-semibold mr-4">
                    PD
                  </div>
                  <div>
                    <div className="font-medium">Pierre Durand</div>
                    <div className="text-sm text-muted-foreground">Fromager à Marseille</div>
                  </div>
                </div>
                <p className="text-muted-foreground mb-4">
                  "Depuis que j'utilise l'application, j'ai augmenté ma clientèle de 30%. Les notifications de fin de marché me permettent de vendre mes invendus facilement."
                </p>
                <div className="flex text-amber-400">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <svg key={star} xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor" stroke="none">
                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                    </svg>
                  ))}
                </div>
              </div>
              
              {/* Testimonial 3 */}
              <div className="bg-white rounded-2xl shadow-lg p-8 reveal hover-card">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center text-primary font-semibold mr-4">
                    SB
                  </div>
                  <div>
                    <div className="font-medium">Sophie Berger</div>
                    <div className="text-sm text-muted-foreground">Visiteuse régulière</div>
                  </div>
                </div>
                <p className="text-muted-foreground mb-4">
                  "J'adore pouvoir consulter les marchés à proximité et recevoir des notifications sur les offres spéciales. C'est devenu mon compagnon de shopping incontournable !"
                </p>
                <div className="flex text-amber-400">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <svg key={star} xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor" stroke="none">
                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                    </svg>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-24 bg-background">
          <div className="container mx-auto max-w-7xl px-6">
            <div className="bg-gradient-to-br from-primary/90 to-primary rounded-3xl p-12 text-white relative overflow-hidden reveal">
              {/* Background elements */}
              <div className="absolute -top-24 -right-24 w-64 h-64 bg-white/10 rounded-full"></div>
              <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-white/10 rounded-full"></div>
              
              <div className="max-w-3xl mx-auto text-center relative">
                <h2 className="text-3xl sm:text-4xl font-display font-semibold mb-6">
                  Prêt à transformer l'expérience de votre marché ?
                </h2>
                <p className="text-white/80 text-lg mb-8">
                  Rejoignez les centaines de communes et milliers de commerçants qui utilisent déjà CommuneMarch pour optimiser leurs marchés.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button className="bg-white text-primary font-medium px-8 py-3 rounded-lg hover:bg-white/90 transition-colors">
                    Démarrer gratuitement
                  </button>
                  <button className="bg-transparent border border-white text-white font-medium px-8 py-3 rounded-lg hover:bg-white/10 transition-colors">
                    Demander une démo
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
