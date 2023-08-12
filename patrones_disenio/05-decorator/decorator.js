/******************************************
**************  DECORATOR  **************** 
******************************************/
// Conocido como WRAPER, agrega comportamiento adicional
// a un objeto dinámicamente, sin modificar su estructura.
// Para extender la funcionalidad de un objeto, 
// sin la necesidad de crear una clase o alterar su comportamiento
// o implementacion existente.
// Es una forma flexible de agregar una nueva capacidad
// a un objeto en tiempo de ejecucion

// Ejemplo una app de postres
// La clase Basica
class Pastel {
  obtenerDescripcion() {
    return 'Pastel Basico'
  }

  obtenerCosto() {
    return 1000
  }
}

// Decorador base: DecoradorPastel
class DecoradorPastel extends Pastel {
  constructor(pastel) {
    super()
    this.pastel = pastel
  }

  obtenerDescripcion() {
    return this.pastel.obtenerDescripcion()
  }

  obtenerCosto() {
    return this.pastel.obtenerCosto()
  }
}

// Decorador: CremaBatida
class CremaBatida extends DecoradorPastel {
  obtenerDescripcion() {
    return `${this.pastel.obtenerDescripcion()} crema batida`
  }

  obtenerCosto() {
    return this.pastel.obtenerCosto() + 300
  }
}

// Decorador: Chocolate
class Chocolate extends DecoradorPastel {
  obtenerDescripcion() {
    return  `${this.pastel.obtenerDescripcion()}, chocolate`
  }

  obtenerCosto() {
    return this.pastel.obtenerCosto() + 400
  }
}

// Decorador: Frutas
class Frutas extends DecoradorPastel {
  obtenerDescripcion() {
    return  `${this.pastel.obtenerDescripcion()}, frutas`
  }

  obtenerCosto() {
    return this.pastel.obtenerCosto() + 200
  }
}

// Creamos un pastel basico y aplicamos decoradores
const pastelBasico = new Pastel()
const pastelDecorado = new CremaBatida(new Chocolate(new Frutas(pastelBasico)))
console.log(pastelDecorado.obtenerDescripcion()) // Pastel Basico, frutas, chocolate crema batida,
console.log(pastelDecorado.obtenerCosto())