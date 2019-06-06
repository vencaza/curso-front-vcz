function getGeneros () {
    let xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://ejemplos-dc1c1.firebaseio.com/generos.json');
  
    xhr.addEventListener('readystatechange', () => {
      if (xhr.status === 200 && xhr.readyState === 4) {
        const generosConIds = JSON.parse(xhr.responseText);
        pintarDesplegable(generosConIds);
      }
    })
  
    xhr.send();
  }
  
  function pintarDesplegable(opciones) {
    let desplegable = document.getElementById('desplegable-generos');
    let opcionesHTML = '';
  
    for (let id in opciones) {
      opcionesHTML += `<option value="${opciones[id]}">${opciones[id]}</option>`;
    }
  
    desplegable.innerHTML = opcionesHTML;
  }
  
  getGeneros();
  
  let btnGuardar = document.getElementById('btn-guardar')
  btnGuardar.addEventListener('click', (event) => {
    event.preventDefault();
    let pelicula = document.getElementById('input-pelicula').value.trim();
    let genero = document.getElementById('desplegable-generos').value.trim();
  
    if (pelicula && genero) {
      savePelicula(genero, pelicula);
    }
  })
  
  function savePelicula(genero, pelicula) {
    let xhr = new XMLHttpRequest();
    xhr.open('POST', `https://ejemplos-dc1c1.firebaseio.com/peliculas/${genero}.json`);
  
    xhr.addEventListener('readystatechange', () => {
      if (xhr.status === 200 && xhr.readyState === 4) {
        Swal.fire({
          text: 'Pelicula guardada correctamente...',
          type: 'success'
        })
      }
    })
  
    xhr.send(JSON.stringify(pelicula));
  }