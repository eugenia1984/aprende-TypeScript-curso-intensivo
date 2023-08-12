/*******************************
******* PATRON STRATEGY ******* 
******************************/

// La clase Context actua como el contexto en donde se ejecuta una estrategia
class Context {
  constructor(strategy) {
    this.strategy = strategy
  }

  // Metodo para establecer la estrategia en tiempo de ejecucion
  setStrategy(strategy) {
    this.strategy = strategy
  }

  // Metodo para estrablecer la estrategia actual para realizar una operación
  executeStrategy() {
    return this.strategy.execute()
  }
}

// Es ina interface que define el metodo execute y debe ser implementado por las demas estrategias
class Strategy {
  execute() {
    throw new Error('Metodo execute debe ser implementado por una estrategia completa')
  }
}

// Las tres estrategias que implementan el metodo execute
class ConcreteStrategy1 {
  execute() {
    return 'Ejecutando la estrategia concreta 1'
  }
}

class ConcreteStrategy2 {
  execute() {
    return 'Ejecutando la estrategia concreta 2'
  }
}

class ConcreteStrategy3 {
  execute() {
    return 'Ejecutando la estrategia concreta 3'
  }
}

const context = new Context( new ConcreteStrategy1())

// Ejecucion inicial
console.log(context.executeStrategy())

// Cambio de estrategia en tiempo de ejecucion
context.setStrategy(new ConcreteStrategy2())
console.log(context.executeStrategy())

// Cambio de estrategia nuevamente
context.setStrategy(new ConcreteStrategy3())
console.log(context.executeStrategy())