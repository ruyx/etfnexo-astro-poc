/**
 * Supabase Client para Astro
 *
 * Diferencias vs Next.js:
 * - No hay middleware automático
 * - Cookies se manejan manualmente en cada request
 */

import { createClient } from '@supabase/supabase-js';
import type { Database } from './database.types';

// Astro usa PUBLIC_ en lugar de NEXT_PUBLIC_
const supabaseUrl = import.meta.env.PUBLIC_SUPABASE_URL || '';
const supabaseAnonKey = import.meta.env.PUBLIC_SUPABASE_ANON_KEY || '';

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Missing Supabase environment variables');
}

/**
 * Client para uso en el servidor (API routes, páginas SSR)
 */
export const createServerClient = () => {
  return createClient<Database>(supabaseUrl, supabaseAnonKey, {
    auth: {
      persistSession: false, // No persistir en servidor
      autoRefreshToken: false,
    },
  });
};

/**
 * Client para uso en el navegador (componentes React con client:*)
 */
export const createBrowserClient = () => {
  return createClient<Database>(supabaseUrl, supabaseAnonKey, {
    auth: {
      persistSession: true,
      autoRefreshToken: true,
      detectSessionInUrl: true,
    },
  });
};

/**
 * Client con Service Role Key (solo servidor)
 * NUNCA exponer al cliente
 */
export const createAdminClient = () => {
  const serviceRoleKey = import.meta.env.SUPABASE_SERVICE_ROLE_KEY;

  if (!serviceRoleKey) {
    throw new Error('Missing SUPABASE_SERVICE_ROLE_KEY');
  }

  return createClient<Database>(supabaseUrl, serviceRoleKey, {
    auth: {
      persistSession: false,
      autoRefreshToken: false,
    },
  });
};
