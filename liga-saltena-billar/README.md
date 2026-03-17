# Liga Salteña de Billar - Sitio Web Oficial

Sitio web profesional desarrollado con React para la Liga Salteña de Billar de Salto, Uruguay.

## 🚀 Características

- **React + Vite**: Desarrollo rápido y moderno
- **Framer Motion**: Animaciones fluidas y profesionales
- **Diseño Responsive**: Adaptado para todos los dispositivos
- **Efectos Visuales**: Transiciones, hover effects y animaciones al scroll
- **Componentes Modulares**: Código organizado y mantenible
- **Navegación Suave**: Scroll suave entre secciones
- **Formulario de Contacto**: Con validación y efectos interactivos

## 📦 Tecnologías Utilizadas

- **React 19**: Biblioteca de JavaScript para interfaces de usuario
- **Vite**: Herramienta de construcción rápida
- **Framer Motion**: Biblioteca de animaciones para React
- **React Icons**: Iconos modernos y profesionales
- **CSS3**: Estilos modernos con variables CSS y animaciones

## 🎨 Características del Diseño

- **Paleta de Colores Verde**: Basada en el logo de la liga
- **Animaciones al Scroll**: Elementos que aparecen al hacer scroll
- **Efectos Hover**: Interacciones visuales en todos los elementos
- **Header Fijo**: Navegación siempre visible
- **Hero Section**: Sección de bienvenida impactante
- **Cards Animadas**: Tarjetas con efectos de elevación

## 📁 Estructura del Proyecto

```
liga-saltena-billar/
├── public/                 # Archivos estáticos
├── src/
│   ├── components/         # Componentes React
│   │   ├── Header.jsx      # Navegación principal
│   │   ├── Hero.jsx        # Sección hero
│   │   ├── Trending.jsx    # Sección de tendencias
│   │   ├── Institucional.jsx # Información institucional
│   │   ├── Campeonatos.jsx # Sección de campeonatos
│   │   ├── CircuitoSelectivo.jsx # Circuito selectivo (principal)
│   │   ├── Instituciones.jsx # Instituciones afiliadas
│   │   ├── Contacto.jsx    # Formulario de contacto
│   │   └── Footer.jsx       # Pie de página
│   ├── App.jsx             # Componente principal
│   ├── App.css             # Estilos globales
│   ├── main.jsx            # Punto de entrada
│   └── index.css           # Reset CSS
├── package.json
└── README.md
```

## 🛠️ Instalación y Uso

### Prerrequisitos

- Node.js (versión 18 o superior)
- npm o yarn

### Pasos para ejecutar

1. **Instalar dependencias:**
   ```bash
   cd liga-saltena-billar
   npm install
   ```

2. **Ejecutar en modo desarrollo:**
   ```bash
   npm run dev
   ```

3. **Abrir en el navegador:**
   El sitio estará disponible en `http://localhost:5173`

### Build para producción

```bash
npm run build
```

Los archivos optimizados se generarán en la carpeta `dist/`.

### Preview de producción

```bash
npm run preview
```

## 📱 Secciones del Sitio

### 1. Inicio (Hero)
- Sección de bienvenida con animaciones
- Botones de navegación rápida
- Indicador de scroll

### 2. La Tendencia Hoy En Día
- Cards animadas con información destacada
- Efectos hover profesionales
- Iconos interactivos

### 3. Institucional
- **Autoridades**: Presidente, Vice Presidente, Secretaria, Tesorero, Vocal
- **Comisión Fiscal**: Miembros de la comisión
- Cards con animaciones al aparecer

### 4. Campeonatos
- **Campeonato Oficial LSB 2026**
  - Preparación Individual por Series
  - Preparación Individual por Equipo
  - Campeonato Salteño
- **Campeonato Oficial Federación Uruguay de Billar**
- **Circuito Selectivo Salteño** ⭐ (Enfoque principal)
  - Reglamento completo con diagramas
  - Sistema de puntos detallado
  - Ejemplos de cálculo de promedio
  - Categorías: Tercera, Segunda, Primera

### 5. Instituciones
- Lista de todas las instituciones afiliadas
- Cards con efectos hover
- Grid responsive

### 6. Contacto
- Formulario de contacto funcional
- Validación de campos
- Enlaces a redes sociales
- Animaciones en el envío

## 🎯 Características Especiales

### Circuito Selectivo Salteño
- **Diagrama Visual**: Formato de torneo interactivo
- **Sistema de Puntos**: Tabla animada con puntos por posición
- **Cálculo de Promedio**: Ejemplos detallados con fórmulas
- **Reglas Completas**: Desarrollo paso a paso del torneo

### Animaciones
- **Scroll Animations**: Elementos aparecen al hacer scroll
- **Hover Effects**: Interacciones visuales en todos los elementos
- **Smooth Transitions**: Transiciones suaves entre estados
- **Stagger Animations**: Animaciones escalonadas en listas

### Responsive Design
- **Mobile First**: Diseño optimizado para móviles
- **Tablet**: Adaptación para tablets
- **Desktop**: Experiencia completa en escritorio
- **Breakpoints**: 480px, 768px, 968px

## 🎨 Personalización

### Colores
Los colores están definidos en variables CSS en `App.css`:
```css
--primary-green: #1a5f3f;
--light-green: #4a9d6e;
--dark-green: #0d3d26;
```

### Contenido
Edita los componentes en `src/components/` para actualizar:
- Información de autoridades
- Resultados de campeonatos
- Posiciones del circuito selectivo
- Instituciones afiliadas

## 📝 Scripts Disponibles

- `npm run dev`: Inicia el servidor de desarrollo
- `npm run build`: Construye la aplicación para producción
- `npm run preview`: Previsualiza el build de producción
- `npm run lint`: Ejecuta el linter

## 🔮 Próximas Mejoras Sugeridas

1. **Backend Integration**: Conectar formulario con servidor
2. **Sistema de Posiciones**: Tablas dinámicas en tiempo real
3. **Galería de Fotos**: Sección de fotos de eventos
4. **Calendario**: Próximos torneos y fechas importantes
5. **Noticias**: Blog o sección de noticias
6. **Dashboard Admin**: Panel de administración
7. **API Integration**: Integración con base de datos

## 📄 Licencia

© 2026 Liga Salteña de Billar. Todos los derechos reservados.

## 👨‍💻 Desarrollo

Desarrollado con ❤️ para la Liga Salteña de Billar

---

**Nota**: Este proyecto utiliza las últimas versiones de React y herramientas modernas de desarrollo web para ofrecer la mejor experiencia de usuario.
