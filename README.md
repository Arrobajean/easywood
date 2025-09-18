# LLEMY Reformas - Proyecto Web

## Resumen de mejoras y funcionalidades

- **Unificación y mejora de botones**: Todos los botones principales del sitio tienen animaciones y estilos coherentes, tanto en escritorio como en móvil.
- **SEO avanzado**: Todas las páginas principales usan `react-helmet-async` para títulos, descripciones, metadatos Open Graph, schema.org, robots.txt y manifest optimizados para Madrid.
- **Integración con Firebase y Firestore**: Los leads de formularios y callbacks se guardan en Firestore, con reglas de seguridad que solo permiten crear documentos desde el frontend.
- **Optimización de formularios**:
  - Validación avanzada de campos (email, teléfono, nombre, mensaje).
  - Limpieza de datos antes de guardar.
  - Honeypot anti-spam (campo oculto).
  - Loader y botón deshabilitado durante el envío.
  - Feedback claro de errores y éxito.
  - Estructura profesional en Firestore (`status`, `fecha`, `userAgent`).
  - Cierre automático del modal tras éxito en el callback.
- **Notificaciones por email**: Función preparada para Cloud Functions (ejemplo con SendGrid) para enviar un email cuando llega un nuevo lead.
- **Variables de entorno**: Configuración de Firebase migrada a `.env` y añadido a `.gitignore` para mayor seguridad.

---

## Variables de entorno

Crea un archivo `.env` en la raíz del proyecto con el siguiente contenido:

```env
VITE_FIREBASE_API_KEY=...
VITE_FIREBASE_AUTH_DOMAIN=...
VITE_FIREBASE_PROJECT_ID=...
VITE_FIREBASE_STORAGE_BUCKET=...
VITE_FIREBASE_MESSAGING_SENDER_ID=...
VITE_FIREBASE_APP_ID=...
VITE_FIREBASE_MEASUREMENT_ID=...
```

Reemplaza los valores por los de tu proyecto Firebase.

---

## Despliegue y buenas prácticas

- **No subas el archivo `.env` al repositorio** (ya está en `.gitignore`).
- **Revisa y ajusta las reglas de Firestore** según el entorno (ver sección de seguridad en este README).
- **Para notificaciones por email**, implementa la Cloud Function usando el ejemplo en `src/lib/sendLeadEmail.ts`.
- **Para SEO local**, revisa y adapta los metadatos y schema según evolucione el negocio.

---

## Seguridad en Firestore (ejemplo recomendado)

```plaintext
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /contactos/{document} {
      allow create: if true;
      allow read, update, delete: if false;
    }
    match /callbacks/{document} {
      allow create: if true;
      allow read, update, delete: if false;
    }
    match /{document=**} {
      allow read, write: if false;
    }
  }
}
```

---

## Cloud Functions para notificaciones por email

- Usa el ejemplo de `src/lib/sendLeadEmail.ts` para crear una función en `/functions` que envíe emails con cada nuevo lead.
- Puedes usar SendGrid, Mailgun, Nodemailer, etc.

---

## Contacto y soporte

Para dudas, mejoras o incidencias, contacta con el equipo de desarrollo o abre un issue en el repositorio.
