import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  // Table des catégories de produits
  categories: defineTable({
    name: v.string(),
    slug: v.string(),
    description: v.optional(v.string()),
    imageId: v.optional(v.id("_storage")),
    parentId: v.optional(v.id("categories")),
    order: v.number(),
    isActive: v.boolean(),
  })
    .index("by_slug", ["slug"])
    .index("by_parent", ["parentId"])
    .index("by_order", ["order"]),

  // Table des marques
  brands: defineTable({
    name: v.string(),
    slug: v.string(),
    description: v.optional(v.string()),
    logo: v.optional(v.id("_storage")),
    website: v.optional(v.string()),
    isActive: v.boolean(),
  }).index("by_slug", ["slug"]),

  // Table des produits
  products: defineTable({
    name: v.string(),
    slug: v.string(),
    description: v.string(),
    shortDescription: v.optional(v.string()),
    price: v.number(),
    originalPrice: v.optional(v.number()), // Prix barré
    currency: v.string(),
    sku: v.string(), // Code produit
    barcode: v.optional(v.string()),
    categoryId: v.id("categories"),
    brandId: v.optional(v.id("brands")),
    // Images du produit
    images: v.array(v.object({
      imageId: v.id("_storage"),
      alt: v.string(),
      order: v.number(),
      isPrimary: v.boolean(),
    })),
    // Spécifications techniques
    specifications: v.array(v.object({
      name: v.string(),
      value: v.string(),
      group: v.optional(v.string()), // Grouper les specs (ex: "Dimensions", "Performance")
    })),
    // Variations du produit (couleurs, tailles, etc.)
    variants: v.array(v.object({
      name: v.string(),
      value: v.string(),
      priceModifier: v.optional(v.number()),
      sku: v.string(),
      stock: v.number(),
    })),
    // Stock et gestion
    stock: v.number(),
    minStock: v.number(),
    maxStock: v.optional(v.number()),
    trackStock: v.boolean(),
    // Dimensions et poids
    weight: v.optional(v.number()),
    dimensions: v.optional(v.object({
      length: v.number(),
      width: v.number(),
      height: v.number(),
      unit: v.string(), // cm, mm, in
    })),
    // SEO et métadonnées
    metaTitle: v.optional(v.string()),
    metaDescription: v.optional(v.string()),
    tags: v.array(v.string()),
    // Status et dates
    status: v.union(
      v.literal("draft"),
      v.literal("active"),
      v.literal("inactive"),
      v.literal("archived")
    ),
    isFeatured: v.boolean(),
    isOnSale: v.boolean(),
    publishedAt: v.optional(v.number()),
    // Évaluations
    averageRating: v.number(),
    reviewCount: v.number(),
  })
    .index("by_slug", ["slug"])
    .index("by_category", ["categoryId"])
    .index("by_brand", ["brandId"])
    .index("by_status", ["status"])
    .index("by_featured", ["isFeatured"])
    .index("by_sale", ["isOnSale"])
    .index("by_sku", ["sku"])
    .searchIndex("search_products", {
      searchField: "name",
      filterFields: ["categoryId", "brandId", "status", "tags"]
    }),

  // Table des avis clients
  reviews: defineTable({
    productId: v.id("products"),
    customerName: v.string(),
    customerEmail: v.string(),
    rating: v.number(), // 1-5
    title: v.string(),
    comment: v.string(),
    isVerified: v.boolean(),
    isApproved: v.boolean(),
    images: v.optional(v.array(v.id("_storage"))),
  })
    .index("by_product", ["productId"])
    .index("by_approved", ["isApproved"])
    .index("by_rating", ["rating"]),

  // Table des collections/promotions
  collections: defineTable({
    name: v.string(),
    slug: v.string(),
    description: v.optional(v.string()),
    imageId: v.optional(v.id("_storage")),
    type: v.union(
      v.literal("manual"), // Sélection manuelle de produits
      v.literal("automatic") // Basé sur des critères
    ),
    products: v.array(v.id("products")), // Pour les collections manuelles
    criteria: v.optional(v.object({ // Pour les collections automatiques
      categoryIds: v.optional(v.array(v.id("categories"))),
      brandIds: v.optional(v.array(v.id("brands"))),
      tags: v.optional(v.array(v.string())),
      minPrice: v.optional(v.number()),
      maxPrice: v.optional(v.number()),
      isFeatured: v.optional(v.boolean()),
      isOnSale: v.optional(v.boolean()),
    })),
    startDate: v.optional(v.number()),
    endDate: v.optional(v.number()),
    isActive: v.boolean(),
    order: v.number(),
  })
    .index("by_slug", ["slug"])
    .index("by_active", ["isActive"])
    .index("by_order", ["order"]),

  // Table des attributs personnalisés (couleur, taille, matériau, etc.)
  attributes: defineTable({
    name: v.string(),
    type: v.union(
      v.literal("text"),
      v.literal("number"),
      v.literal("select"),
      v.literal("multiselect"),
      v.literal("color"),
      v.literal("image")
    ),
    options: v.optional(v.array(v.object({
      value: v.string(),
      label: v.string(),
      color: v.optional(v.string()), // Pour les couleurs
      imageId: v.optional(v.id("_storage")), // Pour les images
    }))),
    isRequired: v.boolean(),
    order: v.number(),
  }).index("by_order", ["order"]),

  // Table de liaison produits-attributs
  productAttributes: defineTable({
    productId: v.id("products"),
    attributeId: v.id("attributes"),
    value: v.string(),
  })
    .index("by_product", ["productId"])
    .index("by_attribute", ["attributeId"])
    .index("by_product_attribute", ["productId", "attributeId"]),
}); 