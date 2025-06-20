'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

export function useAuth() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    checkAuth();
  }, []);

  const checkAuth = () => {
    if (typeof window !== 'undefined') {
      const authenticated = localStorage.getItem('adminAuthenticated');
      const loginTime = localStorage.getItem('adminLoginTime');
      
      if (authenticated === 'true' && loginTime) {
        // Vérifier si la session n'a pas expiré (24 heures)
        const now = Date.now();
        const loginTimestamp = parseInt(loginTime);
        const twentyFourHours = 24 * 60 * 60 * 1000;
        
        if (now - loginTimestamp < twentyFourHours) {
          setIsAuthenticated(true);
        } else {
          // Session expirée
          logout();
        }
      }
    }
    setIsLoading(false);
  };

  const logout = () => {
    if (typeof window !== 'undefined') {
      localStorage.removeItem('adminAuthenticated');
      localStorage.removeItem('adminLoginTime');
      
      // Supprimer les cookies
      document.cookie = 'adminAuthenticated=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT';
      document.cookie = 'adminLoginTime=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT';
    }
    setIsAuthenticated(false);
    router.push('/login');
  };

  const requireAuth = () => {
    if (!isLoading && !isAuthenticated) {
      router.push('/login');
    }
  };

  return {
    isAuthenticated,
    isLoading,
    logout,
    requireAuth,
    checkAuth
  };
} 