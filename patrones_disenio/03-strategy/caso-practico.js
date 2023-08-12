// contexto con la estrategia que se va a usar
class Contexto {
  constructor(estrategia) {
    this.estrategia = estrategia
  }

  realizarAccion(monto) {
    this.estrategia.realizar(monto)
  }
}

// Definicion de la clase EstrategiaRegular
class EstrategiaRegular {
  constructor() {
    this.impuesto = 0.16
  }

  realizar(monto) {
    const impuesto = monto * this.impuesto
    const total = monto + impuesto
    console.log(`Venta regular - monto : ${total}, impuesto: ${impuesto}, totla: ${total}`)
  }
}

const estrategiaRegular = new EstrategiaRegular()
const contexto = new Contexto(estrategiaRegular)
contexto.realizarAccion(1000)