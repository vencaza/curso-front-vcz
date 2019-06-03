var texto = ('Hola Mundo');

console.log(texto);
console.log(typeof(texto));

texto = 3;

//comentario de una linea
/* 
Comentario mas largo 
*/

//Las variables se declaran asi, no puede iniciar por un numero y de caracteres solo se puede $ o _. 
var numero;
let numero2;
/*const numero3;// no se puede cambiar su valor posterior*/
v=4;
var unaVariable //recomendada camelcase
var una_variable //tambien se puede utilizar
var alto,ancho,area;//se puede declarar varias variables al mismo tiempo
var nombre="Me llamo \"Angel\""
var nombre2 = 'Me llamo "Angel"'
var unTexto='';
//Salto de Linea \n
console.log(nombre);
console.log(nombre2)

//Truthy o falsy
if (nombre){ //chequea si es string
    console.log('Valor Truthy')
}

if (unTexto){
    console.log('Valor truthy')
}else{
    console.log('Valor falsy')
}

//Arrays 
var numsLiteral = [1,2,3,4];
var numsConstructor = new Array('6,7,8,9'); 
var ar3Posiciones = new Array(3);
ar3Posiciones[0] =10;
ar3Posiciones[1] =11;
ar3Posiciones.push(13);
console.log(ar3Posiciones);

nombre='Angel';
console.log(nombre[0]);//Se accede a la primera letra de la palabra 'A'

var direccion = ['Calle','Norte',3,'3B'];//Se puede meter varios tipos de datos en el mismo array
console.log(direccion);

//If-Else simplificado
var txtNum = 3 % 2 === 0 ? 'Es par' : 'Es impar';
//Es la simplificacion de un If - else
console.log(txtNum);


//Consola 

console.log("Holaaa");
console.warn("Msj peligro")
console.error("Msj de Error")

// PopUpJS

//alert("Monstramos una alerta");//no devuelve nada
//var esVerdad = confirm('Es vdd lo q dicen?') //almacena aca el resultado true o false
//var miNombre = prompt('Como te llamas'); //retorna lo escrito

//If-else if-else
/*
if(miNombre === 'Paco')
{
    console.log("eres Paco")
}else if (miNombre === "Angel")
{
    console.log('Eres angel')
}
else{
    console.log("No eres paco ni Angel quien eres")
}


//Switch

switch(miNombre){
    case 'Paco':  
        console.log("eres Paco");
    break;    
    case 'Angel':  
        console.log("eres Angel");
    break;  
   default:  
        console.log("No eres paco ni Angel quien eres");
   
}
*/

//Bucles

//For se utiliza cuando se sabe el numero de iteraciones

var nombres = ['Rob','Cata','Luis']
    for(var i=0; i< nombres.length; i++)
    {
        console.log(nombres[i]);
    }

//For in 
for (var i in nombres){
    console.log('FORIN: ' + nombres[i]);

}

// FOR OF
for (var nombre of nombres){
    console.log('FOROF: ' + nombre);

}

//While
var num = prompt('Introduce un num:');

while (Number(num!== -1)){
    console.log('Introduce -1 para salir del bucle')
    num = prompt('Introduce un num')
}

//Do While
var num = prompt('Introduce un num:');
do{
    console.log('Introduce -1 para salir del bucle')
    num = prompt('Introduce un num')
}while (Number(num!== -1))



    
   

