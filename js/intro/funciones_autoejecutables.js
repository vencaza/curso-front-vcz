//funcion autoejecutable, se ejecuta sola y nos devolvera algo que hace accesible y solo se ejecutan 1 vez.
//Se convierte en una expresion y se ejecuta 1 sola vez en toda la ejecucuion del programa
//Se ejecutan 

var miCalculadora = (function(){
    console.log('Hola');



function suma(n1,n2){
    return n1 + n2;
}
function resta(n1,n2){
    return n1 - n2;
}
function multiplica(n1,n2){
    return n1 * n2;
}
function divide(n1,n2){
    return n1 / n2;
}

return{
    suma:suma,
    resta:resta,
    divide:divide,
    multiplica:multiplica
}

})()

miCalculadora.suma(1,2);

function suma(){
    return 1;
}