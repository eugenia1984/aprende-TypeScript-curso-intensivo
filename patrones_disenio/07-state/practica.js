/*
Implementación del patrón State en un reproductor de música
En este ejercicio, se te presenta un código que implementa el patrón de diseño State en un reproductor de música. El objetivo es completar el bloque de prueba para verificar el funcionamiento correcto del patrón State en el reproductor.

1.Observa la estructura del bloque de prueba proporcionado utilizando las palabras clave "describe" y "it". Estas palabras clave son comunes en los frameworks de pruebas y se utilizan para organizar y ejecutar las pruebas.

2.Dentro del bloque "it", encontrarás un comentario que dice "// TODO". Tu tarea es reemplazar ese comentario con el código necesario para verificar el funcionamiento del patrón State.

3.Crea una instancia de ReproductorMusica llamada reproductorMusica utilizando la sintaxis new ReproductorMusica(). Esto te proporciona un reproductor de música con diferentes estados y comportamientos.

4.Utiliza los métodos proporcionados por reproductorMusica para cambiar al estado de reproducción. Puedes llamar al método establecerEstadoReproduciendo() en reproductorMusica para hacer este cambio.

5.Crea una variable booleana cambioRealizado y asígnale el valor false. Esta variable se utilizará para verificar si se ha realizado el cambio de estado correctamente.

6.Redefine el método establecerEstadoPausado() del reproductorMusica dentro del bloque de prueba. En esta versión personalizada, actualiza la variable cambioRealizado a true cuando se llame al método.

7.Llama al método pausar() en reproductorMusica para probar el cambio de estado y verificar si se ha realizado correctamente.

8.Después de llamar al método pausar(), verifica el valor de la variable cambioRealizado. Si su valor es true, muestra un mensaje en la consola indicando que el cambio de estado se realizó correctamente. De lo contrario, si su valor es false, muestra un mensaje indicando que no se realizó el cambio de estado.
*/
// Implementación del patrón State en el reproductor de música
class ReproductorMusica {
  constructor() {
    this.estado = null;
  }

  establecerEstadoReproduciendo() {
    this.estado = new EstadoReproduciendo(this);
  }

  establecerEstadoPausado() {
    this.estado = new EstadoPausado(this);
  }

  reproducir() {
    this.estado.reproducir();
  }

  pausar() {
    this.estado.pausar();
  }
}

class EstadoReproduciendo {
  constructor(reproductor) {
    this.reproductor = reproductor;
  }

  reproducir() {
    console.log("La música ya se está reproduciendo.");
  }

  pausar() {
    console.log("Pausando la reproducción.");
    this.reproductor.establecerEstadoPausado();
  }
}

class EstadoPausado {
  constructor(reproductor) {
    this.reproductor = reproductor;
  }

  reproducir() {
    console.log("Reanudando la reproducción.");
    this.reproductor.establecerEstadoReproduciendo();
  }

  pausar() {
    console.log("La música ya está en pausa.");
  }
}

// Bloque de prueba
describe('Implementación del patrón State en un reproductor de música', () => {
  it('debería cambiar el estado de reproducción a pausa', () => {
    // Crea una instancia de ReproductorMusica
    const reproductorMusica = new ReproductorMusica();

    // Cambia al estado de reproducción
    reproductorMusica.establecerEstadoReproduciendo();

    // Variable para verificar el cambio de estado
    let cambioRealizado = false;

    // Redefine el método establecerEstadoPausado()
    reproductorMusica.establecerEstadoPausado = function () {
      cambioRealizado = true;
    };

    // Llama al método pausar()
    reproductorMusica.pausar();

    // Verifica si el cambio de estado se realizó correctamente
    if (cambioRealizado) {
      console.log('Cambio de estado a pausa realizado correctamente.');
    } else {
      console.log('No se realizó el cambio de estado a pausa.');
    }
  });
});