let btnGuardar = document.getElementById('btn-guardar');

///Muestra las actividades del boton
console.log(btnGuardar);
console.dir(btnGuardar);

// btnGuardar.onclick = saludar;//Esta forma se puede usar pero la mejor es la siguiente
// btnGuardar.addEventListener('click',saludar);
// btnGuardar.addEventListener('click',function(e){
//     console.log("Has pulsado el boton");
// });

///por input
btnGuardar.addEventListener('click', (event) => {
    event.preventDefault();
    console.log(event);
    console.log("Has pulsado el boton: " + event.target.textContent);

    let inputGenero = document.getElementById('input-genero');
    let inputPelicula = document.getElementById('input-pelicula');

    let nuevoGenero = inputGenero.value.trim();
    let nuevaPelicula = inputPelicula.value.trim();

    if (nuevoGenero && nuevaPelicula) {
        //Guardamos el genero
        savePelicula(nuevoGenero, nuevaPelicula);
    }

});



function savePelicula(genero, pelicula) {
    let xhr = new XMLHttpRequest();
    xhr.open('POST', `https://ejemplos-dc1c1.firebaseio.com/peliculas/${genero}.json`);
    xhr.addEventListener('readystatechange', () => {
        if (xhr.readyState === 4 && xhr.status === 200) {

            Swal.fire({
                text: 'Pelicula guardado',
                type: 'success'
            });

        }
    });
    xhr.send(JSON.stringify(pelicula));
}



