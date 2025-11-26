import createEjercicio1 from "./helpers/ejercicio1.js";
import createEjercicio2 from "./helpers/ejercicio2.js";
import createEjercicio3 from "./helpers/ejercicio3.js";
import createEjercicio4 from "./helpers/ejercicio4.js";
import createEjercicio5 from "./helpers/ejercicio5.js";
import { createEjercicioRick } from "./helpers/rickAndMorty.js";

export default function createApp() {
    const appDiv = document.getElementById("app");
    // appDiv.appendChild(createEjercicio1());
    // appDiv.appendChild(createEjercicio2())
    // appDiv.appendChild(createEjercicio3())
    // appDiv.appendChild(createEjercicio4())
    // appDiv.appendChild(createEjercicio5())
    appDiv.appendChild(createEjercicioRick())
}