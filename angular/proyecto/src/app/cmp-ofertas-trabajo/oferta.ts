export class Oferta {

    constructor(private _id: number,private _titulo: string, private _descripcion: string, private _logo: string, private _inscrito: boolean = false) { }

    get titulo() {
        return this._titulo;
    }
    set titulo(val: string) {
        this._titulo = val;
    }

    get descripcion() {
        return this._descripcion;
    }
    set descripcion(val: string) {
        this._descripcion = val;
    }

    get logo() {
        return this._logo;
    }
    set logo(val: string) {
        this._logo = val;
    }

    get inscrito() {
        return this._inscrito;
    }
    set inscrito(val: boolean) {
        this._inscrito = val;
    }

    get id() {
        return this._id;
    }
    set id(val: number) {
        this._id = val;
    }

}
// oferta.titulo = 'sda';se ejecuta el setter
//console.log(oferta.titulo)se ejecuta el getter
// Oferta.titulo = oferta.titulo + '!!!' ejecuta el getter y setter



