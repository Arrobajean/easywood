# Easywood — Sitio web corporativo

Sitio corporativo de Easywood (reformas y suelos de madera, Madrid) orientado a captacion de leads con SEO local.

## Que demuestra

- SPA corporativa con captacion de leads: formularios con validacion y honeypot anti-spam.
- Persistencia de leads en Firestore y envio mediante Firebase Function y EmailJS.
- SEO por pagina (react-helmet-async, sitemap, robots, schema.org) y animaciones modernas.

## Stack

Vite, React 18, TypeScript, Tailwind CSS + Radix UI, react-router-dom, Framer Motion, GSAP, Lenis, Firebase (Firestore + Functions), EmailJS, Vercel.

## Demo

Sin demo publica verificada: el dominio easywood.es no responde a fecha de redaccion (octubre 2026).

## Como ejecutarlo

```bash
npm install
cp .env.example .env   # completar los valores reales (ver .env.example)
npm run dev            # desarrollo local
npm run build          # build de produccion en dist/
npm run preview        # servir la build localmente
npm run lint           # ESLint
```

Despliegue en Vercel: Framework Preset Vite, Build Command `npm run build`, Output `dist`, con las variables de `.env.example` configuradas en el proyecto.

## Tests

Sin tests automatizados. Verificacion actual: `npm run build` y `npm run lint`.

## Decisiones

- SPA con react-router-dom y rewrites a `/index.html` en `vercel.json`.
- Firestore como backend ligero de leads, con reglas que solo permiten `create` en `contactos` y `callbacks`.
- Formularios con validacion en cliente, checkbox de privacidad obligatorio y campo honeypot `website`.
- EmailJS configurado via `import.meta.env.VITE_EMAILJS_*`, sin claves en el codigo.

## Limitaciones honestas

- Sin tests automatizados.
- El envio del formulario depende de Firebase y de la Cloud Function `contactFormHandler` (carpeta `functions/`); sin esa configuracion no hay envio real. Si faltan las variables de EmailJS, el codigo usa placeholders (`YOUR_SERVICE_ID`, etc.) y el envio falla.
- `src/lib/sendLeadEmail.ts` usa credenciales SMTP de ejemplo (placeholders IONOS): no usar sin configurar variables de entorno en la funcion.
- El script `build` es solo `vite build` (sin typecheck).
- Sin demo publica verificada.

## Como se construyo

Con honestidad: el historial muestra `Initial commit` seguido de `chore: bootstrap from LLEMY template (clean init without history)`, y `lovable-tagger` sigue en devDependencies, asi que la base proviene de una plantilla/generador (Lovable/LLEMY). Trabajo propio posterior: adaptacion completa a Easywood (contenidos de reformas y tarimas, datos de servicios y proyectos, SEO local para easywood.es, integracion Firebase/EmailJS, formularios con honeypot, reglas de Firestore y optimizaciones movil).

## Licencia

MIT — ver `LICENSE`.
