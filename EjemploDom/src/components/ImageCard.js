import { imagesData } from "../data/images";
import isFavourite, { setFavourite } from "../utils/favourites";
import imageModal from "./ImageModal";

export function createImageCard(image, onImageClick, onFavouriteToggle) {
    // Contenedor principal
    const card = document.createElement("div")
    card.className = "bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 hover:scale-105 cursor-pointer group relative"
    card.dataset.imgaeID = image.id
    
    //Imagen
    const img = document.createElement("img")
    img.src = image.url
    image.alt = image.title
    img.className = "w-full h-64 object-cover group-hover:opacity-90 transition-opacity"
    //img.onerror=()=> img.src="URL de placeholder ( no disponible )"
    card.appendChild(img)

    //Gestion corazon favoritos

    //info Imagen
    const infoContainer = document.createElement("div")
    infoContainer.className="p-4 bg-white"
        
        const infoTitle = document.createElement("h3")
            infoTitle.className="font-bold text-lg text-gray-600 mb-2"
            infoTitle.textContent= image.title
            infoContainer.appendChild(infoTitle)

        const infoAuthor = document.createElement("p")
            infoAuthor.className="font-semibold text-gray-600"
            infoAuthor.textContent = `realizado por: ${image.author}`    
            infoContainer.appendChild(infoAuthor)
        
        const corazonContainer = document.createElement("div")
        corazonContainer.className = "flex justify-end mt-2"

        const corazon = document.createElement("p")
        corazon.className = "text-2xl cursor-pointer transition-transform hover:scale-110"
        corazon.textContent = isFavourite(image.id) ? "❤️" : "🤍"

        corazonContainer.appendChild(corazon)
        infoContainer.appendChild(corazonContainer)

    card.appendChild(infoContainer)


    img.onclick = () => {
        imageModal(image.url)
    }

    corazonContainer.onclick = () => {
        setFavourite(image.id)
        corazon.textContent = isFavourite(image.id) ? "❤️" : "🤍"
    }


    return{
        element: card
    }
}
/*
    id: 1,
    title: 'MontaÃ±as al atardecer',
    category: 'naturaleza',
    url: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800',
    author: 'John Doe',
    date: Date.now() - 86400000 * 1,
 */
export function createImageGrid(images, onImageClick, onFavouriteToggle) {
    // map privado que guarde las tarjetas
    const cards = new Map()
    const grid = document.createElement("div")
    grid.className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6"

    images.forEach((image) => {
        const cardComponent = createImageCard(image, onImageClick, onFavouriteToggle)
        cards.set(image.id,cardComponent)
        grid.appendChild(cardComponent.element)

    })
    return {
        element: grid
    }

    // Crear cada tarjeta con createImageCard
}