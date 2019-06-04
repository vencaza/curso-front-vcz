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


