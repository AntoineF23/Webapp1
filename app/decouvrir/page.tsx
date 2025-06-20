import PageLayout from '@/components/PageLayout';
import Link from 'next/link';
import { PlayIcon, ChevronRightIcon, SparklesIcon, BoltIcon, ShieldCheckIcon } from '@heroicons/react/24/outline';

export default function DecouvrirPage() {
  return (
    <PageLayout title="Découvrir Aura">
      <div className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          
          {/* Hero Video Section */}
          <div className="bg-black rounded-3xl overflow-hidden mb-20 relative group cursor-pointer">
            <div className="aspect-video bg-gradient-to-br from-blue-900 via-purple-900 to-black flex items-center justify-center">
              <div className="text-center text-white">
                <div className="w-24 h-24 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-white/30 transition-colors">
                  <PlayIcon className="w-12 h-12 text-white ml-1" />
                </div>
                <h3 className="text-2xl font-bold mb-2">L'innovation en action</h3>
                <p className="text-blue-200">Découvrez comment Aura transforme votre quotidien</p>
              </div>
            </div>
          </div>

          {/* Innovation Story */}
          <div className="mb-20">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Une révolution technologique
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Chez Aura, nous ne nous contentons pas de suivre les tendances. 
                Nous les créons. Chaque produit est conçu avec une obsession pour l'excellence 
                et une vision claire : simplifier la complexité.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-16 items-center mb-16">
              <div>
                <h3 className="text-3xl font-bold text-gray-900 mb-6">Design pensé pour l'humain</h3>
                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor 
                  incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
                  exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore 
                  eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.
                </p>
                <Link href="/acheter" className="inline-flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full font-medium transition-all duration-200 hover:scale-105">
                  <span>Découvrir les produits</span>
                  <ChevronRightIcon className="w-4 h-4" />
                </Link>
              </div>
              <div className="relative">
                <div className="aspect-square bg-gradient-to-br from-blue-50 to-purple-50 rounded-3xl flex items-center justify-center">
                  <div className="w-80 h-80 bg-gray-100 rounded-2xl shadow-2xl transform rotate-6 hover:rotate-0 transition-transform duration-500"></div>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div className="relative md:order-1">
                <div className="aspect-square bg-gradient-to-br from-green-50 to-blue-50 rounded-3xl flex items-center justify-center">
                  <div className="w-80 h-80 bg-white rounded-2xl shadow-2xl transform -rotate-6 hover:rotate-0 transition-transform duration-500 border"></div>
                </div>
              </div>
              <div className="md:order-2">
                <h3 className="text-3xl font-bold text-gray-900 mb-6">Performance redéfinie</h3>
                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium 
                  doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore 
                  veritatis et quasi architecto beatae vitae dicta sunt explicabo.
                </p>
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, 
                  sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.
                </p>
                <Link href="/presentation" className="inline-flex items-center space-x-2 text-blue-600 hover:text-blue-700 font-medium">
                  <PlayIcon className="w-5 h-5" />
                  <span>Voir la présentation technique</span>
                </Link>
              </div>
            </div>
          </div>

          {/* Key Features */}
          <div className="bg-gray-50 rounded-3xl p-12 mb-20">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Pourquoi Aura ?
              </h2>
              <p className="text-xl text-gray-600">
                Trois piliers fondamentaux qui font la différence
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <SparklesIcon className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Innovation continue</h3>
                <p className="text-gray-600 leading-relaxed">
                  At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis 
                  praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias.
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-20 h-20 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <BoltIcon className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Performance extrême</h3>
                <p className="text-gray-600 leading-relaxed">
                  Excepturi sint occaecati cupiditate non provident, similique sunt in culpa 
                  qui officia deserunt mollitia animi, id est laborum et dolorum fuga.
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-20 h-20 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <ShieldCheckIcon className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Sécurité totale</h3>
                <p className="text-gray-600 leading-relaxed">
                  Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, 
                  cum soluta nobis est eligendi optio cumque nihil impedit quo minus.
                </p>
              </div>
            </div>
          </div>

          {/* Timeline */}
          <div className="mb-20">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                L'histoire d'Aura
              </h2>
              <p className="text-xl text-gray-600">
                Un parcours d'innovation depuis 2020
              </p>
            </div>

            <div className="relative">
              <div className="absolute left-1/2 transform -translate-x-0.5 w-0.5 h-full bg-gray-300"></div>
              
              {[
                { year: '2020', title: 'Fondation', description: 'Création d\'Aura avec une vision révolutionnaire' },
                { year: '2021', title: 'Premier produit', description: 'Lancement de l\'Aura Air, succès immédiat' },
                { year: '2022', title: 'Expansion', description: 'Introduction de la gamme Studio pour les créatifs' },
                { year: '2023', title: 'Pro Max', description: 'Le flagship qui redéfinit la performance' },
                { year: '2024', title: 'Aujourd\'hui', description: 'Leader mondial de l\'innovation technologique' },
              ].map((event, index) => (
                <div key={index} className={`relative flex items-center mb-12 ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}>
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8'}`}>
                    <div className="bg-white rounded-2xl p-6 shadow-lg">
                      <div className="text-blue-600 font-bold text-lg mb-2">{event.year}</div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{event.title}</h3>
                      <p className="text-gray-600">{event.description}</p>
                    </div>
                  </div>
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blue-600 rounded-full border-4 border-white shadow-lg"></div>
                </div>
              ))}
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-12 text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Prêt à découvrir votre Aura ?
            </h2>
            <p className="text-xl mb-8 text-blue-100">
              Rejoignez des millions d'utilisateurs qui ont déjà fait le choix de l'excellence
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/acheter" className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-full text-lg font-medium transition-colors">
                Voir les produits
              </Link>
              <Link href="/support/contact" className="border border-white text-white hover:bg-white/10 px-8 py-4 rounded-full text-lg font-medium transition-colors">
                Nous contacter
              </Link>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
} 