/**
 * Mock Data Large - Dataset grande para pruebas de performance
 * 100+ noticias para probar infinite scroll y rendimiento
 */

export interface NewsArticle {
  id: string;
  title: string;
  slug: string;
  content: string;
  excerpt: string;
  featured_image_url: string;
  published_at: string;
  category: string;
  author_name: string;
  source_name: string;
}

// Generar 120 noticias para pruebas de performance
export const mockNoticiasLarge: NewsArticle[] = Array.from({ length: 120 }, (_, i) => {
  const categories = ['ETFs', 'Mercados', 'Análisis', 'Regulación', 'Tecnología'];
  const sources = ['Bloomberg', 'Reuters', 'Financial Times', 'ETF Nexo', 'Morningstar'];

  const category = categories[i % categories.length];
  const source = sources[i % sources.length];

  // Variedad de fechas (últimos 60 días)
  const daysAgo = Math.floor(i / 2);
  const date = new Date();
  date.setDate(date.getDate() - daysAgo);

  return {
    id: `news-${i + 1}`,
    title: `${category}: Noticia de prueba ${i + 1} - ${getTitleVariant(i)}`,
    slug: `noticia-prueba-${i + 1}`,
    content: `<p>${getContentVariant(i)}</p><p>Contenido completo de la noticia ${i + 1}. Este es un texto extenso para simular un artículo real con múltiples párrafos y análisis detallado.</p>`,
    excerpt: `${getExcerptVariant(i)}`,
    featured_image_url: `https://picsum.photos/seed/${i}/800/450`,
    published_at: date.toISOString(),
    category,
    author_name: `Autor ${(i % 10) + 1}`,
    source_name: source
  };
});

function getTitleVariant(index: number): string {
  const variants = [
    'Los ETFs de tecnología marcan nuevos récords',
    'Análisis profundo del mercado de bonos',
    'Nuevas tendencias en inversión sostenible',
    'El impacto de la inflación en los ETFs',
    'Estrategias de diversificación para 2024',
    'Los mejores ETFs de dividendos del año',
    'Cambios regulatorios afectan al sector',
    'Innovación en productos de inversión pasiva',
    'Comparativa de costes entre gestoras',
    'Perspectivas de mercado para el próximo trimestre'
  ];
  return variants[index % variants.length];
}

function getExcerptVariant(index: number): string {
  const excerpts = [
    'Los principales índices tecnológicos experimentan un crecimiento sostenido impulsado por la adopción de IA y semiconductores.',
    'Un análisis detallado de las oportunidades y riesgos en el mercado de renta fija para inversores conservadores.',
    'La inversión ESG continúa ganando tracción entre inversores institucionales y retail por igual.',
    'Las subidas de tipos de interés plantean nuevos desafíos para la estrategia de asignación de activos.',
    'Expertos recomiendan una mezcla equilibrada de activos para maximizar rentabilidad ajustada por riesgo.',
    'Los ETFs con mayor distribución de dividendos mantienen su atractivo en un entorno de mercado volátil.',
    'Nuevas directivas de la CNMV modifican requisitos de transparencia y reporting para gestoras.',
    'El crecimiento de los fondos pasivos continúa superando a la gestión activa en términos de flujos.',
    'Un estudio comparativo revela diferencias significativas en TER entre principales proveedores de ETFs.',
    'Analistas proyectan volatilidad moderada con oportunidades selectivas en sectores defensivos.'
  ];
  return excerpts[index % excerpts.length];
}

function getContentVariant(index: number): string {
  const contents = [
    'El sector tecnológico continúa liderando las rentabilidades del año con crecimientos de doble dígito en los principales índices.',
    'Los inversores buscan refugio en activos de renta fija de alta calidad ante la incertidumbre macroeconómica.',
    'La sostenibilidad se consolida como un factor determinante en las decisiones de inversión institucional.',
    'Los bancos centrales mantienen su postura restrictiva afectando la valoración de activos de riesgo.',
    'La diversificación geográfica emerge como estrategia clave para mitigar riesgos específicos de mercado.',
    'Los ETFs de dividendos aristocráticos ofrecen combinación atractiva de ingresos y crecimiento moderado.',
    'Las autoridades reguladoras refuerzan controles sobre productos de inversión complejos.',
    'La gestión pasiva alcanza nuevos hitos en términos de activos bajo gestión a nivel global.',
    'Análisis exhaustivo revela que costes bajos correlacionan fuertemente con mejores resultados netos.',
    'El consenso de mercado apunta a normalización gradual de volatilidad en los próximos trimestres.'
  ];
  return contents[index % contents.length];
}
