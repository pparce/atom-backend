# Atom Backend

Backend desarrollado en Node.js con Express y TypeScript como parte del challenge técnico Fullstack.

## Tecnologías

- **Node.js** + **Express**
- **TypeScript**
- **Firebase Admin SDK** (Firestore como base de datos)
- **JWT** para autenticación
- **Zod** para validación de datos
- **Firebase Cloud Functions** (opcional para despliegue)

---

## Instalación

1. Cloná el repositorio

```bash
git clone https://github.com/pparce/atom-backend.git
cd atom-backend
npm install
```

## Archivos necesarios

### `.env`
Contiene las variables de entorno sensibles. Ejemplo:

```env
JWT_SECRET=clave_segura
```

### `serviceAccountKey.json`
Contiene las keys de firebase

## ⚙️ Scripts disponibles

```bash
npm run dev
npm run build
npm run deploy
```
