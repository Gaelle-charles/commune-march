
import { Link } from 'react-router-dom';
import { Instagram, Twitter, Facebook, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-secondary/80 pt-16 pb-8">
      <div className="container mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-16">
          <div className="space-y-6">
            <Link to="/" className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center">
                <span className="text-primary font-bold text-xl">M</span>
              </div>
              <span className="font-display text-xl font-semibold tracking-tight">
                Commune<span className="text-primary">March</span>
              </span>
            </Link>
            
            <p className="text-muted-foreground">
              Plateforme de gestion des marchés qui connecte les mairies, les commerçants et les visiteurs pour une expérience optimale.
            </p>
            
            <div className="flex space-x-4">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Instagram size={20} />
                <span className="sr-only">Instagram</span>
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Twitter size={20} />
                <span className="sr-only">Twitter</span>
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Facebook size={20} />
                <span className="sr-only">Facebook</span>
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Linkedin size={20} />
                <span className="sr-only">LinkedIn</span>
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-medium text-lg mb-4">Solutions</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/solutions/mairies" className="text-muted-foreground hover:text-primary transition-colors">
                  Pour les mairies
                </Link>
              </li>
              <li>
                <Link to="/solutions/commercants" className="text-muted-foreground hover:text-primary transition-colors">
                  Pour les commerçants
                </Link>
              </li>
              <li>
                <Link to="/solutions/visiteurs" className="text-muted-foreground hover:text-primary transition-colors">
                  Pour les visiteurs
                </Link>
              </li>
              <li>
                <Link to="/pricing" className="text-muted-foreground hover:text-primary transition-colors">
                  Tarifs
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-medium text-lg mb-4">Entreprise</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/about" className="text-muted-foreground hover:text-primary transition-colors">
                  À propos
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-muted-foreground hover:text-primary transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/partners" className="text-muted-foreground hover:text-primary transition-colors">
                  Partenaires
                </Link>
              </li>
              <li>
                <Link to="/careers" className="text-muted-foreground hover:text-primary transition-colors">
                  Carrières
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-medium text-lg mb-4">Support</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/contact" className="text-muted-foreground hover:text-primary transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link to="/documentation" className="text-muted-foreground hover:text-primary transition-colors">
                  Documentation
                </Link>
              </li>
              <li>
                <Link to="/faq" className="text-muted-foreground hover:text-primary transition-colors">
                  FAQ
                </Link>
              </li>
              <li>
                <Link to="/help" className="text-muted-foreground hover:text-primary transition-colors">
                  Centre d'aide
                </Link>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} CommuneMarch. Tous droits réservés.
            </div>
            
            <div className="flex space-x-6 text-sm">
              <Link to="/terms" className="text-muted-foreground hover:text-primary transition-colors">
                Conditions d'utilisation
              </Link>
              <Link to="/privacy" className="text-muted-foreground hover:text-primary transition-colors">
                Politique de confidentialité
              </Link>
              <Link to="/cookies" className="text-muted-foreground hover:text-primary transition-colors">
                Cookies
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
