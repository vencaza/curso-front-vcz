let btnGuardar = document.getElementById('btn-guardar-genero');

///Muestra las actividades del boton
console.log(btnGuardar);
console.dir(btnGuardar);

// btnGuardar.onclick = saludar;//Esta forma se puede usar pero la mejor es la siguiente
// btnGuardar.addEventListener('click',saludar);
// btnGuardar.addEventListener('click',function(e){
//     console.log("Has pulsado el boton");
// });
btnGuardar.addEventListener('click', (event) => {
    event.preventDefault();
    // console.log(event);
    // console.log("Has pulsado el boton: " + event.target.textContent);

    let inputGenero = document.getElementById('nuevo-genero');
    let nuevoGenero = inputGenero.value.trim();
    if (nuevoGenero) {
        //Guardamos el genero
        saveGenero(nuevoGenero).then(() =>{
           return Swal.fire({
                text: 'Genero guardado',
                type: 'success'
            });
        }).then(() =>{
            location.href = 'http://localhost:8080/admin/peliculas.html';
        });
    }

});

// function saveGenero(genero) {
//     let xhr = new XMLHttpRequest();
//     xhr.open('POST', 'https://ejemplos-dc1c1.firebaseio.com/generos.json');
//     xhr.addEventListener('readystatechange', () => {
//         if (xhr.readyState === 4 && xhr.status === 200) {

//             Swal.fire({
//                 text: 'Genero guardado',
//                 type: 'success'
//             });

//         }
//     });
//     xhr.send(JSON.stringify(genero));
// }

// function saludar() {
//     console.log('Hola');
// }

function saveGenero(genero){

   return fetch('https://ejemplos-dc1c1.firebaseio.com/generos.json',{
        method: 'POST',
        body: JSON.stringify(genero)
    })
}