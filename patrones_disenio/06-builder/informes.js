class ReporteBuilder {
  constructor() {
    this.encabezado = ''
    this.contenido = ''
    this.pieDePagina = ''
  }

  setEncabezado(encabezado) {
    this.encabezado= encabezado
    return this
  }

  setContenido(contenido) {
    this.contenido = contenido
    return this
  }

  setPieDePagina(pieDePagina) {
    this.pieDePagina = pieDePagina
    return this
  }
  
  // Builder -> retorna una instancia completa y contruida del objeto que se esta contruyendo
  build() {
    return new ReporteBuilder(this.encabezado, this.contenido, this,this.pieDePagina)
  }
}

class Reporte {
  constructor(encabezado, contenido, pieDePagina) {
    this.encabezado = encabezado
    this.contenido = contenido
    this.pieDePagina = pieDePagina
  }

  generarPDF() {
    console.log('Generando reporte en formato PDF')
    console.log('Reporte en PDf generado correctamente')
  }

  generarHTML() {
    console.log('Generando reporte en formato HTML')
    console.log('Reporte en HTML generado correctamente')
  }
}

const reporteBuilder = new ReporteBuilder()
  .setEncabezado('Encabezado del reporte')
  .setContenido('Contenido del reporte')
  .setPieDePagina('Pie de pagina del reporte')
  .build()

reporteBuilder.generarPDF()
reporteBuilder.generarHTML()  