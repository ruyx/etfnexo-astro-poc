# 🚀 Servidor de Desarrollo - ETF Nexo (Diseño Agora Real)

## ✅ Servidor Activo

**URL Local:** http://localhost:5001

### 📱 Acceso desde Windows (WSL)

Desde tu navegador en Windows, abre:

```
http://localhost:5001
```

### 🎨 Páginas Disponibles

1. **Homepage (Nuevo Diseño Agora):** http://localhost:5001/
   - Hero oscuro con highlight naranja
   - Feature cards animadas
   - CTA section
   - Tipografía Playfair Display + Urbanist
   - Paleta naranja + azul oscuro

2. **Noticias (Diseño Antiguo):** http://localhost:5001/noticias
   - Todavía con diseño anterior
   - Pendiente migración

### 🔄 Comandos Útiles

**Detener servidor:**
```bash
cd /home/suario/etfnexo-astro
npx astro dev stop
```

**Reiniciar servidor:**
```bash
cd /home/suario/etfnexo-astro
npx astro dev
```

**Ver logs:**
```bash
npx astro dev logs
```

**Build producción:**
```bash
npm run build
```

### 🎨 Hot Reload Activo

El servidor recarga automáticamente al:
- ✅ Modificar archivos `.astro`
- ✅ Modificar archivos `.css`
- ✅ Modificar archivos en `/src/`

**No requiere restart manual!**

### 🧪 Testing

**Desktop:**
- Chrome/Edge: http://localhost:5001
- Firefox: http://localhost:5001

**Mobile (emulación):**
- DevTools → Toggle device toolbar (Ctrl+Shift+M)
- Probar iPhone 12/13/14
- Probar Samsung Galaxy S20/S21

### 📊 Lighthouse Test

1. Abrir Chrome DevTools (F12)
2. Ir a pestaña "Lighthouse"
3. Seleccionar:
   - ✅ Performance
   - ✅ Accessibility
   - ✅ Best Practices
   - ✅ SEO
4. Mode: Navigation
5. Device: Mobile / Desktop
6. Click "Analyze page load"

### 🎯 Lo que Verás

**Homepage Actual:**
```
┌─────────────────────────────────────────┐
│ Hero Section (Fondo Azul Oscuro)        │
│   "Built for the way ETF investors      │
│    ^^^^^^^^^^^^^^^^^^^^^^ (naranja)      │
│    operate."                             │
│                                          │
│   [Ver Rankings] [Academia ETF]         │
│    (naranja)     (outline blanco)        │
├─────────────────────────────────────────┤
│ Features (Fondo Azul Claro)             │
│   📊 Rankings actualizados               │
│   📦 Análisis profesionales              │
│   💰 Herramientas de comparación         │
│   📚 Academia de ETFs                    │
│                                          │
│   Cards con hover elevado                │
│   Border radius 16px                     │
│   Animación fade-in-up                   │
├─────────────────────────────────────────┤
│ CTA (Fondo Azul Oscuro)                 │
│   "Comienza a invertir de forma         │
│    inteligente" (inteligente en naranja) │
│                                          │
│   [Explorar Rankings] [Ver Academia]    │
└─────────────────────────────────────────┘
```

### 🔍 Detalles de Diseño a Verificar

**Colores:**
- [ ] Primary naranja: `#FD6D0A`
- [ ] Fondo oscuro: `#001529`
- [ ] Fondo claro: `#F1F6FB`

**Tipografía:**
- [ ] Títulos: Playfair Display (serif)
- [ ] Body: Urbanist (sans-serif)
- [ ] Hero: 72px desktop / 48px mobile

**Animaciones:**
- [ ] Fade in up al cargar
- [ ] Cards hover con elevación
- [ ] Botones hover con sombra naranja

**Responsive:**
- [ ] Mobile: Stack vertical
- [ ] Tablet: 2 columnas
- [ ] Desktop: 4 columnas (features)

### 🐛 Troubleshooting

**Puerto 5001 ocupado:**
```bash
# Ver qué está usando el puerto
lsof -i :5001

# Matar proceso
kill -9 <PID>
```

**Cambios no se reflejan:**
1. Hacer Ctrl+Shift+R (hard reload)
2. Limpiar cache del navegador
3. Reiniciar servidor:
   ```bash
   npx astro dev stop
   npx astro dev
   ```

**Error de compilación:**
```bash
# Limpiar y rebuild
rm -rf dist/
rm -rf node_modules/.astro/
npm run build
```

---

**Última actualización:** 2026-10-15 14:50  
**Estado:** ✅ Servidor corriendo en puerto 5001
