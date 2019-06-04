function muestraMsg(msg){
    console.log(msg);
}

muestraMsg("Mensaje");//funciona
muestraMsg();//no funciona
muestraMsg("Mensaje",2);//pasa el mensaje y el 2 no importa es any
//para acceder a ese 2 seria asi
//arguments
function muestraArgs(arg1){
    console.log(arguments)//arguments agarra los argumentos 
}

muestraArgs(1,2,3,4)

//funciones recursivas funciones que se llamand a si mismas

function sumatorio(num){
    if(num === 1){
        return num;
    }
    else{
        return num + sumatorio(num -1);
    }
}

//sumatorio(5);
console.log(sumatorio(5));

//CallBacks
function ejemploCallbacks(){
    console.log(1); //se muestra primero
    setTimeout(function(){
        console.log(2); //por ultimo este xq tiene un solo hilo y es asincrona

    },500);
    console.log(3);//luego esta
}
//ejemploCallbacks();



/*
//Funciones anonimas, por ejemplo callback

function (){
    //Aqui se hace algo
}


validar('angel',function(){
    console.log("guardados");
});*/


/*
function validar(nombreIntroducido,cb){
    console.log('pidiendo nombres validos');
    setTimeout(function(){
    console.log('Nombres validos recibidos');
   
        if(['angel','pedro','luis'].includes(nombreIntroducido))
        {
            cb();
            //return true;
        }   
    },300);
}*/



function guardar(){
    console.log('Datos Guardados');
}
/*
var esValido = validar('angel',guardar);
//console.log("es valido" + esValido)
if(esValido){
    guardar();
}*/

var series = ['TWD','GOT','CHERNOBYL'];
series.forEach(function(elem, pos){
    console.log(pos + ' : ' + elem)
});

//Funciones de Arrays

var nums = [1,2,3,4,5];
var numsImpares = nums.filter(function(elem){
    return elem % 2 !== 0;
});

console.log(numsImpares);

var numImparesX3 = numsImpares.map(function(elem){
    return elem *3;
});

console.log(numImparesX3);

var sumaTotalImparesX3 = numImparesX3.reduce(function(acc,elem){
    return acc += elem;
},10); //


console.log(sumaTotalImparesX3);