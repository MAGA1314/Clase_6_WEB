// Clases
// clase publica y ´privada
class silla{
    // Constructor
    #precioCompraDistribuidor;
    #maximoDescuento;
    #nombreVendedor;

    constructor(nombre, color, precio, modelo){
        this.nombre = nombre;
        this.color = color;
        this.precio = precio;
        this.modelo = modelo;
        this.#precioCompraDistribuidor = 1200;
        this.#maximoDescuento = 0.3;
        this.#nombreVendedor = "juan";
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
    cambiarNombreVendedor(nombreVendedor){
        this.#nombreVendedor = nombreVendedor;
    }
    mostrarvendedor(){
        console.log(this.#nombreVendedor);
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
    constructor(nombre, color, precio, modelo, tamaño, importada, diseño, material){
        super(nombre, color, precio, modelo);
        this.tamaño = tamaño;
        this.importada = importada;
        this.diseño = diseño;
        this.material = material;

    }
}

console.log(sillaGamer);
const nuevaSillaGamer = new sillaGamer("Sublime", "Rojo", 520, "RX40",50, true, "confort", "cuero");
console.log(nuevaSillaGamer);

console.log(sillaCasa.mostrarvendedor());
console.log(nuevaSillaGamer.mostrarvendedor());