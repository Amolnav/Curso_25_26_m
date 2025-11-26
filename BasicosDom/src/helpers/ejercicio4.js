
export default function createEjercicio4(){

    function fetching() {nb 
        const PORT = import.meta.env.VITE_PORT;
        const URL = import.meta.env.VITE_URL;
        const URL_PORT = `${URL}:${PORT}`;

        return fetch(`${URL_PORT}/alojamientos`)
            .then((res) => res.json())
            .then((data) => {
                return data;
            })
            .catch((err) => {
                console.error(err);
            });
    }

// Aqui decido donde pintar el objeto en el DOM
const container = document.createElement("div");
const tabla = document.createElement("table");

fetching().then((data) => {
    // Crear el encabezado
    const thead = document.createElement("thead");
    const headerRow = document.createElement("tr");

    ["Nombre", "Ubicación", "Precio (€)", "Rating"].forEach((text) => {
        const th = document.createElement("th");
        th.textContent = text;
        headerRow.appendChild(th);
    });

    thead.appendChild(headerRow);
    tabla.appendChild(thead);

    // Crear el cuerpo
    const tbody = document.createElement("tbody");
    data.forEach((alojamiento) => {
    const tr = document.createElement("tr");
    
    // Calcular estrellas
    const numEstrellas = Math.floor(alojamiento.rating / 2);
    const estrellas = `(${alojamiento.rating}) ${'⭐'.repeat(numEstrellas)}`; 

    ["nombre", "ubicacion", "precio", "rating"].forEach((key) => {
        const td = document.createElement("td");

        td.textContent = key === "rating" ? estrellas : alojamiento[key];

        tr.appendChild(td);
    });

    tbody.appendChild(tr);
});

    tabla.appendChild(tbody);
    container.appendChild(tabla);
});

    // Retorno el objeto
    return  container

}