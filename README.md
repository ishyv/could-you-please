# CASE UNRESOLVED — Caso Irresuelto

> *“La desesperación no siempre parece desesperada.”*

**CASE UNRESOLVED** es una experiencia narrativa interactiva en primera persona de 15–25 minutos diseñada para navegador. El jugador se conecta remotamente a la estación de trabajo de su compañero de equipo y amigo cercano, Gabriel Vega, quien ha dejado de asistir a las reuniones y no responde mensajes desde hace días.

Lo que comienza como una búsqueda pragmática se transforma gradualmente en una inmersión incómoda en la vida privada de una persona que ocultaba un colapso financiero, profesional y personal bajo una fachada de normalidad y humor.

---

## 🎭 Premisa Narrativa

A través de fragmentos de conversaciones, descargas, registros de navegación, fotos familiares y notas de texto en su computadora remota, descubres cuatro facetas divergentes del mismo hombre:

1. **El amigo que conocías** — Cálido, brillante, servicial y bromista.
2. **El empleado bajo asedio** — Con advertencias formales de desempeño (PIP) y presión de gerencia.
3. **El padre y esposo endeudado** — Acorralado por la inflación, cuotas escolares y el temor a un embargo judicial.
4. **El hombre empujado al límite** — Que poco a poco normaliza y participa activamente en el desvío de datos y herramientas de intrusión.

La historia no ofrece una revelación melodramática ni un veredicto definitivo. El jugador llega al límite de las evidencias y toma la decisión de cerrar la laptop en la oscuridad.

---

## 💻 Características Técnicas & de Diseño

- **Perspectiva Corpórea 2.5D**: Punto de vista en primera persona frente a una laptop ThinkPad en una habitación nocturna. La iluminación ambiental de las paredes reacciona a la luminancia y temperatura de color de la pantalla.
- **Simulación de Fisiología Ocular**:
  - Parallax y balanceo sutil de respiración en tiempo real acoplados al puntero.
  - Fatiga de enfoque tras lecturas prolongadas (suavizado del texto que se disipa con cualquier movimiento).
  - Parpadeos involuntarios de fracción de segundo espaciados naturalmente.
- **Motor de Audio Procedural (Web Audio API)**:
  - Síntesis en tiempo real sin dependencias de archivos de audio externos (cero latencia y carga instantánea).
  - Lecho ambiental continuo: ruido filtrado de climatización/HVAC y zumbido resonante de ventilador de laptop.
  - Efectos físicos mecánicos: clic de encendido, pulsación de teclas, crujidos lejanos y cierre de bisagra al terminar.
  - Control de silencio accesible desde la barra superior.
- **Entorno de Trabajo Verosímil**:
  - **Mensajería Interna**: 4 conversaciones clave con progresión cronológica cruzada (Marcos/Tú, Julián Ramos/CFO, Elena/Esposa, y Grupo "Los de siempre" con Vektor).
  - **Descargas**: Progresión de archivos desde comprobantes de servicios públicos y reportes corporativos hasta utilidades de tunelización (`chisel`, `tailscale`) y volcados de base de datos.
  - **Galería DCIM**: Registros fotográficos con metadatos EXIF forenses y descripciones narrativas.
  - **Historial de Navegación**: Desde dudas laborales y búsquedas de préstamos urgentes hasta artículos del código penal y rutas de escape.
  - **Editor de Notas**: Planillas de vencimientos, borradores no enviados y registros temporales de red.
  - **Última Sesión (Diagnóstico)**: Telemetría de la última conexión remota interrumpida anómalamente en la madrugada del 19 de septiembre.
- **Desbloqueo Canónico del Final**:
  - El cierre de la laptop sólo activa la secuencia final (`CASO IRRESUELTO`) cuando el jugador ha explorado los ejes temáticos indispensables (vínculo personal, crisis laboral, tensión doméstica, deriva criminal y la última traza remota).

---

## 🛠️ Stack Tecnológico

- **Framework**: [Svelte 5](https://svelte.dev/) (con reactividad basada en Runes: `$state`, `$derived`, `$effect`)
- **Meta-framework**: [SvelteKit 2](https://svelte.dev/docs/kit)
- **Estilos**: [Tailwind CSS v4](https://tailwindcss.com/) vía `@tailwindcss/vite`
- **Audio**: Web Audio API procedural nativo
- **Package Manager**: [Bun](https://bun.sh/)
- **Testing**: [Vitest](https://vitest.dev/)
- **Linter & Calidad de Código**: ESLint (`eslint-plugin-svelte`), Prettier (`prettier-plugin-svelte`, `prettier-plugin-tailwindcss`), `svelte-check`

---

## 🚀 Inicio Rápido

### Requisitos previos

- [Bun](https://bun.sh/) v1.2+ (o Node.js v18+)

### Instalación

```sh
# Clonar el repositorio
git clone https://github.com/usuario/could-you-please.git
cd could-you-please

# Instalar dependencias
bun install
```

### Servidor de Desarrollo

```sh
bun run dev
```

Abre tu navegador en `http://localhost:5173`.

---

## 🧪 Verificación y Control de Calidad

El proyecto incluye un pipeline completo de validación local:

```sh
# Ejecutar suite de pruebas unitarias y de integración (Vitest)
bun run test

# Verificación de tipos y diagnóstico de Svelte (svelte-check)
bun run check

# Verificación de estilo y reglas de ESLint + Prettier
bun run lint

# Formateo automático de código
bun run format

# Construcción de producción
bun run build

# Previsualización del bundle de producción
bun run preview
```

---

## 🕹️ Parámetros de Desarrollo & Depuración

Para facilitar las pruebas de iteración y QA sin recorrer todo el flujo manualmente, la aplicación acepta las siguientes banderas en la URL:

- `?dev=1`: Despliega una barra superior de herramientas de desarrollo (reiniciar estado, desbloquear final, simular parpadeo, alternar fatiga visual y monitorear artefactos leídos).
- `?skipBoot=1`: Omite el encendido manual y la terminal SSH inicial, conectando directamente al escritorio remoto.
- `?unlockEnding=1`: Marca los artefactos requeridos como vistos para habilitar el cierre de la laptop inmediatamente.
- `?reducedFx=1`: Fuerza el modo de movimiento reducido (desactiva movimientos de cámara, blinks y fatiga).

*Ejemplo:* `http://localhost:5173/?dev=1&skipBoot=1`

---

## ♿ Accesibilidad

- Cumple con la preferencia de usuario `prefers-reduced-motion: reduce`, deshabilitando el cabeceo de cámara y transiciones abruptas.
- El motor de audio no bloquea la navegación, respeta las políticas de autoplay de navegadores y provee un interruptor de silenciamiento visible.
- Todo el contenido narrativo es legible mediante tipografía de alto contraste con jerarquía clara.

---

## 📦 Despliegue en Producción

El proyecto está configurado por defecto con `@sveltejs/adapter-auto`. Según la plataforma de destino, puedes sustituir o configurar el adaptador en `vite.config.js` / `svelte.config.js`:

- **Vercel**: Funciona de inmediato con `@sveltejs/adapter-auto` o `@sveltejs/adapter-vercel`.
- **Node.js (Servidor / Docker)**: Instalar `@sveltejs/adapter-node` y actualizar `vite.config.js`.
- **Hosting Estático (GitHub Pages / Cloudflare Pages / Netlify / S3)**: Instalar `@sveltejs/adapter-static` para exportar como SPA estática pura.

---

## 📄 Licencia

Código e implementación bajo licencia MIT. Los textos, diseño narrativo y especificación creativa son propiedad intelectual del autor.
