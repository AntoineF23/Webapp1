'use client';

import Link from 'next/link';
import { useAuth } from '@/hooks/useAuth';

export default function AdminLink() {
  const { isAuthenticated, isLoading } = useAuth();

  // Ne pas afficher pendant le chargement ou si non connecté
  if (isLoading || !isAuthenticated) {
    return (
      <Link href="/login" className="text-muted-foreground hover:text-foreground transition-colors text-sm font-medium">
        Admin
      </Link>
    );
  }

  return (
    <Link href="/admin" className="text-foreground hover:opacity-70 transition-opacity text-sm font-medium">
      Admin
    </Link>
  );
} 