/***************************************************
 ****************  PATRON  APROBADOR  ************** 
 *************************************************/

// CADENA DE RESPONSABILIDAD
// Permite procesar una solicitud a traves de una serie de objetos interconectados-> manejadores

// Ejemplo de aprobación de solicitudes de vacaciones en una empresa
class Aprobador {
  constructor(nombre, limite) {
    this.nombre = nombre
    this.limite = limite
    this.siguienteAprobador = null
  }

  establecerSigueinteAprobador(aprobador) {
    this.siguienteAprobador = aprobador
  }

  aprobarSolicitud(solicitud) {
    if(solicitud.dias <= this.limite) {
      console.log(`${this.nombre} aprobo la solicitud de vacaciones`)
    } else if(this.siguienteAprobador) {
      this.siguienteAprobador.aprobarSolicitud(solicitud)
    } else {
      console.lerror('Ningún aprobador pudo manejar la solicitud de vacaciones')
    }
  }
}

// Crear instancias de los aprobadores
const supervisor = new Aprobador('Supervisor', 5)
const gerente = new Aprobador('Gerente', 10)
const director = new Aprobador('Director', 15)

// Establecemos la cadena de responsabilidad
supervisor.establecerSigueinteAprobador(gerente)
gerente.establecerSigueinteAprobador(director)

// Creo la solicitud de vacaciones
const solicitud = {dias: 12}
// Iniciar el proceso de aprobacion
supervisor.aprobarSolicitud(solicitud)
gerente.aprobarSolicitud(solicitud)