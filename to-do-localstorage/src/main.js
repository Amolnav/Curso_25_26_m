// ---IMPORTS---
import { dbTareas } from "./db/db";
import { addTarea, completarTarea, deleteTarea, getTareas, saveTareas } from "./helpers/tareas";
const TEXT_KEY = import.meta.env.VITE_TEXT_KEY;

//---INICIO---
saveTareas(dbTareas,)

getTareas("j")

deleteTarea("1")
console.table(getTareas());

addTarea("Hacer java");
getTareas();

completarTarea("4");
getTareas();

