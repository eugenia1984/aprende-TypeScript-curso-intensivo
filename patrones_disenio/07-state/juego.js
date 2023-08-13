/**
 * Actua como el contexto, mantiene una instancia del estado actual
 * en la escena del juego
 */
class EscenaJuego {
  constructor() {
    this.estado = new EstadoInicio()
  }

  cambiarEstado(estado) {
    this.estado = estado
  }

  ejecutar() {
    this.estado.ejecutar()
  }
}

// Definir la clase Estado(EstadoEscena)
/**
 * Representa el estado abstracto, define las operaciones comunes
 * para los idfrentes estados de la escena
 */
class EstadoEscena {
  ejecutar() {
    throw new Error('Este método debe ser implementado por las clases hijas')
  }
}

/**
 * Clase de estado concreto que implementa un comportamiento
 * específico para un estado determinado
 */
class EstadoInicio extends EstadoEscena {
  ejecutar() {
    console.log('Iniciando la escena del juego')
    // cambiar el estado de juego
    EscenaJuego.cambiarEstado(new EstadoJugando())
  }
}

/**
 * Clase de estado concreto que implementa un comportamiento
 * específico para un estado determinado
 */
class EstadoJugando extends EstadoEscena {
  ejecutar() {
    console.log('Jugando la escena del juego')
    // cambiar al estado Finalizado
    EscenaJuego.cambiarEstado(new EstadoFinalizado())
  }
}

/**
 * Clase de estado concreto que implementa un comportamiento
 * específico para un estado determinado
 */
class EstadoFinalizado extends EstadoEscena {
  ejecutar() {
    console.log('Escena del juego finalizada')
    // cambiar al estado inicial
    EscenaJuego.cambiarEstado(new EstadoInicio())
  }
}

const escenaJuego = new EscenaJuego()
escenaJuego.ejecutar() // Iniciando la escena del juego
escenaJuego.ejecutar() // Jugando la escena del juego
escenaJuego.ejecutar() // Escena del juego finalizada
escenaJuego.ejecutar() // Iniciando la escena del juego