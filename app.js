// Cargar las variables de entorno desde el archivo .env
require('dotenv').config();

// Importar mongoose y express
const mongoose = require('mongoose');
const express = require('express');

// Crear una instancia de Express
const app = express();

// Obtener la URL de la base de datos desde las variables de entorno
const dbUrl = process.env.DB_URL;

// Conectar a MongoDB usando Mongoose
mongoose.connect(dbUrl, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    // Si la conexión a la base de datos es exitosa, iniciar el servidor
    console.log('Conectado a MongoDB Atlas!');

    // Establecer el puerto
    const port = process.env.PORT || 3000;

    // Iniciar el servidor
    app.listen(port, () => {
      console.log(`Servidor corriendo en http://localhost:${port}`);
    });
  })
  .catch((err) => {
    // Si hay un error en la conexión a la base de datos, mostrar el error y finalizar el proceso
    console.log('Error al conectar a MongoDB:', err);
    process.exit(1);  // Terminamos el proceso si no podemos conectar a la base de datos
  });

// Definir una ruta básica
app.get('/', (req, res) => {
  res.send('¡Conexión exitosa a MongoDB!');
});