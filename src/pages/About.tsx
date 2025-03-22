
import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const About = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      
      <main className="flex-1 py-16">
        <div className="container px-4 md:px-6">
          <section className="mb-16">
            <h1 className="text-4xl md:text-5xl font-display font-semibold text-center mb-8">
              À propos de CommuneMarch
            </h1>
            <div className="max-w-3xl mx-auto text-center text-muted-foreground mb-12">
              <p className="text-lg mb-4">
                CommuneMarch est une plateforme innovante qui recense et organise tous les marchés des communes de France, créant un lien essentiel entre les mairies et les commerçants.
              </p>
            </div>
          </section>
          
          <section className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-16">
            <div>
              <h2 className="text-3xl font-display font-semibold mb-6">Notre mission</h2>
              <p className="text-muted-foreground mb-4">
                CommuneMarch est né d'une simple observation : les marchés locaux sont au cœur de la vie économique et sociale de nos communes, mais leur organisation reste souvent complexe tant pour les municipalités que pour les commerçants.
              </p>
              <p className="text-muted-foreground mb-4">
                Notre mission est de digitaliser et simplifier la gestion des marchés pour permettre aux mairies de mieux les organiser et aux commerçants de développer leur activité, tout en offrant une meilleure information aux visiteurs.
              </p>
              <p className="text-muted-foreground">
                Nous croyons en une économie locale dynamique et en des liens forts entre tous les acteurs du marché.
              </p>
            </div>
            <div className="bg-muted rounded-xl overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1506744038136-46273834b3fb" 
                alt="Marché local animé" 
                className="w-full h-full object-cover"
              />
            </div>
          </section>
          
          <section className="max-w-4xl mx-auto mb-16">
            <h2 className="text-3xl font-display font-semibold text-center mb-10">
              Une plateforme pour chaque acteur
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white rounded-xl shadow-md p-8">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary"><path d="M3 21h18"></path><path d="M19 21v-4"></path><path d="M19 17a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2"></path><path d="M11 10V3H7v7"></path><path d="M13 10h4V6a1 1 0 0 0-1-1h-3"></path><path d="M5 10h2"></path><path d="M17 10h2"></path><path d="M15 13v2"></path><path d="M9 13v2"></path></svg>
                </div>
                <h3 className="text-xl font-semibold mb-4">Pour les mairies</h3>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary mr-3 h-5 w-5 shrink-0"><polyline points="20 6 9 17 4 12"></polyline></svg>
                    <span>Gestion complète des emplacements</span>
                  </li>
                  <li className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary mr-3 h-5 w-5 shrink-0"><polyline points="20 6 9 17 4 12"></polyline></svg>
                    <span>Suivi des réservations et paiements</span>
                  </li>
                  <li className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary mr-3 h-5 w-5 shrink-0"><polyline points="20 6 9 17 4 12"></polyline></svg>
                    <span>Organisation d'événements spéciaux</span>
                  </li>
                  <li className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary mr-3 h-5 w-5 shrink-0"><polyline points="20 6 9 17 4 12"></polyline></svg>
                    <span>Statistiques et analyse des données</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-white rounded-xl shadow-md p-8">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary"><path d="m2 7 4.41-4.41A2 2 0 0 1 7.83 2h8.34a2 2 0 0 1 1.42.59L22 7"></path><path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"></path><path d="M15 22v-4a2 2 0 0 0-2-2h-2a2 2 0 0 0-2 2v4"></path><path d="M2 7h20"></path><path d="M22 7v3a2 2 0 0 1-2 2v0a2 2 0 0 1-2-2V7"></path><path d="M6 7v3a2 2 0 0 1-2 2v0a2 2 0 0 1-2-2V7"></path></svg>
                </div>
                <h3 className="text-xl font-semibold mb-4">Pour les commerçants</h3>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary mr-3 h-5 w-5 shrink-0"><polyline points="20 6 9 17 4 12"></polyline></svg>
                    <span>Création d'une vitrine en ligne</span>
                  </li>
                  <li className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary mr-3 h-5 w-5 shrink-0"><polyline points="20 6 9 17 4 12"></polyline></svg>
                    <span>Gestion des produits et des prix</span>
                  </li>
                  <li className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary mr-3 h-5 w-5 shrink-0"><polyline points="20 6 9 17 4 12"></polyline></svg>
                    <span>Notifications pour les invendus</span>
                  </li>
                  <li className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary mr-3 h-5 w-5 shrink-0"><polyline points="20 6 9 17 4 12"></polyline></svg>
                    <span>Réservation d'emplacements</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>
          
          <section className="bg-muted rounded-2xl p-12 mb-16">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-display font-semibold mb-6">Notre vision</h2>
              <p className="text-lg mb-8">
                Nous imaginons un avenir où chaque marché local est facilement accessible, tant pour les organisateurs que pour les participants et les visiteurs. Notre plateforme n'est pas seulement un outil technologique, c'est une contribution à la valorisation du patrimoine commercial et culturel français.
              </p>
              <Button asChild size="lg">
                <Link to="/register">Rejoignez-nous</Link>
              </Button>
            </div>
          </section>
          
          <section className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-display font-semibold mb-6">Notre équipe</h2>
            <p className="text-muted-foreground mb-8">
              CommuneMarch est le fruit du travail d'une équipe passionnée d'experts en développement web, en expérience utilisateur et en économie locale. Nous sommes tous animés par la conviction que les marchés locaux méritent les meilleurs outils pour prospérer à l'ère numérique.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {['Sophie', 'Marc', 'Julie', 'Thomas'].map((name, index) => (
                <div key={name} className="text-center">
                  <div className="w-24 h-24 mx-auto bg-primary/10 rounded-full mb-4"></div>
                  <h4 className="font-medium">{name}</h4>
                  <p className="text-sm text-muted-foreground">
                    {index === 0 ? 'Fondatrice & CEO' : 
                     index === 1 ? 'CTO' : 
                     index === 2 ? 'Designer UX/UI' : 
                     'Expert marchés locaux'}
                  </p>
                </div>
              ))}
            </div>
          </section>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default About;
