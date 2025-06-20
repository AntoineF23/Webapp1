import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  
  // Protéger les routes admin
  if (pathname.startsWith('/admin')) {
    // Vérifier si l'utilisateur est authentifié via les cookies
    const adminAuth = request.cookies.get('adminAuthenticated');
    const loginTime = request.cookies.get('adminLoginTime');
    
    if (!adminAuth || !loginTime) {
      // Rediriger vers la page de connexion si pas authentifié
      return NextResponse.redirect(new URL('/login', request.url));
    }
    
    // Vérifier si la session n'a pas expiré (24 heures)
    const now = Date.now();
    const loginTimestamp = parseInt(loginTime.value);
    const twentyFourHours = 24 * 60 * 60 * 1000;
    
    if (now - loginTimestamp > twentyFourHours) {
      // Session expirée, rediriger vers login
      const response = NextResponse.redirect(new URL('/login', request.url));
      response.cookies.delete('adminAuthenticated');
      response.cookies.delete('adminLoginTime');
      return response;
    }
  }
  
  return NextResponse.next();
}

export const config = {
  matcher: [
    // Protéger toutes les routes admin
    '/admin/:path*',
  ],
}; 