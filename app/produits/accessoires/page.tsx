import PageLayout from '@/components/PageLayout';
import Link from 'next/link';
import { ShoppingCartIcon, StarIcon } from '@heroicons/react/24/outline';

export default function AccessoiresPage() {
  const accessories = [
    {
      name: 'Clavier Magic Pro',
      price: '249 €',
      originalPrice: '279 €',
      rating: 4.8,
      reviews: 127,
      image: 'bg-gray-100',
      category: 'Claviers'
    },
    {
      name: 'Souris Pro Max',
      price: '129 €',
      originalPrice: '149 €',
      rating: 4.9,
      reviews: 234,
      image: 'bg-gray-200',
      category: 'Souris'
    },
    {
      name: 'Écran Studio Display',
      price: '1749 €',
      originalPrice: '1899 €',
      rating: 4.7,
      reviews: 89,
      image: 'bg-gray-300',
      category: 'Écrans'
    },
    {
      name: 'Casque Air Max',
      price: '599 €',
      originalPrice: '649 €',
      rating: 4.6,
      reviews: 156,
      image: 'bg-gray-400',
      category: 'Audio'
    },
    {
      name: 'Chargeur Ultra Rapide',
      price: '89 €',
      originalPrice: '99 €',
      rating: 4.5,
      reviews: 312,
      image: 'bg-blue-100',
      category: 'Chargeurs'
    },
    {
      name: 'Housse Protection Pro',
      price: '79 €',
      originalPrice: '89 €',
      rating: 4.4,
      reviews: 198,
      image: 'bg-green-100',
      category: 'Protection'
    }
  ];

  return (
    <PageLayout title="Accessoires Aura">
      <div className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Accessoires Premium
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Complétez votre setup Aura avec nos accessoires conçus pour optimiser votre expérience
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-20">
            {accessories.map((accessory, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-sm hover:shadow-lg transition-shadow duration-300 overflow-hidden">
                <div className={`aspect-square ${accessory.image} flex items-center justify-center`}>
                  <div className="w-32 h-32 bg-white/20 rounded-xl"></div>
                </div>
                
                <div className="p-6">
                  <div className="text-sm text-blue-600 font-medium mb-2">{accessory.category}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{accessory.name}</h3>
                  
                  <div className="flex items-center mb-4">
                    <div className="flex items-center space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <StarIcon
                          key={i}
                          className={`w-4 h-4 ${i < Math.floor(accessory.rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'}`}
                        />
                      ))}
                    </div>
                    <span className="text-sm text-gray-600 ml-2">
                      {accessory.rating} ({accessory.reviews} avis)
                    </span>
                  </div>
                  
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <span className="text-xl font-bold text-gray-900">{accessory.price}</span>
                      <span className="text-sm text-gray-500 line-through ml-2">{accessory.originalPrice}</span>
                    </div>
                  </div>
                  
                  <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-full font-medium transition-colors flex items-center justify-center space-x-2">
                    <ShoppingCartIcon className="w-5 h-5" />
                    <span>Ajouter au panier</span>
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-12 text-white">
            <h2 className="text-3xl font-bold mb-4">Pack Accessoires Complet</h2>
            <p className="text-xl mb-8 text-blue-100">
              Économisez 20% en achetant tous les accessoires ensemble
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-full text-lg font-medium transition-colors">
                Voir le pack complet
              </button>
              <Link href="/acheter" className="border border-white text-white hover:bg-white/10 px-8 py-4 rounded-full text-lg font-medium transition-colors">
                Retour au store
              </Link>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
} 