import PageLayout from '@/components/PageLayout';
import Link from 'next/link';
import { ShieldCheckIcon, ClockIcon, DocumentTextIcon } from '@heroicons/react/24/outline';

export default function GarantiePage() {
  return (
    <PageLayout title="Garantie Aura">
      <div className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Votre tranquillité d'esprit
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Tous nos produits Aura bénéficient d'une garantie complète pour vous offrir une sérénité totale
            </p>
          </div>

          {/* Warranty Benefits */}
          <div className="grid md:grid-cols-3 gap-8 mb-20">
            <div className="text-center bg-white rounded-2xl p-8 shadow-sm">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <ShieldCheckIcon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">2 ans de garantie</h3>
              <p className="text-gray-600">
                Garantie constructeur de 2 ans sur tous les produits Aura, couvrant les défauts de fabrication et matériels.
              </p>
            </div>

            <div className="text-center bg-white rounded-2xl p-8 shadow-sm">
              <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <ClockIcon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Support 24h/24</h3>
              <p className="text-gray-600">
                Assistance technique disponible 24h/24 et 7j/7 pour tous les produits sous garantie.
              </p>
            </div>

            <div className="text-center bg-white rounded-2xl p-8 shadow-sm">
              <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <DocumentTextIcon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Échange express</h3>
              <p className="text-gray-600">
                En cas de défaut, nous vous envoyons un produit de remplacement sous 48h.
              </p>
            </div>
          </div>

          {/* Warranty Details */}
          <div className="grid md:grid-cols-2 gap-16 mb-20">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Ce qui est couvert</h2>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-green-600 rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Défauts de fabrication</h4>
                    <p className="text-gray-600">Tous les défauts de fabrication et de matériaux</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-green-600 rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Problèmes logiciels</h4>
                    <p className="text-gray-600">Bugs et dysfonctionnements du système</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-green-600 rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Composants internes</h4>
                    <p className="text-gray-600">Processeur, mémoire, stockage et autres composants</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-green-600 rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Écran et périphériques</h4>
                    <p className="text-gray-600">Écran, clavier, trackpad et ports</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Ce qui n'est pas couvert</h2>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-red-600 rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Dommages accidentels</h4>
                    <p className="text-gray-600">Chutes, impacts, liquides renversés</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-red-600 rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Usure normale</h4>
                    <p className="text-gray-600">Rayures, usure esthétique, batterie</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-red-600 rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Modifications</h4>
                    <p className="text-gray-600">Réparations non-autorisées, modifications</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-red-600 rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Négligence</h4>
                    <p className="text-gray-600">Mauvaise utilisation, négligence</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Process */}
          <div className="bg-gray-50 rounded-3xl p-12 mb-20">
            <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
              Procédure de garantie
            </h2>
            
            <div className="grid md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  1
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Contactez-nous</h3>
                <p className="text-gray-600 text-sm">Appelez le support ou utilisez le formulaire en ligne</p>
              </div>
              
              <div className="text-center">
                <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  2
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Diagnostic</h3>
                <p className="text-gray-600 text-sm">Notre équipe diagnostique le problème à distance</p>
              </div>
              
              <div className="text-center">
                <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  3
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Envoi/Échange</h3>
                <p className="text-gray-600 text-sm">Nous envoyons un transporteur ou un produit de remplacement</p>
              </div>
              
              <div className="text-center">
                <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  4
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Résolution</h3>
                <p className="text-gray-600 text-sm">Réparation ou remplacement sous 5-7 jours</p>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center bg-gradient-to-r from-blue-600 to-green-600 rounded-3xl p-12 text-white">
            <h2 className="text-3xl font-bold mb-4">Besoin d'assistance ?</h2>
            <p className="text-xl mb-8 text-blue-100">
              Notre équipe est là pour vous aider avec votre garantie
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/support/contact" className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-full text-lg font-medium transition-colors">
                Faire une réclamation
              </Link>
              <Link href="/support/aide" className="border border-white text-white hover:bg-white/10 px-8 py-4 rounded-full text-lg font-medium transition-colors">
                FAQ Garantie
              </Link>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
} 