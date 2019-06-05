//donde se ha puesto var hasta ahora se pondra Let

let venecia = 'Venecia';
venecia = 'Nazareth'

//Las constantes no se pueden cambiar
const NUM_MAX = 3;

function getNum(p1){
    let n1 = 0;
    var n2 = 1;
    if(p1 === 0){
        let n1 = 3;//El valor de n1 igual a 3 cuando salga de esta funcion no tiene este valor
        var n2 = 4;//en este caso var sobreescribe y al salir se quedaria 4
        console.log(n1);
        console.log(n2);
    }
    console.log(n1);
    console.log(n2);
}
getNum(0)
//La salida seria 3.4.0.4


/*Templates Literals */

let nombre = 'Richie'
let apellido = 'Fly'
let nombreCompleto = 'me llamo' + nombre + ' ' + apellido;
let nombreCompleto2 = `me llamo ${nombre} ${apellido}`;
function Par(){
    return (2+2)%2===0? 'par' : 'impar'
}
let suma = `la suma de 2+2 es ${2+2} y es ${Par()}`;
console.log(nombreCompleto);
console.log(nombreCompleto2);
console.log(suma);

/*funciones flecha */


[1,2,3,4,5].map(function(num){
    return num+2;
})


let doubles = [1,2,3,4,5].map((num) =>{//Si tiene solo un parametro no es necesario poner num entre parentesis si es mas de un parametro se debe poner parentesis
    return num*2;
})

console.log(doubles);

// numDoubles = num.forEach(() => {
//     console.log('Un num');
// });

//Ejemplo funcion flecha
let pelicula = {
    titulo: 'los vengadores',   
    setAnyEstreno : function(year){
        this.yearEstreno = year;     
        let mostrar = () => { //function mostrar()            
            console.log(this);      
        }
        mostrar();
    }
}
pelicula.setAnyEstreno(2019);
console.log(pelicula.yearEstreno);

//Rest Param                               ///El primer parametro sera el idSorteo y de ahi en adelante sera la lista
function getNumLoteria(idSorteo,...nums){ /// ...nums significa que los numeros pasads los convertira en una lista de numeros sin importar su dimension
   
    return `Sorteo ${idSorteo}: ${nums.join(', ')}` // el join convierte el array en string
}

let numGanador = getNumLoteria(1,4,24,31,38);
console.log(numGanador);

///Spread Operator
let tlfDesconocido = ['+34',678277669];
let tlfCharly = ['+34',678277669,'charly'];
let telefono = ['+34',678277669];
function creaNumConPrefijo(prefijo,numTelf,nombre='Desconocido'){
    return `${prefijo} ${numTelf} ${nombre}`;
}
//creaNumConPrefijo(telefono[0],telefono[1]);//eso lo hariamos normalmente
///creaNumConPrefijo(...telefono);//el spread operator lo separa y pone cada posicion en cada parametro
console.log(creaNumConPrefijo(...tlfDesconocido));
console.log(creaNumConPrefijo(...tlfCharly));


///DESESTRUCTURACION
    let serie = {
        titulo: 'Aladdin',
        temporadas: 3,
        episodios: 20,
        finalizada:true
    }

    let {titulo,finalizada,...resProps} = serie; 
    console.log(titulo,finalizada);
    console.log(resProps);





    
let mascotas = ['gato','perro','pez','canario'];
// let gato = mascotas[0];
// let perro = mascotas[1];
// let pez = mascotas[2];


// let [gato,perro,pez,canario] = mascotas; //lo que hace es convertir cada posicion en un objeto
// console.log(gato,perro); 

let [gatos,perro,...restoMascotas] = mascotas; //los 2 primeros en objeto y el resto en un array
console.log(gatos,perro);
console.log(restoMascotas);

