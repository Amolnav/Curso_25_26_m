import { imagesData } from "../data/images"
import { createImageGrid } from "./ImageCard"

export const createGalleryApp = () => {
// contenedor principal
const container = document.createElement("div")
container.className="min-h-screen bg-linear-to-br from-green-400 via-blue to-stone-900"

// HEADER
const header = document.createElement("header")
header.className = "bg-white/60 shadow-lg sticky top-0 z-40 backdrop-blur-md"

const headerContentDiv = document.createElement("div")
headerContentDiv.className="max-w-7xl mx-auto px-6 py-6"

const headerTitle = document.createElement("h1")
headerTitle.className="text-3xl font-bold text-black-900 mb-2"
header.textContent="Galeria de fotos de Alex🎨"

const headerSubtitle = document.createElement("p")
headerSubtitle.className="text-gray-600"
headerSubtitle.textContent="Aprende Clousures, funciones fabrica y manipulacion del DOM"

headerContentDiv.appendChild(headerTitle)
headerContentDiv.appendChild(headerSubtitle)
header.appendChild(headerContentDiv)
container.appendChild(header)

// MAIN
const main = document.createElement("main")
main.className="max-w-7xl mx-auto px-6 py-8"

const counterComponent = document.createElement("h2")
counterComponent.textContent="<----- Componente favoritesCounter"

const imageModal = document.createElement("h2")
imageModal.textContent="<--------- Componente imageModal"

const gridComponent = document.createElement("h2")
gridComponent.textContent="<------- Componente gridComponent"
const imageGridComponent = createImageGrid(imagesData)
main.appendChild(imageGridComponent.element)
main.appendChild(counterComponent)
main.appendChild(imageModal)
main.appendChild(gridComponent)
container.appendChild(main)
// FOOTER
const footer = document.createElement("footer")
footer.className = "bg-black/80 shadow-inner sticky bottom-0 z-30"

const footerContentDiv = document.createElement("div")
footerContentDiv.className = "max-w-7xl mx-auto px-6 py-4 flex items-center justify-between"

const footerText = document.createElement("p")
footerText.className = "text-white text-sm"
footerText.innerText = `EJERCICIO DOM ALEX MOLINA
https://github.com/Amolnav/`

const footerLogo = document.createElement("img")
footerLogo.className = "h-6 w-6 rounded-full"
footerLogo.src = "/path/to/logo.png"
footerLogo.alt = "Logo"

footerContentDiv.appendChild(footerText)
footerContentDiv.appendChild(footerLogo)
footer.appendChild(footerContentDiv)
container.appendChild(footer)

    return {
        element: container,
    }
}
