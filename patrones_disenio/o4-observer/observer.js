/**************************************************
**************** PATRON OBSERVER ****************** 
**************************************************/

// Una relación de uno(sujeto) a muchos(observadores) 
// cuando el sujeto cambia su estado avisa a todos los observadores
// Una comunicacion eficiente y desacoplada
// Los observadores pueden ser quitados

// Ejemplo con aplicación del clima
// es el SUJETO con la lista de OBSERVADORES
class WeatherData {
  constructor() {
    this.temperatura = 0
    this.observadores = []
  }

  agregarObservador(observador) {
    this.observadores.push(observador)
  }

  eliminarObservador(observador) {
    const index = this.observadores.indexOf(observador)
    if(index !== -1) {
      this.observadores.splice(index, 1)
    }
  }

  notificarObservadores() {
    this-this.observadores.forEach((observador) => observador.actualizar(this.temperatura))
  }
  
  cambiarTemperatura(nuevaTemperatura) {
    this.temperatura = nuevaTemperatura
    this.notificarObservadores()
  }
}  

// Un OBSERVADOR que muestra la temperatura de una ciudad en la interfaz de usuario
class Display {
  constructor(ciudad) {
    this.ciudad = ciudad
  }

  actualizar(temperatura) {
    console.log(`La temperatura actual en ${this.ciudad} es: ${temperatura}ºC`)
  }
}

const weatherData = new WeatherData()
// Dos instancias de Display
const display1 = new Display('Ciudad A')
const display2 = new Display('Ciudad B')
// Agrego los observadores al sujeto
weatherData.agregarObservador(display1)
weatherData.agregarObservador(display2)
// Asigno los cambios de temperatura
weatherData.cambiarTemperatura(23)
weatherData.cambiarTemperatura(20)
