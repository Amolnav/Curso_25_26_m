// 2. Obtener el elemento app
// 3. Crear encabezado <h1>
// 4. Crear contenedor <div class="movies-container">
// 5. Usar forEach para iterar películas
// 6. Para cada película:
// - Crear <div class="movie-card">
// - Crear div título
// - Crear div año
// - Crear div rating
// 7. Calcular número de estrellas: Math.floor(rating / 2)
// 8. Repetir estrella: '⭐'.repeat(numEstrellas)

/*
  {
    "id": 1,
    "titulo": "Inception",
    "año": 2010,
    "rating": 8.8
  },
*/
export default function createEjercicio3(){

    function fetching() {
        const PORT = import.meta.env.VITE_PORT;
        const URL = import.meta.env.VITE_URL;
        const URL_PORT = `${URL}:${PORT}`;

        return fetch(`${URL_PORT}/peliculas`)
            .then((res) => res.json())
            .then((data) => {
                return data;
            })
            .catch((err) => {
                console.error(err);
            });
    }

    // Aqui decido donde pintar el objeto en el DOM
    const container = document.createElement("div")
    fetching().then((data) => {
        data.forEach((pelicula) => {
            // Crear nuevos elementos para cada película
            const card = document.createElement("div")
            const img = document.createElement("img")
            img.src=pelicula.imagen
            img.classList.add("movie-image")
            const titulo = document.createElement("h2")
            const info = document.createElement("p")

            // Rellenar contenido
            titulo.textContent = pelicula.titulo
            const numEstrellas = Math.floor(pelicula.rating / 2);
            info.textContent = `(${pelicula.año}) - Rating: ${pelicula.rating} ${'⭐'.repeat(numEstrellas)}`;

            // Construir estructura
            card.appendChild(titulo)
            card.appendChild(info)
            card.appendChild(img)
            container.appendChild(card)
        })
})

    //parrafo.textContent = noFetching()


    // Retorno el objeto
    return  container

}