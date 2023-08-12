/****************************
 ********** CLASES ***********
 *****************************/
// Se nombran en UpperCamelCase

class Bebida {
  // constructor
  constructor(nombre) {
    this.nombre = nombre
  }
  // método de la clase
  info() {
    return 'La bebida es: ', this.nombre
  }
}

const miBebida = new Bebida('Jugo')
console.log(miBebida.info()) // Jugo

// Una funcion como constructor de objeto
// El this hace referencia al objeto que se esta creado
function miBebida2(nombre) {
  this.nombre = nombre

  this.info = function () {
    return this.nombre
  }
}

const miOtraBebida = new miBebida('Cafe')
console.log(miOtraBebida.info())

/************** herencia *************/
// Para reutilizar codigo
// Palabra reservada extends
class Cerveza extends Bebida {
  constructor(nombre, alcohol) {
    super(nombre) // llamo al constructor de la clase padre
    this.alcohol = alcohol
  }

  info() {
    super.info()
    // sobreescribo el metodo de la clase padre
    console.log(`El contenido del alcohol es: ${this.alcohol}`)
  }
}

const cerveza = new Cerveza('Quilmes', 4.9)
