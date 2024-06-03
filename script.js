//condições para toggleMode
function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  //pegar a tag img
  const img = document.querySelector("#profile img")

  //substituir img
  if(html.classList.contains("light")) {
    //se tiver light-mode, adicionar a imagem light
    img.setAttribute("src", "./assets/avatar-light.png")
  } else {
    //se tiver sem light-mode, mantem a pattern
    img.setAttribute("src", "./assets/avatar.png")
  }

  if(html.classList.contains("light")){
    img.setAttribute('alt', 'foto do Gabriel Henrique sorrindo com fundo laranja')
  } else {
    img.setAttribute(
      "alt",
      "Foto de Gabriel serio, usando uma roupa social de oculos preto com um fundo de natureza"
    )
  }
}
