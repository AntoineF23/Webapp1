# Welcome to your Convex functions directory!

Write your Convex functions here.
See https://docs.convex.dev/functions for more.

A query function that takes two arguments looks like:

```ts
// functions.js
import { query } from "./_generated/server";
import { v } from "convex/values";

export const myQueryFunction = query({
  // Validators for arguments.
  args: {
    first: v.number(),
    second: v.string(),
  },

  // Function implementation.
  handler: async (ctx, args) => {
    // Read the database as many times as you need here.
    // See https://docs.convex.dev/database/reading-data.
    const documents = await ctx.db.query("tablename").collect();

    // Arguments passed from the client are properties of the args object.
    console.log(args.first, args.second);

    // Write arbitrary JavaScript here: filter, aggregate, build derived data,
    // remove non-public properties, or create new objects.
    return documents;
  },
});
```

Using this query function in a React component looks like:

```ts
const data = useQuery(api.functions.myQueryFunction, {
  first: 10,
  second: "hello",
});
```

A mutation function looks like:

```ts
// functions.js
import { mutation } from "./_generated/server";
import { v } from "convex/values";

export const myMutationFunction = mutation({
  // Validators for arguments.
  args: {
    first: v.string(),
    second: v.string(),
  },

  // Function implementation.
  handler: async (ctx, args) => {
    // Insert or modify documents in the database here.
    // Mutations can also read from the database like queries.
    // See https://docs.convex.dev/database/writing-data.
    const message = { body: args.first, author: args.second };
    const id = await ctx.db.insert("messages", message);

    // Optionally, return a value from your mutation.
    return await ctx.db.get(id);
  },
});
```

Using this mutation function in a React component looks like:

```ts
const mutation = useMutation(api.functions.myMutationFunction);
function handleButtonPress() {
  // fire and forget, the most common way to use mutations
  mutation({ first: "Hello!", second: "me" });
  // OR
  // use the result once the mutation has completed
  mutation({ first: "Hello!", second: "me" }).then((result) =>
    console.log(result),
  );
}
```

Use the Convex CLI to push your functions to a deployment. See everything
the Convex CLI can do by running `npx convex -h` in your project root
directory. To learn more, launch the docs with `npx convex docs`.

# Base de données Convex - Gestion des produits

Cette base de données Convex fournit un système complet de gestion de produits pour l'application e-commerce.

## Structure de la base de données

### Tables principales

- **products** : Produits avec images, spécifications, variants et gestion de stock
- **categories** : Catégories hiérarchiques avec images
- **brands** : Marques avec logos et informations
- **reviews** : Avis clients avec notes et images
- **collections** : Collections de produits (manuelles ou automatiques)
- **attributes** : Attributs personnalisés (couleur, taille, etc.)
- **productAttributes** : Liaison produits-attributs

## Fonctionnalités

### Gestion des produits
- CRUD complet des produits
- Gestion des images multiples avec ordre et image principale
- Spécifications techniques groupées
- Variants de produits (couleurs, tailles, etc.)
- Gestion de stock avec seuils min/max
- Dimensions et poids
- SEO (meta title, description, tags)
- Recherche textuelle avancée
- Produits en vedette et en promotion

### Gestion des catégories
- Catégories hiérarchiques (parent/enfant)
- Images de catégories
- Ordre personnalisable
- Statut actif/inactif

### Gestion des marques
- Informations complètes des marques
- Logos et sites web
- Liaison avec les produits

### Stockage de fichiers
- Upload sécurisé d'images
- Génération d'URLs publiques
- Métadonnées de fichiers
- Support pour redimensionnement (avec sharp)

### Avis clients
- Notes et commentaires
- Images dans les avis
- Modération (approuvé/non approuvé)
- Calcul automatique des moyennes

## Utilisation

### Initialisation
```typescript
// Initialiser avec des données d'exemple
await convex.mutation(api.init.initializeData)();

// Nettoyer toutes les données (dev uniquement)
await convex.mutation(api.init.clearAllData)();
```

### Produits
```typescript
// Lister les produits
const products = await convex.query(api.products.listProducts)({
  status: "active",
  categoryId: "...",
  limit: 20
});

// Obtenir un produit par slug
const product = await convex.query(api.products.getProductBySlug)({
  slug: "iphone-15-pro-max"
});

// Rechercher des produits
const searchResults = await convex.query(api.products.searchProducts)({
  searchTerm: "iphone",
  limit: 10
});

// Créer un produit
const productId = await convex.mutation(api.products.createProduct)({
  name: "Nouveau produit",
  slug: "nouveau-produit",
  description: "Description complète...",
  price: 99.99,
  currency: "EUR",
  sku: "SKU-001",
  categoryId: "...",
  stock: 100,
  minStock: 10,
  trackStock: true,
  // ... autres champs
});
```

### Catégories
```typescript
// Lister les catégories
const categories = await convex.query(api.categories.listCategories)();

// Obtenir les catégories racines
const rootCategories = await convex.query(api.categories.getRootCategories)();

// Obtenir les sous-catégories
const subcategories = await convex.query(api.categories.getSubcategories)({
  parentId: "..."
});
```

### Stockage de fichiers
```typescript
// Générer une URL d'upload
const uploadUrl = await convex.mutation(api.storage.generateUploadUrl)();

// Uploader un fichier
const response = await fetch(uploadUrl, {
  method: "POST",
  headers: { "Content-Type": file.type },
  body: file,
});
const { storageId } = await response.json();

// Obtenir l'URL publique
const publicUrl = await convex.mutation(api.storage.getFileUrl)({
  storageId
});
```

## Configuration

### Variables d'environnement
```env
CONVEX_DEPLOYMENT=your-deployment-name
NEXT_PUBLIC_CONVEX_URL=https://your-deployment.convex.cloud
```

### Next.js Provider
```tsx
// app/layout.tsx
import { ConvexClientProvider } from '@/providers/ConvexProvider';

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body>
        <ConvexClientProvider>
          {children}
        </ConvexClientProvider>
      </body>
    </html>
  );
}
```

## Index et optimisations

### Index définis
- **products** : by_slug, by_category, by_brand, by_status, by_featured, by_sale, by_sku
- **categories** : by_slug, by_parent, by_order
- **brands** : by_slug
- **reviews** : by_product, by_approved, by_rating

### Recherche textuelle
- **products** : Recherche sur le nom avec filtres par catégorie, marque, statut et tags

## Bonnes pratiques

1. **Slugs uniques** : Toujours vérifier l'unicité des slugs
2. **Gestion d'images** : Utiliser le stockage Convex pour toutes les images
3. **Stock** : Utiliser `trackStock` pour activer/désactiver le suivi
4. **SEO** : Remplir les champs meta pour l'optimisation
5. **Performance** : Utiliser les index appropriés pour les requêtes
6. **Validation** : Tous les champs sont validés avec les types Convex

## Exemples d'utilisation avancée

### Création d'un produit complet
```typescript
const productId = await convex.mutation(api.products.createProduct)({
  name: "iPhone 15 Pro Max",
  slug: "iphone-15-pro-max",
  description: "Description complète du produit...",
  shortDescription: "Description courte",
  price: 1229,
  originalPrice: 1299,
  currency: "EUR",
  sku: "IPH15PM-256",
  categoryId: smartphoneCategoryId,
  brandId: appleBrandId,
  images: [
    {
      imageId: storageId1,
      alt: "iPhone 15 Pro Max face",
      order: 0,
      isPrimary: true
    },
    {
      imageId: storageId2,
      alt: "iPhone 15 Pro Max dos",
      order: 1,
      isPrimary: false
    }
  ],
  specifications: [
    { name: "Écran", value: "6.7 pouces", group: "Affichage" },
    { name: "Processeur", value: "A17 Pro", group: "Performance" }
  ],
  variants: [
    { name: "Couleur", value: "Titane Naturel", sku: "IPH15PM-256-NAT", stock: 50 },
    { name: "Couleur", value: "Titane Bleu", sku: "IPH15PM-256-BLU", stock: 30 }
  ],
  stock: 80,
  minStock: 10,
  trackStock: true,
  weight: 221,
  dimensions: { length: 159.9, width: 76.7, height: 8.25, unit: "mm" },
  tags: ["smartphone", "apple", "premium"],
  status: "active",
  isFeatured: true,
  isOnSale: true
});
```

Cette architecture fournit une base solide pour un système e-commerce complet avec toutes les fonctionnalités modernes attendues.
