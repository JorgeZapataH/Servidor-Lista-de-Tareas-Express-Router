const express = require('express');
const listEditRouter = express.Router();

// Lista de tareas como objetos
let tareas = [
  { id: 1, descripcion: 'Hacer la compra', completado: false },
  { id: 2, descripcion: 'Estudiar JavaScript', completado: true },
  { id: 3, descripcion: 'Hacer ejercicio', completado: false },
];

// Ruta específica para crear una tarea (POST)
listEditRouter.post('/crear', (req, res) => {
  const nuevaTarea = req.body;
  tareas.push(nuevaTarea);
  res.json({ message: 'Tarea creada con éxito', tarea: nuevaTarea });
});

// Ruta específica para eliminar una tarea (DELETE)
listEditRouter.delete('/eliminar/:id', (req, res) => {
  const taskId = req.params.id;
  tareas = tareas.filter((tarea) => tarea.id !== parseInt(taskId));
  res.json({ message: 'Tarea eliminada con éxito' });
});

// Ruta específica para actualizar una tarea (PUT)
listEditRouter.put('/actualizar/:id', (req, res) => {
  const taskId = req.params.id;
  const tareaActualizada = req.body;
  tareas = tareas.map((tarea) => {
    if (tarea.id === parseInt(taskId)) {
      return tareaActualizada;
    }
    return tarea;
  });
  res.json({ message: 'Tarea actualizada con éxito', tarea: tareaActualizada });
});

module.exports = listEditRouter;