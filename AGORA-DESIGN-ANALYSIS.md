# 🎨 Análisis de Diseño - Agora Real

**Fuente:** https://agorareal.com/  
**Fecha:** 2026-10-15

---

## 📊 Sistema de Diseño Identificado

### 🎯 Paleta de Colores

#### Colores Primarios

```css
/* Brand Orange (Primary) */
--color-primary: #FD6D0A;        /* Naranja vibrante - CTA principal */
--color-primary-light: #FD8A3B;  /* Naranja claro - Hover */
--color-primary-lighter: #FE9954; /* Naranja más claro */

/* Brand Blue (Secondary) */
--color-secondary: #276EF0;      /* Azul - Enlaces y acentos */
--color-secondary-light: #6291F7; /* Azul claro */
--color-secondary-lighter: #6282F7; /* Azul medio */
```

#### Colores de Fondo

```css
/* Backgrounds */
--bg-dark: #001529;              /* Azul oscuro - Hero y secciones principales */
--bg-dark-alt: #1A2C3E;          /* Azul oscuro alternativo */
--bg-light: #F1F6FB;             /* Azul muy claro - Secciones alternas */
--bg-white: #FDFDFD;             /* Blanco casi puro */
--bg-gray-light: #F4F4F4;        /* Gris claro */
--bg-beige: #F4F2F0;             /* Beige suave */
```

#### Colores de Texto

```css
/* Text Colors */
--text-primary: #001529;         /* Azul oscuro - Títulos principales */
--text-secondary: #66737F;       /* Gris medio - Texto secundario */
--text-muted: #99A1A9;           /* Gris claro - Texto terciario */
--text-light: #CCD0D4;           /* Gris muy claro */
--text-white: #FDFDFD;           /* Blanco para fondos oscuros */
```

#### Colores de Borde

```css
/* Borders */
--border-light: #E5E8EA;         /* Borde claro */
--border-medium: #CCD0D4;        /* Borde medio */
--border-dark: #99A1A9;          /* Borde oscuro */
```

---

### 📝 Tipografía

#### Fuentes Principales

```css
/* Heading Font - Serif elegante */
--font-heading: 'Canela', Georgia, serif;

/* Body Font - Sans-serif moderna */
--font-body: 'Urbanist', -apple-system, BlinkMacSystemFont, sans-serif;
```

**Canela:** Fuente serif elegante y sofisticada para títulos  
**Urbanist:** Fuente sans-serif moderna y limpia para cuerpo de texto

#### Escala Tipográfica (inferida del diseño)

```css
/* Font Sizes */
--font-size-xs: 0.75rem;      /* 12px */
--font-size-sm: 0.875rem;     /* 14px */
--font-size-base: 1rem;       /* 16px */
--font-size-lg: 1.125rem;     /* 18px */
--font-size-xl: 1.25rem;      /* 20px */
--font-size-2xl: 1.5rem;      /* 24px */
--font-size-3xl: 1.875rem;    /* 30px */
--font-size-4xl: 2.25rem;     /* 36px */
--font-size-5xl: 3rem;        /* 48px */
--font-size-6xl: 3.75rem;     /* 60px */
--font-size-hero: 4.5rem;     /* 72px - Hero headlines */
```

---

## 🏗️ Componentes Clave

### 1. Hero Section

**Características:**
- Fondo: `#001529` (azul oscuro)
- Tipografía: Grande (60-72px) con Canela
- Contraste: Palabra clave en naranja (`#FD6D0A`)
- Layout: Centrado con imagen de fondo sutil
- CTA: Botón naranja prominente

**Ejemplo:**
```
Built for the way real estate firms operate.
         ^^^^^^^^^^^^^^^^^^^^^^^^ (en naranja)
```

### 2. Botones

#### Primario (CTA Principal)
```css
.btn-primary {
  background: #FD6D0A;           /* Naranja */
  color: #FDFDFD;                /* Blanco */
  padding: 14px 32px;
  border-radius: 8px;
  font-weight: 600;
  font-size: 16px;
  transition: all 0.3s ease;
}

.btn-primary:hover {
  background: #FD8A3B;           /* Naranja más claro */
  transform: translateY(-2px);   /* Elevación sutil */
  box-shadow: 0 8px 20px rgba(253, 109, 10, 0.3);
}
```

#### Secundario
```css
.btn-secondary {
  background: transparent;
  color: #001529;
  border: 2px solid #001529;
  padding: 14px 32px;
  border-radius: 8px;
}

.btn-secondary:hover {
  background: #001529;
  color: #FDFDFD;
}
```

#### Ghost (Enlaces)
```css
.btn-ghost {
  background: transparent;
  color: #276EF0;                /* Azul */
  padding: 14px 24px;
  font-weight: 600;
  text-decoration: none;
}

.btn-ghost:hover {
  color: #FD6D0A;                /* Naranja */
  text-decoration: underline;
}
```

### 3. Cards

```css
.card {
  background: #FDFDFD;
  border: 1px solid #E5E8EA;
  border-radius: 16px;          /* Bordes muy redondeados */
  padding: 32px;
  box-shadow: 0 4px 12px rgba(0, 21, 41, 0.06);
  transition: all 0.3s ease;
}

.card:hover {
  transform: translateY(-4px);
  box-shadow: 0 12px 24px rgba(0, 21, 41, 0.12);
}
```

### 4. Secciones Alternas

**Patrón:**
- Sección 1: Fondo oscuro (`#001529`)
- Sección 2: Fondo claro (`#F1F6FB`)
- Sección 3: Fondo blanco (`#FDFDFD`)
- Sección 4: Fondo oscuro (`#001529`)

**Espaciado vertical:** 80-120px entre secciones

---

## 🎭 Animaciones y Efectos

### Transiciones Suaves

```css
/* Transiciones globales */
--transition-fast: 150ms cubic-bezier(0.4, 0, 0.2, 1);
--transition-base: 300ms cubic-bezier(0.4, 0, 0.2, 1);
--transition-slow: 500ms cubic-bezier(0.4, 0, 0.2, 1);
```

### Efectos de Hover

1. **Botones:** Elevación sutil + cambio de color
2. **Cards:** Elevación + sombra más pronunciada
3. **Enlaces:** Cambio de color suave
4. **Imágenes:** Zoom sutil (scale: 1.05)

### Efectos de Entrada (Scroll)

- **Fade In:** Elementos aparecen con opacidad 0 → 1
- **Slide Up:** Elementos suben 20-30px mientras aparecen
- **Stagger:** Elementos en listas aparecen secuencialmente

```css
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.fade-in-up {
  animation: fadeInUp 0.6s cubic-bezier(0.4, 0, 0.2, 1) forwards;
}
```

---

## 📐 Espaciado

### Sistema de Espaciado (8px base)

```css
--spacing-1: 0.25rem;   /* 4px */
--spacing-2: 0.5rem;    /* 8px */
--spacing-3: 0.75rem;   /* 12px */
--spacing-4: 1rem;      /* 16px */
--spacing-5: 1.25rem;   /* 20px */
--spacing-6: 1.5rem;    /* 24px */
--spacing-8: 2rem;      /* 32px */
--spacing-10: 2.5rem;   /* 40px */
--spacing-12: 3rem;     /* 48px */
--spacing-16: 4rem;     /* 64px */
--spacing-20: 5rem;     /* 80px */
--spacing-24: 6rem;     /* 96px */
--spacing-32: 8rem;     /* 128px */
```

### Márgenes de Sección

```css
/* Section Spacing */
--section-padding-mobile: 60px;
--section-padding-tablet: 80px;
--section-padding-desktop: 120px;
```

---

## 🎨 Border Radius

```css
/* Border Radius */
--radius-sm: 8px;       /* Botones, inputs */
--radius-md: 12px;      /* Cards pequeños */
--radius-lg: 16px;      /* Cards medianos */
--radius-xl: 24px;      /* Cards grandes */
--radius-2xl: 32px;     /* Contenedores especiales */
--radius-full: 9999px;  /* Botones redondeados, badges */
```

---

## 📱 Responsive Breakpoints

```css
/* Breakpoints */
--breakpoint-sm: 640px;
--breakpoint-md: 768px;
--breakpoint-lg: 1024px;
--breakpoint-xl: 1280px;
--breakpoint-2xl: 1536px;
```

---

## 🔍 Sombras

```css
/* Shadows */
--shadow-sm: 0 2px 4px rgba(0, 21, 41, 0.04);
--shadow-md: 0 4px 12px rgba(0, 21, 41, 0.06);
--shadow-lg: 0 8px 24px rgba(0, 21, 41, 0.08);
--shadow-xl: 0 12px 32px rgba(0, 21, 41, 0.12);
--shadow-2xl: 0 20px 48px rgba(0, 21, 41, 0.16);

/* Sombras de CTA (naranja) */
--shadow-primary: 0 8px 20px rgba(253, 109, 10, 0.3);
--shadow-primary-lg: 0 12px 32px rgba(253, 109, 10, 0.4);
```

---

## 🎯 Características Visuales Distintivas

### 1. **Contraste Alto con Color de Acento**
- Fondo oscuro (#001529) + Naranja vibrante (#FD6D0A)
- Crea jerarquía visual muy clara
- CTAs imposibles de ignorar

### 2. **Tipografía Serif Elegante**
- Canela para títulos → Sofisticación
- Urbanist para cuerpo → Modernidad y legibilidad
- Contraste serif/sans-serif bien balanceado

### 3. **Bordes Muy Redondeados**
- Cards: 16px border-radius
- Botones: 8px border-radius
- Contenedores especiales: 24-32px
- Apariencia moderna y amigable

### 4. **Secciones Alternas con Fondos Contrastantes**
- Oscuro → Claro → Blanco → Oscuro
- Crea ritmo visual
- Evita monotonía

### 5. **Animaciones Sutiles pero Presentes**
- Hover states con elevación
- Fade in al hacer scroll
- Transiciones suaves (300ms)
- No distraen pero añaden polish

### 6. **Espaciado Generoso**
- Secciones: 80-120px padding vertical
- Cards: 32px padding interno
- Entre elementos: 24-48px gaps
- Sensación de "breathing room"

---

## 📋 Componentes Específicos Identificados

### Hero Section
- Fondo: Azul oscuro (#001529)
- Título: 60-72px Canela
- Palabra clave en naranja
- Botón CTA naranja prominente
- Imagen de fondo sutil con overlay

### Feature Cards (4 columnas)
- Fondo: Blanco (#FDFDFD)
- Borde: Claro (#E5E8EA)
- Border radius: 16px
- Padding: 32px
- Hover: Elevación + sombra

### Stats Section ($162B+, 92K, etc.)
- Fondo: Azul oscuro (#001529)
- Números grandes: Canela, blanco
- Subtitle pequeño: Gris claro (#99A1A9)
- Layout: Grid centrado

### Testimonial Cards
- Fondo: Blanco
- Quote grande en Canela
- Avatar + nombre
- Border radius: 16px
- Sombra sutil

### Footer
- Fondo: Azul oscuro (#001529)
- Links en gris claro (#99A1A9)
- Hover: Naranja (#FD6D0A)
- Layout: Multi-columna

---

## 🚀 Plan de Implementación para ETF Nexo

### Fase 1: Sistema de Diseño Base (2 horas)
1. Crear `agora-design-system.css` con todas las variables
2. Importar fuentes Canela + Urbanist (vía Google Fonts o similar)
3. Definir colores, tipografía, espaciado, sombras
4. Crear clases utilitarias base

### Fase 2: Componentes Core (3 horas)
1. Botones (.btn-primary, .btn-secondary, .btn-ghost)
2. Cards (.card, .card-hover)
3. Hero section (.hero)
4. Container y grid system

### Fase 3: Layout Principal (2 horas)
1. Header con fondo oscuro
2. Footer estilo Agora
3. Secciones alternas (oscuro/claro)

### Fase 4: Animaciones (1 hora)
1. Transiciones suaves
2. Hover effects
3. Fade in on scroll (Intersection Observer)

### Fase 5: Adaptación de Contenido (2 horas)
1. Migrar página Noticias al nuevo diseño
2. Adaptar cards de noticias
3. Ajustar tipografía

**Total estimado:** 10 horas

---

## ✅ Checklist de Migración

### Design Tokens
- [ ] Colores (primary, secondary, backgrounds, text)
- [ ] Fuentes (Canela, Urbanist)
- [ ] Espaciado (sistema 8px)
- [ ] Border radius (8px, 16px, 24px)
- [ ] Sombras (4 niveles)
- [ ] Transiciones (fast, base, slow)

### Componentes
- [ ] Botones (primary, secondary, ghost)
- [ ] Cards (default, hover)
- [ ] Hero section
- [ ] Header/Footer
- [ ] Grid system

### Animaciones
- [ ] Hover states
- [ ] Fade in on scroll
- [ ] Transiciones suaves

### Páginas
- [ ] Homepage
- [ ] Noticias listing
- [ ] Noticia detalle
- [ ] Academia
- [ ] Entrevistas

---

## 🎯 Diferencias Clave vs Diseño Actual ETF Nexo

| Aspecto | Actual ETF Nexo | Agora Real | Acción |
|---------|----------------|------------|--------|
| **Color Primary** | Azul #3B82F6 | Naranja #FD6D0A | Cambiar a naranja |
| **Fuente Heading** | Inter | Canela (serif) | Cambiar a Canela |
| **Fuente Body** | Inter | Urbanist | Cambiar a Urbanist |
| **Background Hero** | Claro | Oscuro #001529 | Cambiar a oscuro |
| **Border Radius** | 8px | 16px (cards) | Aumentar a 16px |
| **Animaciones** | Básicas | Sutiles + scroll | Agregar scroll animations |
| **Sombras** | Sutiles | Más pronunciadas | Aumentar sombras |

---

**Siguiente:** Crear `agora-design-system.css` e implementar componentes base.
