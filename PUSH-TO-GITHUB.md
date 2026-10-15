# 🚀 Push a GitHub - Opciones

## Opción 1: Repo Nuevo (Recomendado para PoC)

```bash
cd /home/suario/etfnexo-astro

# Crear repo nuevo
gh repo create ruyx/etfnexo-astro-poc \
  --private \
  --description "PoC migración Next.js → Astro" \
  --source=. \
  --remote=origin \
  --push
```

**Ventajas:**
- ✅ Repo independiente para experimentar
- ✅ No afecta el proyecto Next.js
- ✅ Fácil comparación lado a lado
- ✅ Deploy independiente en Vercel

**URL resultante:** https://github.com/ruyx/etfnexo-astro-poc

---

## Opción 2: Branch en Repo Existente

```bash
cd /home/suario/etfnexo-astro

# Agregar remote del repo existente
git remote add origin https://github.com/ruyx/ETFNEXO.git

# Crear branch para PoC
git branch -M poc/astro-migration

# Push
git push -u origin poc/astro-migration
```

**Ventajas:**
- ✅ Todo en un solo repo
- ✅ Fácil ver diff entre Next.js y Astro
- ✅ Historial unificado

**Desventajas:**
- ⚠️ Más complejo configurar deploy separado
- ⚠️ Puede confundir si hay conflictos

---

## 🎯 Recomendación: Opción 1

**Crear repo nuevo para el PoC:**

```bash
cd /home/suario/etfnexo-astro

# 1. Crear repo
gh repo create ruyx/etfnexo-astro-poc \
  --private \
  --description "PoC migración Next.js → Astro para ETF Nexo" \
  --source=. \
  --remote=origin

# 2. Push
git push -u origin main

# 3. Ver en GitHub
gh repo view --web
```

---

## 📊 Conectar Vercel

**Después del push:**

1. Ir a https://vercel.com/new
2. Importar: `ruyx/etfnexo-astro-poc`
3. Framework: Astro (auto-detect)
4. Environment Variables:
   ```
   PUBLIC_SUPABASE_URL=https://ycxjpmqidphocvvfxkdb.supabase.co
   PUBLIC_SUPABASE_ANON_KEY=eyJhbGc...
   SUPABASE_SERVICE_ROLE_KEY=eyJhbGc...
   ```
5. Deploy

**URL esperada:** https://etfnexo-astro-poc.vercel.app

---

## ⚡ Comando Único (Todo en Uno)

```bash
cd /home/suario/etfnexo-astro && \
gh repo create ruyx/etfnexo-astro-poc \
  --private \
  --description "PoC migración Next.js → Astro - ETF Nexo" \
  --source=. \
  --remote=origin \
  --push && \
echo "✅ Repo creado y código pusheado" && \
echo "📝 Siguiente: Conectar Vercel en https://vercel.com/new"
```

---

## 🔄 Deploy Automático

**Una vez conectado Vercel:**

```bash
# Hacer cambios
nano src/pages/noticias.astro

# Commit y push (deploy automático)
git add .
git commit -m "feat: update"
git push

# Vercel deploya automáticamente en ~2 minutos
```

---

## 📋 Checklist

- [ ] `gh` CLI instalado (`gh --version`)
- [ ] Autenticado en GitHub (`gh auth status`)
- [ ] Repo creado
- [ ] Código pusheado
- [ ] Vercel conectado
- [ ] Variables de entorno configuradas
- [ ] Deploy exitoso
- [ ] URL obtenida
- [ ] Lighthouse ejecutado

---

**Tiempo total:** 5 minutos
