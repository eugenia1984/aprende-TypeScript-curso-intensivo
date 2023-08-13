/*********************************************************
******************   PATRON  FACTORY ********************* 
*********************************************************/

// Se utiliza para encapsular la creacion de objetos
// Proporciona una interfaz, para crear objetos de diferentes tipos,
// sin tener que exponer la lógica de creación directamente al cliente
// se usa en objetos complejos, o cuando varians ciertas condiciones

/**
 * Representa la clase que queremos crear
 */
class Producto {
  constructor(nombre, precio) {
    this.nombre = nombre
    this.precio = precio
  }

  mostrarInfo() {
    console.log(`Producto ${nombre}, Precio: $ ${this.precio}`)
  }
}


// definimos una fabrica para crear producto
/**
 * Una clase abstracta que define la interface para crear un producto
 */
class Fabricaproductos {
  crearProducto(nombre, precio) {
    throw new Error('Este método debe ser implementado por la(s) clase(s) hija')
  }
}

// Definimos una clase concreta de la fabrica (FabricaSimple)
/**
 * Clase concreta, que hereda de Fabricaproductos y proporciona
 * la implementación específica para crear productos.
 * Tiene su propia logica de creacion y devuelve elproducto correspondiente
 */
class FabricaSimple extends Fabricaproductos{
  crearProducto(nombre, precio) {
    return new Producto(nombre, precio)
  }
}

// Definimos una clase concreta de la fabrica (FabricaDescuento)
/**
 * Clase concreta, que hereda de Fabricaproductos y proporciona
 * la implementación específica para crear productos.
 * Tiene su propia logica de creacion y devuelve elproducto correspondiente
 */
class FabricaDescuento extends Fabricaproductos {
  crearProducto(nombre, precio) {
    const precioConDescuento = precio -10
    return new Producto(nombre, precioConDescuento)
  }
}

// Creo las instancias
const fabricaSimple = new FabricaSimple()

const producto1 = fabricaSimple.crearProducto('Producto 1', 200)
producto1.mostrarInfo()

const fabricaDescuento = new FabricaDescuento()
const producto2 = fabricaDescuento.crearProducto('Producto 2', 200)
producto2.mostrarInfo()