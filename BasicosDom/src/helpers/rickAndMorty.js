export function createEjercicioRick() {
    const STORAGE_KEY = "cacheRick"

    // Función para hacer fetch de la API de Rick and Morty
    function fetchingRick(endpoint) {
        return fetch(`https://rickandmortyapi.com/api/character?name=${endpoint}`)
        .then((res) => {
            if (!res.ok) throw new Error("Response not ok");
            return res.json();
        })
        .then((data) => {
            console.log(data)
            return data})
        .catch(err => {
            throw new Error(err);
        });
    }

    // Función principal para buscar personajes
    const buscarFunction = (nombre) => {
        // Normalizamos la búsqueda
        nombre = nombre.toLowerCase().trim()

        // Consultamos si ya existe en cache
        const resultadosCache = consultarCache(nombre);
        if (resultadosCache) {
            console.log("Se uso cache para esta busqueda");
            pintarPersonajes(resultadosCache);
            return;
        }

        // Si no hay cache, hacemos fetch a la API
        fetchingRick(nombre).then((data) => {
            const personajes = data.results;
            console.log("LA BUSQUEDA");
            console.log(personajes);
            // Guardamos en cache los resultados para futuras búsquedas
            guardarCache(nombre, personajes);
            // Pintamos los personajes en el DOM
            pintarPersonajes(personajes);
        });
    }

    // Función para pintar personajes en el container
    const pintarPersonajes = (arrayPersonajes) => {
        limpiarContainer(); // Limpiamos resultados anteriores

        if (arrayPersonajes.length === 0) {
            // Si no hay personajes, mostramos un mensaje
            const texto = document.createElement("p");
            texto.textContent = "No existe nadie que tenga ese nombre o parecido";
            container.appendChild(texto);
            return;
        }

        // Recorremos los personajes y los añadimos al DOM
        arrayPersonajes.forEach((personaje) => {
            const titulo = document.createElement("h3");
            titulo.textContent = personaje.name;

            const img = document.createElement("img");
            img.src = personaje.image;

            container.appendChild(titulo);
            container.appendChild(img);
        });
    }

    // Función para limpiar resultados anteriores sin tocar el form
    const limpiarContainer = () => {
        const elementos = container.querySelectorAll("p, h3, img");
        elementos.forEach(el => el.remove());
    }

    // Función para obtener cache desde localStorage como un Map
    const getCache = () => {
        /**
         * ejemplo de que tiene el localStorage
         * [
         *  [busqueda, [{},{}]],
         *  [busqueda2, [{},{}]],
         * ]
         */
        const cacheArray = JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]")
        return new Map(cacheArray)
    }

    // Consultar si un término ya está en cache
    const consultarCache = (key) => {
        const cacheMap = getCache()
        if (!cacheMap.has(key)) return false
        return cacheMap.get(key)
    }

    // Guardar resultados en cache
    const guardarCache = (busqueda, resultado) => {
        busqueda = busqueda.toLowerCase().trim()
        const cacheMap = getCache()
        cacheMap.set(busqueda, resultado)
        localStorage.setItem(STORAGE_KEY, JSON.stringify([...cacheMap]))
    }

    // Container principal del ejercicio
    const container = document.createElement("div")

    // Creamos el form con input y botón
    const form = document.createElement("form")

    const buscador = document.createElement("input")
    buscador.type = "text";
    buscador.placeholder = "Busca un personaje...";

    const btnBuscar = document.createElement("button")
    btnBuscar.textContent = "Buscar 🔍"
    btnBuscar.type = "submit"

    form.appendChild(buscador)
    form.appendChild(btnBuscar)

    // Listener único: submit maneja click y Enter en el input
    form.addEventListener("submit", (e) => {
        e.preventDefault()
        buscarFunction(buscador.value)
    })

    container.appendChild(form)

    return container
}
