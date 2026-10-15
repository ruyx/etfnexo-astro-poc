# Proof of Concept: Next.js → Astro Migration

## Estado: 🟡 En Progreso (Día 1)

### ✅ Completado

1. **Setup Inicial**
   - ✅ Proyecto Astro creado (puerto 5001)
   - ✅ React integration instalada
   - ✅ Tailwind CSS v4 configurado
   - ✅ Output hybrid (SSR + SSG)

2. **Dependencias Core**
   - ✅ @supabase/supabase-js
   - ✅ @supabase/ssr
   - ✅ date-fns
   - ✅ React 19.3.1

3. **Estructura de Archivos**
   ```
   src/
   ├── components/    (vacío - pendiente)
   ├── content/
   │   ├── config.ts  ✅ Content Collections definidas
   │   ├── noticias/  (vacío - datos desde Supabase)
   │   └── config/
   ├── layouts/
   │   └── BaseLayout.astro  ✅ Layout con SEO completo
   ├── lib/
   │   ├── supabase.ts  ✅ Clients (server, browser, admin)
   │   └── database.types.ts  ✅ Copiado desde Next.js
   ├── pages/
   │   └── noticias.astro  ✅ Listing de noticias (SSR)
   └── styles/
       └── global.css  ✅ Design tokens migrados
   ```

4. **Configuración**
   - ✅ Variables de entorno (.env)
   - ✅ Supabase credentials
   - ✅ astro.config.mjs

### 🔨 En Desarrollo

1. **Página /noticias**
   - ✅ Fetch desde Supabase (server-side)
   - ✅ HTML estático con cero JS
   - ⏳ Servidor dev con error - diagnosticando

### ❌ Pendiente

1. **Componentes**
   - [ ] Header (copiar desde Next.js)
   - [ ] Footer (copiar desde Next.js)
   - [ ] NewsCard (React Island)

2. **Páginas**
   - [ ] /noticias/[slug] (página individual)
   - [ ] /rankings (con filtros interactivos)
   - [ ] HomePage (/)

3. **WebMCP Integration**
   - [ ] Migrar WebMCPProvider como isla
   - [ ] Validar compatibilidad
   - [ ] Testing

4. **Testing**
   - [ ] Build production
   - [ ] Lighthouse benchmarks
   - [ ] Comparación con Next.js

## Decisiones Técnicas

### 1. Output Mode: `hybrid`
**Por qué:** Permite mezclar SSG (noticias estáticas) + SSR (rankings dinámicos)

### 2. Port: 5001
**Por qué:** Next.js usa 5000, así podemos correr ambos en paralelo

### 3. Content Collections
**Por qué:** Type-safe, pero datos vienen de Supabase (no archivos .md)

### 4. Supabase Clients
**Estrategia:**
- Server: Sin sesión persistente
- Browser: Con sesión persistente (auth)
- Admin: Service role (solo servidor)

## Errores Encontrados

### Error 1: Dev server exited
```
{"message":"Dev server process exited before becoming ready.","label":"SKIP_FORMAT","level":"error"}
```

**Causa:** Por diagnosticar  
**Estado:** 🔍 Investigando

## Próximos Pasos

1. ✅ Resolver error del dev server
2. ⏳ Verificar que /noticias carga correctamente
3. ⏳ Copiar componentes Header/Footer desde Next.js
4. ⏳ Crear página [slug] individual
5. ⏳ Migrar /rankings con filtros como isla

## Métricas Objetivo

| Métrica | Next.js | Astro (Target) | Mejora |
|---------|---------|----------------|--------|
| JavaScript Bundle | ~300 KB | ~30 KB | -90% |
| Lighthouse | 89 | 98 | +9 |
| LCP | 2.5s | 0.8s | -68% |
| Build Time | ? | ? | ? |

## Preguntas Abiertas

1. ¿WebMCP funciona como isla de React?
2. ¿Cómo manejamos auth middleware sin Next.js middleware?
3. ¿API routes se migran o usamos Supabase Edge Functions?

---

**Última actualización:** 2026-10-15 11:52 UTC
