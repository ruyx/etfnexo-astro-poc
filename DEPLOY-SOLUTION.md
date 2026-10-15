# ✅ Solución: Deploy Bloqueado en Vercel Hobby Plan

## 🚫 Problema

```
The deployment was blocked because the commit author did not have 
contributing access to the project on Vercel.
The Hobby Plan does not support collaboration for private repositories.
Please upgrade to Pro to add team members.
```

**Causa:** 
- Vercel Hobby Plan NO permite deploy automático desde GitHub en repos privados
- Solo el owner del proyecto puede hacer deploy
- Los commits desde GitHub CLI se consideran "colaboración"

---

## ✅ Solución: Deploy Directo con Vercel CLI

**En lugar de push a GitHub → deploy automático:**

```bash
# NO hacer esto (está bloqueado):
git push origin master

# SÍ hacer esto (deploy directo):
cd /home/suario/etfnexo-astro
export VERCEL_TOKEN="YOUR_VERCEL_TOKEN_HERE"
vercel --prod --yes
```

---

## 🔄 Workflow de Deploy (Sin GitHub Auto-Deploy)

### Desarrollo Local
```bash
# 1. Hacer cambios
nano src/pages/noticias.astro

# 2. Build local
npm run build

# 3. Verificar
npm run preview
```

### Deploy a Producción
```bash
# 4. Commit (opcional, solo para backup)
git add .
git commit -m "feat: update"
git push origin master  # Solo para backup en GitHub

# 5. Deploy DIRECTO a Vercel (IMPORTANTE)
cd /home/suario/etfnexo-astro
export VERCEL_TOKEN="YOUR_VERCEL_TOKEN_HERE"
vercel --prod --yes
```

**Tiempo:** ~1-2 minutos por deploy

---

## 🎯 URL de Producción Actual

Después del deploy completado:

```
https://etfnexo-astro.vercel.app/noticias
```

O la URL específica del deployment:
```
https://etfnexo-astro-[hash].vercel.app/noticias
```

---

## 📊 Ventajas del Deploy Directo

✅ **Control total:** Tú decides cuándo deployar  
✅ **Sin bloqueos:** No depende de permisos de GitHub  
✅ **Más rápido:** No espera hooks de GitHub  
✅ **Preview primero:** Puedes hacer `vercel` (sin --prod) para preview  

---

## 🔧 Alternativas (Si Quieres Auto-Deploy)

### Opción 1: Hacer Repo Público
```bash
# En GitHub, cambiar repo de Private a Public
# Entonces Vercel Hobby Plan permite auto-deploy
```

**Pros:** Deploy automático funciona  
**Contras:** Código público (no siempre deseable)

### Opción 2: Upgrade a Vercel Pro
```
Costo: $20/mes por usuario
Beneficio: Deploy automático en repos privados
```

### Opción 3: Mantener Deploy Manual (RECOMENDADO para PoC)
```
Costo: $0
Beneficio: Control total, sin dependencias
Desventaja: Manual (pero solo 1 comando)
```

---

## 📝 Comando Rápido de Deploy

Guarda esto como alias o script:

```bash
# ~/.bashrc o ~/.zshrc
alias deploy-astro='cd /home/suario/etfnexo-astro && export VERCEL_TOKEN="YOUR_VERCEL_TOKEN_HERE..." && vercel --prod --yes'
```

Entonces solo:
```bash
deploy-astro
```

O crear script:

```bash
# ~/deploy-poc.sh
#!/bin/bash
cd /home/suario/etfnexo-astro
export VERCEL_TOKEN="YOUR_VERCEL_TOKEN_HERE"
npm run build
vercel --prod --yes
```

Uso:
```bash
chmod +x ~/deploy-poc.sh
~/deploy-poc.sh
```

---

## ✅ Estado Actual

- [x] Problema identificado: Hobby Plan bloquea GitHub auto-deploy
- [x] Solución implementada: Deploy directo con Vercel CLI
- [x] Build configurado correctamente (output estático)
- [ ] Deploy completando...
- [ ] URL verificada
- [ ] Lighthouse ejecutado

---

## 🚀 Próximo Paso

Una vez el deploy actual complete (~1-2 min):

1. ✅ Verificar URL funciona
2. ✅ Ejecutar Lighthouse
3. ✅ Decisión GO/NO-GO

**Link para Lighthouse:**
```
https://pagespeed.web.dev/analysis?url=https://etfnexo-astro.vercel.app/noticias
```

---

**IMPORTANTE:** Para PoC esto es suficiente. Si aprobamos la migración completa, decidimos entonces si:
- Hacer repo público (gratis)
- Upgrade a Vercel Pro ($20/mes)
- Mantener deploy manual (gratis, 1 comando)
