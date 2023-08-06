import { Curso } from './Curso' // si fuera export default es sin las {}

export class Estudiante {
  // Propiedades / atributos
  nombre: string
  apellidos?: string
  cursos: Curso[]

  // Constructor
  constructor(nombre: string, cursos: Curso[], apellidos?: string) { // ultimo va la opcional65
    // inicializamos las prop
    this.cursos = cursos
    this.nombre = nombre
    this.apellidos = apellidos ? apellidos : undefined
  }
}