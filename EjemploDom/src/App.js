import { createGalleryApp } from "./components/GalleryApp"

export const App = () => {
  const GalleryApp = createGalleryApp()
  return GalleryApp.element
}
