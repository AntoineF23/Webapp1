import { notFound } from 'next/navigation';
import Link from 'next/link';

// Cette page sera développée plus tard avec Convex
// Pour l'instant, c'est une page simple pour la navigation

interface ProductPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { slug } = await params;

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-card border-b border-border">
        <nav className="container-minimal px-6 py-6">
          <div className="flex items-center justify-between">
            <Link href="/" className="text-2xl font-medium text-foreground hover:opacity-70 transition-opacity">
              Aura
            </Link>
            <div className="flex items-center space-x-6">
              <Link href="/" className="text-muted-foreground hover:text-foreground transition-colors">
                Accueil
              </Link>
              <Link href="/admin" className="text-muted-foreground hover:text-foreground transition-colors">
                Admin
              </Link>
            </div>
          </div>
        </nav>
      </header>

      {/* Contenu */}
      <main className="container-minimal px-6 py-12">
        <div className="max-w-4xl mx-auto">
          {/* Breadcrumb */}
          <nav className="mb-8">
            <div className="flex items-center space-x-2 text-sm text-muted-foreground">
              <Link href="/" className="hover:text-foreground transition-colors">
                Accueil
              </Link>
              <span>→</span>
              <Link href="/admin" className="hover:text-foreground transition-colors">
                Admin
              </Link>
              <span>→</span>
              <span className="text-foreground">Produit</span>
            </div>
          </nav>

          {/* Contenu principal */}
          <div className="card-minimal p-12 text-center">
            <div className="mb-8">
              <div className="w-20 h-20 bg-muted rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-muted-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                </svg>
              </div>
              <h1 className="text-3xl font-light text-foreground mb-4">
                Fiche Produit
              </h1>
              <p className="text-muted-foreground text-lg mb-2">
                Slug : <span className="font-mono text-foreground">{slug}</span>
              </p>
              <p className="text-muted-foreground">
                Cette page sera développée pour afficher les détails complets du produit.
              </p>
            </div>

            <div className="space-y-4">
              <Link 
                href="/admin" 
                className="btn-minimal inline-flex items-center space-x-2"
              >
                <span>← Retour à l'administration</span>
              </Link>
              <div>
                <Link 
                  href="/" 
                  className="btn-outline-minimal inline-flex items-center space-x-2"
                >
                  <span>Accueil</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
} 