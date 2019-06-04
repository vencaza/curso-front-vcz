


function palindrome(strPalabra){   

    var palabra = strPalabra.replace(/ /g,''); 
    var arrayPalabra = palabra.split(''); 
    var arrayPalabraReves = arrayPalabra.reverse(); 
    console.log(arrayPalabra);
    console.log(arrayPalabraReves);
    var palabraReves = arrayPalabraReves.join('');
    return palabra === palabraReves ? 'Palindrome' : 'No lo es';

    //  for (var i = 0; i<=arrayPalabra.length; i++)
    //  {
    //     for(var j = arrayPalabraReves.length -1; j = 0; j--)
    //      {
    //         if (arrayPalabra[i] !== arrayPalabraReves[j]){
    //              console.log("No es palindrome")
    //              break;
    //         }

    //     }
    //  }

    //  console.log("Palabra es palindrome")

    
    // while (palabra.length!==0){
        
        
    //     var primero = arrayPalabra.shift(); //obtiene el primero y lo saca del array
    //     console.log(primero);
    //     var ultimo = arrayPalabraReves.pop();// obtiene el ultimo y lo saca del array
    //     console.log(ultimo);
    //     if (primero!==ultimo){
    //         console.log("no es palindrome")
    //         break;
    //     }


    // }
    //     console.log("Palabra es palindrome")
    
}



console.log(palindrome('hola aloh'));

