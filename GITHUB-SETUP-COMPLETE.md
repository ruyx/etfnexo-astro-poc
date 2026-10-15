# 🔐 Setup Completo GitHub → Vercel Deploy

## PASO 1: Autenticar GitHub CLI

### Opción A: Browser (Recomendado)
```bash
gh auth login
```
Seleccionar:
- GitHub.com
- HTTPS
- Yes (authenticate Git with GitHub credentials)
- Login with a web browser

Copiar el one-time code que aparece y pegarlo en el navegador.

### Opción B: Token Personal
```bash
# Crear token en: https://github.com/settings/tokens
# Scopes: repo, workflow, write:packages

gh auth login --with-token <<< 'ghp_YOUR_TOKEN_HERE'
```

---

## PASO 2: Crear Repo + Push Código

### Opción A: Un Solo Comando (Recomendado)
```bash
cd /home/suario/etfnexo-astro

gh repo create ruyx/etfnexo-astro-poc \
  --private \
  --description "PoC migración Next.js → Astro para ETF Nexo" \
  --source=. \
  --remote=origin \
  --push
```

### Opción B: Paso a Paso
```bash
cd /home/suario/etfnexo-astro

# Crear repo
gh repo create ruyx/etfnexo-astro-poc \
  --private \
  --description "PoC migración Next.js → Astro para ETF Nexo"

# Agregar remote
git remote add origin https://github.com/ruyx/etfnexo-astro-poc.git

# Push
git push -u origin main
```

---

## PASO 3: Conectar Vercel

### Opción A: Vercel Dashboard (Recomendado)

1. Ir a: https://vercel.com/new
2. Click "Import Git Repository"
3. Buscar y seleccionar: `ruyx/etfnexo-astro-poc`
4. Framework Preset: **Astro** (auto-detectado)
5. Build Settings:
   - Build Command: `npm run build` (default)
   - Output Directory: `dist` (default)
   - Install Command: `npm install` (default)

6. **Environment Variables** (¡IMPORTANTE!):
   ```
   PUBLIC_SUPABASE_URL = https://ycxjpmqidphocvvfxkdb.supabase.co
   PUBLIC_SUPABASE_ANON_KEY = eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InljeGpwbXFpZHBob2N2dmZ4a2RiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzcyNDQ2MTAsImV4cCI6MjA1MjgyMDYxMH0.xOKcQZu72MoFzUvF8WwuD9VdwYb5lRo7vN6FDzqHYfo
   SUPABASE_SERVICE_ROLE_KEY = eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InljeGpwbXFpZHBob2N2dmZ4a2RiIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTczNzI0NDYxMCwiZXhwIjoyMDUyODIwNjEwfQ.WHsKO5IZGxNmh_ZqmYsVQcM5dKKxdW9WQLBKGZfQ9Fs
   PEXELS_API_KEY = EIpu4dabXBeQewM3xuerGnk5g8xdqUKKJbboHynjTs71a1xKUxOPi54N
   SITEMAP_PING_SECRET = 56604eeee9a6c72e6e317cfd8d2b402164695cb89903b2bb192767abfbbb75de
   ```

7. Click **"Deploy"**

8. Esperar ~2-3 minutos (Vercel hace build + deploy)

9. **URL de producción:** `https://etfnexo-astro-poc.vercel.app`

### Opción B: Vercel CLI
```bash
cd /home/suario/etfnexo-astro

# Instalar Vercel CLI (si no lo tienes)
npm install -g vercel

# Login
vercel login

# Link proyecto
vercel link

# Configurar variables de entorno
vercel env add PUBLIC_SUPABASE_URL
vercel env add PUBLIC_SUPABASE_ANON_KEY
vercel env add SUPABASE_SERVICE_ROLE_KEY
vercel env add PEXELS_API_KEY
vercel env add SITEMAP_PING_SECRET

# Deploy a producción
vercel --prod
```

---

## PASO 4: Verificar Deploy

### Checklist Post-Deploy
```bash
# 1. Verificar build exitoso
# En Vercel Dashboard → Deployments → Ver logs

# 2. Abrir URL de producción
https://etfnexo-astro-poc.vercel.app/noticias

# 3. Verificar en browser:
# - Página carga correctamente
# - 6 artículos se muestran
# - Imágenes cargan
# - No errores en console (F12)

# 4. Verificar JavaScript = 0 KB
# - F12 → Network tab
# - Filtrar por "JS"
# - Debería estar vacío (solo CSS + imágenes)
```

---

## PASO 5: Lighthouse en Producción

```bash
# Instalar Lighthouse (si no lo tienes)
npm install -g lighthouse

# Ejecutar Lighthouse en URL de producción
lighthouse https://etfnexo-astro-poc.vercel.app/noticias \
  --only-categories=performance,accessibility,best-practices,seo \
  --output=html \
  --output-path=./lighthouse-production.html \
  --form-factor=mobile \
  --view
```

**Targets para APROBAR migración:**
- ✅ Performance: ≥98
- ✅ Accessibility: ≥90
- ✅ Best Practices: ≥95
- ✅ SEO: ≥95

---

## PASO 6: Decisión GO/NO-GO

### APROBAR si:
- Performance ≥98
- Build <5 segundos
- JavaScript 0 KB
- Lighthouse todas las categorías en verde

### RECHAZAR si:
- Performance <95
- Build falla
- JavaScript >10 KB (algo está mal)
- Lighthouse rojo en Performance

---

## 🔄 Deploy Automático (Ya Configurado)

**Una vez conectado Vercel:**

```bash
# Workflow normal:

# 1. Hacer cambios
nano src/pages/noticias.astro

# 2. Commit
git add .
git commit -m "feat: update noticias page"

# 3. Push (deploy automático)
git push

# 4. Vercel detecta push y deploya automáticamente
# 5. URL se actualiza en ~2 minutos
# 6. Notificación por email cuando termina
```

---

## 📊 Monitoreo Post-Deploy

### Vercel Dashboard
- Analytics: https://vercel.com/analytics
- Logs: https://vercel.com/logs
- Deployments: https://vercel.com/deployments

### Métricas Clave
- Build time: <5s (vs ~30s Next.js)
- First Load JS: 0 KB (vs ~300 KB Next.js)
- Bundle size: ~800 KB total (solo CSS + HTML)
- Lighthouse Performance: ≥98

---

## 🎯 URLs Importantes

| Recurso | URL |
|---------|-----|
| **GitHub Repo** | https://github.com/ruyx/etfnexo-astro-poc |
| **Vercel Dashboard** | https://vercel.com/dashboard |
| **Producción** | https://etfnexo-astro-poc.vercel.app |
| **Noticias** | https://etfnexo-astro-poc.vercel.app/noticias |
| **Vercel New Project** | https://vercel.com/new |

---

## ⚠️ Troubleshooting

### Error: "gh: command not found"
```bash
# Instalar GitHub CLI
# Ubuntu/Debian:
sudo apt install gh

# macOS:
brew install gh
```

### Error: "Permission denied (publickey)"
```bash
# Usar HTTPS en lugar de SSH
git remote set-url origin https://github.com/ruyx/etfnexo-astro-poc.git
```

### Error: "Build failed in Vercel"
```bash
# Ver logs en Vercel Dashboard
# Verificar build local primero:
npm run build

# Si falla local → arreglar y push
# Si pasa local pero falla en Vercel → verificar env vars
```

### Error: "Variables de entorno no funcionan"
```bash
# Verificar en Vercel Dashboard → Settings → Environment Variables
# Asegurar que empiezan con PUBLIC_ (para cliente)
# Redeploy forzado:
vercel --prod --force
```

---

## 📋 Checklist Completo

### Setup Inicial
- [ ] GitHub CLI instalado (`gh --version`)
- [ ] Autenticado en GitHub (`gh auth status`)
- [ ] Repo creado en GitHub
- [ ] Código pusheado a GitHub
- [ ] Vercel conectado al repo
- [ ] Variables de entorno configuradas en Vercel
- [ ] Primer deploy completado exitosamente

### Verificación Post-Deploy
- [ ] URL de producción accesible
- [ ] Página /noticias carga correctamente
- [ ] 6 artículos se muestran
- [ ] Imágenes cargan
- [ ] No errores en browser console
- [ ] JavaScript = 0 KB (Network tab)

### Lighthouse
- [ ] Performance ≥98
- [ ] Accessibility ≥90
- [ ] Best Practices ≥95
- [ ] SEO ≥95

### Decisión
- [ ] GO/NO-GO documentado
- [ ] Si GO: Planear migración completa
- [ ] Si NO-GO: Documentar razones

---

**Tiempo total estimado:** 15-20 minutos

**Próximo paso:** Una vez completado, ejecutar Lighthouse en producción y tomar decisión final.
