'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { ChevronRightIcon, PlayIcon, ShoppingBagIcon, HeartIcon, StarIcon } from '@heroicons/react/24/outline';
import ProductShowcase from '@/components/ProductShowcase';
import AdminLink from '@/components/AdminLink';

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    // Intersection Observer for fade-in animations
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in');
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll('.fade-in-on-scroll');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-background/80 backdrop-blur-xl border-b border-border' : 'bg-transparent'
      }`}>
        <nav className="container-minimal px-6 py-6">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="text-2xl font-medium text-foreground">
              <Link href="/" className="hover:opacity-70 transition-opacity">
                Aura
              </Link>
            </div>

            {/* Navigation */}
            <div className="hidden md:flex items-center space-x-12">
              <Link href="#produits" className="text-muted-foreground hover:text-foreground transition-colors text-sm font-medium">
                Produits
              </Link>
              <Link href="/support" className="text-muted-foreground hover:text-foreground transition-colors text-sm font-medium">
                Support
              </Link>
              <Link href="/acheter" className="text-muted-foreground hover:text-foreground transition-colors text-sm font-medium">
                Store
              </Link>
              <AdminLink />
            </div>

            {/* CTA Button */}
            <Link href="/acheter" className="btn-minimal">
              Acheter
            </Link>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-background"></div>
        
        {/* Content */}
        <div className="relative z-10 text-center container-minimal px-6">
          <h1 className="text-6xl md:text-8xl font-light text-foreground mb-8 leading-tight tracking-tight">
            L'innovation
            <br />
            <span className="font-medium">
              redéfinie
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-16 max-w-2xl mx-auto font-light leading-relaxed">
            Découvrez une nouvelle façon de penser la technologie. 
            Simple, élégante, révolutionnaire.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link href="/decouvrir" className="btn-minimal text-lg px-12 py-4">
              Découvrir maintenant
            </Link>
            <Link href="/presentation" className="btn-outline-minimal text-lg px-12 py-4 flex items-center justify-center space-x-3 group">
              <PlayIcon className="w-5 h-5 group-hover:scale-110 transition-transform" />
              <span>Voir la présentation</span>
            </Link>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border border-muted-foreground flex justify-center" style={{ borderRadius: 'var(--radius)' }}>
            <div className="w-1 h-3 bg-muted-foreground mt-2 animate-pulse" style={{ borderRadius: 'var(--radius)' }}></div>
          </div>
        </div>
      </section>

      {/* Product Sections */}
      <section id="produits" className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          {/* Product 1 */}
          <div className="fade-in-on-scroll mb-32">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
                  Pro Max
                </h2>
                <p className="text-xl text-gray-600 leading-relaxed">
                  Une puissance inégalée dans un design parfaitement maîtrisé. 
                  Chaque détail a été conçu pour vous offrir l'excellence.
                </p>
                <div className="flex items-center space-x-6">
                  <Link href="/produits/pro-max" className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full font-medium transition-all duration-200 hover:scale-105">
                    En savoir plus
                  </Link>
                  <Link href="/acheter?product=pro-max" className="text-blue-600 hover:text-blue-700 font-medium flex items-center space-x-1 group">
                    <span>Acheter</span>
                    <ChevronRightIcon className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
              <div className="relative">
                <div className="aspect-square bg-gradient-to-br from-blue-100 to-purple-100 rounded-3xl flex items-center justify-center">
                  <div className="w-64 h-64 bg-gray-900 rounded-2xl shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-300"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Product 2 */}
          <div className="fade-in-on-scroll mb-32">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="relative md:order-1">
                <div className="aspect-square bg-gradient-to-br from-green-100 to-blue-100 rounded-3xl flex items-center justify-center">
                  <div className="w-64 h-64 bg-white rounded-2xl shadow-2xl transform -rotate-3 hover:rotate-0 transition-transform duration-300 border"></div>
                </div>
              </div>
              <div className="space-y-6 md:order-2">
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
                  Studio
                </h2>
                <p className="text-xl text-gray-600 leading-relaxed">
                  Créez sans limites. L'outil parfait pour libérer votre créativité 
                  et donner vie à vos idées les plus audacieuses.
                </p>
                <div className="flex items-center space-x-6">
                  <Link href="/produits/studio" className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full font-medium transition-all duration-200 hover:scale-105">
                    En savoir plus
                  </Link>
                  <Link href="/acheter?product=studio" className="text-blue-600 hover:text-blue-700 font-medium flex items-center space-x-1 group">
                    <span>Acheter</span>
                    <ChevronRightIcon className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Product 3 */}
          <div className="fade-in-on-scroll">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
                  Air
                </h2>
                <p className="text-xl text-gray-600 leading-relaxed">
                  Léger comme l'air, puissant comme un orage. 
                  L'équilibre parfait entre performance et portabilité.
                </p>
                <div className="flex items-center space-x-6">
                  <Link href="/produits/air" className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full font-medium transition-all duration-200 hover:scale-105">
                    En savoir plus
                  </Link>
                  <Link href="/acheter?product=air" className="text-blue-600 hover:text-blue-700 font-medium flex items-center space-x-1 group">
                    <span>Acheter</span>
                    <ChevronRightIcon className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
              <div className="relative">
                <div className="aspect-square bg-gradient-to-br from-purple-100 to-pink-100 rounded-3xl flex items-center justify-center">
                  <div className="w-64 h-64 bg-gradient-to-br from-purple-600 to-pink-600 rounded-2xl shadow-2xl transform rotate-6 hover:rotate-0 transition-transform duration-300"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Showcase from Database */}
      <ProductShowcase />

      {/* News Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16 fade-in-on-scroll">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Actualités
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Restez informé des dernières innovations et mises à jour.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* News Article 1 */}
            <article className="fade-in-on-scroll bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300 group">
              <div className="aspect-video bg-gradient-to-br from-blue-100 to-purple-100 group-hover:scale-105 transition-transform duration-300"></div>
              <div className="p-6">
                <time className="text-sm text-gray-500 font-medium">15 Décembre 2024</time>
                <h3 className="text-xl font-semibold text-gray-900 mt-2 mb-3 group-hover:text-blue-600 transition-colors">
                  Révolution dans l'IA embarquée
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Découvrez comment notre nouvelle puce révolutionne l'intelligence artificielle...
                </p>
              </div>
            </article>

            {/* News Article 2 */}
            <article className="fade-in-on-scroll bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300 group">
              <div className="aspect-video bg-gradient-to-br from-green-100 to-blue-100 group-hover:scale-105 transition-transform duration-300"></div>
              <div className="p-6">
                <time className="text-sm text-gray-500 font-medium">12 Décembre 2024</time>
                <h3 className="text-xl font-semibold text-gray-900 mt-2 mb-3 group-hover:text-blue-600 transition-colors">
                  Durabilité : notre engagement
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  100% recyclable, 100% responsable. Notre nouvelle approche environnementale...
                </p>
              </div>
            </article>

            {/* News Article 3 */}
            <article className="fade-in-on-scroll bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300 group">
              <div className="aspect-video bg-gradient-to-br from-purple-100 to-pink-100 group-hover:scale-105 transition-transform duration-300"></div>
              <div className="p-6">
                <time className="text-sm text-gray-500 font-medium">10 Décembre 2024</time>
                <h3 className="text-xl font-semibold text-gray-900 mt-2 mb-3 group-hover:text-blue-600 transition-colors">
                  Nouveaux services exclusifs
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Une expérience utilisateur repensée avec nos nouveaux services premium...
                </p>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-5 gap-8">
            {/* Logo and Description */}
            <div className="md:col-span-2">
              <div className="text-2xl font-bold mb-4">Aura</div>
              <p className="text-gray-400 leading-relaxed max-w-md">
                Repenser la technologie pour créer des expériences qui comptent vraiment.
              </p>
              <div className="flex space-x-4 mt-6">
                <div className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors cursor-pointer">
                  <HeartIcon className="w-5 h-5" />
                </div>
                <div className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors cursor-pointer">
                  <StarIcon className="w-5 h-5" />
                </div>
                <div className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors cursor-pointer">
                  <ShoppingBagIcon className="w-5 h-5" />
                </div>
              </div>
            </div>

            {/* Navigation Links */}
            <div>
              <h3 className="font-semibold mb-4 text-white">Produits</h3>
              <ul className="space-y-3">
                <li><Link href="/produits/pro-max" className="text-gray-400 hover:text-white transition-colors">Pro Max</Link></li>
                <li><Link href="/produits/studio" className="text-gray-400 hover:text-white transition-colors">Studio</Link></li>
                <li><Link href="/produits/air" className="text-gray-400 hover:text-white transition-colors">Air</Link></li>
                <li><Link href="/produits/accessoires" className="text-gray-400 hover:text-white transition-colors">Accessoires</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4 text-white">Support</h3>
              <ul className="space-y-3">
                <li><Link href="/support/aide" className="text-gray-400 hover:text-white transition-colors">Aide</Link></li>
                <li><Link href="/support/garantie" className="text-gray-400 hover:text-white transition-colors">Garantie</Link></li>
                <li><Link href="/support/reparations" className="text-gray-400 hover:text-white transition-colors">Réparations</Link></li>
                <li><Link href="/support/contact" className="text-gray-400 hover:text-white transition-colors">Contact</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4 text-white">Légal</h3>
              <ul className="space-y-3">
                <li><Link href="/legal/confidentialite" className="text-gray-400 hover:text-white transition-colors">Confidentialité</Link></li>
                <li><Link href="/legal/conditions" className="text-gray-400 hover:text-white transition-colors">Conditions d'utilisation</Link></li>
                <li><Link href="/legal/mentions" className="text-gray-400 hover:text-white transition-colors">Mentions légales</Link></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Aura. Tous droits réservés.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
