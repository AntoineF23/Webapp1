import PageLayout from '@/components/PageLayout';
import Link from 'next/link';
import { ShoppingCartIcon, HeartIcon, StarIcon } from '@heroicons/react/24/outline';

export default function AcheterPage() {
  const products = [
    {
      id: 'pro-max',
      name: 'Aura Pro Max',
      price: '2 999 €',
      originalPrice: '3 299 €',
      image: 'bg-gradient-to-br from-blue-100 to-purple-100',
      device: 'bg-gray-900',
      description: 'La puissance ultime dans un design parfait',
      features: ['Processeur M3 Pro', '32 Go de RAM', '1 To de stockage', 'Écran Retina 16"'],
      badge: 'Le plus populaire'
    },
    {
      id: 'studio',
      name: 'Aura Studio',
      price: '1 999 €',
      originalPrice: '2 199 €',
      image: 'bg-gradient-to-br from-green-100 to-blue-100',
      device: 'bg-white border',
      description: 'Créativité sans limites',
      features: ['Processeur M3', '16 Go de RAM', '512 Go de stockage', 'Écran Retina 14"'],
      badge: 'Meilleur rapport qualité-prix'
    },
    {
      id: 'air',
      name: 'Aura Air',
      price: '1 299 €',
      originalPrice: '1 499 €',
      image: 'bg-gradient-to-br from-purple-100 to-pink-100',
      device: 'bg-gradient-to-br from-purple-600 to-pink-600',
      description: 'Léger, puissant, portable',
      features: ['Processeur M2', '8 Go de RAM', '256 Go de stockage', 'Écran Retina 13"'],
      badge: 'Le plus léger'
    },
  ];

  return (
    <PageLayout title="Store Aura">
      <div className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Trouvez votre Aura parfait
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Découvrez notre gamme complète de produits conçus pour transformer votre façon de travailler et de créer.
            </p>
          </div>

          {/* Product Grid */}
          <div className="grid md:grid-cols-3 gap-8 mb-20">
            {products.map((product) => (
              <div key={product.id} className="relative bg-white rounded-3xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden group">
                {/* Badge */}
                <div className="absolute top-4 left-4 z-10 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                  {product.badge}
                </div>

                {/* Product Image */}
                <div className={`aspect-square ${product.image} flex items-center justify-center p-8`}>
                  <div className={`w-48 h-32 ${product.device} rounded-xl shadow-2xl transform group-hover:scale-105 transition-transform duration-300`}></div>
                </div>

                {/* Product Info */}
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{product.name}</h3>
                  <p className="text-gray-600 mb-4">{product.description}</p>
                  
                  {/* Features */}
                  <ul className="space-y-2 mb-6">
                    {product.features.map((feature, index) => (
                      <li key={index} className="text-sm text-gray-500 flex items-center">
                        <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-3"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>

                  {/* Price */}
                  <div className="flex items-center justify-between mb-6">
                    <div>
                      <span className="text-2xl font-bold text-gray-900">{product.price}</span>
                      <span className="text-lg text-gray-500 line-through ml-2">{product.originalPrice}</span>
                    </div>
                    <button className="text-gray-400 hover:text-red-500 transition-colors">
                      <HeartIcon className="w-6 h-6" />
                    </button>
                  </div>

                  {/* Actions */}
                  <div className="space-y-3">
                    <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-full font-medium transition-all duration-200 hover:scale-105 flex items-center justify-center space-x-2">
                      <ShoppingCartIcon className="w-5 h-5" />
                      <span>Ajouter au panier</span>
                    </button>
                    <Link href={`/produits/${product.id}`} className="w-full border border-gray-300 text-gray-700 hover:bg-gray-50 py-3 rounded-full font-medium transition-colors text-center block">
                      En savoir plus
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Accessories Section */}
          <div className="bg-gray-50 rounded-3xl p-12 mb-20">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Accessoires</h2>
              <p className="text-xl text-gray-600">Complétez votre setup avec nos accessoires premium</p>
            </div>

            <div className="grid md:grid-cols-4 gap-6">
              {[
                { name: 'Clavier Magic', price: '199 €', image: 'bg-gray-100' },
                { name: 'Souris Pro', price: '99 €', image: 'bg-gray-200' },
                { name: 'Écran Studio', price: '1 599 €', image: 'bg-gray-300' },
                { name: 'Casque Air', price: '549 €', image: 'bg-gray-400' },
              ].map((accessory, index) => (
                <div key={index} className="bg-white rounded-2xl p-6 hover:shadow-lg transition-shadow duration-300">
                  <div className={`aspect-square ${accessory.image} rounded-xl mb-4`}></div>
                  <h3 className="font-semibold text-gray-900 mb-2">{accessory.name}</h3>
                  <p className="text-blue-600 font-bold mb-3">{accessory.price}</p>
                  <button className="w-full bg-gray-900 hover:bg-gray-800 text-white py-2 rounded-full text-sm font-medium transition-colors">
                    Acheter
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Why Choose Aura */}
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Pourquoi choisir Aura ?</h2>
            <p className="text-xl text-gray-600 mb-12">Une expérience d'achat exceptionnelle</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <ShoppingCartIcon className="w-8 h-8 text-blue-600" />,
                title: 'Livraison gratuite',
                description: 'Livraison express gratuite pour toute commande au-dessus de 50 €'
              },
              {
                icon: <StarIcon className="w-8 h-8 text-blue-600" />,
                title: 'Garantie 2 ans',
                description: 'Garantie constructeur de 2 ans sur tous nos produits'
              },
              {
                icon: <HeartIcon className="w-8 h-8 text-blue-600" />,
                title: 'Support premium',
                description: 'Assistance technique 7j/7 pour tous nos clients'
              }
            ].map((feature, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </PageLayout>
  );
} 