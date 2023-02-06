var listaFilme = [];
var listaTrailer = [];

function adicionarFilme() {
  var filmeFavorito = document.getElementById('filme').value;
  var trailerFilmeFavorito = document.getElementById('trailer').value;
  if ((filmeFavorito.endsWith('jpg'))) {  
  
     //document.getElementById('mensagemDeErro').innerHTML = '';
    //document.getElementById('filme').value = '';
    listaFilme.push(filmeFavorito);
    listaTrailer.push(trailerFilmeFavorito);
    recarregarFilmes();
  }
  
  else {
    alert('Endereço de imagem inválido!')
  }
  
  
  function recarregarFilmes(){
 
  var elementoListaFilmes = document.getElementById('listaFilmes');
  elementoListaFilmes.innerHTML = '';
  for(i=0; i < listaFilme.length ; i++){
    elementoListaFilmes.innerHTML += `<a href=" ${listaTrailer[i]} "><img src=" ${listaFilme[i]} "></a>`;
    
  }
}
  
function recarregarFilmes(){
 
  var elementoListaFilmes = document.getElementById('listaFilmes');
  elementoListaFilmes.innerHTML = '';
  for(contador=0; contador < listaFilme.length ; contador++){
    elementoListaFilmes.innerHTML += `<a href=" ${listaTrailer[contador]} "><img src=" ${listaFilme[contador]} "></a>`;
    
  }
}
  
 }