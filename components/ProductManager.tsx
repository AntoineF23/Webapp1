"use client";

import React, { useState } from 'react';
import { useMutation, useQuery } from 'convex/react';
import { api } from '../convex/_generated/api';
import Link from 'next/link';

export default function ProductManager() {
  const [showForm, setShowForm] = useState(false);
  const [editingProduct, setEditingProduct] = useState<any>(null);
  const [viewMode, setViewMode] = useState<'table' | 'cards'>('table');
  const [filters, setFilters] = useState({
    search: '',
    status: 'all',
    featured: 'all',
    sale: 'all',
    sortBy: 'name',
    sortOrder: 'asc' as 'asc' | 'desc'
  });
  const [formData, setFormData] = useState({
    name: '',
    slug: '',
    description: '',
    shortDescription: '',
    price: 0,
    originalPrice: 0,
    currency: 'EUR',
    sku: '',
    barcode: '',
    categoryId: '',
    brandId: '',
    stock: 100,
    minStock: 10,
    maxStock: 1000,
    weight: 0,
    dimensions: {
      length: 0,
      width: 0,
      height: 0,
    },
    color: '',
    material: '',
    warranty: 12,
    isFeatured: false,
    isOnSale: false,
    status: 'active',
    tags: '',
    metaTitle: '',
    metaDescription: '',
    features: [''],
    specifications: [{ name: '', value: '' }],
  });
  const [images, setImages] = useState<File[]>([]);
  const [uploading, setUploading] = useState(false);

  // Queries
  const products = useQuery(api.products.listProducts, { limit: 50 });
  const categories = useQuery(api.categories.getRootCategories);
  const brands = useQuery(api.brands.listBrands, { limit: 50 });

  // Mutations
  const createProduct = useMutation(api.products.createProduct);
  const updateProduct = useMutation(api.products.updateProduct);
  const deleteProduct = useMutation(api.products.deleteProduct);
  const generateUploadUrl = useMutation(api.storage.generateUploadUrl);

  // Gérer les changements de formulaire
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    
    if (name.includes('.')) {
      // Gérer les objets imbriqués comme dimensions
      const [parent, child] = name.split('.');
      setFormData(prev => ({
        ...prev,
        [parent]: {
          ...prev[parent as keyof typeof prev] as any,
          [child]: type === 'number' ? parseFloat(value) || 0 : value
        }
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : 
                type === 'number' ? parseFloat(value) || 0 : value
      }));
    }
  };

  // Générer un slug à partir du nom
  const generateSlug = (name: string) => {
    return name
      .toLowerCase()
      .replace(/[^a-z0-9àáâäçéèêëíìîïñóòôöúùûüýÿæœ]+/g, '-')
      .replace(/(^-|-$)/g, '');
  };

  // Mettre à jour le slug automatiquement
  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const name = e.target.value;
    setFormData(prev => ({
      ...prev,
      name,
      slug: generateSlug(name),
      metaTitle: name
    }));
  };

  // Gérer les features
  const handleFeatureChange = (index: number, value: string) => {
    setFormData(prev => ({
      ...prev,
      features: prev.features.map((feature, i) => i === index ? value : feature)
    }));
  };

  const addFeature = () => {
    setFormData(prev => ({
      ...prev,
      features: [...prev.features, '']
    }));
  };

  const removeFeature = (index: number) => {
    setFormData(prev => ({
      ...prev,
      features: prev.features.filter((_, i) => i !== index)
    }));
  };

  // Gérer les spécifications
  const handleSpecificationChange = (index: number, field: 'name' | 'value', value: string) => {
    setFormData(prev => ({
      ...prev,
      specifications: prev.specifications.map((spec, i) => 
        i === index ? { ...spec, [field]: value } : spec
      )
    }));
  };

  const addSpecification = () => {
    setFormData(prev => ({
      ...prev,
      specifications: [...prev.specifications, { name: '', value: '' }]
    }));
  };

  const removeSpecification = (index: number) => {
    setFormData(prev => ({
      ...prev,
      specifications: prev.specifications.filter((_, i) => i !== index)
    }));
  };

  // Gérer l'upload des images
  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setImages(Array.from(e.target.files));
    }
  };

  // Commencer l'édition d'un produit
  const handleEdit = (product: any) => {
    setEditingProduct(product);
    setFormData({
      name: product.name || '',
      slug: product.slug || '',
      description: product.description || '',
      shortDescription: product.shortDescription || '',
      price: product.price || 0,
      originalPrice: product.originalPrice || 0,
      currency: product.currency || 'EUR',
      sku: product.sku || '',
      barcode: product.barcode || '',
      categoryId: product.categoryId || '',
      brandId: product.brandId || '',
      stock: product.stock || 0,
      minStock: product.minStock || 10,
      maxStock: product.maxStock || 1000,
      weight: product.weight || 0,
      dimensions: product.dimensions || { length: 0, width: 0, height: 0 },
      color: product.color || '',
      material: product.material || '',
      warranty: product.warranty || 12,
      isFeatured: product.isFeatured || false,
      isOnSale: product.isOnSale || false,
      status: product.status || 'active',
      tags: product.tags?.join(', ') || '',
      metaTitle: product.seo?.metaTitle || product.name || '',
      metaDescription: product.seo?.metaDescription || product.shortDescription || '',
      features: product.features?.length > 0 ? product.features : [''],
      specifications: product.specifications?.length > 0 ? product.specifications : [{ name: '', value: '' }],
    });
    setShowForm(true);
  };

  // Annuler l'édition
  const handleCancelEdit = () => {
    setEditingProduct(null);
    setShowForm(false);
    setFormData({
      name: '',
      slug: '',
      description: '',
      shortDescription: '',
      price: 0,
      originalPrice: 0,
      currency: 'EUR',
      sku: '',
      barcode: '',
      categoryId: '',
      brandId: '',
      stock: 100,
      minStock: 10,
      maxStock: 1000,
      weight: 0,
      dimensions: {
        length: 0,
        width: 0,
        height: 0,
      },
      color: '',
      material: '',
      warranty: 12,
      isFeatured: false,
      isOnSale: false,
      status: 'active',
      tags: '',
      metaTitle: '',
      metaDescription: '',
      features: [''],
      specifications: [{ name: '', value: '' }],
    });
  };

  // Soumettre le formulaire (création ou modification)
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setUploading(true);

    try {
      const productData = {
        name: formData.name,
        slug: formData.slug,
        description: formData.description,
        shortDescription: formData.shortDescription,
        price: formData.price,
        originalPrice: formData.originalPrice > 0 ? formData.originalPrice : undefined,
        currency: formData.currency,
        sku: formData.sku,
        barcode: formData.barcode,
        stock: formData.stock,
        isFeatured: formData.isFeatured,
        isOnSale: formData.isOnSale,
        status: formData.status as "active" | "draft" | "inactive" | "archived",
        tags: formData.tags.split(',').map(tag => tag.trim()).filter(tag => tag.length > 0),
        seo: {
          metaTitle: formData.metaTitle || formData.name,
          metaDescription: formData.metaDescription || formData.shortDescription,
          tags: formData.tags.split(',').map(tag => tag.trim()).filter(tag => tag.length > 0)
        }
      };

      if (editingProduct) {
        // Modification
        await updateProduct({
          id: editingProduct._id,
          ...productData
        });
        alert('Produit modifié avec succès !');
      } else {
        // Création - ajouter categoryId par défaut si pas de catégories
        const categoryId = categories && categories.length > 0 ? categories[0]._id : null;
        if (!categoryId) {
          alert('Erreur: Aucune catégorie disponible. Veuillez créer une catégorie d\'abord.');
          return;
        }
        
        await createProduct({
          ...productData,
          categoryId
        });
        alert('Produit créé avec succès !');
      }

      // Réinitialiser le formulaire
      handleCancelEdit();
      
      alert('Produit créé avec succès !');
    } catch (error) {
      console.error('Erreur lors de la création:', error);
      alert('Erreur lors de la création du produit: ' + (error as Error).message);
    } finally {
      setUploading(false);
    }
  };

  // Fonction de filtrage et tri des produits
  const getFilteredAndSortedProducts = () => {
    if (!products) return [];

    let filtered = products.filter(product => {
      // Filtre de recherche
      const searchMatch = filters.search === '' || 
        product.name.toLowerCase().includes(filters.search.toLowerCase()) ||
        product.sku?.toLowerCase().includes(filters.search.toLowerCase()) ||
        product.description?.toLowerCase().includes(filters.search.toLowerCase());

      // Filtre de statut
      const statusMatch = filters.status === 'all' || product.status === filters.status;

      // Filtre vedette
      const featuredMatch = filters.featured === 'all' || 
        (filters.featured === 'yes' && product.isFeatured) ||
        (filters.featured === 'no' && !product.isFeatured);

      // Filtre promotion
      const saleMatch = filters.sale === 'all' || 
        (filters.sale === 'yes' && product.isOnSale) ||
        (filters.sale === 'no' && !product.isOnSale);

      return searchMatch && statusMatch && featuredMatch && saleMatch;
    });

    // Tri
    filtered.sort((a, b) => {
      let aValue: any, bValue: any;
      
      switch (filters.sortBy) {
        case 'name':
          aValue = a.name.toLowerCase();
          bValue = b.name.toLowerCase();
          break;
        case 'price':
          aValue = a.price;
          bValue = b.price;
          break;
        case 'stock':
          aValue = a.stock || 0;
          bValue = b.stock || 0;
          break;
        case 'status':
          aValue = a.status;
          bValue = b.status;
          break;
        case 'created':
          aValue = a._creationTime;
          bValue = b._creationTime;
          break;
        default:
          aValue = a.name.toLowerCase();
          bValue = b.name.toLowerCase();
      }

      if (aValue < bValue) return filters.sortOrder === 'asc' ? -1 : 1;
      if (aValue > bValue) return filters.sortOrder === 'asc' ? 1 : -1;
      return 0;
    });

    return filtered;
  };

  const filteredProducts = getFilteredAndSortedProducts();

  // Supprimer un produit avec confirmation
  const handleDelete = async (productId: string, productName: string) => {
    const confirmation = prompt(
      `Pour confirmer la suppression du produit "${productName}", tapez "SUPPRIMER" en majuscules:`
    );
    
    if (confirmation === 'SUPPRIMER') {
      try {
        await deleteProduct({ id: productId as any });
        alert('Produit supprimé avec succès !');
      } catch (error) {
        console.error('Erreur lors de la suppression:', error);
        alert('Erreur lors de la suppression du produit');
      }
    } else if (confirmation !== null) {
      alert('Suppression annulée - texte de confirmation incorrect');
    }
  };

  return (
    <div className="max-w-7xl mx-auto p-6">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-4xl font-bold text-gray-900">Gestion des Produits</h1>
          <p className="text-gray-600 mt-2">Interface complète de gestion des produits</p>
        </div>
        <button
          onClick={() => {
            if (showForm && editingProduct) {
              handleCancelEdit();
            } else {
              setShowForm(!showForm);
            }
          }}
          className="btn-minimal"
        >
          {showForm ? 'Fermer' : 'Ajouter un produit'}
        </button>
      </div>

      {/* Formulaire d'ajout */}
      {showForm && (
        <div className="card-minimal p-8 mb-8">
                      <h2 className="text-2xl font-medium mb-8 text-foreground">
              {editingProduct ? `Modifier "${editingProduct.name}"` : 'Ajouter un nouveau produit'}
            </h2>
          
          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Section Informations de base */}
            <div className="border-b border-border pb-8 mb-8">
              <h3 className="text-lg font-medium text-foreground mb-6">Informations de base</h3>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-muted-foreground mb-3">
                    Nom du produit *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleNameChange}
                    required
                    className="input-minimal w-full"
                    placeholder="Ex: iPhone 15 Pro Max"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Slug (URL) *
                  </label>
                  <input
                    type="text"
                    name="slug"
                    value={formData.slug}
                    onChange={handleInputChange}
                    required
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Ex: iphone-15-pro-max"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    SKU
                  </label>
                  <input
                    type="text"
                    name="sku"
                    value={formData.sku}
                    onChange={handleInputChange}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Ex: IPH15PM-256-TIT"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Code-barres
                  </label>
                  <input
                    type="text"
                    name="barcode"
                    value={formData.barcode}
                    onChange={handleInputChange}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Ex: 1234567890123"
                  />
                </div>
              </div>
            </div>

            {/* Section Prix et Stock */}
            <div className="border-b pb-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">💰 Prix et Stock</h3>
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Prix (€) *
                  </label>
                  <input
                    type="number"
                    name="price"
                    value={formData.price}
                    onChange={handleInputChange}
                    step="0.01"
                    min="0"
                    required
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Prix original (€)
                  </label>
                  <input
                    type="number"
                    name="originalPrice"
                    value={formData.originalPrice}
                    onChange={handleInputChange}
                    step="0.01"
                    min="0"
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Devise
                  </label>
                  <select
                    name="currency"
                    value={formData.currency}
                    onChange={handleInputChange}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  >
                    <option value="EUR">EUR (€)</option>
                    <option value="USD">USD ($)</option>
                    <option value="GBP">GBP (£)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Stock actuel
                  </label>
                  <input
                    type="number"
                    name="stock"
                    value={formData.stock}
                    onChange={handleInputChange}
                    min="0"
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Stock minimum
                  </label>
                  <input
                    type="number"
                    name="minStock"
                    value={formData.minStock}
                    onChange={handleInputChange}
                    min="0"
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Stock maximum
                  </label>
                  <input
                    type="number"
                    name="maxStock"
                    value={formData.maxStock}
                    onChange={handleInputChange}
                    min="0"
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
              </div>
            </div>

            {/* Section Caractéristiques physiques */}
            <div className="border-b pb-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">📏 Caractéristiques physiques</h3>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Poids (g)
                  </label>
                  <input
                    type="number"
                    name="weight"
                    value={formData.weight}
                    onChange={handleInputChange}
                    min="0"
                    step="0.1"
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Ex: 240"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Couleur
                  </label>
                  <input
                    type="text"
                    name="color"
                    value={formData.color}
                    onChange={handleInputChange}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Ex: Titane naturel"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Matériau
                  </label>
                  <input
                    type="text"
                    name="material"
                    value={formData.material}
                    onChange={handleInputChange}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Ex: Aluminium, Titane"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Garantie (mois)
                  </label>
                  <input
                    type="number"
                    name="warranty"
                    value={formData.warranty}
                    onChange={handleInputChange}
                    min="0"
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
              </div>

              {/* Dimensions */}
              <div className="mt-4">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Dimensions (mm)
                </label>
                <div className="grid grid-cols-3 gap-4">
                  <input
                    type="number"
                    name="dimensions.length"
                    value={formData.dimensions.length}
                    onChange={handleInputChange}
                    step="0.1"
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Longueur"
                  />
                  <input
                    type="number"
                    name="dimensions.width"
                    value={formData.dimensions.width}
                    onChange={handleInputChange}
                    step="0.1"
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Largeur"
                  />
                  <input
                    type="number"
                    name="dimensions.height"
                    value={formData.dimensions.height}
                    onChange={handleInputChange}
                    step="0.1"
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Hauteur"
                  />
                </div>
              </div>
            </div>

            {/* Section Descriptions */}
            <div className="border-b pb-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">📝 Descriptions</h3>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Description courte
                  </label>
                  <textarea
                    name="shortDescription"
                    value={formData.shortDescription}
                    onChange={handleInputChange}
                    rows={3}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Description courte qui apparaît dans les listes de produits"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Description complète *
                  </label>
                  <textarea
                    name="description"
                    value={formData.description}
                    onChange={handleInputChange}
                    rows={6}
                    required
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Description détaillée du produit avec toutes ses caractéristiques"
                  />
                </div>
              </div>
            </div>

            {/* Section Caractéristiques */}
            <div className="border-b pb-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">✨ Caractéristiques principales</h3>
              <div className="space-y-3">
                {formData.features.map((feature, index) => (
                  <div key={index} className="flex gap-3">
                    <input
                      type="text"
                      value={feature}
                      onChange={(e) => handleFeatureChange(index, e.target.value)}
                      className="flex-1 p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      placeholder="Ex: Écran Super Retina XDR de 6,7 pouces"
                    />
                    <button
                      type="button"
                      onClick={() => removeFeature(index)}
                      className="px-3 py-2 bg-red-50 text-red-600 rounded-lg hover:bg-red-100"
                    >
                      ✕
                    </button>
                  </div>
                ))}
                <button
                  type="button"
                  onClick={addFeature}
                  className="px-4 py-2 bg-green-50 text-green-600 rounded-lg hover:bg-green-100"
                >
                  + Ajouter une caractéristique
                </button>
              </div>
            </div>

            {/* Section Spécifications techniques */}
            <div className="border-b pb-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">🔧 Spécifications techniques</h3>
              <div className="space-y-3">
                {formData.specifications.map((spec, index) => (
                  <div key={index} className="flex gap-3">
                    <input
                      type="text"
                      value={spec.name}
                      onChange={(e) => handleSpecificationChange(index, 'name', e.target.value)}
                      className="w-1/3 p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      placeholder="Nom (ex: Processeur)"
                    />
                    <input
                      type="text"
                      value={spec.value}
                      onChange={(e) => handleSpecificationChange(index, 'value', e.target.value)}
                      className="flex-1 p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      placeholder="Valeur (ex: Apple A17 Pro)"
                    />
                    <button
                      type="button"
                      onClick={() => removeSpecification(index)}
                      className="px-3 py-2 bg-red-50 text-red-600 rounded-lg hover:bg-red-100"
                    >
                      ✕
                    </button>
                  </div>
                ))}
                <button
                  type="button"
                  onClick={addSpecification}
                  className="px-4 py-2 bg-green-50 text-green-600 rounded-lg hover:bg-green-100"
                >
                  + Ajouter une spécification
                </button>
              </div>
            </div>

            {/* Section Images */}
            <div className="border-b pb-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">🖼️ Images</h3>
              <div>
                <input
                  type="file"
                  multiple
                  accept="image/*"
                  onChange={handleImageChange}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
                <p className="text-sm text-gray-500 mt-2">
                  Fonctionnalité d'upload d'images en cours de développement. Formats acceptés: JPG, PNG, WEBP
                </p>
                {images.length > 0 && (
                  <div className="mt-3">
                    <p className="text-sm font-medium text-gray-700">
                      {images.length} image(s) sélectionnée(s):
                    </p>
                    <ul className="list-disc list-inside text-sm text-gray-600">
                      {images.map((file, index) => (
                        <li key={index}>
                          {file.name} {index === 0 && "(image principale)"}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>

            {/* Section Tags et SEO */}
            <div className="border-b pb-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">🏷️ Tags et SEO</h3>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Tags (séparés par des virgules)
                  </label>
                  <input
                    type="text"
                    name="tags"
                    value={formData.tags}
                    onChange={handleInputChange}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="smartphone, apple, premium, 5g, pro"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Titre SEO
                  </label>
                  <input
                    type="text"
                    name="metaTitle"
                    value={formData.metaTitle}
                    onChange={handleInputChange}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Titre optimisé pour les moteurs de recherche"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Description SEO
                  </label>
                  <textarea
                    name="metaDescription"
                    value={formData.metaDescription}
                    onChange={handleInputChange}
                    rows={2}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Description pour les moteurs de recherche (160 caractères max)"
                    maxLength={160}
                  />
                </div>
              </div>
            </div>

            {/* Section Options */}
            <div className="pb-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">⚙️ Options</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Statut
                  </label>
                  <select
                    name="status"
                    value={formData.status}
                    onChange={handleInputChange}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  >
                    <option value="draft">Brouillon</option>
                    <option value="active">Actif</option>
                    <option value="inactive">Inactif</option>
                    <option value="archived">Archivé</option>
                  </select>
                </div>

                <div className="flex items-center">
                  <input
                    type="checkbox"
                    name="isFeatured"
                    checked={formData.isFeatured}
                    onChange={handleInputChange}
                    className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                  />
                  <label className="ml-2 block text-sm text-gray-700">
                    Produit en vedette
                  </label>
                </div>

                <div className="flex items-center">
                  <input
                    type="checkbox"
                    name="isOnSale"
                    checked={formData.isOnSale}
                    onChange={handleInputChange}
                    className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                  />
                  <label className="ml-2 block text-sm text-gray-700">
                    En promotion
                  </label>
                </div>
              </div>
            </div>

            {/* Boutons */}
            <div className="flex justify-end space-x-4 pt-8 border-t border-border">
              <button
                type="button"
                onClick={handleCancelEdit}
                className="btn-outline-minimal"
              >
                Annuler
              </button>
              <button
                type="submit"
                disabled={uploading}
                className="btn-minimal disabled:opacity-50 disabled:cursor-not-allowed flex items-center"
              >
                {uploading ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    {editingProduct ? 'Modification en cours...' : 'Création en cours...'}
                  </>
                ) : (
                  editingProduct ? '✓ Modifier le produit' : '✓ Créer le produit'
                )}
              </button>
            </div>
          </form>
        </div>
      )}

      {/* Filtres et contrôles */}
      <div className="card-minimal mb-6">
                  <div className="p-6 border-b border-border">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-medium text-foreground">Gestion des produits</h2>
            <div className="flex items-center space-x-4">
              <div className="text-sm text-gray-500">
                {filteredProducts.length} sur {products?.length || 0} produit(s)
              </div>
              <div className="flex bg-muted border border-border p-1">
                <button
                  onClick={() => setViewMode('table')}
                  className={`px-4 py-2 text-sm font-medium transition-colors ${
                    viewMode === 'table' 
                      ? 'bg-card text-foreground border border-border shadow-sm' 
                      : 'text-muted-foreground hover:text-foreground'
                  }`}
                  style={{ borderRadius: 'var(--radius)' }}
                >
                  Tableau
                </button>
                <button
                  onClick={() => setViewMode('cards')}
                  className={`px-4 py-2 text-sm font-medium transition-colors ${
                    viewMode === 'cards' 
                      ? 'bg-card text-foreground border border-border shadow-sm' 
                      : 'text-muted-foreground hover:text-foreground'
                  }`}
                  style={{ borderRadius: 'var(--radius)' }}
                >
                  Cartes
                </button>
              </div>
            </div>
          </div>

          {/* Barre de filtres */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-4">
            {/* Recherche */}
            <div className="lg:col-span-2">
              <input
                type="text"
                placeholder="Rechercher..."
                value={filters.search}
                onChange={(e) => setFilters(prev => ({ ...prev, search: e.target.value }))}
                className="input-minimal w-full text-sm"
              />
            </div>

            {/* Statut */}
            <div>
              <select
                value={filters.status}
                onChange={(e) => setFilters(prev => ({ ...prev, status: e.target.value }))}
                className="input-minimal w-full text-sm"
              >
                <option value="all">Tous les statuts</option>
                <option value="active">Actif</option>
                <option value="draft">Brouillon</option>
                <option value="inactive">Inactif</option>
                <option value="archived">Archivé</option>
              </select>
            </div>

            {/* Vedette */}
            <div>
              <select
                value={filters.featured}
                onChange={(e) => setFilters(prev => ({ ...prev, featured: e.target.value }))}
                className="input-minimal w-full text-sm"
              >
                <option value="all">Vedette</option>
                <option value="yes">Oui</option>
                <option value="no">Non</option>
              </select>
            </div>

            {/* Promotion */}
            <div>
              <select
                value={filters.sale}
                onChange={(e) => setFilters(prev => ({ ...prev, sale: e.target.value }))}
                className="input-minimal w-full text-sm"
              >
                <option value="all">Promotion</option>
                <option value="yes">Oui</option>
                <option value="no">Non</option>
              </select>
            </div>

            {/* Tri */}
            <div>
              <select
                value={`${filters.sortBy}-${filters.sortOrder}`}
                onChange={(e) => {
                  const [sortBy, sortOrder] = e.target.value.split('-');
                  setFilters(prev => ({ ...prev, sortBy, sortOrder: sortOrder as 'asc' | 'desc' }));
                }}
                className="input-minimal w-full text-sm"
              >
                <option value="name-asc">Nom A-Z</option>
                <option value="name-desc">Nom Z-A</option>
                <option value="price-asc">Prix croissant</option>
                <option value="price-desc">Prix décroissant</option>
                <option value="stock-asc">Stock croissant</option>
                <option value="stock-desc">Stock décroissant</option>
                <option value="created-desc">Plus récent</option>
                <option value="created-asc">Plus ancien</option>
              </select>
            </div>
          </div>
        </div>

        {/* Contenu des produits */}
        <div className="p-6">
          {products === undefined ? (
            <div className="text-center py-12">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500 mx-auto"></div>
              <p className="mt-4 text-gray-500">Chargement des produits...</p>
            </div>
          ) : filteredProducts.length === 0 ? (
            <div className="text-center py-12">
              <div className="text-6xl text-gray-300 mb-4">📦</div>
              <p className="text-gray-500 text-lg">
                {products.length === 0 ? 'Aucun produit trouvé.' : 'Aucun produit ne correspond aux filtres.'}
              </p>
              <p className="text-gray-400 text-sm mt-2">
                {products.length === 0 
                  ? 'Cliquez sur "Ajouter un produit" pour créer votre premier produit.'
                  : 'Essayez de modifier vos critères de recherche.'
                }
              </p>
            </div>
          ) : viewMode === 'table' ? (
            /* Vue tableau */
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-border bg-muted">
                    <th className="text-left p-4 font-medium text-muted-foreground">Image</th>
                    <th className="text-left p-4 font-medium text-muted-foreground">Produit</th>
                    <th className="text-left p-4 font-medium text-muted-foreground">SKU</th>
                    <th className="text-left p-4 font-medium text-muted-foreground">Prix</th>
                    <th className="text-left p-4 font-medium text-muted-foreground">Stock</th>
                    <th className="text-left p-4 font-medium text-muted-foreground">Statut</th>
                    <th className="text-left p-4 font-medium text-muted-foreground">Badges</th>
                    <th className="text-left p-4 font-medium text-muted-foreground">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredProducts.map((product) => (
                                        <tr key={product._id} className="border-b border-border hover:bg-muted/50">
                      {/* Image */}
                      <td className="p-4">
                        <div className="w-12 h-12 bg-muted flex items-center justify-center overflow-hidden" style={{ borderRadius: 'var(--radius)' }}>
                           {product.imageUrls && product.imageUrls.length > 0 && product.imageUrls[0] ? (
                             <img 
                               src={product.imageUrls[0]} 
                               alt={product.name}
                               className="w-full h-full object-cover"
                             />
                                                      ) : (
                             <div className="text-muted-foreground text-xs text-center">
                               Pas<br/>d'image
                             </div>
                           )}
                         </div>
                       </td>

                       {/* Produit */}
                       <td className="p-4">
                         <Link 
                           href={`/produit/${product.slug}`}
                           target="_blank"
                           className="block hover:text-accent transition-colors"
                           title={`Voir la fiche de "${product.name}"`}
                         >
                           <div className="font-medium text-foreground">{product.name}</div>
                           <div className="text-sm text-muted-foreground truncate max-w-xs">
                             {product.description}
                           </div>
                         </Link>
                       </td>

                       {/* SKU */}
                       <td className="p-4">
                         <span className="text-sm text-muted-foreground font-mono">
                           {product.sku || '-'}
                         </span>
                       </td>

                       {/* Prix */}
                       <td className="p-4">
                         <div>
                           <span className="font-medium text-foreground">{product.price}€</span>
                           {product.originalPrice && product.originalPrice > product.price && (
                             <div className="text-xs text-muted-foreground line-through">
                               {product.originalPrice}€
                             </div>
                           )}
                         </div>
                       </td>

                       {/* Stock */}
                       <td className="p-4">
                         <span className={`font-medium ${
                           (product.stock || 0) > 10 ? 'text-foreground' : 
                           (product.stock || 0) > 0 ? 'text-muted-foreground' : 'text-destructive'
                         }`}>
                           {product.stock || 0}
                         </span>
                       </td>

                                             {/* Statut */}
                       <td className="p-4">
                         <span className={`px-3 py-1 text-xs font-medium ${
                           product.status === 'active' ? 'bg-accent text-foreground' :
                           product.status === 'draft' ? 'bg-muted text-muted-foreground' :
                           product.status === 'inactive' ? 'bg-muted text-muted-foreground' :
                           'bg-destructive/10 text-destructive'
                         }`} style={{ borderRadius: 'var(--radius)' }}>
                           {product.status}
                         </span>
                       </td>

                       {/* Badges */}
                       <td className="p-4">
                         <div className="flex flex-wrap gap-1">
                           {product.isFeatured && (
                             <span className="px-2 py-1 bg-accent text-foreground text-xs font-medium" style={{ borderRadius: 'var(--radius)' }}>
                               Vedette
                             </span>
                           )}
                           {product.isOnSale && (
                             <span className="px-2 py-1 bg-destructive/10 text-destructive text-xs font-medium" style={{ borderRadius: 'var(--radius)' }}>
                               Promo
                             </span>
                           )}
                         </div>
                       </td>

                       {/* Actions */}
                       <td className="p-4">
                         <div className="flex space-x-2">
                           <button
                             onClick={() => handleEdit(product)}
                             className="px-3 py-1 bg-accent text-foreground text-xs font-medium hover:bg-foreground hover:text-background transition-colors"
                             style={{ borderRadius: 'var(--radius)' }}
                             title={`Modifier "${product.name}"`}
                           >
                             Modifier
                           </button>
                           <button
                             onClick={() => handleDelete(product._id, product.name)}
                             className="px-3 py-1 bg-destructive/10 text-destructive text-xs font-medium hover:bg-destructive hover:text-destructive-foreground transition-colors"
                             style={{ borderRadius: 'var(--radius)' }}
                             title={`Supprimer "${product.name}"`}
                           >
                             Supprimer
                           </button>
                         </div>
                       </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : (
            /* Vue cartes (ancienne version) */
            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
              {filteredProducts.map((product) => (
                <div key={product._id} className="border-2 border-gray-200 rounded-xl p-6 hover:shadow-lg transition-all hover:border-blue-300">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-lg font-semibold text-gray-900 line-clamp-2">{product.name}</h3>
                    <div className="flex space-x-2">
                      <button
                        onClick={() => handleEdit(product)}
                        className="px-3 py-2 bg-blue-50 text-blue-600 text-sm rounded-lg hover:bg-blue-100 transition-colors font-medium border border-blue-200"
                        title={`Modifier "${product.name}"`}
                      >
                        ✏️ Modifier
                      </button>
                      <button
                        onClick={() => handleDelete(product._id, product.name)}
                        className="px-3 py-2 bg-red-50 text-red-600 text-sm rounded-lg hover:bg-red-100 transition-colors font-medium border border-red-200"
                        title={`Supprimer "${product.name}"`}
                      >
                        🗑️ Supprimer
                      </button>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 text-sm mb-4 line-clamp-3">{product.description}</p>
                  
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-2xl font-bold text-blue-600">
                        {product.price}€
                      </span>
                      {product.originalPrice && product.originalPrice > product.price && (
                        <div className="text-right">
                          <span className="text-lg text-gray-500 line-through block">
                            {product.originalPrice}€
                          </span>
                          <span className="text-xs text-red-600">
                            -{Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}%
                          </span>
                        </div>
                      )}
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <span className="font-medium text-gray-700">SKU:</span>
                        <div className="text-gray-600">{product.sku || 'Non défini'}</div>
                      </div>
                      <div>
                        <span className="font-medium text-gray-700">Stock:</span>
                        <div className={`${product.stock > 0 ? 'text-green-600' : 'text-red-600'} font-medium`}>
                          {product.stock || 0} unités
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex flex-wrap gap-2">
                      <span className={`px-2 py-1 text-xs rounded-full ${
                        product.status === 'active' ? 'bg-green-100 text-green-800' :
                        product.status === 'draft' ? 'bg-yellow-100 text-yellow-800' :
                        product.status === 'inactive' ? 'bg-gray-100 text-gray-800' :
                        'bg-red-100 text-red-800'
                      }`}>
                        {product.status}
                      </span>
                      
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
                    </div>
                    
                    <div className="pt-3 border-t border-gray-100 text-xs text-gray-400">
                      <div className="flex justify-between">
                        <span>Slug: {product.slug}</span>
                        <span>ID: {product._id.slice(-8)}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Statistiques détaillées */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
        <div className="card-minimal p-6">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-lg font-medium mb-2 text-foreground">Produits Total</h3>
              <p className="text-3xl font-light text-foreground">{products?.length || 0}</p>
              <p className="text-sm text-muted-foreground mt-1">({filteredProducts.length} affichés)</p>
            </div>
          </div>
        </div>
        
        <div className="card-minimal p-6">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-lg font-medium mb-2 text-foreground">Produits Actifs</h3>
              <p className="text-3xl font-light text-foreground">
                {products?.filter(p => p.status === 'active').length || 0}
              </p>
              <p className="text-sm text-muted-foreground mt-1">
                ({filteredProducts.filter(p => p.status === 'active').length} affichés)
              </p>
            </div>
          </div>
        </div>
        
        <div className="card-minimal p-6">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-lg font-medium mb-2 text-foreground">En Vedette</h3>
              <p className="text-3xl font-light text-foreground">
                {products?.filter(p => p.isFeatured).length || 0}
              </p>
              <p className="text-sm text-muted-foreground mt-1">
                ({filteredProducts.filter(p => p.isFeatured).length} affichés)
              </p>
            </div>
          </div>
        </div>
        
        <div className="card-minimal p-6">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-lg font-medium mb-2 text-foreground">En Promotion</h3>
              <p className="text-3xl font-light text-foreground">
                {products?.filter(p => p.isOnSale).length || 0}
              </p>
              <p className="text-sm text-muted-foreground mt-1">
                ({filteredProducts.filter(p => p.isOnSale).length} affichés)
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 