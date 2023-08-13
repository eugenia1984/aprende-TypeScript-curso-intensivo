/**********************************************
 **********  PATRON  ADAPTER ******************
 *********************************************/

// Permite que dos interfaces incompatibles trabajen juntas
// Actua como un puente entre dos clases o componentes 

// Ejemplo de aplicación de reproduccion de archivos multimedia, 
// solo reproduce mp3 y quiero reproduzca otros formatos
class AdapterACC {
  constructor(aacPlayer) {
    this.aacPlayer = aacPlayer
  }

  reproducirArchivoAAC(nombreArchivo) {
    this.aacPlayer.playAAC(nombreArchivo)
  }
}

class ReproductoMP3 {
  reproducirArchivoMP3(nombreArchivo) {
    console.log('Reproduciendo archivo MP3: ', nombreArchivo)
  }
} 

class ReproductoAAC {
  playAAC(nombreArchivo) {
    console.log('Reproduciendo archivo AAC: ', nombreArchivo)
  }
} 


// creo instancia del reproductor
const reproductorMP3 = new ReproductoMP3()
const reproductorAAC = new ReproductoAAC()
// creo el adaptador
const adaptadorAAC = new AdapterACC(reproductorAAC)

reproductorMP3.reproducirArchivoMP3('cancion.mp3')
adaptadorAAC.reproducirArchivoAAC('cancion.aac')