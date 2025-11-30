import calcularImagen from "./helpers/calcularImagen";
import fetching from "./helpers/fetching";

    function App() {
    // Contenedor principal
    const appDiv = document.createElement("div");

    // Título
    const title = document.createElement("h1");
    title.textContent = "Weather Forecast";

    // Contenedor del clima
    const weatherDiv = document.createElement("div");
    weatherDiv.classList.add("weather-div");

    // Elementos de información del clima
    const ciudad = document.createElement("h2");
    const temp = document.createElement("h1");
    const tempFeeling = document.createElement("h3");
    const weather = document.createElement("h1");

    // Formulario de búsqueda
    const form = document.createElement("form");
    const buscador = document.createElement("input");
    buscador.type = "text";
    buscador.placeholder = "Busca una ciudad...";

    const btnBuscar = document.createElement("button");
    btnBuscar.type = "submit";
    btnBuscar.textContent = "Buscar 🔍";

    // Construir el DOM
    form.append(buscador, btnBuscar);
    weatherDiv.append(ciudad, temp, tempFeeling, weather);
    appDiv.append(title, weatherDiv, form);

    // Busqueda
    form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const cityName = buscador.value
    if (!cityName) return;

    try {
        const data = await fetching(cityName);
        
        // Actualizar información del clima
        ciudad.textContent = data.name;
        temp.textContent = Math.round(data.main.temp);
        tempFeeling.textContent = `Feels like: ${Math.round(data.main.feels_like)}°`;
        weather.textContent = data.weather[0].main;
        
        // Actualizar imagen de fondo
        const img = calcularImagen(data);
        weatherDiv.style.backgroundImage = `url('/img/${img}')`;
        
    } catch (error) {
        console.error("Error al obtener el clima:", error);
    }
    });

    return appDiv;
}

export default App;