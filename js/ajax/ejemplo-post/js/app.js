window.onload = function(){

function getPeliculasYGeneros() {
    return new Promise((resolve, reject) => {
        let xhr = new XMLHttpRequest();
        xhr.open('GET', 'https://ejemplos-dc1c1.firebaseio.com/peliculas.json');
        xhr.addEventListener('readystatechange', () => {
            if (xhr.readyState === 4 && xhr.status === 200) {

                const generosYPeliculas = JSON.parse(xhr.responseText);
                resolve(generosYPeliculas);
            }
        })
        xhr.send();
    })
}

getPeliculasYGeneros().then(datos => {
    let html = getGenerosPeliculasHTML(datos);
    //console.log(html);
    pintarDatos(html);
})

function pintarDatos(html) {
    let divContenedor = document.getElementById('secciones-peliculas');
    divContenedor.innerHTML = html;
    inicializarListenerBotones();
}

function inicializarListenerBotones() {
    let botonesEliminar = document.getElementsByClassName('btn-danger');

    for (let btn of botonesEliminar) {
        btn.addEventListener('click', (event) => {
            deletePelicula(btn.getAttribute('data-genero'), btn.id).then(() => {
                Swal.fire({
                    text: 'Pelicula eliminada correctamente...',
                    type: 'success'
                })
            })
                .then(() => {
                    location.href = 'http://www.localhost:8080/index.html';
                })
        })
    }
}

function deletePelicula(genero, id) {
    return fetch(`https://ejemplos-dc1c1.firebaseio.com/peliculas/${genero}/${id}.json`, {
        method: 'DELETE',
        body: JSON.stringify(genero)

    });

}



function getPeliculasHTML(peliculas, genero) {
    const nombresPeliculas = [];
    console.log(peliculas);
    for (let id in peliculas) {
        nombresPeliculas.push(`
            <li>
                ${peliculas[id]}
                <button type="button" class="btn btn-danger" id="${id}" data-genero="${genero}" disabled>Eliminar</button>
                
            </li>
        `);

    }
    return `
    <ul>
    ${nombresPeliculas.join('')}
    </ul>
    `;
}

function getGenerosPeliculasHTML(datos) {
    let resultado = '';
    for (let genero in datos) {
        resultado += `
            <section>   
                <h2>${genero}</h2>
                <article>
                    ${getPeliculasHTML(datos[genero], genero)}
                </article>
            </section>
            <hr>`;
    }

    return resultado;

}

let checkEdicion = document.getElementById('edicion');
checkEdicion.addEventListener('change', (event) => {
    let botonesEliminar = document.getElementsByClassName('btn-danger');

    for (let btn of botonesEliminar) {
        if(event.target.checked == true){
            btn.removeAttribute('disabled');
        }else{
            btn.setAttribute('disabled', true);
        }
        
    }
})


}