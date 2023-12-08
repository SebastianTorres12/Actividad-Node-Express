// Importar Dependencias
const express = require('express');
const router = express.Router();

// Ruta principal
router.get('/', (req, res) => {
    res.send('Hola Mundo R Principal.');
});

// Ruta 2
router.get('/ruta2', (req, res) => {
    res.send('Hola Mundo Ruta 2.');
});

// Ruta 3
router.get('/crear_usuario', (req, res) => {
    res.send('Usuario creado exitosamente.');
});

// Ruta 4
router.get('/actualizar_usuario', (req, res) => {
    res.send(`Usuario actualizado.`);
});

// Ruta 5
router.get('/eliminar_usuario', (req, res) => {
    res.send(`Usuario eliminado.`);
});

// Exporta el modulo
module.exports = router;