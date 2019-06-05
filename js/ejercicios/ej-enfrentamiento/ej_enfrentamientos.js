let equipos = ['Valencia','levante','Real Madrid','At Madrid','At Bilbao','Barcelona','Sevilla','Betis'];
//let equipos = ['Valencia', 'levante', 'Real Madrid', 'At Madrid', 'At Bilbao', 'Barcelona', 'Sevilla'];

function enfrentamiento(equipos) {
    let equipolength = equipos.length;
    while (equipolength >= 1) {
        let [equipo1] = equipos.splice(Math.floor(Math.random() * equipos.length), 1);
        equipolength--;
        if (equipolength == 0) {
            console.log(`${equipo1} pasa a la siguiente ronda`);
        }
        else {
            let [equipo2] = equipos.splice(Math.floor(Math.random() * equipos.length), 1);
            equipolength--;
            console.log(`${equipo1} -- ${equipo2}`);
        }
    }
}
enfrentamiento(equipos);