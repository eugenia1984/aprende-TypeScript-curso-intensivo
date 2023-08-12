// Definir una interfaz de la Strategy
interface Estrategia {
  realizar(monto: number): void
}

// implementacion de la clase EstrategiaRegular
class EstrategiaRegular1 implements Estrategia {
  private impuesto: number = 0.16

  realizar(monto: number): void {
    const impuesto = monto + this.impuesto
    const total = monto + impuesto
    console.log(`Venta regular - monto : ${total}, impuesto: ${impuesto}, totla: ${total}`)
  }
}

// Definicion de la calse Contexto
class Contexto1 {
  private estrategia: Estrategia;

  constructor(estrategia: Estrategia) {
    this.estrategia = estrategia
  }

  realizarAccion(monto: number): void {
    this.estrategia.realizar(monto)
  }
}

// Creacion de instancia Contexto y ejecucion de la accion
const estrategiaRegular: Estrategia = new EstrategiaRegular1()
const contexto = new Contexto1(estrategiaRegular)
contexto.realizarAccion(100)