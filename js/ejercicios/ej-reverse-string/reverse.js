function String(value){
    this.value = value;
}

String.prototype.reverse = function(){

    let x = this.value.length;
    let cadenaInvertida = "";
   
    while (x>=0) {
      cadenaInvertida = cadenaInvertida + this.value.charAt(x);
      x--;
    }
    return cadenaInvertida;
  

}


let texto = new String('hola');
let txtrev = texto.reverse();
console.log(txtrev);

String.prototype.reverse2 = function(){

    var arrayPalabra = this.value.split(''); 
    var arrayPalabraReves = arrayPalabra.reverse(); 
    var palabraReves = arrayPalabraReves.join(''); 
    return palabraReves;

}
let texto2 = new String('Venecia');
let txtrev2 = texto2.reverse2();
console.log(txtrev2);


Array.prototype.miIncludes = function(elem){
  return  this.indexOf(elem) > - 1  ? true :false;
}

console.log([1,2,3].miIncludes(2));
console.log(['gato','perro'].miIncludes('pez'));


////Referencias

let perro = {
    nombre: 'Roko',
    edad: 2
}

let perro1 = {...perro};///crea el obj y no iguala las propiedades (forma nueva)
perro1.edad = 3;
console.log(perro1);
let perro2 = Object.assign({},perro); //crea el obj y no iguala las propiedades (forma antigua)
console.log(perro2);

let miArray = [1,2,3];
let nuevoArray = [...miArray];///crea el array y no iguala las propiedades (forma nueva)
nuevoArray.push(5);
let otroArray = [].concat(miArray);///crea el array y no iguala las propiedades (forma antigua)
console.log(miArray);
console.log(nuevoArray);
console.log(otroArray);




    