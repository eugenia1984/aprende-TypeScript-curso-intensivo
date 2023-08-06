export class Persona {
  nombre: string
  apellido: string
  edad: number

  constructor(nombre: string, apellido: string, edad: number) {
    this.nombre = nombre
    this.apellido = apellido
    this.edad = edad
  }

  saludar(): void {
    console.log(`Hola, me llamo ${ this.nombre } ${ this.apellido } y tengo ${ this.edad } años.`)
  }
}

// Trabajador es CLASE HIJA de Persona
export class Trabajador extends Persona {
  sueldo: number

  constructor(nombre: string, apellido: string, edad: number, sueldo: number) {
    super(nombre, apellido, edad) // el constructor de la clase paddre
    this.sueldo = sueldo
  }

  saludar(): void { // polimorfismo
    super.saludar()
    console.log(`Mi sueldo es de: ${ this.sueldo }`)
  }
}

// Jefe es CLASE HIJA de Persona
export class Jefe extends Persona {
  trabajadores: Trabajador[] = []

  constructor(nombre: string, apellido: string, edad: number) {
    super(nombre, apellido, edad)  // el constructor de la clase paddre
  }

  saludar(): void { // polimorfismo
    super.saludar()
    console.log('Soy el Jefe')
  }
}