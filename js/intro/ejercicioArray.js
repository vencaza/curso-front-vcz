function Serie (titulo,episodios,episodiosVistos){
    this.titulo = titulo;
    this.episodios = episodios;
    this.episodiosVistos = episodiosVistos;
    this.fnl = function(){
      if((this.episodios - this.episodiosVistos) == 0)
      {
         return true;
      }
      else{
        return false;
      }
    }
}


var serie1 = new Serie('The Walking Dead', 180, 178);
var serie2 = new Serie('Game of Thrones', 180, 180);
var serie3 = new Serie('TBBT', 180, 178);
var serie4 = new Serie('THE HILLS', 205, 178);

var arraySerie = [serie1,serie2,serie3,serie4];

 function SerieFinalizada(arraySerie){
    arraySeriesNoFinalizadas = [];
     arraySeriesNoFinalizadas = arraySerie.filter(function(elem){
        return elem.fnl() == false; 
    });
    // arraySerie.forEach(function(element) {
    //     if (element.fnl() == false)
    //     {
    //        arraySeriesNoFinalizadas.push(element);

    //     }
    //  });

     return arraySeriesNoFinalizadas

 }

 console.log(SerieFinalizada(arraySerie));




 



