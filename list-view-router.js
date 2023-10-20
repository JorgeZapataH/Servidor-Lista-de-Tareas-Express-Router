const express = require('express');
const listViewRouter = express.Router();

// Lista de tareas como objetos
const tareas = [
  { id: 1, descripcion: 'Hacer la compra', completado: false },
  { id: 2, descripcion: 'Estudiar JavaScript', completado: true },
  { id: 3, descripcion: 'Hacer ejercicio', completado: true },
];

// Ruta específica para listar las tareas completas
listViewRouter.get('/completas', (req, res) => {
  const tareasCompletas = tareas.filter((tarea) => tarea.completado);
  res.json(tareasCompletas);
});
// Nueva ruta para listar las tareas incompletas
listViewRouter.get('/incompletas', (req, res) => {
    const tareasIncompletas = tareas.filter((tarea) => !tarea.completado);
    res.json(tareasIncompletas);
  });
module.exports = listViewRouter;