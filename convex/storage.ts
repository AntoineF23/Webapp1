import { v } from "convex/values";
import { mutation, action, query } from "./_generated/server";

/**
 * Générer une URL de téléchargement pour un fichier
 */
export const generateUploadUrl = mutation({
  args: {},
  handler: async (ctx) => {
    return await ctx.storage.generateUploadUrl();
  },
});

/**
 * Obtenir l'URL publique d'un fichier stocké
 */
export const getFileUrl = query({
  args: { storageId: v.id("_storage") },
  handler: async (ctx, args) => {
    return await ctx.storage.getUrl(args.storageId);
  },
});

/**
 * Supprimer un fichier du stockage
 */
export const deleteFile = mutation({
  args: { storageId: v.id("_storage") },
  handler: async (ctx, args) => {
    await ctx.storage.delete(args.storageId);
  },
});

/**
 * Obtenir les métadonnées d'un fichier
 */
export const getFileMetadata = query({
  args: { storageId: v.id("_storage") },
  handler: async (ctx, args) => {
    return await ctx.db.system.get(args.storageId);
  },
});

/**
 * Action pour redimensionner les images (nécessite sharp)
 */
export const resizeImage = action({
  args: {
    storageId: v.id("_storage"),
    width: v.number(),
    height: v.number(),
    quality: v.optional(v.number()),
  },
  returns: v.id("_storage"),
  handler: async (ctx, args) => {
    // Cette fonction nécessiterait l'installation de sharp
    // et la configuration Node.js dans convex.json
    
    // Obtenir l'image originale
    const originalImage = await ctx.storage.get(args.storageId);
    if (!originalImage) {
      throw new Error("Image non trouvée");
    }
    
    // Convertir en ArrayBuffer
    const imageBuffer = await originalImage.arrayBuffer();
    
    // Ici, nous aurions besoin de sharp pour redimensionner
    // Pour l'instant, on retourne l'image originale
    const resizedImageId = await ctx.storage.store(originalImage);
    
    return resizedImageId;
  },
});

/**
 * Créer plusieurs tailles d'une image
 */
export const createImageVariants = action({
  args: {
    storageId: v.id("_storage"),
    variants: v.array(v.object({
      name: v.string(),
      width: v.number(),
      height: v.number(),
      quality: v.optional(v.number()),
    })),
  },
  returns: v.array(v.object({
    name: v.string(),
    storageId: v.id("_storage"),
  })),
  handler: async (ctx, args) => {
    const originalImage = await ctx.storage.get(args.storageId);
    if (!originalImage) {
      throw new Error("Image non trouvée");
    }
    
    const variants = [];
    
    for (const variant of args.variants) {
      // Pour chaque variante, on créerait une version redimensionnée
      // Pour l'instant, on utilise l'image originale
      const variantId = await ctx.storage.store(originalImage);
      
      variants.push({
        name: variant.name,
        storageId: variantId,
      });
    }
    
    return variants;
  },
});

/**
 * Valider une image uploadée
 */
export const validateUploadedImage = query({
  args: { storageId: v.id("_storage") },
  returns: v.object({
    isValid: v.boolean(),
    contentType: v.optional(v.string()),
    size: v.optional(v.number()),
  }),
  handler: async (ctx, args) => {
    const metadata = await ctx.db.system.get(args.storageId);
    if (!metadata) {
      return { isValid: false };
    }
    
    const isValid = metadata.contentType?.startsWith("image/") || false;
    
    return {
      isValid,
      contentType: metadata.contentType,
      size: metadata.size,
    };
  },
}); 