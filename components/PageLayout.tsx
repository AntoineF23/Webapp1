'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { ArrowLeftIcon } from '@heroicons/react/24/outline';

interface PageLayoutProps {
  children: React.ReactNode;
  title?: string;
  showBackButton?: boolean;
}

export default function PageLayout({ children, title, showBackButton = true }: PageLayoutProps) {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/80 backdrop-blur-xl border-b border-gray-200' : 'bg-white/90 backdrop-blur-sm'
      }`}>
        <nav className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Logo and Back Button */}
            <div className="flex items-center space-x-4">
              {showBackButton && (
                <Link href="/" className="text-gray-600 hover:text-gray-900 transition-colors">
                  <ArrowLeftIcon className="w-5 h-5" />
                </Link>
              )}
              <div className="text-2xl font-bold text-gray-900">
                <Link href="/" className="hover:opacity-80 transition-opacity">
                  Aura
                </Link>
              </div>
            </div>

            {/* Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <Link href="/#produits" className="text-gray-700 hover:text-gray-900 transition-colors text-sm font-medium">
                Produits
              </Link>
              <Link href="/support" className="text-gray-700 hover:text-gray-900 transition-colors text-sm font-medium">
                Support
              </Link>
              <Link href="/acheter" className="text-gray-700 hover:text-gray-900 transition-colors text-sm font-medium">
                Store
              </Link>
            </div>

            {/* CTA Button */}
            <Link href="/acheter" className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 hover:scale-105">
              Acheter
            </Link>
          </div>
        </nav>
      </header>

      {/* Page Title */}
      {title && (
        <div className="bg-gray-50 py-16">
          <div className="max-w-6xl mx-auto px-6 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900">{title}</h1>
          </div>
        </div>
      )}

      {/* Main Content */}
      <main className="flex-1">
        {children}
      </main>

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