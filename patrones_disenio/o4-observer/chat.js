// Ejemplo de Observer con un chat

// Defino la clase SUJETO (CanalChat)
class CanalChat {
  constructor() {
    this.usuarios = []
    this.mensajes = []
  }

  agregarUsuarios(usuario) {
    this.usuarios.push(usuario)
  }

  eliminarUsuario(usuario) {
    const index = this.usuarios.indexOf(usuario)
    if(index !== -1) {
      this.usuarios.splice(index,1)
    }
  }

  agregarMensaje(mensaje, remitente) {
    this.mensajes.push({mensaje, remitente})
    this.notificarUsuarios(mensaje, remitente.nombre)
  }

  notificarUsuario(mensaje, remitente) {
    this.usuarios.forEach((usuario) => {
      if(usuario !== remitente) {
        usuario.reibirMensaje(mensaje, remitente)
      }
    })
  }
}

// representa al OBSERVADOR, que puede enviar y recibir mensajes a un CanalChat
class Usuario {
  constructor(nombre) {
    this.nombre = nombre
  }

  recibirMensaje(mensaje, remitente) {
    console.log(`${this.nombre} recibio un mensaje de ${remitente}: ${mensaje}`)
  }

  enviarMensaje(mensaje, canal) {
    canal.enviarMensaje(mensaje, this)
  }
}

// Una instancia del CanalChat
const canalChat = new CanalChat()

// Una instancia de los usuarios
const usuario1 = new Usuario('Juan')
const usuario2 = new Usuario('Maria')
const usuario3 = new Usuario('Pedro')

// Agrego usuarios al canal
canalChat.agregarUsuarios(usuario1)
canalChat.agregarUsuarios(usuario2)
canalChat.agregarUsuarios(usuario3)

// usuario1 envia un mensjae al canal
usuario1.enviarMensaje('Hola a todos!', canalChat)
usuario2.enviarMensaje('¿Cómo están?', canalChat)