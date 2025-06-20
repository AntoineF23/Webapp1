import { mutation } from "./_generated/server";
import { v } from "convex/values";

/**
 * Initialiser la base de données avec des données d'exemple
 */
export const initializeData = mutation({
  args: {},
  returns: v.object({
    categories: v.array(v.id("categories")),
    brands: v.array(v.id("brands")),
    products: v.array(v.id("products")),
  }),
  handler: async (ctx, args) => {
    // Créer des catégories d'exemple
    const categories = [];
    
    const electronicsId = await ctx.db.insert("categories", {
      name: "Électronique",
      slug: "electronique",
      description: "Produits électroniques et high-tech",
      order: 1,
      isActive: true,
    });
    categories.push(electronicsId);
    
    const smartphonesId = await ctx.db.insert("categories", {
      name: "Smartphones",
      slug: "smartphones",
      description: "Téléphones intelligents dernière génération",
      parentId: electronicsId,
      order: 1,
      isActive: true,
    });
    categories.push(smartphonesId);
    
    const computersId = await ctx.db.insert("categories", {
      name: "Ordinateurs",
      slug: "ordinateurs",
      description: "Ordinateurs portables et de bureau",
      parentId: electronicsId,
      order: 2,
      isActive: true,
    });
    categories.push(computersId);
    
    const accessoriesId = await ctx.db.insert("categories", {
      name: "Accessoires",
      slug: "accessoires",
      description: "Accessoires et périphériques",
      parentId: electronicsId,
      order: 3,
      isActive: true,
    });
    categories.push(accessoriesId);
    
    // Créer des marques d'exemple
    const brands = [];
    
    const appleBrandId = await ctx.db.insert("brands", {
      name: "Apple",
      slug: "apple",
      description: "Innovation technologique et design premium",
      website: "https://www.apple.com",
      isActive: true,
    });
    brands.push(appleBrandId);
    
    const samsungBrandId = await ctx.db.insert("brands", {
      name: "Samsung",
      slug: "samsung",
      description: "Leader mondial en électronique",
      website: "https://www.samsung.com",
      isActive: true,
    });
    brands.push(samsungBrandId);
    
    const googleBrandId = await ctx.db.insert("brands", {
      name: "Google",
      slug: "google",
      description: "Technologie et intelligence artificielle",
      website: "https://www.google.com",
      isActive: true,
    });
    brands.push(googleBrandId);
    
    // Créer des produits d'exemple
    const products = [];
    
    const iphone15Id = await ctx.db.insert("products", {
      name: "iPhone 15 Pro Max",
      slug: "iphone-15-pro-max",
      description: "Le plus avancé des iPhone avec puce A17 Pro, système de caméras révolutionnaire et design en titane.",
      shortDescription: "iPhone 15 Pro Max - Innovation titanesque",
      price: 1229,
      originalPrice: 1299,
      currency: "EUR",
      sku: "IPH15PM-256-NAT",
      categoryId: smartphonesId,
      brandId: appleBrandId,
      images: [],
      specifications: [
        { name: "Écran", value: "6.7 pouces Super Retina XDR", group: "Affichage" },
        { name: "Processeur", value: "Puce A17 Pro", group: "Performance" },
        { name: "Stockage", value: "256 Go", group: "Mémoire" },
        { name: "Caméra", value: "Triple 48MP + 12MP + 12MP", group: "Photo" },
        { name: "Batterie", value: "Jusqu'à 29h vidéo", group: "Autonomie" },
      ],
      variants: [
        { name: "Couleur", value: "Titane Naturel", sku: "IPH15PM-256-NAT", stock: 50 },
        { name: "Couleur", value: "Titane Bleu", sku: "IPH15PM-256-BLU", stock: 30 },
        { name: "Couleur", value: "Titane Blanc", sku: "IPH15PM-256-WHT", stock: 25 },
      ],
      stock: 105,
      minStock: 10,
      trackStock: true,
      weight: 221,
      dimensions: { length: 159.9, width: 76.7, height: 8.25, unit: "mm" },
      metaTitle: "iPhone 15 Pro Max - Le plus avancé des iPhone",
      metaDescription: "Découvrez l'iPhone 15 Pro Max avec puce A17 Pro, caméras professionnelles et design en titane.",
      tags: ["smartphone", "apple", "5g", "premium"],
      status: "active",
      isFeatured: true,
      isOnSale: true,
      publishedAt: Date.now(),
      averageRating: 4.8,
      reviewCount: 127,
    });
    products.push(iphone15Id);
    
    const macbookId = await ctx.db.insert("products", {
      name: "MacBook Pro 14 pouces M3",
      slug: "macbook-pro-14-m3",
      description: "MacBook Pro 14 pouces avec puce M3, écran Liquid Retina XDR et performances révolutionnaires.",
      shortDescription: "MacBook Pro 14\" M3 - Puissance pro",
      price: 2199,
      currency: "EUR",
      sku: "MBP14-M3-512-SG",
      categoryId: computersId,
      brandId: appleBrandId,
      images: [],
      specifications: [
        { name: "Écran", value: "14.2 pouces Liquid Retina XDR", group: "Affichage" },
        { name: "Processeur", value: "Puce Apple M3", group: "Performance" },
        { name: "Mémoire", value: "8 Go RAM unifiée", group: "Mémoire" },
        { name: "Stockage", value: "512 Go SSD", group: "Mémoire" },
        { name: "Ports", value: "3× Thunderbolt 4, HDMI, MagSafe 3", group: "Connectivité" },
      ],
      variants: [
        { name: "Couleur", value: "Gris Sidéral", sku: "MBP14-M3-512-SG", stock: 15 },
        { name: "Couleur", value: "Argent", sku: "MBP14-M3-512-SV", stock: 12 },
      ],
      stock: 27,
      minStock: 5,
      trackStock: true,
      weight: 1550,
      dimensions: { length: 312.6, width: 221.2, height: 15.5, unit: "mm" },
      metaTitle: "MacBook Pro 14 pouces M3 - Performance professionnelle",
      metaDescription: "MacBook Pro 14 pouces avec puce M3 pour les créatifs et professionnels exigeants.",
      tags: ["laptop", "apple", "m3", "professionnel"],
      status: "active",
      isFeatured: true,
      isOnSale: false,
      publishedAt: Date.now(),
      averageRating: 4.9,
      reviewCount: 89,
    });
    products.push(macbookId);
    
    const airpodsId = await ctx.db.insert("products", {
      name: "AirPods Pro (2ème génération)",
      slug: "airpods-pro-2",
      description: "AirPods Pro avec suppression active du bruit, audio spatial personnalisé et boîtier de charge MagSafe.",
      shortDescription: "AirPods Pro 2 - Audio immersif",
      price: 279,
      currency: "EUR",
      sku: "APP2-USB-C",
      categoryId: accessoriesId,
      brandId: appleBrandId,
      images: [],
      specifications: [
        { name: "Driver", value: "Haut-parleur dynamique personnalisé", group: "Audio" },
        { name: "Réduction de bruit", value: "Suppression active du bruit", group: "Audio" },
        { name: "Autonomie", value: "Jusqu'à 6h (30h avec boîtier)", group: "Batterie" },
        { name: "Connectivité", value: "Bluetooth 5.3", group: "Connectivité" },
        { name: "Résistance", value: "IPX4", group: "Durabilité" },
      ],
      variants: [],
      stock: 75,
      minStock: 20,
      trackStock: true,
      weight: 5.3,
      tags: ["écouteurs", "apple", "sans-fil", "anc"],
      status: "active",
      isFeatured: false,
      isOnSale: false,
      publishedAt: Date.now(),
      averageRating: 4.7,
      reviewCount: 203,
    });
    products.push(airpodsId);
    
    return {
      categories,
      brands,
      products,
    };
  },
});

/**
 * Nettoyer toutes les données (uniquement pour le développement)
 */
export const clearAllData = mutation({
  args: {},
  returns: v.null(),
  handler: async (ctx, args) => {
    // Supprimer tous les produits
    const products = await ctx.db.query("products").collect();
    for (const product of products) {
      await ctx.db.delete(product._id);
    }
    
    // Supprimer toutes les marques
    const brands = await ctx.db.query("brands").collect();
    for (const brand of brands) {
      await ctx.db.delete(brand._id);
    }
    
    // Supprimer toutes les catégories
    const categories = await ctx.db.query("categories").collect();
    for (const category of categories) {
      await ctx.db.delete(category._id);
    }
    
    // Supprimer tous les avis
    const reviews = await ctx.db.query("reviews").collect();
    for (const review of reviews) {
      await ctx.db.delete(review._id);
    }
    
    // Supprimer toutes les collections
    const collections = await ctx.db.query("collections").collect();
    for (const collection of collections) {
      await ctx.db.delete(collection._id);
    }
    
    // Supprimer tous les attributs
    const attributes = await ctx.db.query("attributes").collect();
    for (const attribute of attributes) {
      await ctx.db.delete(attribute._id);
    }
    
    // Supprimer toutes les associations produit-attribut
    const productAttributes = await ctx.db.query("productAttributes").collect();
    for (const productAttribute of productAttributes) {
      await ctx.db.delete(productAttribute._id);
    }
    
    return null;
  },
}); 