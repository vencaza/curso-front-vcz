const IMAGENES = [
    'https://www.venezuelatuya.com/margarita/yaque/playaoeste.jpg',
    'https://rotativo.com.mx/assets//2018/03/zoologico-de-san-diego-osos-panda-696x463.jpg',
    'https://http2.mlstatic.com/maravillosos-cachorros-golden-retriever-100-garantia-libret-D_NQ_NP_635926-MLA29296916522_012019-Q.jpg',
    'https://media-cdn.tripadvisor.com/media/photo-s/0e/ef/8d/2f/paisaje-de-ribera-del.jpg'
];

let posicionActual = 0;
imagen.setAttribute('src', [IMAGENES[posicionActual]]);

function pasarFoto() {
    if (posicionActual >= IMAGENES.length - 1) {
        posicionActual = 0;
    } else {
        posicionActual++;
    }
    imagen.setAttribute('src', [IMAGENES[posicionActual]]);

}


function retrocederFoto() {
    if (posicionActual <= 0) {
        posicionActual = IMAGENES.length - 1;
    } else {
        posicionActual--;
    }

    imagen.setAttribute('src', [IMAGENES[posicionActual]]);
}

botonAvanzar.addEventListener('click', pasarFoto);
botonRetroceder.addEventListener('click', retrocederFoto);