# 🚀 Plan de Implementación - Diseño Agora Real

## Decisión de Fuentes

**Problema:** Canela es una fuente premium comercial (~$300-500)

**Soluciones:**

### Opción A: Fuentes Premium (Canela + Urbanist)
- ✅ Diseño idéntico a Agora Real
- ❌ Costo: $300-500 por Canela
- ❌ Requiere licencia comercial

### Opción B: Alternativas Gratuitas (Recomendado)
**Canela → Playfair Display / Lora**
- ✅ Gratis (Google Fonts)
- ✅ Serif elegante similar
- ✅ Excelente legibilidad

**Urbanist → Urbanist**
- ✅ Gratis (Google Fonts)
- ✅ EXACTA (Agora usa Urbanist de Google Fonts)

### Opción C: Híbrida
- Canela → **Crimson Pro** (Google Fonts, muy similar)
- Urbanist → **Urbanist** (Google Fonts, idéntica)

## ✅ DECISIÓN: Opción B

```css
/* Heading Font */
--font-heading: 'Playfair Display', Georgia, serif;

/* Body Font */
--font-body: 'Urbanist', -apple-system, BlinkMacSystemFont, sans-serif;
```

**Justificación:**
- Playfair Display es MUY similar a Canela
- Urbanist es EXACTA (Agora la usa de Google Fonts)
- 100% gratis
- Excelente legibilidad
- Disponible inmediatamente

---

## 📋 Fases de Implementación

### ✅ Fase 0: Análisis COMPLETADO
- [x] Extraer colores de Agora Real
- [x] Identificar fuentes (Canela, Urbanist)
- [x] Documentar componentes
- [x] Crear plan de implementación

### 🔜 Fase 1: Sistema de Diseño Base (2 horas)
- [ ] Crear `agora-design-system.css`
- [ ] Definir todas las variables CSS
- [ ] Importar fuentes Google Fonts
- [ ] Crear clases utilitarias base

### 🔜 Fase 2: Componentes Core (3 horas)
- [ ] Botones (primary, secondary, ghost)
- [ ] Cards (default, hover)
- [ ] Container y grid
- [ ] Hero section base

### 🔜 Fase 3: Layout (2 horas)
- [ ] Header oscuro
- [ ] Footer estilo Agora
- [ ] Secciones alternas

### 🔜 Fase 4: Animaciones (1 hora)
- [ ] Transiciones suaves
- [ ] Hover effects
- [ ] Fade in on scroll

### 🔜 Fase 5: Página Noticias (2 horas)
- [ ] Hero con diseño Agora
- [ ] Cards de noticias
- [ ] Layout responsive

**Total:** 10 horas

---

## 🎯 Siguiente Paso Inmediato

Crear `/src/styles/agora-design-system.css` con:
- Paleta de colores completa (naranja + azul oscuro)
- Fuentes Playfair Display + Urbanist
- Sistema de espaciado
- Componentes base
