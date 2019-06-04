var global = 1;
global2 = 2;
///Estas 2 variables serian globales, xq estan fuera de cualquier funcion, si no se pone var se defin como global sin importar el lugar donde se posicionenç

function fn1(){
    var local1 = 3;
    local2= 4;//es global xq no lleva var 
console.log(global);
console.log(global2);
    function fn2(){
        console.log(local1)
    }
    fn2();
}
fn1();
console.log(global);
console.log(global2);
console.log(local2);
//console.log(local1);

