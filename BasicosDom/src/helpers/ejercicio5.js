import { fetching } from "./fetcher";

export default function createEjercicio5() {

    const container = document.createElement("div");
    const form = document.createElement("form")
    const titulo = document.createElement("h2")
    titulo.textContent = "🏨 Buscar Alojamiento"

    const labelUbicacion = document.createElement("label")
    labelUbicacion.textContent = "Ubicacion"

    const select = document.createElement("select")
    select.classList.add("form-row", "form-group"); // Clases CSS obligatorias
    fetching("ubicaciones").then((data) => {
        data.forEach((ubicacion) => {
            const option = document.createElement("option")
            option.textContent = ubicacion.nombre
            select.appendChild(option)
        })
    });

    const labelCheckIn = document.createElement("label");
    labelCheckIn.textContent = "Check-in:";

    const inputCheckIn = document.createElement("input");
    inputCheckIn.type = "date";
    inputCheckIn.classList.add("form-row", "form-group"); // Clases CSS obligatorias

    const labelCheckOut = document.createElement("label");
    labelCheckOut.textContent = "Check-Out:";

    const inputCheckOut = document.createElement("input");
    inputCheckOut.type = "date";
    inputCheckOut.classList.add("form-row", "form-group"); // Clases CSS obligatorias

    const buttonSearch = document.createElement("button")
    buttonSearch.textContent = "🔍 Buscar"
    buttonSearch.classList.add("form-row", "form-group"); // Clases CSS obligatorias

    const textContainer = document.createElement("div")
    textContainer.classList.add("message-container"); // Contenedor de mensajes

    const text = document.createElement("p")
    textContainer.appendChild(text)

    form.addEventListener("submit", (e) => {
        e.preventDefault(); // Evita que recargue la página

        const ubicacion = select.value;
        let checkIn = inputCheckIn.value;
        let checkOut = inputCheckOut.value;

        // Limpiar clases previas de mensaje
        text.classList.remove("error", "success");

        if (!ubicacion || !checkIn || !checkOut) {
            text.textContent = "COMPLETA TODO";
            text.classList.add("error"); // Mensaje de error
        } else {
            checkIn = new Date(checkIn);
            checkOut = new Date(checkOut);

            if (checkIn > checkOut) {
                text.textContent = "No puedes irte antes de entrar";
                text.classList.add("error"); // Mensaje de error
            } else {
                text.textContent = "Disfrute de su estancia";
                text.classList.add("success"); // Mensaje de éxito
            }
        }
    });


    form.appendChild(titulo)
    form.appendChild(labelUbicacion)
    form.appendChild(select)
    form.appendChild(labelCheckIn)
    form.appendChild(inputCheckIn)
    form.appendChild(labelCheckOut)
    form.appendChild(inputCheckOut)
    form.appendChild(buttonSearch)
    form.appendChild(textContainer)

    container.appendChild(form)
    // Retorno el objeto
    return container
}
