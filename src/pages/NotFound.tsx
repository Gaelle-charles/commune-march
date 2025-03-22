
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 flex items-center justify-center p-6">
        <div className="max-w-lg mx-auto text-center">
          <div className="inline-block">
            <div className="bg-primary/10 text-primary px-4 py-1.5 rounded-full text-sm font-medium mb-6">
              Erreur 404
            </div>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-display font-semibold mb-4">
            Page non trouvée
          </h1>
          
          <p className="text-muted-foreground text-lg mb-8">
            Désolé, la page que vous recherchez n'existe pas ou a été déplacée.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg">
              <Link to="/">
                Retour à l'accueil
              </Link>
            </Button>
            
            <Button asChild variant="outline" size="lg">
              <Link to="/contact">
                Nous contacter
              </Link>
            </Button>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default NotFound;
