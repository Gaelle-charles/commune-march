
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    // Bloquer le défilement du body quand le menu est ouvert
    document.body.style.overflow = isMobileMenuOpen ? 'auto' : 'hidden';
  };

  // Fermer le menu mobile et rétablir le défilement quand on clique sur un lien
  const handleLinkClick = () => {
    setIsMobileMenuOpen(false);
    document.body.style.overflow = 'auto';
  };

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out py-4 px-6',
        {
          'bg-white/80 backdrop-blur-lg shadow-sm': isScrolled,
          'bg-transparent': !isScrolled
        }
      )}
    >
      <div className="container mx-auto max-w-7xl">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="relative w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center">
              <span className="absolute inset-0 bg-primary/20 rounded-xl animate-pulse"></span>
              <span className="text-primary font-bold text-xl">M</span>
            </div>
            <span className="font-display text-xl font-semibold tracking-tight">
              Commune<span className="text-primary">March</span>
            </span>
          </Link>

          {/* Navigation desktop */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-foreground/80 hover:text-primary transition-colors">
              Accueil
            </Link>
            <Link to="/about" className="text-foreground/80 hover:text-primary transition-colors">
              À propos
            </Link>
            <Link to="/events" className="text-foreground/80 hover:text-primary transition-colors">
              Événements
            </Link>
            <Link to="/pricing" className="text-foreground/80 hover:text-primary transition-colors">
              Tarifs
            </Link>
            <Link to="/contact" className="text-foreground/80 hover:text-primary transition-colors">
              Contact
            </Link>
          </nav>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Button asChild variant="ghost" className="font-medium">
              <Link to="/login">Se connecter</Link>
            </Button>
            <Button asChild className="font-medium">
              <Link to="/register">S'inscrire</Link>
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden text-foreground p-2 rounded-full hover:bg-background"
            onClick={toggleMobileMenu}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={cn(
          'fixed inset-0 z-40 bg-background/95 backdrop-blur-lg transform transition-transform duration-300 md:hidden',
          {
            'translate-x-0': isMobileMenuOpen,
            'translate-x-full': !isMobileMenuOpen
          }
        )}
      >
        <div className="h-full flex flex-col pt-24 pb-6 px-6">
          <nav className="flex flex-col space-y-6 text-center mb-auto">
            <Link
              to="/"
              className="text-xl font-display hover:text-primary py-2"
              onClick={handleLinkClick}
            >
              Accueil
            </Link>
            <Link
              to="/about"
              className="text-xl font-display hover:text-primary py-2"
              onClick={handleLinkClick}
            >
              À propos
            </Link>
            <Link
              to="/events"
              className="text-xl font-display hover:text-primary py-2"
              onClick={handleLinkClick}
            >
              Événements
            </Link>
            <Link
              to="/pricing"
              className="text-xl font-display hover:text-primary py-2"
              onClick={handleLinkClick}
            >
              Tarifs
            </Link>
            <Link
              to="/contact"
              className="text-xl font-display hover:text-primary py-2"
              onClick={handleLinkClick}
            >
              Contact
            </Link>
          </nav>

          <div className="flex flex-col space-y-4 mt-12">
            <Button asChild variant="outline" className="w-full py-6 text-lg" onClick={handleLinkClick}>
              <Link to="/login">Se connecter</Link>
            </Button>
            <Button asChild className="w-full py-6 text-lg" onClick={handleLinkClick}>
              <Link to="/register">S'inscrire</Link>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
