export default function imageModal(ImageUrl) {
    const imageDiv = document.createElement("div")  
    imageDiv.className = "fixed inset-0 bg-black/80 flex justify-center items-center z-[9999]"

    const img = document.createElement("img")
    img.src = ImageUrl
    img.className = "max-w-[90%] max-h-[90%]"

    imageDiv.appendChild(img)
    document.body.appendChild(imageDiv)

    // Cerrar con click
    imageDiv.onclick = () => imageDiv.remove()

    // Cerrar con ESC
    const escHandler = (e) => {
        if (e.key === "Escape") {
            imageDiv.remove()
            document.removeEventListener("keydown", escHandler)
        }
    }
    document.addEventListener("keydown", escHandler)
    
    return {
        element: imageDiv
    }
}
