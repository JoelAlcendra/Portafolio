 # Portafolio Profesional & Hoja de Vida Digital • Joel David Alcendra Carballo

<!-- # Portafolio Profesional & Hoja de Vida Digital • Joel David Alcendra Carballo

> **"ENGINEERED TO CREATE"**  
> Portafolio interactivo de alta fidelidad para **Ingeniero de Sistemas en Formación** (Universidad Libre, Barranquilla, Colombia).

---

## 🚀 Visión General

Este proyecto fue diseñado y desarrollado como un producto digital premium y no como una plantilla convencional de desarrollador. Refleja la identidad técnica y analítica de **Joel David Alcendra Carballo**, combinando una estética inspirada en terminales de desarrollo, consolas de arquitectura y microinteracciones fluidas con una estricta rigurosidad en los datos (sin métricas inventadas ni enlaces ficticios).

### ✨ Características Principales

1. **Terminal Interactiva CLI (`ALCENDRA-OS`)**:
   - Consola real ejecutable integrada accesible con el botón **Terminal** o el atajo global **`Ctrl + K`** / **`Cmd + K`**.
   - Soporta comandos reales: `help`, `about`, `skills`, `projects`, `status`, `experience`, `education`, `contact`, `cv`, `clear`, `whoami`, `date`, `sudo`.
   - Historial de comandos con flechas `↑` y `↓`, autocompletado con tecla `Tab` y botones rápidos para móviles.

2. **Catálogo de Soluciones y Proyectos**:
   - Tarjetas estructuradas con desglose de: **Problema que aborda**, **Solución técnica**, **Tecnologías** y **Estado real**.
   - **FoodMatch**: Aplicación fullstack de recetas por ingredientes (Proyecto activo principal).
   - **WebMiel**: E-commerce apícola con Flask, SQLAlchemy y PostgreSQL.
   - **Evaluación de Ciberseguridad en MIPYMES de Barranquilla**: Investigación académica en planificación.
   - **Game Hub**: Concepto y arquitectura para gestión de inventario y alquiler de videojuegos.
   - Modal de detalle arquitectónico accesible con atajo de escape (`Esc`).
   - Identificación transparente de repositorios y demostraciones pendientes sin enlaces rotos.

3. **Matriz Técnica Clasificada**:
   - Clasificación honesta de habilidades por estado de dominio:
     - 🔷 **Aplicada en proyectos**
     - 🟣 **En profundización**
     - ⚪ **Estudiada / Fundamentos**
   - Conexión interactiva: muestra qué proyectos utilizan cada tecnología al hacer clic.

4. **Experiencia Laboral & Habilidades Transferibles**:
   - Trayectoria en **Hinduja Global Solutions (HGS)** como *Chat Agent Representative* (2025–2026).
   - Análisis explícito de competencias transferibles a la ingeniería de software: resolución de problemas bajo métricas, adherencia a SLAs, comunicación técnica y protocolos de seguridad.

5. **Hoja de Vida (CV) Imprimible y Exportable a PDF**:
   - Modal con diseño editorial optimizado para reclutadores técnicos y sistemas ATS.
   - Botón directo de **Imprimir / Guardar en PDF** con hoja de estilos `@media print` de alta resolución (fondo blanco, contraste óptimo, paginación limpia).

6. **Modo Zen / Reducción de Distracciones**:
   - Botón de alternancia en la barra de navegación para desactivar luces ambientales y efectos flotantes para una lectura de máximo contraste y accesibilidad.
   - Respeto nativo a la preferencia de movimiento reducido del sistema (`prefers-reduced-motion`).

7. **Formulario de Contacto Real y Antispam**:
   - Validación completa en tiempo real de campos.
   - Protección contra bots automatizados mediante campo trampa *honeypot*.
   - Integración con cliente de correo nativo (`mailto:`) y opción de copiar el mensaje formateado al portapapeles sin simular envíos no realizados.

---

## 🛠️ Stack Tecnológico

- **Frontend Core**: React 19, TypeScript
- **Bundler & Tooling**: Vite 8
- **Estilos & UI**: Tailwind CSS v4, Lucide React
- **Fuentes Tipográficas**: Plus Jakarta Sans, Space Grotesk, Fira Code
- **Testing**: Node Test Runner nativo con ejecución directa de TypeScript

---

## 📁 Estructura del Código

```text
portfolio/
├── index.html                   # HTML semántico, metadatos SEO, Open Graph y favicon SVG
├── vite.config.ts               # Configuración de Vite con Tailwind v4 y React
├── package.json                 # Scripts, dependencias y metadatos
├── src/
│   ├── types/
│   │   └── portfolio.ts         # Tipos e interfaces TypeScript estrictas
│   ├── data/
│   │   └── portfolioData.ts     # FUENTE CENTRAL DE DATOS (Perfil, Proyectos, Habilidades)
│   ├── hooks/
│   │   ├── useTerminal.ts       # Motor de la consola interactiva CLI
│   │   └── useScrollSpy.ts      # Detección de sección activa para la navegación
│   ├── components/
│   │   ├── Navbar.tsx           # Barra de navegación flotante con blur
│   │   ├── Hero.tsx             # Pantalla de entrada ("ENGINEERED TO CREATE")
│   │   ├── About.tsx            # Filosofía de ingeniería y competencias blandas
│   │   ├── Skills.tsx           # Matriz técnica clasificada por nivel y área
│   │   ├── Projects.tsx         # Catálogo de soluciones con filtros funcionales
│   │   ├── ProjectModal.tsx     # Modal accesible de arquitectura de proyectos
│   │   ├── Experience.tsx       # Experiencia HGS y formación académica
│   │   ├── Roadmap.tsx          # Línea de tiempo de trayectoria y metas futuras
│   │   ├── Contact.tsx          # Canales oficiales y formulario validado
│   │   ├── ResumeModal.tsx      # Visor e impresora de CV para PDF
│   │   ├── TerminalModal.tsx    # Modal de la consola interactiva
│   │   ├── BackgroundGrid.tsx   # Rejilla cibernética e iluminación ambiental
│   │   ├── BrandIcons.tsx       # Vectores SVG de GitHub y LinkedIn
│   │   └── Footer.tsx           # Pie de página y estado del sistema
│   ├── tests/
│   │   └── portfolio.test.ts    # Pruebas automatizadas de integridad de datos
│   ├── index.css                # Estilos globales, animaciones y reglas @media print
│   ├── App.tsx                  # Componente raíz y orquestador de estado
│   └── main.tsx                 # Entrada de la aplicación React
```

---

## ⚙️ Comandos de Ejecución

### 1. Iniciar servidor de desarrollo local
```bash
npm run dev
```
La aplicación estará disponible en `http://127.0.0.1:5173/`.

### 2. Compilar para producción (Build)
```bash
npm run build
```
Genera los archivos optimizados y minificados en la carpeta `dist/`.

### 3. Ejecutar pruebas automatizadas
```bash
npm test
```
Ejecuta la suite de pruebas unitarias sobre los datos y la lógica del portafolio.

---

## 📝 Cómo Actualizar la Información

Toda la información del portafolio está centralizada en un único archivo:
👉 [`src/data/portfolioData.ts`](file:///E:/Antigravity/Projects/portfolio/src/data/portfolioData.ts)

Para actualizar:
- **Semestre académico o estado**: Modifica `PERSONAL_INFO.currentSemester` o `PERSONAL_INFO.availabilityStatus`.
- **Datos de contacto definitivos**: Edita `CONTACT_INFO.email`, `CONTACT_INFO.linkedInUrl` o `CONTACT_INFO.githubUrl`.
- **Nuevos proyectos**: Agrega un nuevo objeto a la lista `PROJECTS_DATA` con sus tecnologías, descripción y estado.
- **Nuevas habilidades o herramientas**: Agrega elementos a `SKILLS_DATA` indicando su nivel (`applied`, `deepening`, o `studied`).
- **Nuevas experiencias o logros**: Modifica o amplía `WORK_EXPERIENCE` y `ROADMAP_DATA`.

---

## 📄 Exportación de la Hoja de Vida (PDF)

1. Abre el portafolio en tu navegador.
2. Haz clic en el botón **"Hoja de Vida"** en la barra superior o presiona **"CV (PDF)"** en el Hero.
3. En el modal emergente, haz clic en **"Imprimir / Guardar PDF"**.
4. En el cuadro de diálogo de impresión del navegador:
   - Destino: **Guardar como PDF**
   - Márgenes: **Predeterminados** o **Mínimos**
   - Gráficos de fondo: **Activados**
5. Guarda el archivo `.pdf` listo para enviar a reclutadores. -->
