// let promesa = new Promise((resolve, reject) => { /*Nos va a permitir trabajar con operaciones asincronas */
//     setTimeout(() => {
//         let msg = 'El canario esta en la jaula...';
//         resolve(msg);
//     }, 1000);
// }).then(msg => {
//     console.log('Msg ' + msg);
// })

// getDatos('https://ejemplos-dc1c1.firebaseio.com/generos.json').then((misDatos)=>{ /*Todas las promesas tienen un metodo then  */
//     console.log(misDatos);   
// })

//Paso1: Peticion Get a la URL
function getDatos(url) {
    //definiendo la promesa y devolviendola 
    return new Promise((resolve, reject) => {
        let xhr = new XMLHttpRequest();
        xhr.open('GET', url);

        xhr.addEventListener('readystatechange', () => {
            if (xhr.readyState === 4 && xhr.status === 200) {
                let datos = JSON.parse(xhr.responseText);
                resolve(datos);
            }
        });

        xhr.send();
    });

}
//Paso4: recorre un obj y devuelve un array con los valores.
function getArrayFromOnject(obj){
    const arr = [];
    for (let id in obj){
        arr.push(obj[id]);
    }
    return arr;
}

// Paso 3:Funcion que muestra el propmt para elegir el genero para buscar las peliculas
function getGeneroElegido(generos){
    const arrGenero = getArrayFromOnject(generos);    
    return prompt (`Elige un genero: ${arrGenero.join(', ')} `);
}

//Paso2: llamada a get datos para obtener los generos
getDatos('https://ejemplos-dc1c1.firebaseio.com/generos.json').then((misDatos)=>{ /*Todas las promesas tienen un metodo then  */
    console.log(misDatos);
    let genero = getGeneroElegido(misDatos);
    return getDatos(`https://ejemplos-dc1c1.firebaseio.com/peliculas/${genero}.json`)

})//Una vez se elija el genero se devuelven las peliculas
.then((objPeliculas) => {
    const peliculas = getArrayFromOnject(objPeliculas);
    alert(`${funcionChorra(peliculas).join('\n')}`);
})

//PAso 5:Devuelve el array con un guion adelante
function funcionChorra (arr){
    // var array = arr.map(function(elem){
    //     return '-' + elem ;
    // });
    return arr.map(item => `-${item}`);    
}

// let arr = funcionChorra(['peli1','peli2']);
// console.log(arr);