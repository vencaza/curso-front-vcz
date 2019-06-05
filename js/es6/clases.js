class Coche {
    static numRuedas() {
        return 4;
    }
    
    constructor(marca ='',modelo='',color=''){
        this.marca = marca;
        this.modelo = modelo;
        this.color = color;
    }


    pintar(nuevoColor){
        this.color = nuevoColor;
    }
}


let tesla = new Coche('Tesla','Roadter','Azul');
let audi = new Coche();

console.log(tesla);
tesla.pintar('verde')
console.log(tesla);


console.log(audi);

console.log(Coche.numRuedas());


/*-----------------------HERENCIA--------------*/
class Persona {
    constructor(nombre,apellido){
        this.nombre = nombre;
        this.apellido = apellido;
    }

    getNombreCompleto(){
        return this.nombre + ' ' + this.apellido;
    }
}

class Desarrollador extends Persona {
    constructor(nombre,apellido,puesto){
        super(nombre,apellido);
        this.puesto =  puesto; //this es publico
        var edad = 20; //  va a ser privado si lo declaro con var o let 
        this.getEdad = function(){
            return edad;
        }
        this.setEdad = function(nuevaEdad){
            return nuevaEdad;
        }
    }
}

let venecia = new Desarrollador('Venecia','Castillo','JS');
console.log(venecia.getNombreCompleto());
console.log(venecia.getEdad());