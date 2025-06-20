import { query, mutation } from "./_generated/server";
import { v } from "convex/values";

// Simple query to list brands
export const listBrands = query({
  args: { limit: v.optional(v.number()) },
  handler: async (ctx, args) => {
    const limit = args.limit || 50;
    return await ctx.db.query("brands").order("desc").take(limit);
  },
});

// Query to get a brand by slug
export const getBrandBySlug = query({
  args: { slug: v.string() },
  handler: async (ctx, args) => {
    return await ctx.db
      .query("brands")
      .filter((q) => q.eq(q.field("slug"), args.slug))
      .unique();
  },
});

// Query to get a brand by ID
export const getBrandById = query({
  args: { id: v.id("brands") },
  handler: async (ctx, args) => {
    return await ctx.db.get(args.id);
  },
});

// Mutation to create a brand
export const createBrand = mutation({
  args: {
    name: v.string(),
    slug: v.string(),
    description: v.optional(v.string()),
    logo: v.optional(v.id("_storage")),
    website: v.optional(v.string()),
    isActive: v.optional(v.boolean()),
  },
  handler: async (ctx, args) => {
    // Check if slug already exists
    const existingBrand = await ctx.db
      .query("brands")
      .withIndex("by_slug", (q) => q.eq("slug", args.slug))
      .unique();
    
    if (existingBrand) {
      throw new Error(`Brand with slug "${args.slug}" already exists`);
    }

    const brandId = await ctx.db.insert("brands", {
      name: args.name,
      slug: args.slug,
      description: args.description || "",
      logo: args.logo,
      website: args.website,
      isActive: args.isActive !== false,
    });

    return brandId;
  },
});

// Mutation to update a brand
export const updateBrand = mutation({
  args: {
    id: v.id("brands"),
    name: v.optional(v.string()),
    slug: v.optional(v.string()),
    description: v.optional(v.string()),
    logo: v.optional(v.id("_storage")),
    website: v.optional(v.string()),
    isActive: v.optional(v.boolean()),
  },
  handler: async (ctx, args) => {
    const { id, ...updates } = args;
    
    const brand = await ctx.db.get(id);
    if (!brand) {
      throw new Error("Brand not found");
    }

    // Check slug uniqueness if updating slug
    if (updates.slug && updates.slug !== brand.slug) {
      const existingBrand = await ctx.db
        .query("brands")
        .withIndex("by_slug", (q) => q.eq("slug", updates.slug!))
        .unique();
      
      if (existingBrand && existingBrand._id !== id) {
        throw new Error(`Brand with slug "${updates.slug}" already exists`);
      }
    }

    await ctx.db.patch(id, updates);
  },
});

// Mutation to delete a brand
export const deleteBrand = mutation({
  args: { id: v.id("brands") },
  handler: async (ctx, args) => {
    const brand = await ctx.db.get(args.id);
    if (!brand) {
      throw new Error("Brand not found");
    }

    // Check if brand has products
    const products = await ctx.db
      .query("products")
      .filter((q) => q.eq(q.field("brandId"), args.id))
      .collect();
    
    if (products.length > 0) {
      throw new Error("Cannot delete brand with products");
    }

    await ctx.db.delete(args.id);
  },
}); 