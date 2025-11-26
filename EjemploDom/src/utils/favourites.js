function isFavourite(id) {
  const favoritos = JSON.parse(localStorage.getItem("Favoritos") || "[]")
  return favoritos.includes(id)
}

export default isFavourite


export function setFavourite(id) {
  const favoritos = JSON.parse(localStorage.getItem("Favoritos") || "[]")
  if (favoritos.includes(id)){
    console.log("ESTA BORRANDO");
    console.log(id);
    const newFavoritos = favoritos.filter((favorito) => favorito !== id)
    console.log(favoritos);
    console.log(newFavoritos);
    localStorage.setItem("Favoritos",JSON.stringify(newFavoritos))
  }else{
    favoritos.push(id)
    localStorage.setItem("Favoritos",JSON.stringify(favoritos))
  }
  
}
