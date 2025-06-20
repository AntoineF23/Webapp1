"use client";

import React from 'react';
import Link from 'next/link';
import { useQuery } from 'convex/react';
import { api } from '../convex/_generated/api';
import { StarIcon, ShoppingBagIcon } from '@heroicons/react/24/outline';
import { StarIcon as StarSolidIcon } from '@heroicons/react/24/solid';

export default function ProductShowcase() {
  // Récupérer les produits en vedette
  const featuredProducts = useQuery(api.products.getFeaturedProducts, { limit: 3 });
  
  // Récupérer les produits en promotion
  const saleProducts = useQuery(api.products.getSaleProducts, { limit: 6 });

  if (featuredProducts === undefined || saleProducts === undefined) {
    return (
      <div className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500 mx-auto"></div>
            <p className="text-gray-600 mt-4">Chargement des produits...</p>
          </div>
        </div>
      </div>
    );
  }

  const renderStars = (rating: number) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    for (let i = 0; i < fullStars; i++) {
      stars.push(
        <StarSolidIcon key={i} className="w-4 h-4 text-yellow-400" />
      );
    }

    if (hasHalfStar) {
      stars.push(
        <div key="half" className="relative">
          <StarIcon className="w-4 h-4 text-yellow-400" />
          <div className="absolute inset-0 overflow-hidden w-1/2">
            <StarSolidIcon className="w-4 h-4 text-yellow-400" />
          </div>
        </div>
      );
    }

    const remainingStars = 5 - Math.ceil(rating);
    for (let i = 0; i < remainingStars; i++) {
      stars.push(
        <StarIcon key={`empty-${i}`} className="w-4 h-4 text-gray-300" />
      );
    }

    return stars;
  };

  return (
    <div className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section produits en vedette */}
        {featuredProducts && featuredProducts.length > 0 && (
          <div className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Produits en vedette
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Découvrez notre sélection de produits phares, plébiscités par nos clients.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {featuredProducts.map((product) => (
                <div key={product._id} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow group">
                  <div className="aspect-square bg-gradient-to-br from-gray-100 to-gray-200 rounded-xl mb-6 flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                    {product.images.length > 0 ? (
                      <div className="w-32 h-32 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg"></div>
                    ) : (
                      <div className="w-32 h-32 bg-gradient-to-br from-gray-400 to-gray-600 rounded-lg flex items-center justify-center">
                        <ShoppingBagIcon className="w-16 h-16 text-white" />
                      </div>
                    )}
                  </div>

                  <div className="space-y-4">
                    <h3 className="text-xl font-bold text-gray-900">{product.name}</h3>
                    
                    <div className="flex items-center space-x-2">
                      <div className="flex items-center space-x-1">
                        {renderStars(product.averageRating)}
                      </div>
                      <span className="text-sm text-gray-600">
                        ({product.reviewCount})
                      </span>
                    </div>

                    <div className="flex items-center space-x-3">
                      <span className="text-2xl font-bold text-blue-600">
                        {product.price}€
                      </span>
                      {product.originalPrice && product.isOnSale && (
                        <>
                          <span className="text-lg text-gray-400 line-through">
                            {product.originalPrice}€
                          </span>
                          <span className="px-2 py-1 bg-red-100 text-red-600 text-xs rounded-full font-medium">
                            -{Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}%
                          </span>
                        </>
                      )}
                    </div>

                    <Link 
                      href={`/produits/${product.slug}`}
                      className="block w-full bg-blue-600 hover:bg-blue-700 text-white text-center py-3 rounded-xl font-medium transition-colors"
                    >
                      Voir le produit
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Section promotions */}
        {saleProducts && saleProducts.length > 0 && (
          <div>
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Promotions du moment
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Profitez de nos offres exceptionnelles pour vous équiper au meilleur prix.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {saleProducts.map((product) => (
                <div key={product._id} className="bg-white rounded-xl p-4 shadow-md hover:shadow-lg transition-shadow group relative overflow-hidden">
                  {/* Badge promotion */}
                  {product.originalPrice && (
                    <div className="absolute top-2 right-2 bg-red-500 text-white px-2 py-1 rounded-full text-xs font-bold z-10">
                      -{Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}%
                    </div>
                  )}

                  <div className="aspect-square bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg mb-4 flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                    {product.images.length > 0 ? (
                      <div className="w-24 h-24 bg-gradient-to-br from-green-500 to-blue-600 rounded-lg"></div>
                    ) : (
                      <div className="w-24 h-24 bg-gradient-to-br from-gray-400 to-gray-600 rounded-lg flex items-center justify-center">
                        <ShoppingBagIcon className="w-12 h-12 text-white" />
                      </div>
                    )}
                  </div>

                  <div className="space-y-2">
                    <h4 className="font-semibold text-gray-900 line-clamp-2">{product.name}</h4>
                    
                    <div className="flex items-center space-x-1">
                      <div className="flex items-center space-x-1">
                        {renderStars(product.averageRating)}
                      </div>
                      <span className="text-xs text-gray-600">
                        ({product.reviewCount})
                      </span>
                    </div>

                    <div className="flex items-center space-x-2">
                      <span className="text-lg font-bold text-blue-600">
                        {product.price}€
                      </span>
                      {product.originalPrice && (
                        <span className="text-sm text-gray-400 line-through">
                          {product.originalPrice}€
                        </span>
                      )}
                    </div>

                    <Link 
                      href={`/produits/${product.slug}`}
                      className="block w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white text-center py-2 rounded-lg text-sm font-medium transition-all"
                    >
                      Voir l'offre
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Message si pas de produits */}
        {(!featuredProducts || featuredProducts.length === 0) && (!saleProducts || saleProducts.length === 0) && (
          <div className="text-center py-12">
            <div className="bg-white rounded-2xl p-8 shadow-lg max-w-md mx-auto">
              <ShoppingBagIcon className="w-16 h-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">Aucun produit trouvé</h3>
              <p className="text-gray-600 mb-6">
                Les produits ne sont pas encore configurés dans la base de données.
              </p>
              <Link 
                href="/admin"
                className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl font-medium transition-colors"
              >
                Aller à l'administration
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
} 