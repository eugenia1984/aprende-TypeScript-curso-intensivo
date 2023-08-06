import { Curso } from './Curso' // si fuera export default es sin las {}

export class Estudiante {
  // Propiedades / atributos
  nombre: string
  apellidos?: string
  cursos: Curso[]
  // al ser PRIVATE no es accesible desde afuera, solo ocn un getter
  private ID: string = '1234'

  // Constructor
  constructor(nombre: string, cursos: Curso[], apellidos?: string) { // ultimo va la opcional65
    // inicializamos las prop
    this.cursos = cursos
    this.nombre = nombre
    this.apellidos = apellidos ? apellidos : undefined
  }

  // Getter, una propiedad funcional
  get horasEstudiadas(): number {
    let horasEstudiadas: number = 0;
    this.cursos.forEach((curso: Curso) => {
      horasEstudiadas += curso.horas
    })
    return horasEstudiadas
  }

  get ID_estudiante(): string {
    return this.ID
  }

  // Setter
  set ID_Estudiante (id: string) {
    this.ID = id
  }
}