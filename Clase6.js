// Clases
class silla{
    // Constructor
    constructor(nombre, color, precio, modelo){
        this.nombre = nombre;
        this.color = color;
        this.precio = precio;
        this.modelo = modelo;
    }
    cambiarColor(nuevoColor){
        this.color = "Negro";
    }
    cambiarPrecio(nuevoPrecio){
        this.precio = nuevoPrecio;
    }
    cambiarModelo(nuevoModelo){
        this.modelo = nuevoModelo;
    }
}
silla.prototype.mostrarprecio = function(){
    console.log(this.precio);
}
const sillaCasa = new silla("Rimax", "Blanco", 320, "ZXX300")
console.log(sillaCasa);
sillaCasa.mostrarprecio();

// Herencia
class sillaGamer extends silla{
    constructor(nombre, color, precio, modelo, tamaño, importada, diseño){
        super(nombre, color, precio, modelo);
        this.tamaño = tamaño;
        this.importada = importada;
        this.diseño = diseño;
    }
}
console.log(sillaGamer);
const nuevaSillaGamer = new sillaGamer("Sublime", "Rojo", 520, "RX40",50, true, "confort")
console.log(nuevaSillaGamer);