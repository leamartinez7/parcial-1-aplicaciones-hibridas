# Trueque App - MERN

Aplicación MERN que permite a los usuarios publicar ítems, ver publicaciones de otros y proponer intercambios (trueques).

## Tecnologías

- Frontend: React, Vite, Tailwind, Context API, Axios
- Backend: Node.js, Express, MongoDB, Mongoose
- Autenticación: JWT
- Subida de imágenes: Multer

## Cómo levantar el proyecto

### Backend
1. Clonar el repositorio
2. `cd backend`
3. `npm install`
4. Crear `.env` con:

PORT=5000
MONGO_URI=mongodb://localhost:27017/truequeDB
JWT_SECRET=tu_clave_secreta

5. `npm start`

### Frontend
1. `cd frontend`
2. `npm install`
3. `npm run dev`

## Funcionalidades

- Registro y login
- Publicación de ítems con imagen
- Vista de ítems propios y ajenos
- Propuestas de trueque entre usuarios
- Ver las propuestas enviadas y recibidas
- Modal con vista ampliada de la publicación

## Funcionalidades a futuro

- Chat para finalizar el trade
- Vista para modificar cosas como eliminar usuario, editarlos, etc. del Admin


