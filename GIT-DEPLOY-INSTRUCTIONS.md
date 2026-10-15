# 🚀 Deploy Automático via GitHub + Vercel

## ✅ Setup (Solo una vez)

### 1️⃣ Crear Repositorio en GitHub

**Opción A: GitHub Web**
```
1. Ir a https://github.com/new
2. Repository name: etfnexo-astro-poc
3. Description: "PoC migración Next.js → Astro para ETF Nexo"
4. Visibility: Private (o Public)
5. NO inicializar con README (ya tenemos código)
6. Click "Create repository"
```

**Opción B: GitHub CLI**
```bash
gh repo create etfnexo-astro-poc \
  --private \
  --description "PoC migración Next.js → Astro para ETF Nexo" \
  --source=. \
  --remote=origin \
  --push
```

---

### 2️⃣ Conectar Remote (si usaste opción A)

```bash
cd /home/suario/etfnexo-astro

# Agregar remote (reemplaza TU-USUARIO con tu username de GitHub)
git remote add origin https://github.com/TU-USUARIO/etfnexo-astro-poc.git

# O con SSH
git remote add origin git@github.com:TU-USUARIO/etfnexo-astro-poc.git

# Verificar
git remote -v
```

---

### 3️⃣ Push Inicial

```bash
# Renombrar branch a main (si es necesario)
git branch -M main

# Push
git push -u origin main
```

---

### 4️⃣ Conectar Vercel con GitHub

**Opción A: Vercel Dashboard (Recomendado)**
```
1. Ir a https://vercel.com/new
2. Click "Import Git Repository"
3. Seleccionar "etfnexo-astro-poc"
4. Framework Preset: Astro (detectado automáticamente)
5. Build Command: npm run build (default)
6. Output Directory: dist (default)
7. Environment Variables:
   - PUBLIC_SUPABASE_URL
   - PUBLIC_SUPABASE_ANON_KEY
   - SUPABASE_SERVICE_ROLE_KEY
8. Click "Deploy"
```

**Opción B: Vercel CLI**
```bash
cd /home/suario/etfnexo-astro

# Conectar proyecto
vercel link

# Deploy
vercel --prod
```

---

## 🔄 Deploy Automático (Ya configurado)

**Cada push a `main` deploya automáticamente:**

```bash
# 1. Hacer cambios
nano src/pages/noticias.astro

# 2. Commit
git add .
git commit -m "feat: update noticias page"

# 3. Push (deploy automático)
git push origin main
```

**Ver deploy en:** https://vercel.com/dashboard

---

## 📊 Variables de Entorno en Vercel

**Configurar en:** Vercel Dashboard → Settings → Environment Variables

```bash
# Production
PUBLIC_SUPABASE_URL=https://ycxjpmqidphocvvfxkdb.supabase.co
PUBLIC_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InljeGpwbXFpZHBob2N2dmZ4a2RiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzcyNDQ2MTAsImV4cCI6MjA1MjgyMDYxMH0.xOKcQZu72MoFzUvF8WwuD9VdwYb5lRo7vN6FDzqHYfo
SUPABASE_SERVICE_ROLE_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InljeGpwbXFpZHBob2N2dmZ4a2RiIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTczNzI0NDYxMCwiZXhwIjoyMDUyODIwNjEwfQ.WHsKO5IZGxNmh_ZqmYsVQcM5dKKxdW9WQLBKGZfQ9Fs
```

**Nota:** Estas variables ya están en `.env` pero NO se suben a GitHub (está en `.gitignore`)

---

## 🎯 URL del Deploy

**Después del primer deploy:**
```
Production: https://etfnexo-astro-poc.vercel.app
```

**Cada push crea:**
- Preview deploy (branch no-main)
- Production deploy (branch main)

---

## 🧪 Lighthouse en Deploy Automático

**Después de que Vercel termine:**

```bash
# Esperar notificación de Vercel (email o dashboard)
# Luego ejecutar:

lighthouse https://etfnexo-astro-poc.vercel.app/noticias \
  --only-categories=performance,accessibility,best-practices,seo \
  --output=html \
  --output-path=./lighthouse-production.html \
  --form-factor=mobile \
  --view
```

---

## 📋 Checklist de Setup

- [ ] Repo creado en GitHub
- [ ] Remote configurado
- [ ] Push inicial exitoso
- [ ] Vercel conectado al repo
- [ ] Variables de entorno configuradas
- [ ] Primer deploy completado
- [ ] URL de producción obtenida
- [ ] Lighthouse ejecutado
- [ ] Score ≥98 confirmado

---

## 🔄 Workflow Completo

```
1. Hacer cambios localmente
   ↓
2. git add + commit
   ↓
3. git push origin main
   ↓
4. Vercel detecta push (automático)
   ↓
5. Build + Deploy (2-3 minutos)
   ↓
6. URL actualizada automáticamente
   ↓
7. Lighthouse en nueva versión
```

---

## 🚨 Troubleshooting

### Error: "Push rejected"
```bash
git pull --rebase origin main
git push origin main
```

### Error: "Build failed in Vercel"
```bash
# Ver logs en Vercel Dashboard
# Verificar build local primero:
npm run build
```

### Variables de entorno no funcionan
```bash
# Verificar que están en Vercel Dashboard
# Verificar que empiezan con PUBLIC_ (para cliente)
# Redeploy forzado:
vercel --prod --force
```

---

## ✅ Ventajas Deploy Automático

✅ Push → Deploy automático  
✅ Sin comandos manuales  
✅ Preview deploys para branches  
✅ Rollback instantáneo  
✅ Logs centralizados  
✅ SSL automático  
✅ CDN global  

---

**Tiempo setup:** 5-10 minutos  
**Tiempo por deploy:** Automático (2-3 min)
