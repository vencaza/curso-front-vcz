var persona ={
    nombre: 'Charly',
    apellido: 'Falco',
    nombreCompleto : function (){
        return this.nombre + ' ' + this.apellido;
    }
}

console.log(persona.nombre);
console.log(persona['nombre']);

var clave = 'apellido';
console.log(persona[clave]);
console.log(persona.nombreCompleto())


var pelicula = {
    titulo: 'los vengadores',
    director:{nombre:'Hermano1',apellido:'Russo'},
    genero: ['Accion','Superheroes'],
    setAnyEstreno : function(year){
        this.yearEstreno = year;
      //  var self = this;
        function mostrar(){
            console.log(this);
         //   console.log(self);
        }
        mostrar.call(this);
    }
}
pelicula.setAnyEstreno(2019);
console.log(pelicula.yearEstreno);
//Crear varios objetos
/*var serie =
{
    titulo : 'TBBT',
    episodios: 180,
    episodiosVistos :178
}*/

    function Serie (titulo,episodios,episodiosVistos){
        this.titulo = titulo;
        this.episodios = episodios;
        this.episodiosVistos = episodiosVistos;
    }


    var tbbt =  new Serie('TBBT',180,178);
  var got =  new Serie('game of thrones',180,178);
  console.log(tbbt);
  console.log(got);
    

//un objeto vacio 

var objVacio ={};
//objeto de serie vacio
var objVacioSerie = new Serie ('',0,0);

var cancionBatman = new Array(16).join('what'-1) + 'Batman!';
console.log(cancionBatman);


/*----------------------------------EJ14-------------------------------------------*/
var numeros = [1,34,12,64,72,343,64,6655,45,22,71]
var ej14 = numeros.map(function(num){
    return num%2 === 0? 'PAR' : num;

});
console.log(ej14);
/*---------------------------------------------------------------------------------*/
text = "hola mundo";
console.log(text.length);//la longitud del string
console.log(text.toUpperCase());//convierte todas las letras en may
console.log(text.replace(/o/g,0))//toma en cuenta todas las o de la frase
console.log(text.substring(3,6))//desde la pos 3 a la 6
console.log(text.includes('hola'));
console.log(text.split(' '))


/*---------------------------------------------------------------------------------------*/
var colores =['Amarillo','Azul','Rojo'];
colores.push('blanco'); //lo agrega al final del array
var ultimo = colores.pop();// obtiene el ultimo y lo saca del array
var primero = colores.push(); //
console.log(colores);

var colores =['Amarillo','Azul','Rojo'];
colores.unshift('verde'); // lo añade al principio
colores = colores.concat([ultimo,primero])
console.log(colores);

/*---------------------------------------------------------------------------------------*/

var hoy = new Date();
console.log(hoy.getFullYear());//el año
console.log(hoy.getDay());//el dia de la semana
console.log(hoy.getDate());//obtiene la fecha del dia

/*---------------------------------------------------------------------------------------*/
var vcz={nombre:'Venecia'}
var vczJSON = JSON.stringify(vcz)//convierte obj a json
var vczJS = JSON.parse(vczJSON)//convierte obj a json

console.log(vcz);//formato de json
console.log(vczJSON); //formato string pero es Json
console.log(vczJS); //formato de json otra vez


///PROTOTYPE
function Coche(marca,modelo,color){
    this.marca = marca;
    this.modelo = modelo;
    this.color = color;
    // this.pintar = function(nuevoColor){
    //     this.color = nuevoColor;

    // }
}

Coche.prototype.pintar = function(nuevoColor){
    this.color = nuevoColor;

}

let tesla = new Coche('Tesla','Roadter','Azul');
let audi = new Coche('Audi','A3','negro');
let ford = new Coche('Ford','focus','blanco');
console.log(tesla);
console.log(audi);
tesla.pintar('verde');
console.log(tesla)














































