var traductor = (function(){
    console.log('Bienvenido al traductor');

    var en = {'hola': 'hello',
                'adios': 'bye'}
    var it = {'buenos dias': 'buongiorno'}
    

    function traduce(texto,idioma){
        var txtTraducido;
        if (idioma == 'en'){
            txtTraducido = en[texto]
        }  
        if (idioma == 'it'){
            txtTraducido = it[texto]
        }       

        return txtTraducido;
    }


    return{
       traduce:traduce,
       en:en
    }

})()

traductor.traduce('hola','en');
