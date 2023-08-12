/**************************************************
 ******************* PATRON  BUILDER *************
 ************************************************/

// Patron de diseño que se utiliza para la creacion de objetos complejos
// paso a paso, permite separa la construccion del objeto, con configuracion flexible

// Ejemplo con una pizzeria y la forma de crear pizzas

// Es la clase Builder que permite crear un objeto de manera flexible
class PizzaBuilder {
  constructor() {
    this.tipo = ''
    this.tamanio = ''
    this.ingredintes = []
  }

  setTipo(tipo) {
    this.tipo = tipo
    return this // retorno this para luego poder encadenar metodos
  }

  setTamanio(tamanio) {
    this.tamanio = tamanio
    return this
  }

  agregaringredientes(ingrediente) {
    this.ingredintes.push(ingrediente)
    return this
  }

  // Builder
  build() {
    return new Pizza(this.tipo, this.tamanio, this.ingredientes)
  }
}

// definimos la pizza
class Pizza {
  constructor(tipo, tamanio, ingredientes) {
    this.tipo = tipo
    this.tamanio = tamanio
    this.ingrediente = ingredientes
  }

  mostrar() {
    console.log(`Pizza: ${this.tipo} - Tamaño: ${this.tamaño}`)
    console.log('ingredientes: ')
    this.ingredientes.forEach(ingrediente => console.log('- ',ingrediente))
  }
}

// Creo la primer pizza
const pizzaHawaiana = new PizzaBuilder()
  .setTipo('Hawaiana')
  .setTamanio('mediana')
  .agregaringredientes('anana')
  .agregaringredientes('jamon')
  .build()

pizzaHawaiana.mostrar()  
