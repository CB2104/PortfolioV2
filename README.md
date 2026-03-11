<div align="center">

<img src="https://readme-typing-svg.herokuapp.com?font=Fira+Code&size=28&duration=3000&pause=1000&color=000000&center=true&vCenter=true&width=700&lines=📰+Developer+Chronicle;Portafolio+Personal+V2;Diseño+Periodístico+%7C+Multiidioma+%7C+Dark+Mode" alt="Typing SVG" />

**Portafolio personal con estética de periódico vintage — construido con React, Framer Motion, i18next y EmailJS. Disponible en español, inglés y portugués.**

[![Live Demo](https://img.shields.io/badge/Demo_en_vivo-personal--folio--nu.vercel.app-000000?style=for-the-badge&logo=vercel&logoColor=white)](https://personal-folio-nu.vercel.app)
[![React](https://img.shields.io/badge/React_19-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev)
[![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS_v4-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)](https://tailwindcss.com)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-0055FF?style=for-the-badge&logo=framer&logoColor=white)](https://www.framer.com/motion)

</div>

---

## 📋 Tabla de Contenidos

- [Descripción general](#-descripción-general)
- [Características principales](#-características-principales)
- [Stack tecnológico y decisiones técnicas](#-stack-tecnológico-y-decisiones-técnicas)
- [Arquitectura](#-arquitectura)
- [Estructura del proyecto](#-estructura-del-proyecto)
- [Primeros pasos](#-primeros-pasos)
- [Variables de entorno](#-variables-de-entorno)
- [Sistema i18n](#-sistema-i18n-internacionalización)
- [Sistema de temas](#-sistema-de-temas)

---

## 🧠 Descripción General

**Developer Chronicle** es un portafolio personal con una identidad visual inspirada en los periódicos vintage. El diseño aprovecha tipografías serif, bordes dobles, efectos grayscale en imágenes y una paleta de colores en blanco y negro para crear una experiencia visual diferenciadora y memorable.

El sitio es una **Single Page Application (SPA)** con scroll suave entre secciones, soporte completo de internacionalización en tres idiomas (ES / EN / PT), modo oscuro con estética sepia, formulario de contacto funcional vía EmailJS, y analíticas integradas con Vercel Analytics.

---

## ✨ Características Principales

- **📰 Diseño periodístico vintage** — tipografía serif, bordes dobles, layout estilo newspaper con efecto hover `shadow offset` en las tarjetas de proyectos
- **🌍 Multiidioma (i18n)** — soporte completo para Español, Inglés y Portugués con detección automática del idioma del navegador y persistencia en `localStorage`
- **🌙 Modo oscuro / claro** — tema personalizado con estética sepia en modo oscuro; detecta la preferencia del sistema operativo al primer acceso y persiste la elección
- **📬 Formulario de contacto funcional** — integración con EmailJS para envío de mensajes sin backend propio; notificaciones de éxito/error con Sonner adaptadas al tema activo
- **🎬 Animaciones de entrada** — secciones y componentes animados con Framer Motion usando `whileInView` para disparar las animaciones al hacer scroll
- **🗂️ Filtro de proyectos por tecnología** — el portafolio permite filtrar proyectos por categorías (React, TypeScript, AI Integration, FullStack, Auth, etc.)
- **📊 Vercel Analytics** — seguimiento de visitas integrado directamente en el árbol de componentes con `<Analytics />`
- **📱 Responsive completo** — navbar con menú desktop y bottom navigation mobile; layout adaptativo en todas las secciones
- **📄 CV descargable** — disponible en español e inglés desde la sección "Sobre Mí", servido como asset estático desde `/public`
- **🖼️ Imagen con fallback** — componente `ImageWithFallback` que muestra un placeholder si la imagen no carga

---

## 🛠️ Stack Tecnológico y Decisiones Técnicas

| Tecnología | Versión | Por qué se eligió |
|---|---|---|
| **React** | 19 | Base del proyecto; junto con React Router DOM maneja la navegación de la SPA |
| **TypeScript** | 5.9 | Tipado estricto en interfaces de proyectos y habilidades leídas desde los archivos JSON de i18n, previniendo errores en runtime al castear con `as Project[]` |
| **Vite + SWC** | 7 | Compilador Rust-based para desarrollo con HMR ultrarrápido y builds de producción optimizados |
| **Tailwind CSS v4** | 4 | Nuevo motor Oxide con configuración CSS-first; clases utilitarias co-localizadas con el marcado para evitar archivos de estilos separados |
| **Framer Motion** | 12 | Librería de animaciones declarativas para React; `motion.div` con `initial/animate` para la entrada de la Hero Section y `whileInView` + `viewport={{ once: true }}` para animar secciones al hacer scroll sin re-disparar |
| **i18next + react-i18next** | 25 / 16 | Sistema de internacionalización modular; `LanguageDetector` detecta el idioma del navegador automáticamente, y `initReactI18next` integra la instancia con el hook `useTranslation`. Los recursos se importan en build time desde JSON locales (sin llamadas HTTP en runtime) |
| **i18next-browser-languagedetector** | 8 | Plugin que detecta el idioma en este orden: `localStorage` → `navigator`. Guarda la elección en `localStorage` para persistir entre sesiones |
| **shadcn/ui + Radix UI** | — | Primitivos accesibles y sin estilos (DropdownMenu, Button, Badge) compuestos con Tailwind. Permite control total del estilo visual sin sacrificar la accesibilidad ARIA |
| **EmailJS** | 4 | Permite enviar emails directamente desde el frontend sin un backend propio. Lee el `formRef` del formulario y envía el template configurado en el dashboard de EmailJS usando `SERVICE_ID`, `TEMPLATE_ID` y `PUBLIC_KEY` vía variables de entorno Vite |
| **Sonner** | 2 | Librería de notificaciones toast; los estilos del toast se adaptan dinámicamente al tema activo (light/dark) leyendo `document.documentElement.classList` |
| **next-themes** | 0.4 | Instalado como dependencia complementaria para theming; el control principal del tema se maneja con el custom hook `useTheme` |
| **Vercel Analytics** | 1 | `<Analytics />` se renderiza en el árbol de componentes dentro de `Portfolio.tsx` para activar el seguimiento automático de páginas vistas sin configuración adicional |
| **Lucide React** | 0.563 | Set de íconos SVG tree-shakeable; solo los íconos importados se incluyen en el bundle |

---

## 🏗️ Arquitectura

### Estructura de la SPA

El portafolio es una sola página con secciones apiladas verticalmente. El router de React Router DOM se usa únicamente para manejar rutas desconocidas (wildcard `*`) redirigiendo siempre al `Layout` principal:

```
Portfolio.tsx (raíz)
    │
    ├── <Toaster />          ← Sonner para notificaciones globales
    ├── <Analytics />        ← Vercel Analytics
    └── <Routes>
           ├── "/" → <Layout />
           └── "*" → <Layout />   ← cualquier ruta desconocida cae aquí

Layout.tsx
    ├── <NavBar />           ← Fijo en la parte superior (fixed), scroll-aware
    ├── <Hero />             ← Sección de bienvenida con animación de entrada
    ├── <MyPortfolio />      ← Grid de proyectos con filtros por tecnología
    ├── <Skills />           ← Tarjetas de habilidades leídas desde i18n
    ├── <AboutMe />          ← Bio, foto, datos, intereses y descarga de CV
    ├── <ContactForm />      ← Formulario con EmailJS
    └── <BottomNav />        ← Navegación inferior visible solo en mobile
```

### Flujo del sistema i18n

```
main.tsx
    │
    └── import './utils/i18n'   ← inicializa i18next antes de montar React

i18n.ts
    ├── Importa los JSON de locales en build time
    │   (es/en/pt) × (common / portfolio / skills)
    ├── LanguageDetector: localStorage → navigator
    ├── fallbackLng: "es"
    └── lng: "es"   ← idioma inicial por defecto

En componentes:
    const { t } = useTranslation("common")    → textos generales
    const { t } = useTranslation("portfolio") → proyectos
    const { t } = useTranslation("skills")    → habilidades

LangSwitcher.tsx
    └── i18n.changeLanguage(code) → reactualiza todos los useTranslation activos
```

### Flujo del formulario de contacto

```
Usuario completa el formulario
         │
         ▼
sendEmail() → emailjs.sendForm(serviceID, templateID, formRef, { publicKey })
         │
    ┌────┴────┐
  Éxito     Error
    │          │
toast.success  toast.error
    │          │
    └────┬─────┘
         │
   Estilos del toast adaptados dinámicamente:
   document.documentElement.classList.contains("dark")
   → border/background distintos para light/dark
```

### Sistema de temas (`useTheme`)

```
Primer acceso:
    localStorage.getItem("theme")
        Existe → usar ese valor
        No existe → window.matchMedia("prefers-color-scheme: dark")

toggleTheme():
    setTheme(prev => prev === 'light' ? 'dark' : 'light')
         │
    useEffect detecta cambio de theme
         │
    root.classList.remove('light', 'dark')
    root.classList.add(theme)           ← aplica la clase en <html>
    localStorage.setItem('theme', theme) ← persiste la elección
```

---

## 📁 Estructura del Proyecto

```
PortfolioV2/
├── public/
│   ├── Me.jpg                     # Foto de perfil (usada en Hero y AboutMe)
│   ├── MePaperMoney.jpeg          # Foto alternativa
│   ├── BASTIDAS-CV.pdf            # CV en español (descargable)
│   ├── ENGLISH-BASTIDAS-CV.pdf    # CV en inglés (descargable)
│   ├── *.png / *.jpg              # Screenshots de proyectos para el portafolio
│   └── favicon/                   # Favicon en múltiples tamaños + webmanifest
│
├── src/
│   ├── Portfolio.tsx              # Raíz: Routes + Toaster + Analytics
│   ├── main.tsx                   # Entry point: importa i18n antes de ReactDOM
│   ├── index.css                  # Variables CSS de tema (light/dark), tipografías, clases custom
│   │
│   ├── components/
│   │   ├── Layout.tsx             # Orquesta el orden de todas las secciones
│   │   ├── Hero.tsx               # Bienvenida con animación Framer Motion + fecha localizada
│   │   ├── MyPortfolio.tsx        # Grid de proyectos filtrable por tecnología
│   │   ├── Skills.tsx             # Tarjetas de habilidades/formación desde i18n
│   │   ├── AboutMe.tsx            # Bio, foto sticky, datos rápidos, intereses, link al CV
│   │   ├── ContactForm.tsx        # Formulario con EmailJS + toast adaptativo al tema
│   │   ├── LangSwitcher.tsx       # Dropdown para cambiar idioma (desktop + mobile)
│   │   ├── Footer.tsx             # Pie de página
│   │   ├── bar/
│   │   │   ├── NavBar.tsx         # Navbar fija con scroll-aware backdrop blur + smooth scroll
│   │   │   └── BottomNav.tsx      # Navegación inferior para mobile
│   │   ├── figma/
│   │   │   └── ImageWithFallback.tsx  # Imagen con manejo de error y placeholder
│   │   └── ui/                    # Primitivos shadcn/ui (Button, Badge, DropdownMenu, Sonner)
│   │
│   ├── hooks/
│   │   └── useTheme.ts            # Custom hook: detecta preferencia OS, persiste en localStorage
│   │
│   ├── locales/
│   │   ├── es/
│   │   │   ├── common.json        # Textos: nav, hero, about, contact
│   │   │   ├── portfolio.json     # Array de proyectos con title, description, tags, demo, github
│   │   │   └── skills.json        # Array de habilidades con highlights
│   │   ├── en/                    # Misma estructura en inglés
│   │   └── pt/                    # Misma estructura en portugués
│   │
│   ├── utils/
│   │   └── i18n.ts                # Configuración central de i18next
│   │
│   └── lib/
│       └── utils.ts               # Helper cn() (clsx + tailwind-merge)
│
├── .env-template                  # Variables de entorno requeridas
└── vite.config.ts                 # Plugin React SWC + alias @ → ./src
```

---

## 🚀 Primeros Pasos

### Requisitos previos

- Node.js `>= 18.x`
- Una cuenta en [EmailJS](https://www.emailjs.com/) con un servicio, template y public key configurados

### 1. Clonar el repositorio

```bash
git clone https://github.com/CB2104/PortfolioV2.git
cd PortfolioV2
```

### 2. Instalar dependencias

```bash
npm install
```

### 3. Configurar variables de entorno

```bash
cp .env-template .env
```

Completar el `.env` con tus credenciales de EmailJS (ver [Variables de entorno](#-variables-de-entorno)).

### 4. Iniciar en desarrollo

```bash
npm run dev
```

La app estará disponible en `http://localhost:5173`

### 5. Build de producción

```bash
npm run build
```

> El build corre TypeScript (`tsc -b`) antes de Vite. Un error de tipos bloqueará la compilación.

---

## 🔐 Variables de Entorno

Todas las variables son requeridas para que el formulario de contacto funcione. Se configuran en el dashboard de [EmailJS](https://www.emailjs.com/).

| Variable | Descripción | Dónde obtenerla |
|---|---|---|
| `VITE_EMAIL_JS_PUBLIC_KEY` | Clave pública de tu cuenta EmailJS | Dashboard → Account → API Keys |
| `VITE_EMAIL_JS_SERVICE_ID` | ID del servicio de email configurado | Dashboard → Email Services |
| `VITE_EMAIL_JS_TEMPLATE_ID` | ID del template de email | Dashboard → Email Templates |

> **Importante:** las variables deben tener el prefijo `VITE_` para ser accesibles desde el código de React a través de `import.meta.env`.

---

## 🌍 Sistema i18n (Internacionalización)

El proyecto soporta tres idiomas con namespaces separados por sección:

| Namespace | Archivo | Contenido |
|---|---|---|
| `common` | `locales/{lang}/common.json` | Navegación, hero section, about me, contacto |
| `portfolio` | `locales/{lang}/portfolio.json` | Array de proyectos (title, description, tags, demo, github, image) |
| `skills` | `locales/{lang}/skills.json` | Array de habilidades (title, institution, period, description, highlights) |

### Agregar un nuevo idioma

1. Crear la carpeta `src/locales/{codigo-idioma}/`
2. Duplicar y traducir los tres archivos JSON (`common.json`, `portfolio.json`, `skills.json`)
3. Importar los nuevos archivos en `src/utils/i18n.ts` y agregarlos al objeto `resources`
4. Agregar el nuevo idioma al array `languages` en `src/components/LangSwitcher.tsx`

### Agregar un proyecto al portafolio

Editar el array `projects` en `src/locales/{lang}/portfolio.json` para cada idioma:

```json
{
  "id": 7,
  "title": "Nombre del Proyecto",
  "description": "Descripción del proyecto",
  "category": "FullStack",
  "tags": ["React", "TypeScript", "Auth"],
  "image": "/nombre-imagen.png",
  "demo": "https://tu-demo.vercel.app",
  "github": "https://github.com/CB2104/repositorio"
}
```

Agregar la imagen correspondiente en `/public/`.

---

## 🎨 Sistema de Temas

El tema se controla mediante la clase CSS en el elemento `<html>`:

- **Modo claro:** `<html class="light">` — paleta en blanco y negro, tipografía serif clásica
- **Modo oscuro:** `<html class="dark">` — estética sepia con colores cálidos definidos como variables CSS en `index.css`

El custom hook `useTheme` maneja toda la lógica:

```ts
// Detecta la preferencia del sistema en el primer acceso
window.matchMedia('(prefers-color-scheme: dark)').matches

// Aplica el tema al <html> y persiste en localStorage
localStorage.setItem('theme', theme)
```

---

<div align="center">

Desarrollado por [CB2104](https://github.com/CB2104) · [Ver demo en vivo](https://personal-folio-nu.vercel.app)

</div>