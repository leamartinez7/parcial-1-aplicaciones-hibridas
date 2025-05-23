# parcial-1-aplicaciones-hibridas

# API RESTful - Truellque
Esta API permite gestionar **ítems** y **categorías** para un sistema de trueques local. Hecha con Node.js, Express y MongoDB.

## Datos del proyecto

- Nombre y Apellido: Leandro Alberto Martinez
- Materia: Aplicaciones Híbridas
- Docente: Jonathan Emanuel Cruz
- Comisión: DWT4AV

## Tecnologías

- Node.js
- Express
- MongoDB (Mongoose)
- Dotenv

## Descripción

Esta API permite:

- Crear, leer, actualizar y eliminar items (`Items`).
- Filtrar items por categoría, disponibilidad y nombre.
- Validar que las categorías existan antes de crear o actualizar items.
- Manejar relaciones entre `Items` y `Categories` mediante referencias.

## Estructura básica del Item

```json
{
  "name": "Bicicleta Mountain Bike",
  "description": "Bicicleta usada, en buen estado",
  "category": "Deportes",
  "condition": "Usado - Bueno",
  "desiredItems": ["Libros", "Ropa deportiva"],
  "available": true
}

