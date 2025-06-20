import PageLayout from '@/components/PageLayout';
import Link from 'next/link';
import { WrenchScrewdriverIcon, TruckIcon, ClockIcon } from '@heroicons/react/24/outline';

export default function ReparationsPage() {
  return (
    <PageLayout title="Service de Réparation">
      <div className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Service de Réparation Aura
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Notre équipe d'experts certifiés répare tous vos produits Aura avec des pièces d'origine
            </p>
          </div>

          {/* Service Features */}
          <div className="grid md:grid-cols-3 gap-8 mb-20">
            <div className="text-center bg-white rounded-2xl p-8 shadow-sm">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <WrenchScrewdriverIcon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Experts certifiés</h3>
              <p className="text-gray-600">
                Nos techniciens sont certifiés et formés directement par Aura pour garantir la meilleure qualité de réparation.
              </p>
            </div>

            <div className="text-center bg-white rounded-2xl p-8 shadow-sm">
              <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <TruckIcon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Enlèvement gratuit</h3>
              <p className="text-gray-600">
                Service d'enlèvement et de livraison gratuit partout en France pour toutes les réparations.
              </p>
            </div>

            <div className="text-center bg-white rounded-2xl p-8 shadow-sm">
              <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <ClockIcon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Réparation rapide</h3>
              <p className="text-gray-600">
                La plupart des réparations sont effectuées en 24-48h. Nous vous tenons informé à chaque étape.
              </p>
            </div>
          </div>

          {/* Repair Types */}
          <div className="mb-20">
            <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Types de réparations</h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-gray-50 rounded-2xl p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-6">Réparations courantes</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700">Remplacement d'écran</span>
                    <span className="font-semibold text-gray-900">À partir de 199 €</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700">Changement de batterie</span>
                    <span className="font-semibold text-gray-900">À partir de 89 €</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700">Réparation clavier</span>
                    <span className="font-semibold text-gray-900">À partir de 129 €</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700">Problème de chargement</span>
                    <span className="font-semibold text-gray-900">À partir de 79 €</span>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 rounded-2xl p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-6">Réparations avancées</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700">Carte mère</span>
                    <span className="font-semibold text-gray-900">Sur devis</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700">Dégâts des eaux</span>
                    <span className="font-semibold text-gray-900">Sur devis</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700">Récupération de données</span>
                    <span className="font-semibold text-gray-900">À partir de 149 €</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700">Mise à niveau composants</span>
                    <span className="font-semibold text-gray-900">Sur devis</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Process */}
          <div className="bg-gray-50 rounded-3xl p-12 mb-20">
            <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
              Comment ça marche ?
            </h2>
            
            <div className="grid md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  1
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Diagnostic</h3>
                <p className="text-gray-600 text-sm">Décrivez votre problème et recevez un diagnostic initial</p>
              </div>
              
              <div className="text-center">
                <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  2
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Enlèvement</h3>
                <p className="text-gray-600 text-sm">Nous récupérons votre appareil gratuitement</p>
              </div>
              
              <div className="text-center">
                <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  3
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Réparation</h3>
                <p className="text-gray-600 text-sm">Nos experts réparent votre appareil avec des pièces d'origine</p>
              </div>
              
              <div className="text-center">
                <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  4
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Retour</h3>
                <p className="text-gray-600 text-sm">Livraison gratuite de votre appareil réparé</p>
              </div>
            </div>
          </div>

          {/* Warranty */}
          <div className="bg-gradient-to-r from-green-600 to-blue-600 rounded-3xl p-12 mb-20 text-white text-center">
            <h2 className="text-3xl font-bold mb-4">Garantie réparation</h2>
            <p className="text-xl mb-6 text-green-100">
              Toutes nos réparations sont garanties 6 mois pièces et main-d'œuvre
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <div className="text-2xl font-bold mb-1">6 mois</div>
                <div className="text-green-100">de garantie</div>
              </div>
              <div>
                <div className="text-2xl font-bold mb-1">100%</div>
                <div className="text-green-100">pièces d'origine</div>
              </div>
              <div>
                <div className="text-2xl font-bold mb-1">24-48h</div>
                <div className="text-green-100">délai moyen</div>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Besoin d'une réparation ?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Contactez-nous pour un diagnostic gratuit
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/support/contact" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full text-lg font-medium transition-colors">
                Demander une réparation
              </Link>
              <Link href="/support/aide" className="border border-gray-300 text-gray-700 hover:bg-gray-50 px-8 py-4 rounded-full text-lg font-medium transition-colors">
                FAQ Réparations
              </Link>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
} 