# 🚀 Instrucciones de Deploy a Vercel

## Paso 1: Autenticar con Vercel

```bash
cd /home/suario/etfnexo-astro
vercel login
```

**Opciones:**
1. Email + código de verificación
2. GitHub OAuth (recomendado)

---

## Paso 2: Deploy

```bash
vercel --prod
```

**Preguntas que hará Vercel:**

1. **Set up and deploy?** → `Y`
2. **Which scope?** → Selecciona tu cuenta
3. **Link to existing project?** → `N` (nuevo proyecto)
4. **Project name?** → `etfnexo-astro-poc` (o el que prefieras)
5. **In which directory?** → `.` (presiona Enter)
6. **Override settings?** → `N`

---

## Paso 3: Obtener URL

**Output esperado:**
```
✔ Production: https://etfnexo-astro-poc-xxx.vercel.app [copied to clipboard]
```

**Copia esa URL** ✅

---

## Paso 4: Lighthouse Score

**Opción A: Chrome DevTools**
```
1. Abrir URL en Chrome Incognito
2. F12 → Lighthouse tab
3. Mode: Navigation
4. Device: Mobile
5. Clear storage: ✓
6. Click "Analyze page load"
```

**Opción B: CLI**
```bash
npm install -g lighthouse
lighthouse https://etfnexo-astro-poc-xxx.vercel.app/noticias \
  --only-categories=performance,accessibility,best-practices,seo \
  --output=html \
  --output-path=./lighthouse-report.html \
  --view
```

---

## 🎯 Targets para Aprobación

| Métrica | Target | Crítico |
|---------|--------|---------|
| Performance | ≥98 | 🔴 SÍ |
| Accessibility | ≥90 | 🟡 No |
| Best Practices | ≥90 | 🟡 No |
| SEO | ≥95 | 🟡 No |

**Si Performance ≥98 → APROBAR MIGRACIÓN** ✅

---

## 📸 Screenshots para Documentar

1. Lighthouse Score (Mobile)
2. Lighthouse Score (Desktop)
3. Network tab (mostrar 0 KB JS)
4. PageSpeed Insights

---

## 🔧 Troubleshooting

### Error: "Missing Build Output Directory"
```bash
# Verificar que el build funciona
npm run build
ls -la dist/
```

### Error: Variables de entorno
```bash
# Agregar en Vercel dashboard
PUBLIC_SUPABASE_URL=https://ycxjpmqidphocvvfxkdb.supabase.co
PUBLIC_SUPABASE_ANON_KEY=eyJhbGc...
SUPABASE_SERVICE_ROLE_KEY=eyJhbGc...
```

### Mock data en producción
```bash
# Editar src/pages/noticias.astro
# Cambiar: const USE_MOCK_DATA = true;
# Por:     const USE_MOCK_DATA = false;

# Rebuild y redeploy
npm run build
vercel --prod
```

---

## ✅ Checklist Post-Deploy

- [ ] URL funciona
- [ ] Página /noticias carga
- [ ] 6 artículos visibles
- [ ] Imágenes cargan
- [ ] No errores en consola
- [ ] Lighthouse ejecutado
- [ ] Screenshots capturados

---

## 📊 Registro de Resultados

**URL Deploy:** ___________________________________

**Lighthouse Scores:**
- Performance: _____ / 100
- Accessibility: _____ / 100
- Best Practices: _____ / 100
- SEO: _____ / 100

**Decisión:**
- [ ] ✅ APROBAR (Performance ≥98)
- [ ] 🤔 EVALUAR (Performance 95-97)
- [ ] ❌ RECHAZAR (Performance <95)

---

**Tiempo estimado:** 5-10 minutos
