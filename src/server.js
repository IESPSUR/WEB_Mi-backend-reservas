import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

// 1. Reconstruimos __filename y __dirname (ESM no los crea por defecto)
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// (Comprobación paso 1 — opcional, se elimina después)
// console.log("__dirname apunta a:", __dirname);

// 2. Construimos la ruta absoluta hacia la carpeta public
const rutaPublic = path.join(__dirname, '../public');

// (Comprobación paso 2 — opcional, se elimina después)
// console.log("Ruta hacia public:", rutaPublic);

// Creamos la aplicación Express (esto ya existía en AC4)
const app = express();

// 3. Registramos la carpeta estática
app.use(express.static(rutaPublic));

// (Comprobación paso 3 — opcional)
// console.log("Carpeta estática registrada:", rutaPublic);

/*
====================================================
5. Rutas de la AC4 (SE MANTIENEN, NO SE BORRAN)
====================================================

Es perfectly correct que sigan aquí. 
Sirven para reforzar lo aprendido:
– respuestas en texto
– respuestas en HTML
– rutas estáticas
– parámetros
– 404

Tenerlas activas NO interfiere en absoluto con express.static().

Ejemplos típicos:

app.get('/', (req, res) => {
  res.send("Hola, este es mi servidor básico");
});

app.get('/saludo', (req, res) => {
  res.send("<h1>¡Bienvenido!</h1>");
});

app.use((req, res) => {
  res.status(404).send("Error 404: página no encontrada");
});
*/

// 6. app.listen de la AC4 (se mantiene tal cual)
app.listen(3000, () => {
  console.log("Servidor escuchando en http://localhost:3000");
});
