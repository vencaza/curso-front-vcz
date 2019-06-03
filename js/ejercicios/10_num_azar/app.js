var numAzar = Math.floor(Math.random()*51);
var turnos = 0;
var volverJugar = false;
var acierto = false;

while (acierto == false){
    //var numAzar = Math.floor(Math.random()*51);
    console.log(numAzar);
    var numUsuario = prompt('Introduce un num:');
    turnos++;
        if (numAzar == Number(numUsuario))
        {
            acierto = true;       
            alert("Usted ha acertado!!! "+ "Sus turnos han sido: " + turnos);  
            volverJugar = confirm('Volver a Jugar?')
            if (volverJugar==false){
                alert("Chao");            
            }
            else{
                acierto =false;
                turnos = 0;
            }
        }
        else{        
            if (numAzar > Number(numUsuario))
            {
                alert("El numero introducido es menor al sacado");                
            }
            else{
                alert("El numero introducido es mayor al sacado");              
            }
            
        }
}

