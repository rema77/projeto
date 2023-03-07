function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  // pegar a tag ing
  const img = document.querySelector("#profile img")

  // substituir a img
  if (html.classList.contains("light")) {
    // se tiver light mode, adicionar imagem light
    img.setAttribute("src", "./assets/avatar-light.png")
    img.setAttribute("alt", "Dia")
  } else {
    // se não tiver light mode, adicionar imagem normal
    img.setAttribute("src", "./assets/avatar.png")
    img.setAttribute("alt", "Noite")
  }
}
