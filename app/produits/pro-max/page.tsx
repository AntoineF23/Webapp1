import PageLayout from '@/components/PageLayout';
import Link from 'next/link';
import { ShoppingCartIcon, HeartIcon, StarIcon, ChevronRightIcon } from '@heroicons/react/24/outline';

export default function ProMaxPage() {
  return (
    <PageLayout title="Aura Pro Max">
      <div className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          
          {/* Hero Product Section */}
          <div className="grid md:grid-cols-2 gap-16 items-center mb-20">
            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-blue-100 to-purple-100 rounded-3xl flex items-center justify-center">
                <div className="w-80 h-80 bg-gray-900 rounded-2xl shadow-2xl transform hover:scale-105 transition-transform duration-500"></div>
              </div>
              {/* Floating Badge */}
              <div className="absolute top-6 left-6 bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-bold">
                Le plus populaire
              </div>
            </div>
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Aura Pro Max
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                La puissance ultime dans un design parfaitement maîtrisé. Chaque détail a été 
                conçu pour vous offrir l'excellence. Lorem ipsum dolor sit amet, consectetur 
                adipiscing elit, sed do eiusmod tempor incididunt ut labore.
              </p>
              
              {/* Price */}
              <div className="flex items-center mb-8">
                <span className="text-4xl font-bold text-gray-900">2 999 €</span>
                <span className="text-2xl text-gray-500 line-through ml-4">3 299 €</span>
                <span className="bg-red-100 text-red-600 px-3 py-1 rounded-full text-sm font-bold ml-4">
                  -300 €
                </span>
              </div>

              {/* Actions */}
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full text-lg font-medium transition-all duration-200 hover:scale-105 flex items-center justify-center space-x-2">
                  <ShoppingCartIcon className="w-6 h-6" />
                  <span>Ajouter au panier</span>
                </button>
                <button className="border border-gray-300 text-gray-700 hover:bg-gray-50 px-8 py-4 rounded-full text-lg font-medium transition-colors flex items-center justify-center space-x-2">
                  <HeartIcon className="w-6 h-6" />
                  <span>Ajouter aux favoris</span>
                </button>
              </div>

              {/* Quick Features */}
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-gray-50 rounded-xl p-4">
                  <div className="text-2xl font-bold text-gray-900">M3 Pro</div>
                  <div className="text-sm text-gray-600">Processeur</div>
                </div>
                <div className="bg-gray-50 rounded-xl p-4">
                  <div className="text-2xl font-bold text-gray-900">32 Go</div>
                  <div className="text-sm text-gray-600">Mémoire unifiée</div>
                </div>
                <div className="bg-gray-50 rounded-xl p-4">
                  <div className="text-2xl font-bold text-gray-900">1 To</div>
                  <div className="text-sm text-gray-600">Stockage SSD</div>
                </div>
                <div className="bg-gray-50 rounded-xl p-4">
                  <div className="text-2xl font-bold text-gray-900">18h</div>
                  <div className="text-sm text-gray-600">Autonomie</div>
                </div>
              </div>
            </div>
          </div>

          {/* Detailed Specifications */}
          <div className="bg-gray-50 rounded-3xl p-12 mb-20">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Spécifications techniques</h2>
              <p className="text-xl text-gray-600">Découvrez en détail ce qui rend le Pro Max exceptionnel</p>
            </div>

            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-6">Performance</h3>
                <div className="space-y-4">
                  <div className="flex justify-between py-3 border-b border-gray-200">
                    <span className="text-gray-600">Processeur</span>
                    <span className="font-semibold">Apple M3 Pro 12-core CPU</span>
                  </div>
                  <div className="flex justify-between py-3 border-b border-gray-200">
                    <span className="text-gray-600">GPU</span>
                    <span className="font-semibold">18-core GPU</span>
                  </div>
                  <div className="flex justify-between py-3 border-b border-gray-200">
                    <span className="text-gray-600">Neural Engine</span>
                    <span className="font-semibold">16-core Neural Engine</span>
                  </div>
                  <div className="flex justify-between py-3 border-b border-gray-200">
                    <span className="text-gray-600">Mémoire unifiée</span>
                    <span className="font-semibold">32 Go LPDDR5</span>
                  </div>
                  <div className="flex justify-between py-3">
                    <span className="text-gray-600">Stockage</span>
                    <span className="font-semibold">1 To SSD</span>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-6">Écran et Design</h3>
                <div className="space-y-4">
                  <div className="flex justify-between py-3 border-b border-gray-200">
                    <span className="text-gray-600">Écran</span>
                    <span className="font-semibold">16" Liquid Retina XDR</span>
                  </div>
                  <div className="flex justify-between py-3 border-b border-gray-200">
                    <span className="text-gray-600">Résolution</span>
                    <span className="font-semibold">3456 × 2234 pixels</span>
                  </div>
                  <div className="flex justify-between py-3 border-b border-gray-200">
                    <span className="text-gray-600">Luminosité</span>
                    <span className="font-semibold">1000 nits (typique)</span>
                  </div>
                  <div className="flex justify-between py-3 border-b border-gray-200">
                    <span className="text-gray-600">Dimensions</span>
                    <span className="font-semibold">35,57 × 24,81 × 1,68 cm</span>
                  </div>
                  <div className="flex justify-between py-3">
                    <span className="text-gray-600">Poids</span>
                    <span className="font-semibold">2,16 kg</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Key Features */}
          <div className="mb-20">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Caractéristiques principales</h2>
              <p className="text-xl text-gray-600">Ce qui fait du Pro Max le choix des professionnels</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <StarIcon className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Performance Pro</h3>
                <p className="text-gray-600 leading-relaxed">
                  Jusqu'à 2,5x plus rapide que la génération précédente. Lorem ipsum dolor sit amet, 
                  consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-20 h-20 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Créativité illimitée</h3>
                <p className="text-gray-600 leading-relaxed">
                  Outils de création avancés intégrés. Ut enim ad minim veniam, quis nostrud exercitation 
                  ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-20 h-20 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Autonomie record</h3>
                <p className="text-gray-600 leading-relaxed">
                  Jusqu'à 18 heures d'utilisation continue. Duis aute irure dolor in reprehenderit 
                  in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                </p>
              </div>
            </div>
          </div>

          {/* Customer Reviews */}
          <div className="bg-white rounded-3xl p-12 mb-20 border border-gray-100">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Avis clients</h2>
              <div className="flex items-center justify-center space-x-2 mb-4">
                {[...Array(5)].map((_, i) => (
                  <StarIcon key={i} className="w-6 h-6 text-yellow-400 fill-current" />
                ))}
                <span className="text-lg font-semibold text-gray-900 ml-2">4.8/5</span>
                <span className="text-gray-600">(1,247 avis)</span>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  name: "Sophie Martin",
                  role: "Designer graphique",
                  rating: 5,
                  comment: "Incroyable ! La performance et la qualité d'écran sont exceptionnelles. Je recommande vivement pour les professionnels de la création."
                },
                {
                  name: "Thomas Dubois",
                  role: "Développeur",
                  rating: 5,
                  comment: "Compilation ultra-rapide, multitâche fluide. C'est exactement ce dont j'avais besoin pour mes projets. L'autonomie est impressionnante."
                },
                {
                  name: "Marie Rousseau",
                  role: "Photographe",
                  rating: 4,
                  comment: "Excellent pour le traitement photo. Les couleurs sont fidèles et l'écran est magnifique. Un investissement qui en vaut la peine."
                }
              ].map((review, index) => (
                <div key={index} className="bg-gray-50 rounded-2xl p-6">
                  <div className="flex items-center mb-4">
                    {[...Array(review.rating)].map((_, i) => (
                      <StarIcon key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-700 mb-4 leading-relaxed">"{review.comment}"</p>
                  <div>
                    <div className="font-semibold text-gray-900">{review.name}</div>
                    <div className="text-sm text-gray-600">{review.role}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Accessories */}
          <div className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Accessoires recommandés</h2>
              <p className="text-xl text-gray-600">Optimisez votre expérience Pro Max</p>
            </div>

            <div className="grid md:grid-cols-4 gap-6">
              {[
                { name: 'Clavier Magic Pro', price: '249 €', image: 'bg-gray-100' },
                { name: 'Souris Pro Max', price: '129 €', image: 'bg-gray-200' },
                { name: 'Écran Studio Display', price: '1 749 €', image: 'bg-gray-300' },
                { name: 'Casque Air Max', price: '599 €', image: 'bg-gray-400' },
              ].map((accessory, index) => (
                <div key={index} className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-lg transition-shadow duration-300">
                  <div className={`aspect-square ${accessory.image} rounded-xl mb-4`}></div>
                  <h3 className="font-semibold text-gray-900 mb-2">{accessory.name}</h3>
                  <p className="text-blue-600 font-bold mb-4">{accessory.price}</p>
                  <button className="w-full bg-gray-900 hover:bg-gray-800 text-white py-2 rounded-full text-sm font-medium transition-colors">
                    Ajouter
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Final CTA */}
          <div className="text-center bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-12 text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Prêt pour le Pro Max ?
            </h2>
            <p className="text-xl mb-8 text-blue-100">
              Livraison gratuite et retour sous 14 jours
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-full text-lg font-medium transition-colors flex items-center justify-center space-x-2">
                <ShoppingCartIcon className="w-6 h-6" />
                <span>Commander maintenant</span>
              </button>
              <Link href="/support/contact" className="border border-white text-white hover:bg-white/10 px-8 py-4 rounded-full text-lg font-medium transition-colors">
                Questions ? Contactez-nous
              </Link>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
} 