
export default function createEjercicio2(){

    function fetching() {
        const PORT = import.meta.env.VITE_PORT;
        const URL = import.meta.env.VITE_URL;
        const URL_PORT = `${URL}:${PORT}`;
        
        return fetch(`${URL_PORT}/tareas`)
            .then((res) => res.json())
            .then((data) => {
            return data
        })
        .catch(err => {
            throw new Error(err)
        })
    }

    // Aqui decido donde pintar el objeto en el DOM
    const container = document.createElement("div")
    const lista = document.createElement("ul")
    lista.classList.add("task-item");
    fetching().then((data) => {
        data.forEach(tarea => {
            const li = document.createElement("li")
            li.textContent = `${tarea.texto}, esta completada: ${tarea.completada ? "si" : "no"}`
            if (tarea.completada) li.classList.add("completed")
            lista.appendChild(li)
        })
    })

    //lista.textContent = noFetching()
    container.appendChild(lista)

    // Retorno el objeto
    return  container

}