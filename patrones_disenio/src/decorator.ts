// Ejemplo de una aplicación de manejo de rutas,
// alguna solo osn accesibles para usuarios autentificados
function verificarAutentificacion(target: any, propertyKey: string, descriptor: PropertyDescriptor):PropertyDescriptor {
  const metodoOriginal = descriptor.value

  descriptor.value = function() {
    if(estaAutenticado()) {
      return metodoOriginal.call(this)
    } else {
      console.log('Acceso no autorizado. Debes iniciar sesion.')
    }
  }

  return descriptor
}

// Clase BASE
class Ruta {
  constructor() {}

  @verificarAutentificacion
  acceder(): void {
    console.log('Accediendo a la ruta...')
  }
}

function estaAutenticado(): boolean {
  return true
}

const ruta = new Ruta()
ruta.acceder()