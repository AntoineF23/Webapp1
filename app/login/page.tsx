'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function LoginPage() {
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    // Simple password check (en production, utilisez une vraie authentification)
    const adminPassword = 'admin123'; // À changer en production

    if (password === adminPassword) {
      // Stocker la session dans localStorage et cookies
      const loginTime = Date.now().toString();
      localStorage.setItem('adminAuthenticated', 'true');
      localStorage.setItem('adminLoginTime', loginTime);
      
      // Définir les cookies pour le middleware
      document.cookie = `adminAuthenticated=true; path=/; max-age=${24 * 60 * 60}`; // 24 heures
      document.cookie = `adminLoginTime=${loginTime}; path=/; max-age=${24 * 60 * 60}`;
      
      // Rediriger vers l'admin
      router.push('/admin');
    } else {
      setError('Mot de passe incorrect');
    }

    setIsLoading(false);
  };

  return (
    <div className="min-h-screen bg-background flex items-center justify-center">
      <div className="container-minimal px-6">
        <div className="max-w-md mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <Link href="/" className="text-2xl font-medium text-foreground hover:opacity-70 transition-opacity">
              Aura
            </Link>
            <h1 className="text-3xl font-light text-foreground mt-8 mb-4">
              Accès Administrateur
            </h1>
            <p className="text-muted-foreground">
              Connectez-vous pour accéder au panneau d'administration
            </p>
          </div>

          {/* Formulaire de connexion */}
          <div className="card-minimal p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-muted-foreground mb-3">
                  Mot de passe administrateur
                </label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="input-minimal w-full"
                  placeholder="Entrez votre mot de passe"
                  autoFocus
                />
              </div>

              {error && (
                <div className="p-4 bg-destructive/10 text-destructive text-sm" style={{ borderRadius: 'var(--radius)' }}>
                  {error}
                </div>
              )}

              <button
                type="submit"
                disabled={isLoading}
                className="btn-minimal w-full disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isLoading ? 'Connexion...' : 'Se connecter'}
              </button>
            </form>

            <div className="mt-6 pt-6 border-t border-border text-center">
              <Link 
                href="/" 
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                Retour à l'accueil
              </Link>
            </div>
          </div>

          {/* Note de développement */}
          <div className="mt-8 p-4 bg-muted text-sm text-muted-foreground text-center" style={{ borderRadius: 'var(--radius)' }}>
            <strong>Mode développement :</strong> Mot de passe = admin123
          </div>
        </div>
      </div>
    </div>
  );
} 