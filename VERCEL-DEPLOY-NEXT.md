# ✅ Código en GitHub - Siguiente: Conectar Vercel

## 🎉 Repo Creado Exitosamente

**URL:** https://github.com/ruyx/etfnexo-astro-poc

---

## 📝 PASO SIGUIENTE: Conectar Vercel

### 1️⃣ Ir a Vercel Dashboard
https://vercel.com/new

### 2️⃣ Import Git Repository
- Click "Import Git Repository"
- Buscar: `ruyx/etfnexo-astro-poc`
- Click "Import"

### 3️⃣ Configure Project
- **Framework Preset:** Astro (auto-detectado)
- **Root Directory:** ./ (default)
- **Build Command:** `npm run build` (default)
- **Output Directory:** `dist` (default)
- **Install Command:** `npm install` (default)

### 4️⃣ Environment Variables (¡CRÍTICO!)

**Copiar y pegar estas variables:**

```
PUBLIC_SUPABASE_URL
https://ycxjpmqidphocvvfxkdb.supabase.co

PUBLIC_SUPABASE_ANON_KEY
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InljeGpwbXFpZHBob2N2dmZ4a2RiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzcyNDQ2MTAsImV4cCI6MjA1MjgyMDYxMH0.xOKcQZu72MoFzUvF8WwuD9VdwYb5lRo7vN6FDzqHYfo

SUPABASE_SERVICE_ROLE_KEY
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InljeGpwbXFpZHBob2N2dmZ4a2RiIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTczNzI0NDYxMCwiZXhwIjoyMDUyODIwNjEwfQ.WHsKO5IZGxNmh_ZqmYsVQcM5dKKxdW9WQLBKGZfQ9Fs

PEXELS_API_KEY
EIpu4dabXBeQewM3xuerGnk5g8xdqUKKJbboHynjTs71a1xKUxOPi54N

SITEMAP_PING_SECRET
56604eeee9a6c72e6e317cfd8d2b402164695cb89903b2bb192767abfbbb75de
```

**Formato en Vercel:**
- Name: `PUBLIC_SUPABASE_URL`
- Value: `https://ycxjpmqidphocvvfxkdb.supabase.co`
- Click "Add"

Repetir para las 5 variables.

### 5️⃣ Deploy
- Click **"Deploy"**
- Esperar ~2-3 minutos

### 6️⃣ URL de Producción
Cuando termine el deploy, obtendrás:
```
https://etfnexo-astro-poc.vercel.app
```

---

## 🧪 Verificación Post-Deploy

### Abrir URL
```
https://etfnexo-astro-poc.vercel.app/noticias
```

### Checklist Visual
- [ ] Página carga sin errores
- [ ] 6 artículos se muestran
- [ ] Imágenes de Pexels cargan
- [ ] Header "Noticias y Análisis" visible
- [ ] Cards con hover effect

### Checklist Técnico (F12 → Network)
- [ ] JavaScript = 0 KB (sin archivos .js)
- [ ] Solo CSS + HTML + imágenes
- [ ] No errores en Console

---

## 📊 Lighthouse (Decisión Final)

Una vez verificado visualmente, ejecutar:

```bash
lighthouse https://etfnexo-astro-poc.vercel.app/noticias \
  --only-categories=performance,accessibility,best-practices,seo \
  --output=html \
  --output-path=./lighthouse-production.html \
  --form-factor=mobile \
  --view
```

### Targets para APROBAR
- ✅ **Performance:** ≥98
- ✅ **Accessibility:** ≥90
- ✅ **Best Practices:** ≥95
- ✅ **SEO:** ≥95

### Decisión
- **≥98 Performance** → ✅ **APROBAR MIGRACIÓN**
- **95-97 Performance** → ⚠️ **EVALUAR** (ver si vale la pena)
- **<95 Performance** → ❌ **RECHAZAR** (no justifica migración)

---

## 📈 Comparación Esperada

| Métrica | Next.js | Astro PoC | Mejora |
|---------|---------|-----------|--------|
| JavaScript | ~300 KB | 0 KB | -100% |
| Build Time | ~30s | <1s | -97% |
| Lighthouse | ~85 | ≥98 | +15% |
| First Load | ~500 KB | ~100 KB | -80% |

---

## 🔄 Deploy Automático Configurado

Cada push a `main` desplegará automáticamente:

```bash
# Hacer cambios
nano src/pages/noticias.astro

# Commit
git add .
git commit -m "feat: update noticias"

# Push (deploy automático)
git push
```

Vercel detecta el push y deploya en ~2 minutos.

---

## ✅ Checklist Completo

- [x] GitHub CLI autenticado
- [x] Repo creado: https://github.com/ruyx/etfnexo-astro-poc
- [x] Código pusheado a GitHub
- [ ] Vercel conectado al repo
- [ ] Variables de entorno configuradas
- [ ] Deploy completado
- [ ] URL de producción obtenida
- [ ] Lighthouse ejecutado
- [ ] Decisión GO/NO-GO tomada

---

**Próximo paso:** Conectar Vercel en https://vercel.com/new y configurar las 5 variables de entorno.
