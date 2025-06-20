import PageLayout from '@/components/PageLayout';
import Link from 'next/link';
import { ShoppingCartIcon, HeartIcon, StarIcon } from '@heroicons/react/24/outline';

export default function AirPage() {
  return (
    <PageLayout title="Aura Air">
      <div className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          
          <div className="grid md:grid-cols-2 gap-16 items-center mb-20">
            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-purple-100 to-pink-100 rounded-3xl flex items-center justify-center">
                <div className="w-80 h-80 bg-gradient-to-br from-purple-600 to-pink-600 rounded-2xl shadow-2xl transform hover:scale-105 transition-transform duration-500"></div>
              </div>
              <div className="absolute top-6 left-6 bg-purple-600 text-white px-4 py-2 rounded-full text-sm font-bold">
                Le plus léger
              </div>
            </div>
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Aura Air
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Léger comme l'air, puissant comme un orage. L'équilibre parfait entre performance 
                et portabilité. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
              
              <div className="flex items-center mb-8">
                <span className="text-4xl font-bold text-gray-900">1 299 €</span>
                <span className="text-2xl text-gray-500 line-through ml-4">1 499 €</span>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <button className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 rounded-full text-lg font-medium transition-all duration-200 hover:scale-105 flex items-center justify-center space-x-2">
                  <ShoppingCartIcon className="w-6 h-6" />
                  <span>Ajouter au panier</span>
                </button>
                <button className="border border-gray-300 text-gray-700 hover:bg-gray-50 px-8 py-4 rounded-full text-lg font-medium transition-colors flex items-center justify-center space-x-2">
                  <HeartIcon className="w-6 h-6" />
                  <span>Favoris</span>
                </button>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="bg-gray-50 rounded-xl p-4">
                  <div className="text-2xl font-bold text-gray-900">M2</div>
                  <div className="text-sm text-gray-600">Processeur</div>
                </div>
                <div className="bg-gray-50 rounded-xl p-4">
                  <div className="text-2xl font-bold text-gray-900">8 Go</div>
                  <div className="text-sm text-gray-600">Mémoire</div>
                </div>
                <div className="bg-gray-50 rounded-xl p-4">
                  <div className="text-2xl font-bold text-gray-900">256 Go</div>
                  <div className="text-sm text-gray-600">Stockage</div>
                </div>
                <div className="bg-gray-50 rounded-xl p-4">
                  <div className="text-2xl font-bold text-gray-900">12h</div>
                  <div className="text-sm text-gray-600">Autonomie</div>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl p-12 text-white">
            <h2 className="text-3xl font-bold mb-4">Ultra-portable</h2>
            <p className="text-xl mb-8 text-purple-100">
              Emportez la puissance partout avec vous
            </p>
            <button className="bg-white text-purple-600 hover:bg-gray-100 px-8 py-4 rounded-full text-lg font-medium transition-colors">
              Commander Air
            </button>
          </div>
        </div>
      </div>
    </PageLayout>
  );
} 