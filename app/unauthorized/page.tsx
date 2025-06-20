import Link from 'next/link';

export default function UnauthorizedPage() {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center">
      <div className="container-minimal px-6">
        <div className="max-w-md mx-auto text-center">
          {/* Header */}
          <div className="mb-12">
            <Link href="/" className="text-2xl font-medium text-foreground hover:opacity-70 transition-opacity">
              Aura
            </Link>
          </div>

          {/* Content */}
          <div className="card-minimal p-8">
            <div className="mb-6">
              <div className="w-16 h-16 bg-destructive/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg 
                  className="w-8 h-8 text-destructive" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" 
                  />
                </svg>
              </div>
              <h1 className="text-2xl font-light text-foreground mb-4">
                Accès non autorisé
              </h1>
              <p className="text-muted-foreground mb-8">
                Vous n'avez pas les permissions nécessaires pour accéder à cette page.
              </p>
            </div>

            <div className="space-y-4">
              <Link 
                href="/login" 
                className="btn-minimal w-full"
              >
                Se connecter
              </Link>
              <Link 
                href="/" 
                className="btn-outline-minimal w-full"
              >
                Retour à l'accueil
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 