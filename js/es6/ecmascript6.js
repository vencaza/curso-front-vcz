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

numDoubles = num.forEach(() => {
    console.log('Un num');
});

