function adicionarFilme() {
  var filmeFavorito = document.getElementById('filme').value
  var elementoListaFilmes = document.getElementById('listaFilmes')
  if ((filmeFavorito.endsWith('jpg'))) {  
  
    elementoListaFilmes.innerHTML = elementoListaFilmes.innerHTML + '<img src=' + filmeFavorito +  '>'
    document.getElementById('filme').value = '';
  }
  
  else {
    alert('Endereço de imagem inválido!')
  }
}