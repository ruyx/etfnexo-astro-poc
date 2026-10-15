# ⚡ Quick Start - Deploy y Lighthouse

## 🚀 Comandos Exactos (Copiar y Pegar)

### 1️⃣ Login a Vercel
```bash
cd /home/suario/etfnexo-astro
vercel login
```
↳ Sigue las instrucciones en pantalla

---

### 2️⃣ Deploy a Producción
```bash
vercel --prod
```

**Responde a las preguntas:**
- Set up and deploy? → **Y**
- Which scope? → Tu cuenta
- Link to existing project? → **N**
- Project name? → **etfnexo-astro-poc**
- In which directory? → **.** (presiona Enter)
- Override settings? → **N**

**Copia la URL que te da** 📋

---

### 3️⃣ Lighthouse CLI (Recomendado)
```bash
# Instalar Lighthouse
npm install -g lighthouse

# Ejecutar (reemplaza [URL] con la URL de Vercel)
lighthouse https://[URL]/noticias \
  --only-categories=performance \
  --output=html \
  --output-path=./lighthouse-mobile.html \
  --form-factor=mobile \
  --screenEmulation.mobile=true \
  --view

# Desktop
lighthouse https://[URL]/noticias \
  --only-categories=performance,accessibility,best-practices,seo \
  --output=html \
  --output-path=./lighthouse-desktop.html \
  --form-factor=desktop \
  --screenEmulation.mobile=false \
  --view
```

---

### 4️⃣ Ver Resultados
```bash
# Los reportes se abren automáticamente
# También puedes abrirlos manualmente:
xdg-open lighthouse-mobile.html
xdg-open lighthouse-desktop.html
```

---

## 📊 Registrar Resultados

**Copia esto y rellena:**

```
URL Deploy: _________________________________

LIGHTHOUSE MOBILE:
- Performance: _____ / 100
- Accessibility: _____ / 100
- Best Practices: _____ / 100
- SEO: _____ / 100

LIGHTHOUSE DESKTOP:
- Performance: _____ / 100
- Accessibility: _____ / 100
- Best Practices: _____ / 100
- SEO: _____ / 100

DECISIÓN:
[ ] ✅ APROBAR (Performance ≥98)
[ ] 🤔 EVALUAR (Performance 95-97)
[ ] ❌ RECHAZAR (Performance <95)
```

---

## 🎯 Decisión Automática

```bash
# Si Performance ≥98:
echo "APROBADO" > DECISION.txt

# Si Performance <95:
echo "RECHAZADO" > DECISION.txt

# Si Performance 95-97:
echo "EVALUAR" > DECISION.txt
```

---

## 🔄 Si necesitas redeploy

```bash
# Hacer cambios
nano src/pages/noticias.astro

# Build local
npm run build

# Redeploy
vercel --prod
```

---

## 📸 Screenshots Necesarios

1. Lighthouse Mobile Score
2. Lighthouse Desktop Score  
3. Network tab mostrando 0 KB JS
4. Página cargada en mobile

---

**Tiempo estimado:** 5 minutos
