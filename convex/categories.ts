import { v } from "convex/values";
import { query, mutation } from "./_generated/server";

// ==== QUERIES ====

/**
 * Obtenir toutes les catégories actives
 */
export const listCategories = query({
  args: {
    parentId: v.optional(v.union(v.id("categories"), v.null())),
  },
  handler: async (ctx, args) => {
    if (args.parentId === undefined) {
      return await ctx.db.query("categories").order("asc").collect();
    }
    
    return await ctx.db
      .query("categories")
      .filter((q) => q.eq(q.field("parentId"), args.parentId))
      .order("asc")
      .collect();
  },
});

/**
 * Obtenir une catégorie par son slug
 */
export const getCategoryBySlug = query({
  args: { slug: v.string() },
  handler: async (ctx, args) => {
    return await ctx.db
      .query("categories")
      .withIndex("by_slug", (q) => q.eq("slug", args.slug))
      .unique();
  },
});

/**
 * Obtenir les sous-catégories d'une catégorie parent
 */
export const getSubcategories = query({
  args: { parentId: v.id("categories") },
  handler: async (ctx, args) => {
    return await ctx.db
      .query("categories")
      .filter((q) => q.eq(q.field("parentId"), args.parentId))
      .order("asc")
      .collect();
  },
});

/**
 * Obtenir les catégories racines (sans parent)
 */
export const getRootCategories = query({
  args: {},
  handler: async (ctx, args) => {
    return await ctx.db
      .query("categories")
      .filter((q) => q.eq(q.field("parentId"), null))
      .order("asc")
      .collect();
  },
});

// ==== MUTATIONS ====

/**
 * Créer une nouvelle catégorie
 */
export const createCategory = mutation({
  args: {
    name: v.string(),
    slug: v.string(),
    description: v.optional(v.string()),
    parentId: v.optional(v.id("categories")),
    imageId: v.optional(v.id("_storage")),
    order: v.optional(v.number()),
    isActive: v.optional(v.boolean()),
  },
  handler: async (ctx, args) => {
    // Check if slug already exists
    const existingCategory = await ctx.db
      .query("categories")
      .withIndex("by_slug", (q) => q.eq("slug", args.slug))
      .unique();
    
    if (existingCategory) {
      throw new Error(`Category with slug "${args.slug}" already exists`);
    }

    // Validate parent exists if provided
    if (args.parentId) {
      const parent = await ctx.db.get(args.parentId);
      if (!parent) {
        throw new Error("Parent category not found");
      }
    }

    const categoryId = await ctx.db.insert("categories", {
      name: args.name,
      slug: args.slug,
      description: args.description || "",
      parentId: args.parentId,
      imageId: args.imageId,
      order: args.order || 0,
      isActive: args.isActive !== false,
    });

    return categoryId;
  },
});

/**
 * Mettre à jour une catégorie
 */
export const updateCategory = mutation({
  args: {
    id: v.id("categories"),
    name: v.optional(v.string()),
    slug: v.optional(v.string()),
    description: v.optional(v.string()),
    parentId: v.optional(v.id("categories")),
    imageId: v.optional(v.id("_storage")),
    order: v.optional(v.number()),
    isActive: v.optional(v.boolean()),
  },
  handler: async (ctx, args) => {
    const { id, ...updates } = args;
    
    const category = await ctx.db.get(id);
    if (!category) {
      throw new Error("Category not found");
    }

    // Check slug uniqueness if updating slug
    if (updates.slug && updates.slug !== category.slug) {
      const existingCategory = await ctx.db
        .query("categories")
        .withIndex("by_slug", (q) => q.eq("slug", updates.slug!))
        .unique();
      
      if (existingCategory && existingCategory._id !== id) {
        throw new Error(`Category with slug "${updates.slug}" already exists`);
      }
    }

    // Validate parent exists if provided
    if (updates.parentId && updates.parentId !== null) {
      const parent = await ctx.db.get(updates.parentId);
      if (!parent) {
        throw new Error("Parent category not found");
      }

      // Prevent circular references
      if (updates.parentId === id) {
        throw new Error("Category cannot be its own parent");
      }
    }

    await ctx.db.patch(id, updates);
  },
});

/**
 * Supprimer une catégorie
 */
export const deleteCategory = mutation({
  args: { id: v.id("categories") },
  handler: async (ctx, args) => {
    const category = await ctx.db.get(args.id);
    if (!category) {
      throw new Error("Category not found");
    }

    // Check if category has subcategories
    const subcategories = await ctx.db
      .query("categories")
      .filter((q) => q.eq(q.field("parentId"), args.id))
      .collect();
    
    if (subcategories.length > 0) {
      throw new Error("Cannot delete category with subcategories");
    }

    // Check if category has products
    const products = await ctx.db
      .query("products")
      .filter((q) => q.eq(q.field("categoryId"), args.id))
      .collect();
    
    if (products.length > 0) {
      throw new Error("Cannot delete category with products");
    }

    await ctx.db.delete(args.id);
  },
});

/**
 * Réorganiser l'ordre des catégories
 */
export const reorderCategories = mutation({
  args: {
    categoryOrders: v.array(v.object({
      id: v.id("categories"),
      order: v.number(),
    })),
  },
  handler: async (ctx, args) => {
    for (const { id, order } of args.categoryOrders) {
      const category = await ctx.db.get(id);
      if (category) {
        await ctx.db.patch(id, { order });
      }
    }
  },
}); 