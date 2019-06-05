// https://ejemplos-dc1c1.firebaseio.com/generos.json
// https://ejemplos-dc1c1.firebaseio.com/peliculas/<genero>.json


//PASO 1 : PEDIR LOS GENEROS
//PASO 2 : MOSTRAR POPUP PARA ELEGIR UN GENERO
//PASO 3 : PEDIR LAS PELICULAS DEL GENERO ELEGIDO
//PASO 4 : MOSTRAR LAS PELICULAS RECIBIDAS EN UN POPUP




function getDatos(){
    let xhr = new XMLHttpRequest();
    xhr.open('GET','https://ejemplos-dc1c1.firebaseio.com/generos.json');


    xhr.onreadystatechange = function(){
        if(xhr.readyState === 4 && xhr.status === 200){

            // console.log(xhr.responseText);
            let datos = JSON.parse(xhr.responseText); 
            let generos = datos.join(' , ');       
            console.log(generos);   
            mostrarPeliculas(generos);           

        }
    }

    xhr.send();

}

getDatos();


function mostrarPeliculas(generos){
   var resp =  prompt('Los generos son los siguientes elija uno: ' + generos);
   getPelisporGenero(resp);

}

function getPelisporGenero(resp){
    let xhr = new XMLHttpRequest();
    xhr.open('GET','https://ejemplos-dc1c1.firebaseio.com/peliculas/'+resp+'.json');


    xhr.onreadystatechange = function(){
        if(xhr.readyState === 4 && xhr.status === 200){

            // console.log(xhr.responseText);
            let datos = JSON.parse(xhr.responseText); 
            for (const key in datos) {
                if (datos.hasOwnProperty(key)) {
                    const element = datos[key];
                    let pelis = element.join(' , ');       
                    console.log(pelis);   
                    mostrarPeliculasPorGenero(pelis);                        
                }
            }                  

        }
    }

    xhr.send();

}


function mostrarPeliculasPorGenero(pelis){
     alert('Las peliculas son las siguientes: ' + pelis);    
 
 }




 





