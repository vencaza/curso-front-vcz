
jugar();

function jugar(){
    
    var ptosUsuario = 0;
    var ptosMaquina = 0;
    var ganador = false;

    while (ptosUsuario <= 20){
        var numAzar = Math.ceil(Math.random()*10+1);
        numeroJugar = confirm('Quiere un numero?')
        if(numeroJugar){
            ptosUsuario = ptosUsuario + numAzar;            
            console.log("Puntaje Usuario:" + ptosUsuario );     
            if (ptosUsuario === 20){
                console.log("Gana Usuario" );  
                ganador = true;   
                break;
            }    
        }
        else{
            break;
        }
    }
    if (ganador === false){
        while (ptosMaquina <= 17){
            numAzar = Math.ceil(Math.random()*10+1);
            ptosMaquina = ptosMaquina + numAzar;
            console.log("Puntaje Maquina:" + ptosMaquina );
            if (ptosMaquina === 20){
                console.log("Gana Maquina" );   
                ganador = true;    
                break;
            } 
                    
        }    
    }    
       if (ganador === false){
        validarGanador(ptosUsuario,ptosMaquina)
       }       
       
    

}   

function validarGanador(ptajeUsuario,ptajeMaquina){
    var ganadorJugador = 20-ptajeUsuario; 
    var ganadorMaquina = 20- ptajeMaquina;

    if ((ptajeUsuario > ptajeMaquina) && (ptajeUsuario < 20)) {
        console.log("Ganador Usuario");

    }
    else if ((ptajeMaquina > ptajeUsuario)  && (ptajeMaquina < 20)){
        console.log("Ganador Maquina");

    }
    else if ((ptajeUsuario > 20) && (ptajeMaquina <= 20)){
        console.log("Ganador Maquina");
    }
    else if ((ptajeMaquina > 20) && (ptajeUsuario <= 20)){
        console.log("Ganador Usuario");
    }

    else if (ptajeMaquina == ptajeUsuario){
        console.log("empate");
    }
    else if (ganadorJugador > ganadorMaquina)  {
        
        console.log("Ganador Usuario");
    }
    else  if (ganadorMaquina > ganadorJugador)  {
        
        console.log("Ganador Maquina");
    }
}

