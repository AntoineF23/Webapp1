"use client";

import React from 'react';
import { useQuery } from 'convex/react';
import { api } from '../convex/_generated/api';

interface ProductCardProps {
  product: any; // Le type exact du produit depuis Convex
  onDelete?: (productId: string) => void;
  onEdit?: (productId: string) => void;
}

export default function ProductCard({ product, onDelete, onEdit }: ProductCardProps) {
  // Récupérer l'URL de la première image si elle existe
  const primaryImageUrl = useQuery(
    api.storage.getFileUrl,
    product.images && product.images.length > 0 ? { storageId: product.images[0].storageId } : "skip"
  );

  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
      {/* Image du produit */}
      <div className="aspect-w-16 aspect-h-9 bg-gray-200">
        {primaryImageUrl ? (
          <img
            src={primaryImageUrl}
            alt={product.name}
            className="w-full h-48 object-cover"
          />
        ) : (
          <div className="w-full h-48 bg-gray-100 flex items-center justify-center">
            <div className="text-center">
              <div className="text-4xl text-gray-400 mb-2">📦</div>
              <p className="text-gray-500 text-sm">Aucune image</p>
            </div>
          </div>
        )}
      </div>

      {/* Contenu */}
      <div className="p-6">
        <div className="flex justify-between items-start mb-3">
          <h3 className="text-xl font-semibold text-gray-900 line-clamp-2">{product.name}</h3>
          <div className="flex space-x-2">
            {onEdit && (
              <button
                onClick={() => onEdit(product._id)}
                className="px-3 py-1 bg-blue-50 text-blue-600 text-sm rounded-lg hover:bg-blue-100 transition-colors"
                title="Modifier"
              >
                ✏️
              </button>
            )}
            {onDelete && (
              <button
                onClick={() => onDelete(product._id)}
                className="px-3 py-1 bg-red-50 text-red-600 text-sm rounded-lg hover:bg-red-100 transition-colors"
                title="Supprimer"
              >
                🗑️
              </button>
            )}
          </div>
        </div>

        {/* Description courte */}
        {product.shortDescription && (
          <p className="text-gray-600 text-sm mb-3 line-clamp-2">
            {product.shortDescription}
          </p>
        )}

        {/* Prix */}
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center space-x-2">
            <span className="text-2xl font-bold text-blue-600">
              {product.price}€
            </span>
            {product.originalPrice && product.originalPrice > product.price && (
              <span className="text-lg text-gray-500 line-through">
                {product.originalPrice}€
              </span>
            )}
          </div>
          {product.isOnSale && (
            <span className="px-2 py-1 bg-red-100 text-red-600 text-xs rounded-full font-medium">
              -{Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}%
            </span>
          )}
        </div>

        {/* Informations détaillées */}
        <div className="grid grid-cols-2 gap-4 text-sm text-gray-500 mb-4">
          <div>
            <span className="font-medium">SKU:</span><br />
            {product.sku || 'Non défini'}
          </div>
          <div>
            <span className="font-medium">Stock:</span><br />
            <span className={product.stock > 0 ? 'text-green-600' : 'text-red-600'}>
              {product.stock || 0} unités
            </span>
          </div>
        </div>

        {/* Tags et badges */}
        <div className="flex flex-wrap gap-2 mb-4">
          {product.isFeatured && (
            <span className="px-2 py-1 bg-yellow-100 text-yellow-800 text-xs rounded-full">
              ⭐ Vedette
            </span>
          )}
          {product.isOnSale && (
            <span className="px-2 py-1 bg-red-100 text-red-600 text-xs rounded-full">
              🏷️ Promo
            </span>
          )}
          {product.tags && product.tags.slice(0, 3).map((tag: string, index: number) => (
            <span
              key={index}
              className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full"
            >
              #{tag}
            </span>
          ))}
        </div>

        {/* Métadonnées */}
        <div className="pt-3 border-t border-gray-100 text-xs text-gray-400">
          <div className="flex justify-between">
            <span>Slug: {product.slug}</span>
            <span>
              {product.images ? `${product.images.length} image(s)` : 'Aucune image'}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
} 