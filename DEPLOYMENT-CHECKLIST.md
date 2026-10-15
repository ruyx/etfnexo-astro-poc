# ✅ Checklist de Aprobación para Producción - Astro PoC

## 📋 Verificación Pre-Deployment

### 1. **Build de Producción** (CRÍTICO)

```bash
cd /home/suario/etfnexo-astro
npm run build
```

**✅ Debe pasar sin errores**  
**Resultado esperado:**
```
✓ Completed in X ms
Server built in X.XXs
Complete!
```

---

### 2. **Preview Local** (Simular Producción)

```bash
npm run preview
# Abre: http://localhost:4321/noticias
```

**✅ Verificar:**
- [ ] Página carga correctamente
- [ ] 6 artículos visibles
- [ ] Imágenes cargan
- [ ] Estilos aplicados
- [ ] No errores en consola

---

### 3. **Lighthouse Score** (Momento de la Verdad)

**Opción A: Chrome DevTools**
```
1. Abrir http://localhost:4321/noticias en Chrome
2. F12 → Lighthouse tab
3. Mode: Navigation
4. Device: Mobile
5. Click "Analyze page load"
```

**Opción B: CLI**
```bash
npm install -g lighthouse
lighthouse http://localhost:4321/noticias --view
```

**✅ Targets:**
- Performance: **≥95** (ideal 98+)
- Accessibility: **≥90**
- Best Practices: **≥90**
- SEO: **≥95**

---

### 4. **Bundle Size Analysis**

```bash
# Ver tamaño del build
cd dist
du -sh .
du -sh client/

# Ver JavaScript total
find client -name "*.js" -exec du -ch {} + | grep total
```

**✅ Target:** <50 KB JS total

---

### 5. **Comparación con Next.js**

**Next.js (proyecto actual):**
```bash
cd /home/suario/ruy
npm run build
# Ver .next/static/chunks/
```

**Astro (PoC):**
```bash
cd /home/suario/etfnexo-astro
npm run build
# Ver dist/client/
```

**✅ Comparar:**
- [ ] Tamaño total
- [ ] JavaScript bundle
- [ ] Build time

---

### 6. **Deploy a Vercel (Testing)**

```bash
# Instalar Vercel CLI
npm install -g vercel

# Deploy PoC
cd /home/suario/etfnexo-astro
vercel --prod

# Obtendrás una URL tipo:
# https://etfnexo-astro-xxx.vercel.app
```

**✅ Después del deploy:**
- [ ] Abrir URL en mobile real
- [ ] Lighthouse en URL pública
- [ ] Verificar datos cargan (cambiar a Supabase real)

---

## 📊 Matriz de Decisión

### ✅ APROBAR MIGRACIÓN si:

| Criterio | Target | Peso |
|----------|--------|------|
| Lighthouse Performance | ≥98 | 🔴 Crítico |
| JavaScript bundle | <50 KB | 🔴 Crítico |
| Build exitoso | ✅ | 🔴 Crítico |
| SEO score | ≥95 | 🟡 Alto |
| Setup time | <4h | 🟢 Medio |
| DX aceptable | ✅ | 🟢 Medio |

**Regla:** TODOS los 🔴 Críticos deben pasar

---

### ❌ RECHAZAR MIGRACIÓN si:

- Lighthouse Performance <95
- JavaScript bundle >100 KB (peor que Next.js)
- Build falla
- WebMCP no funciona (pendiente validar)
- Esfuerzo estimado >4 semanas

---

## 🎯 Proceso de Aprobación

### Paso 1: Verificación Técnica (HOY)
```bash
cd /home/suario/etfnexo-astro

# 1. Build
npm run build

# 2. Preview
npm run preview

# 3. Lighthouse local
lighthouse http://localhost:4321/noticias --view
```

### Paso 2: Deploy Temporal (HOY/MAÑANA)
```bash
# Deploy a Vercel
vercel --prod

# Lighthouse en URL pública
lighthouse https://etfnexo-astro-xxx.vercel.app/noticias --view
```

### Paso 3: Comparación (MAÑANA)
```
Comparar métricas:
- Next.js production: https://etfnexo.com/noticias
- Astro PoC: https://etfnexo-astro-xxx.vercel.app/noticias
```

### Paso 4: Decisión GO/NO-GO (MAÑANA)
```
Presentar resultados:
- Screenshots de Lighthouse
- Tabla comparativa
- Estimación de esfuerzo completo
```

---

## 🚀 Comandos Rápidos

```bash
# Verificación completa (ejecutar en orden)
cd /home/suario/etfnexo-astro

# 1. Build
npm run build

# 2. Preview
npm run preview &
sleep 3

# 3. Verificar página
curl -s http://localhost:4321/noticias | grep -c '<article class="bg-white'
# Debe devolver: 6

# 4. Lighthouse
lighthouse http://localhost:4321/noticias \
  --only-categories=performance,accessibility,best-practices,seo \
  --output=html \
  --output-path=/home/suario/etfnexo-astro/lighthouse-report.html

# 5. Abrir reporte
# Abre: /home/suario/etfnexo-astro/lighthouse-report.html
```

---

## 📸 Evidencia para Aprobación

### Screenshots Requeridos:

1. **Lighthouse Score** (Desktop + Mobile)
2. **Bundle Size** (npm run build output)
3. **Page Load** (Network tab - tiempo de carga)
4. **Comparativa** (Next.js vs Astro lado a lado)

### Métricas Clave:

```
Lighthouse Performance:  ____ / 100 (target: 98+)
JavaScript Bundle:       ____ KB  (target: <50 KB)
Build Time:              ____ s   (target: <30s)
Page Load (3G):          ____ s   (target: <3s)
```

---

## 🎬 Siguiente Acción AHORA

**Ejecuta esto para verificar estado actual:**

```bash
cd /home/suario/etfnexo-astro && \
npm run build && \
echo "✅ Build exitoso" || echo "❌ Build falló"
```

**Si build exitoso → Ejecutar preview y Lighthouse**  
**Si build falla → Reportar errores**

---

**Creado:** 2026-10-15  
**Última actualización:** 12:45 UTC
