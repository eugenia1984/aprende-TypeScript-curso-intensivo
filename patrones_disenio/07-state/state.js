/****************************************
 *********** PATRON  STATE ************** 
 ***************************************/
// Permite a un objeto, laterar su comportamiento cuando 
// un valor interno cambia, se basa en el encapsulamiento

// Ejemplo con aplicacion de reproductor de musica

/**
 * Actua como un contexto, que mantiene una instancia
 * del estado actual del ReproductorMusica
 * */
class ReproductorMusica {
  constructor() {
    this.estado = new EstadoDetenido()
  }

  cambiarEstado(estado) {
    this.estado = estado
  }

  reproducir() {
    this.estado.reproducir()
  }

  pausar() {
    this.estado.pausar()
  }

  detener() {
    this.estado.detener()
  }
}

/**
 * Representa el estado abstracto, define las operaciones comunes
 * para los diferentes estados del ReproductorMusica 
 */
class EstadoReproductor {
  reproducir() {
    throw new Error('Este metodo debe ser implementado por las clases hijas.')
  }

  pausar() {
    throw new Error('Este metodo debe ser implementado por las clases hijas.')
  }

  detener() {
    throw new Error('Este metodo debe ser implementado por las clases hijas.')
  }
}

/**
 * Es una clase del estado concreto que implementa el 
 * comportamiento específico del estado Reproduccion
 */
class EstadoReproduccion extends EstadoReproductor {
  reproducir() {
    console.log('El reproductor ya está en estado de reproducción')
  }

  pausar() {
    console.log('Pausando la reproducción')
    reproductorMusica.cambiarEstado(new EstadoPausa())
    
  }

  detener() {
    console.log('Deteneiendo la reproducción')
    reproductorMusica.cambiarEstado(new EstadoDetenido())
  }
}

/**
 * Es una clase del estado concreto que implementa el 
 * comportamiento específico del estado Pausa
 */
class EstadoPausa extends EstadoReproductor{
  reproducir() {
    console.log('Reanudando la reproducción')
    reproductorMusica.cambiarEstado(new EstadoReproduccion())
  }

  pausar() {
    console.log('Pausando la reproducción')
  }

  detener() {
    console.log('Deteniendo la reproducción')
    reproductorMusica.cambiarEstado(new EstadoDetenido())
  }
}

/**
 * Es una clase del estado concreto que implementa el 
 * comportamiento específico del estado Detenido
 */
class EstadoDetenido extends EstadoReproductor{
  reproducir() {
    console.log('Iniciando la reproducción')
    reproductorMusica.cambiarEstado(new EstadoReproduccion())
  }

  pausar() {
    console.log('El reproductor ya está detenido. No se puede pausar')
  }

  detener() {
    console.log('El reproductor ya está detenido')
  }
}

const reproductorMusica = new ReproductorMusica()
// se delega la llamada al metodo correspondiente del estado actual
// reproductorMusica.reproducir() 
// reproductorMusica.reproducir()
// reproductorMusica.pausar()
// reproductorMusica.detener()
// reproductorMusica.pausar()

// Para aplicar en el HTML
// Ubico los tres botones
const reproducirBtn = document.getElementById('reproducir-btn')
const pausarBtn = document.getElementById('pausar-btn')
const detenerBtn = document.getElementById('detener-btn')

reproducirBtn.addEventListener('click', () => {
  reproductorMusica.reproducir()
})

pausarBtn.addEventListener('click', () => {
  reproductorMusica.pausar()
})

detenerBtn.addEventListener('click', () => {
  reproductorMusica.detener()
})