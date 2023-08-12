/*******************************
******* PATRON STRATEGY ******* 
******************************/
class Context {
  constructor(strategy) {
    this.strategy = strategy
  }

  // Metodo para establecer la estrategia en tiempo de ejecucion
  setStrategy(strategy) {
    this.strategy = strategy
  }

  // Metodo para estrablecer la estrategia actual para realizar una operación
}