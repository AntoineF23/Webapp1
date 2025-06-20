import { v } from "convex/values";
import { query, mutation, internalMutation } from "./_generated/server";
import type { Doc, Id } from "./_generated/dataModel";

// ==== QUERIES ====

/**
 * Obtenir tous les produits avec pagination
 */
export const listProducts = query({
  args: {
    limit: v.optional(v.number()),
    status: v.optional(v.string()),
  },
  handler: async (ctx, args) => {
    const limit = args.limit || 50;
    const products = await ctx.db.query("products").order("desc").take(limit);
    
    // Ajouter les URLs des images
    const productsWithImageUrls = await Promise.all(
      products.map(async (product) => {
        const imageUrls = await Promise.all(
          product.images.map(async (image) => {
            const url = await ctx.storage.getUrl(image.imageId);
            return url;
          })
        );
        
        return {
          ...product,
          imageUrls: imageUrls.filter(Boolean), // Filtrer les URLs nulles
        };
      })
    );
    
    return productsWithImageUrls;
  },
});

/**
 * Obtenir un produit par son slug
 */
export const getProductBySlug = query({
  args: { slug: v.string() },
  handler: async (ctx, args) => {
    return await ctx.db
      .query("products")
      .filter((q) => q.eq(q.field("slug"), args.slug))
      .unique();
  },
});

/**
 * Rechercher des produits
 */
export const searchProducts = query({
  args: {
    searchTerm: v.string(),
    categoryId: v.optional(v.id("categories")),
    brandId: v.optional(v.id("brands")),
    minPrice: v.optional(v.number()),
    maxPrice: v.optional(v.number()),
    status: v.optional(v.union(v.literal("draft"), v.literal("active"), v.literal("inactive"), v.literal("archived"))),
    limit: v.optional(v.number()),
  },
  handler: async (ctx, args) => {
    const results = await ctx.db
      .query("products")
      .withSearchIndex("search_products", (q) => {
        let query = q.search("name", args.searchTerm);
        
        if (args.categoryId) {
          query = query.eq("categoryId", args.categoryId);
        }
        
        if (args.brandId) {
          query = query.eq("brandId", args.brandId);
        }
        
        if (args.status) {
          query = query.eq("status", args.status);
        }
        
        return query;
      })
      .take(args.limit ?? 20);
    
    return results;
  },
});

/**
 * Obtenir les produits en vedette
 */
export const getFeaturedProducts = query({
  args: { limit: v.optional(v.number()) },
  handler: async (ctx, args) => {
    const limit = args.limit || 10;
    return await ctx.db.query("products").order("desc").take(limit);
  },
});

/**
 * Obtenir les produits en promotion
 */
export const getSaleProducts = query({
  args: { limit: v.optional(v.number()) },
  handler: async (ctx, args) => {
    const limit = args.limit || 10;
    return await ctx.db.query("products").order("desc").take(limit);
  },
});

// ==== MUTATIONS ====

/**
 * Créer un nouveau produit
 */
export const createProduct = mutation({
  args: {
    name: v.string(),
    slug: v.string(),
    description: v.string(),
    shortDescription: v.optional(v.string()),
    price: v.number(),
    originalPrice: v.optional(v.number()),
    currency: v.optional(v.string()),
    sku: v.optional(v.string()),
    barcode: v.optional(v.string()),
    categoryId: v.id("categories"),
    brandId: v.optional(v.id("brands")),
    stock: v.optional(v.number()),
    isFeatured: v.optional(v.boolean()),
    isOnSale: v.optional(v.boolean()),
    status: v.optional(v.union(v.literal("draft"), v.literal("active"), v.literal("inactive"), v.literal("archived"))),
    tags: v.optional(v.array(v.string())),
    images: v.optional(v.array(v.object({
      imageId: v.id("_storage"),
      alt: v.string(),
      order: v.number(),
      isPrimary: v.boolean(),
    }))),
    metaTitle: v.optional(v.string()),
    metaDescription: v.optional(v.string()),
  },
  handler: async (ctx, args) => {
    return await ctx.db.insert("products", {
      name: args.name,
      slug: args.slug,
      description: args.description,
      shortDescription: args.shortDescription || "",
      price: args.price,
      originalPrice: args.originalPrice,
      currency: args.currency || "EUR",
      sku: args.sku || "",
      barcode: args.barcode || "",
      categoryId: args.categoryId,
      brandId: args.brandId,
      images: args.images || [],
      specifications: [],
      variants: [],
      stock: args.stock || 100,
      minStock: 10,
      trackStock: true,
      metaTitle: args.metaTitle || args.name,
      metaDescription: args.metaDescription || args.shortDescription || args.description,
      tags: args.tags || [],
      status: args.status || "active",
      isFeatured: args.isFeatured || false,
      isOnSale: args.isOnSale || false,
      averageRating: 4.5,
      reviewCount: 0,
    });
  },
});

/**
 * Mettre à jour un produit
 */
export const updateProduct = mutation({
  args: {
    id: v.id("products"),
    name: v.optional(v.string()),
    slug: v.optional(v.string()),
    description: v.optional(v.string()),
    shortDescription: v.optional(v.string()),
    price: v.optional(v.number()),
    originalPrice: v.optional(v.number()),
    currency: v.optional(v.string()),
    sku: v.optional(v.string()),
    barcode: v.optional(v.string()),
    categoryId: v.optional(v.id("categories")),
    brandId: v.optional(v.id("brands")),
    images: v.optional(v.array(v.object({
      imageId: v.id("_storage"),
      alt: v.string(),
      order: v.number(),
      isPrimary: v.boolean(),
    }))),
    specifications: v.optional(v.array(v.object({
      name: v.string(),
      value: v.string(),
      group: v.optional(v.string()),
    }))),
    variants: v.optional(v.array(v.object({
      name: v.string(),
      value: v.string(),
      priceModifier: v.optional(v.number()),
      sku: v.string(),
      stock: v.number(),
    }))),
    stock: v.optional(v.number()),
    minStock: v.optional(v.number()),
    maxStock: v.optional(v.number()),
    trackStock: v.optional(v.boolean()),
    weight: v.optional(v.number()),
    dimensions: v.optional(v.object({
      length: v.number(),
      width: v.number(),
      height: v.number(),
      unit: v.string(),
    })),
    metaTitle: v.optional(v.string()),
    metaDescription: v.optional(v.string()),
    tags: v.optional(v.array(v.string())),
    status: v.optional(v.union(
      v.literal("draft"),
      v.literal("active"),
      v.literal("inactive"),
      v.literal("archived")
    )),
    isFeatured: v.optional(v.boolean()),
    isOnSale: v.optional(v.boolean()),
    publishedAt: v.optional(v.number()),
    // Champ seo pour compatibilité avec le frontend
    seo: v.optional(v.object({
      metaTitle: v.optional(v.string()),
      metaDescription: v.optional(v.string()),
      tags: v.optional(v.array(v.string())),
    })),
  },
  handler: async (ctx, args) => {
    const { id, seo, ...updates } = args;
    
    // Si l'objet seo est fourni, on l'aplatit dans les champs principaux
    if (seo) {
      if (seo.metaTitle) updates.metaTitle = seo.metaTitle;
      if (seo.metaDescription) updates.metaDescription = seo.metaDescription;
      if (seo.tags) updates.tags = seo.tags;
    }
    
    await ctx.db.patch(id, updates);
  },
});

/**
 * Supprimer un produit
 */
export const deleteProduct = mutation({
  args: { id: v.id("products") },
  handler: async (ctx, args) => {
    await ctx.db.delete(args.id);
  },
});

/**
 * Mettre à jour le stock d'un produit
 */
export const updateStock = mutation({
  args: {
    id: v.id("products"),
    quantity: v.number(),
    operation: v.union(v.literal("add"), v.literal("subtract"), v.literal("set")),
  },
  returns: v.null(),
  handler: async (ctx, args) => {
    const product = await ctx.db.get(args.id);
    if (!product) {
      throw new Error("Produit non trouvé");
    }
    
    let newStock: number;
    
    switch (args.operation) {
      case "add":
        newStock = product.stock + args.quantity;
        break;
      case "subtract":
        newStock = Math.max(0, product.stock - args.quantity);
        break;
      case "set":
        newStock = Math.max(0, args.quantity);
        break;
    }
    
    await ctx.db.patch(args.id, { stock: newStock });
    return null;
  },
});

/**
 * Mettre à jour la note moyenne d'un produit (fonction interne)
 */
export const updateProductRating = internalMutation({
  args: {
    productId: v.id("products"),
    averageRating: v.number(),
    reviewCount: v.number(),
  },
  returns: v.null(),
  handler: async (ctx, args) => {
    await ctx.db.patch(args.productId, {
      averageRating: args.averageRating,
      reviewCount: args.reviewCount,
    });
    return null;
  },
}); 