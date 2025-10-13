// aqui van las funciones helper para las tareas
const TEXT_KEY = import.meta.env.VITE_TEXT_KEY;

// Crear una funcion mostrar tareas que le pase una clave y me muestre a traves de la consola la clave
// usar console.table 
export const getTareas = (key=TEXT_KEY) => (JSON.parse(localStorage.getItem(key)) || [])

export const saveTareas = (arrayTareas, tareas=TEXT_KEY) => {
    // Guardar en el LocalStorage en la clave
    localStorage.setItem(tareas,JSON.stringify(arrayTareas));
}

export const addTarea = (nombre) => {
    const nuevasTareas = JSON.parse(localStorage.getItem(TEXT_KEY)) || [];
    
    const nuevaTarea = {
        id: crypto.randomUUID(),
        nombre,
        fechaCreacion: new Date().toISOString(),
        completada: false,
    };

    nuevasTareas.push(nuevaTarea);
    localStorage.setItem(TEXT_KEY, JSON.stringify(nuevasTareas));
};



// Funcion que borra Tareas por id
/**
 * @description Elimina del LocalStorage la tarea cuyo id coincida con el recibido
 * @param {string} id Id usado para la busqueda de la tarea
 */
export const deleteTarea = (id) => {
    if (localStorage.hasOwnProperty(TEXT_KEY)) {
        const nuevasTareas = JSON.parse(localStorage.getItem("Tareas")).filter((tarea) => tarea.id !== id); 
        saveTareas(nuevasTareas);
    }
}

// Funcion que completa una tarea por id
export const completarTarea = (id) => {
    if (localStorage.hasOwnProperty("Tareas")) {
        const tareas = JSON.parse(localStorage.getItem("Tareas"));

        const tareasActualizadas = tareas.map((tarea) => {
            if (tarea.id === id) {
                return { ...tarea, completada: true };
            }
            return tarea;
        });

        saveTareas(tareasActualizadas);
    }
};