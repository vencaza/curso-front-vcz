function getDatos(url, cb) {
    let xhr = new XMLHttpRequest();
    xhr.open('GET', url);
  
    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4 && xhr.status === 200) {
        let datos = JSON.parse(xhr.responseText);
        cb(datos);
      }
    }
  
    xhr.send();
  }
  
 getDatos('https://ejemplos-dc1c1.firebaseio.com/generos.json', (generos) => {

        document.getElementById('generos').textContent = generos.join(', ');


        let btnBuscar = document.getElementById('btnBuscar');
        btnBuscar.addEventListener('click',()=>{
            console.log("pulsado!!!!!!!");

            let inputGenero = document.getElementById('inputGenero');

            let generoElegido = inputGenero.value;
            console.log(generoElegido);
            getDatos(`https://ejemplos-dc1c1.firebaseio.com/peliculas/${generoElegido}.json`, (peliculas) =>{

                let ulPeliculas = document.getElementById('listaPeliculas');

                for (let id in peliculas){
                    peliculas = peliculas[id];
                }
                
                ulPeliculas.innerHTML = peliculas.map(peli => `<li>${peli}</li>`).join('');
            });

        });
  
 });
  

  
  
//   let spanGeneros = document.getElementById('generos');
//   spanGeneros.textContent = 'Funciona';
  
  
  