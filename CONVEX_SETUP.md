# Configuration Convex - Base de données produits

## ✅ Ce qui a été créé

### 1. Structure de base de données complète
- **Schema** (`convex/schema.ts`) : Tables pour produits, catégories, marques, avis, collections, attributs
- **Fonctions produits** (`convex/products.ts`) : CRUD complet, recherche, gestion stock
- **Fonctions catégories** (`convex/categories.ts`) : Hiérarchie, CRUD, organisation
- **Fonctions marques** (`convex/brands.ts`) : Gestion complète des marques
- **Stockage fichiers** (`convex/storage.ts`) : Upload images, métadonnées, optimisation
- **Initialisation** (`convex/init.ts`) : Données d'exemple, nettoyage base

### 2. Configuration Next.js
- **Provider Convex** (`providers/ConvexProvider.tsx`) : Client React
- **Client Convex** (`lib/convex.ts`) : Configuration de base
- **Composant exemple** (`components/ProductExample.tsx`) : Interface complète

### 3. Documentation
- **README Convex** (`convex/README.md`) : Guide complet d'utilisation
- **Ce guide** : Instructions de déploiement

## 🚀 Étapes pour activer Convex

### 1. Configurer le déploiement
```bash
# Lancer la configuration Convex
npx convex dev

# Suivre les instructions pour créer un compte/projet
# Une fois configuré, les variables seront ajoutées à .env.local
```

### 2. Ajouter le provider dans l'application
Modifiez `app/layout.tsx` :

```tsx
import { ConvexClientProvider } from '@/providers/ConvexProvider';

export default function RootLayout({ children }: { children: React.ReactNode }) {
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

### 3. Tester l'interface
Ajoutez le composant exemple à une page :

```tsx
// Dans app/admin/page.tsx par exemple
import ProductExample from '@/components/ProductExample';

export default function AdminPage() {
  return <ProductExample />;
}
```

### 4. Variables d'environnement
Après `npx convex dev`, votre `.env.local` contiendra :
```env
CONVEX_DEPLOYMENT=your-deployment-name
NEXT_PUBLIC_CONVEX_URL=https://your-deployment.convex.cloud
```

## 📊 Fonctionnalités de la base de données

### Produits
- ✅ Informations complètes (nom, description, prix, SKU)
- ✅ Images multiples avec ordre et image principale
- ✅ Spécifications techniques groupées
- ✅ Variants (couleurs, tailles, etc.) avec stocks séparés
- ✅ Gestion de stock avec seuils
- ✅ Dimensions et poids
- ✅ SEO (meta title, description, tags)
- ✅ Statuts (brouillon, actif, inactif, archivé)
- ✅ Produits en vedette et en promotion
- ✅ Recherche textuelle avec filtres

### Catégories
- ✅ Hiérarchie parent/enfant
- ✅ Images de catégories
- ✅ Ordre personnalisable
- ✅ Statut actif/inactif

### Marques
- ✅ Informations complètes
- ✅ Logos
- ✅ Sites web
- ✅ Liaison avec produits

### Stockage fichiers
- ✅ Upload sécurisé
- ✅ Métadonnées automatiques
- ✅ URLs publiques
- ✅ Support redimensionnement (avec sharp)

### Avis clients
- ✅ Notes et commentaires
- ✅ Images dans les avis
- ✅ Modération
- ✅ Calcul moyennes automatique

## 🔧 Utilisation avancée

### Créer un produit
```typescript
import { useMutation } from 'convex/react';
import { api } from '@/convex/_generated/api';

const createProduct = useMutation(api.products.createProduct);

await createProduct({
  name: "Nouveau produit",
  slug: "nouveau-produit",
  description: "Description complète...",
  price: 99.99,
  currency: "EUR",
  sku: "NP-001",
  categoryId: categoryId,
  stock: 100,
  minStock: 10,
  trackStock: true,
  status: "active",
  // ... autres champs
});
```

### Rechercher des produits
```typescript
import { useQuery } from 'convex/react';
import { api } from '@/convex/_generated/api';

const products = useQuery(api.products.searchProducts, {
  searchTerm: "iphone",
  categoryId: smartphoneCategory,
  limit: 20
});
```

### Upload d'image
```typescript
import { useMutation } from 'convex/react';
import { api } from '@/convex/_generated/api';

const generateUploadUrl = useMutation(api.storage.generateUploadUrl);
const getFileUrl = useMutation(api.storage.getFileUrl);

// Générer URL d'upload
const uploadUrl = await generateUploadUrl();

// Uploader le fichier
const response = await fetch(uploadUrl, {
  method: "POST",
  headers: { "Content-Type": file.type },
  body: file,
});
const { storageId } = await response.json();

// Obtenir l'URL publique
const publicUrl = await getFileUrl({ storageId });
```

## 🎯 Prochaines étapes recommandées

1. **Configurer Convex** : `npx convex dev`
2. **Ajouter le provider** dans `app/layout.tsx`
3. **Tester l'interface** avec le composant exemple
4. **Initialiser les données** avec le bouton dans l'interface
5. **Intégrer dans vos pages** existantes
6. **Ajouter l'upload d'images** pour les produits
7. **Créer une interface d'administration** complète

## 📝 Notes importantes

- Les erreurs TypeScript dans les fichiers Convex disparaîtront après `npx convex dev`
- Les types sont générés automatiquement dans `convex/_generated/`
- Toutes les fonctions sont validées avec des schemas stricts
- Le stockage Convex est optimisé pour les images et fichiers
- La recherche textuelle est intégrée et performante
- Tous les index sont optimisés pour les requêtes fréquentes

## 🔐 Sécurité

- Toutes les mutations valident les données d'entrée
- Les slugs sont uniques et vérifiés
- Les relations entre tables sont validées
- Les uploads de fichiers sont sécurisés
- Support pour différents types d'utilisateurs (à implémenter) 