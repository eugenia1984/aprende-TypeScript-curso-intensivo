/*
plicación de patrón Observador en un sistema de notificaciones
En este ejercicio, se te presenta un código que implementa el patrón de diseño Observador. Tu objetivo es completar el bloque de prueba para verificar el funcionamiento correcto del patrón Observador en el sistema de notificaciones.

Observa la estructura del bloque de prueba proporcionado utilizando las palabras clave "describe" y "it". Estas palabras clave son comunes en los frameworks de pruebas y se utilizan para organizar y ejecutar las pruebas.

Dentro del bloque "it", encontrarás un comentario que dice "// TODO". Tu tarea es reemplazar ese comentario con el código necesario para verificar el funcionamiento del patrón Observador.

Crea una instancia de NotificacionSubject llamada subject utilizando la sintaxis new NotificacionSubject(). Esto te proporciona un sujeto observable en el sistema de notificaciones.

Crea instancias de ObservadorNotificacion llamadas observador1 y observador2.

Registra los observadores en el sujeto observable utilizando el método registrarObservador() del subject. Puedes pasar las instancias de los observadores como argumentos.

Reemplaza el método actualizar() del observador1 dentro del bloque de prueba. En esta versión personalizada, actualiza una variable booleana cambioNotificado a true cuando se llame al método actualizar().

Llama al método simularCambio() en el subject para simular un cambio en el estado de la aplicación y verificar el funcionamiento del patrón Observador.

Después de simular el cambio, verifica el valor de la variable cambioNotificado. Si es true, muestra un mensaje en la consola indicando que el cambio fue notificado correctamente. De lo contrario, muestra un mensaje indicando que no se notificó el cambio.
*/
// Implementa la clase ObservadorNotificacion
class ObservadorNotificacion {
  constructor() {
    this.cambioNotificado = false
  }

  actualizar() {
    this.cambioNotificado = true
  }
}

// Implementa la clase NotificacionSubject
class NotificacionSubject {
  constructor() {
    this.observadores = []
  }

  registrarObservador(observador) {
    this.observadores.push(observador)
  }

  simularCambio() {
    this.observadores.forEach((observador) => observador.actualizar())
  }
}

// Bloque de prueba
describe('Prueba del patrón Observador en el sistema de notificaciones', () => {
  it('debería notificar a los observadores cuando se simula un cambio', () => {
    // Crea una instancia de NotificacionSubject
    const subject = new NotificacionSubject()

    // Crea instancias de ObservadorNotificacion
    const observador1 = new ObservadorNotificacion()
    const observador2 = new ObservadorNotificacion()

    // Registra los observadores en el sujeto observable
    subject.registrarObservador(observador1)
    subject.registrarObservador(observador2)

    // Simula un cambio en el estado de la aplicación
    subject.simularCambio()(
      // Verifica si el cambio fue notificado correctamente
      observador1.cambioNotificado
    )
      ? console.log('El cambio fue notificado correctamente para observador1.')
      : console.log('El cambio no fue notificado para observador1.')(
          observador2.cambioNotificado
        )
      ? console.log('El cambio fue notificado correctamente para observador2.')
      : console.log('El cambio no fue notificado para observador2.')
  })
})

// Como lo resolvieron ellos:
// class NotificacionSubject {
//   constructor() {
//     this.observadores = [];
//   }
 
//   registrarObservador(observador) {
//     this.observadores.push(observador);
//   }
 
//   eliminarObservador(observador) {
//     const index = this.observadores.indexOf(observador);
//     if (index !== -1) {
//       this.observadores.splice(index, 1);
//     }
//   }
 
//   notificarObservadores() {
//     this.observadores.forEach(function(observador) {
//       observador.actualizar();
//     });
//   }
 
//   simularCambio() {
//     console.log('Se ha producido un cambio en el estado de la aplicación.');
//     this.notificarObservadores();
//   }
// }
 
// class ObservadorNotificacion {
//   actualizar() {
//     console.log('Se ha recibido una notificación del cambio en el estado de la aplicación.');
//   }
// }
 
// // Uso del patrón Observador en el sistema de notificaciones
// const subject = new NotificacionSubject();
 
// const observador1 = new ObservadorNotificacion();
// const observador2 = new ObservadorNotificacion();
 
// subject.registrarObservador(observador1);
// subject.registrarObservador(observador2);
 
// subject.simularCambio();
