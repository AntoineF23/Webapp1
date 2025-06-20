"use client";

import React from 'react';
import { useQuery, useMutation } from 'convex/react';
import { api } from '../convex/_generated/api';

export default function ProductExample() {
  // Récupérer les produits
  const products = useQuery(api.products.listProducts, { status: "active", limit: 6 });
  
  // Récupérer les catégories
  const categories = useQuery(api.categories.getRootCategories);
  
  // Récupérer les marques
  const brands = useQuery(api.brands.listBrands, { limit: 5 });
  
  // Mutations pour les actions
  const initializeData = useMutation(api.init.initializeData);
  const clearData = useMutation(api.init.clearAllData);

  // Gérer l'initialisation des données
  const handleInitialize = async () => {
    try {
      const result = await initializeData();
      console.log('Données initialisées:', result);
      alert('Données d\'exemple créées avec succès !');
    } catch (error) {
      console.error('Erreur lors de l\'initialisation:', error);
      alert('Erreur lors de l\'initialisation des données');
    }
  };

  // Gérer la suppression des données
  const handleClear = async () => {
    if (confirm('Êtes-vous sûr de vouloir supprimer toutes les données ?')) {
      try {
        await clearData();
        alert('Toutes les données ont été supprimées');
      } catch (error) {
        console.error('Erreur lors de la suppression:', error);
        alert('Erreur lors de la suppression des données');
      }
    }
  };

  // Affichage de chargement
  if (products === undefined || categories === undefined || brands === undefined) {
    return (
      <div className="p-8">
        <h2 className="text-2xl font-bold mb-4">Base de données Convex - Chargement...</h2>
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  return (
    <div className="p-8 max-w-6xl mx-auto">
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-4">Base de données Convex - Gestion des produits</h2>
        <div className="flex gap-4 mb-6">
          <button
            onClick={handleInitialize}
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
          >
            Initialiser avec des données d'exemple
          </button>
          <button
            onClick={handleClear}
            className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition-colors"
          >
            Supprimer toutes les données
          </button>
        </div>
      </div>

      {/* Statistiques */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-blue-50 p-6 rounded-lg">
          <h3 className="text-lg font-semibold text-blue-800 mb-2">Produits</h3>
          <p className="text-3xl font-bold text-blue-600">{products?.length || 0}</p>
          <p className="text-sm text-blue-600">produits actifs</p>
        </div>
        <div className="bg-green-50 p-6 rounded-lg">
          <h3 className="text-lg font-semibold text-green-800 mb-2">Catégories</h3>
          <p className="text-3xl font-bold text-green-600">{categories?.length || 0}</p>
          <p className="text-sm text-green-600">catégories racines</p>
        </div>
        <div className="bg-purple-50 p-6 rounded-lg">
          <h3 className="text-lg font-semibold text-purple-800 mb-2">Marques</h3>
          <p className="text-3xl font-bold text-purple-600">{brands?.length || 0}</p>
          <p className="text-sm text-purple-600">marques actives</p>
        </div>
      </div>

      {/* Liste des produits */}
      <div className="mb-8">
        <h3 className="text-2xl font-bold mb-4">Produits récents</h3>
        {products && products.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product) => (
              <div key={product._id} className="border rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow">
                <div className="mb-3">
                  <h4 className="font-semibold text-lg">{product.name}</h4>
                  <p className="text-gray-600 text-sm">{product.shortDescription}</p>
                </div>
                
                <div className="mb-3">
                  <div className="flex items-center gap-2">
                    <span className="text-2xl font-bold text-blue-600">
                      {product.price}€
                    </span>
                    {product.originalPrice && (
                      <span className="text-lg text-gray-500 line-through">
                        {product.originalPrice}€
                      </span>
                    )}
                    {product.isOnSale && (
                      <span className="px-2 py-1 bg-red-100 text-red-600 text-xs rounded">
                        PROMO
                      </span>
                    )}
                  </div>
                </div>

                <div className="mb-3">
                  <p className="text-sm text-gray-600">
                    <strong>SKU:</strong> {product.sku}
                  </p>
                  <p className="text-sm text-gray-600">
                    <strong>Stock:</strong> {product.stock} unités
                  </p>
                </div>

                <div className="mb-3">
                  {product.isFeatured && (
                    <span className="inline-block px-2 py-1 bg-yellow-100 text-yellow-800 text-xs rounded mr-2">
                      ⭐ En vedette
                    </span>
                  )}
                  <div className="flex items-center gap-1 mt-2">
                    <span className="text-yellow-500">⭐</span>
                    <span className="text-sm">{product.averageRating.toFixed(1)}</span>
                    <span className="text-sm text-gray-500">({product.reviewCount} avis)</span>
                  </div>
                </div>

                {product.tags.length > 0 && (
                  <div className="flex flex-wrap gap-1">
                    {product.tags.slice(0, 3).map((tag, index) => (
                      <span
                        key={index}
                        className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        ) : (
          <p className="text-gray-500 text-center py-8">
            Aucun produit trouvé. Cliquez sur "Initialiser avec des données d'exemple" pour créer des produits de test.
          </p>
        )}
      </div>

      {/* Liste des catégories */}
      <div className="mb-8">
        <h3 className="text-2xl font-bold mb-4">Catégories</h3>
        {categories && categories.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {categories.map((category) => (
              <div key={category._id} className="border rounded-lg p-4">
                <h4 className="font-semibold">{category.name}</h4>
                <p className="text-gray-600 text-sm">{category.description}</p>
                <p className="text-xs text-gray-500 mt-2">
                  Slug: {category.slug}
                </p>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-gray-500">Aucune catégorie trouvée.</p>
        )}
      </div>

      {/* Liste des marques */}
      <div>
        <h3 className="text-2xl font-bold mb-4">Marques</h3>
        {brands && brands.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {brands.map((brand) => (
              <div key={brand._id} className="border rounded-lg p-4">
                <h4 className="font-semibold">{brand.name}</h4>
                <p className="text-gray-600 text-sm">{brand.description}</p>
                {brand.website && (
                  <a 
                    href={brand.website} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-blue-500 text-sm hover:underline"
                  >
                    Site web
                  </a>
                )}
              </div>
            ))}
          </div>
        ) : (
          <p className="text-gray-500">Aucune marque trouvée.</p>
        )}
      </div>
    </div>
  );
} 