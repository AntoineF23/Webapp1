'use client';

import ProductManager from '../../components/ProductManager';
import AdminProtection from '../../components/AdminProtection';
import { useAuth } from '../../hooks/useAuth';
import Link from 'next/link';

export default function AdminPage() {
  const { logout } = useAuth();

  return (
    <AdminProtection>
      <div className="min-h-screen bg-background">
        {/* Header Admin */}
        <div className="bg-card border-b border-border">
          <div className="container-minimal px-6 py-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-6">
                <Link href="/" className="text-xl font-medium text-foreground hover:opacity-70 transition-opacity">
                  Aura
                </Link>
                <span className="text-muted-foreground">•</span>
                <h1 className="text-lg font-medium text-foreground">Administration</h1>
              </div>
              
              <div className="flex items-center space-x-4">
                <Link 
                  href="/" 
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Voir le site
                </Link>
                <button
                  onClick={logout}
                  className="btn-outline-minimal text-sm px-4 py-2"
                >
                  Se déconnecter
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Contenu Admin */}
        <ProductManager />
      </div>
    </AdminProtection>
  );
} 