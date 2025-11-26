import { bienvenida } from "../db/data";
import { fetching } from "./fetcher";

export default function createEjercicio1(){

    fetching("bienvenida")


    // Aqui decido donde pintar el objeto en el DOM
    const container = document.createElement("div")
    const parrafo = document.createElement("p")
    parrafo.classList.add("welcome-message");
    fetching().then((miJson) => (parrafo.textContent = miJson));
    //parrafo.textContent = noFetching()

    container.appendChild(parrafo)

    // Retorno el objeto
    return  container

}