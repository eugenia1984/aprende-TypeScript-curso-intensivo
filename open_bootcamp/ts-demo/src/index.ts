// Esto es un comentario en TS, igual que en JS

/**
 * Asi podemos documentar en TS nuestros proyectos: 
 * funciones, componentes, etc
 */

/****************************************************************/
/********************  Tipado  de  datos  ***********************/
/***************************************************************/

/****************  Declaración de variables ********************/
// tipado inferido, infiere que es de tipo string
let firstName = 'María Eugenia'
// no voy a poder asignarle otro tipo de valor, 
// como por ejemplo: firstName = 10
// Declaro el tipo de dato, no lo necesita inferir
let eMail: string = 'costamariaeugenia1@gmail.com'

// Otro mode es concatenar con + o con ,
console.log(`Hola, mi nombre es: ${ firstName }`)
console.log(`El e-mail de ${ firstName } es: ${ eMail }`)

// Ejemplo de constante
// no se puede reasignar un valor, no se modifica
const PI: number = 3.1416


// Ejemplo de boolean
let error: boolean = false
// aca con .toString no es boolean sino es string
console.log(`¿Hay error?: ${ error }`)
// Mejor declarar el tipo si solo declaro la variable,
// sino despues cuando asigno un valor podria ser cualquier cosa menos boolean
let esPrimo: boolean


// instancia 3 variables sin valor inicial
let a: string, b: boolean, c: number;
a = 'TYpeScript'
b = true
c = 2.34


/********************  Siempre evitar usar ANY  *****************/
// Se pierde el tipado, se puede asignar distintos tipos
// de datos a una misma variable

/************  Tipo de datos complejos, no primitivos  ***********/
// se pasan por referencia en vez de por valor

/********************  Ejemplo de array **************************/
let taskList: string[] = ['Task 1', 'Task 2', 'Task 3']

// Ejemplo de combinar tipos en arrays
// Puedo tener valores que sean: string, number o boolean
let values: (string | number | boolean)[] = [false, 'Hola', true, 56]

/************************  Ejemplo de enum  ***********************/
enum Estado {
  'Completado' = 'C',
  'Incompleto' = 'I',
  'Pendiente' = 'P'
}

let estadoTareas: Estado = Estado.Completado
// el valor que guardo es 'C'

enum PuestoCarrera {
  'Primero' = 1,
  'Segundo',
  'Tercero'
}
let puestoMaraton: PuestoCarrera = PuestoCarrera.Segundo
// el valor que guardo es 2

/*****************  Ejemplo de interface ***************/
interface Tarea {
  nombre: string,
  estado: Estado,
  urgencia: number
}

// Podemos crear variables que sigan la interface Tarea
let tarea1: Tarea = {
  nombre: 'Tarea 1',
  estado: Estado.Pendiente,
  urgencia: 10
}
console.log(`Tarea: ${ tarea1.nombre }`)


// Type de TypeScript
// Los tipos son para definir un tipo mas complejo
type Producto = {
  precio: number,
  nombre: string
  anio: number
}

let coche: Producto = {
  nombre: 'Audi',
  precio: 45000,
  anio: 2012
}

/************************************* 
 ********   Condicionales   **********
 ************************************/
// Operador ternario
console.log(coche.anio < 2000 ?
  `Coche: ${ coche.nombre } es viejo`
  :
  `Coche: ${ coche.nombre } es nuevo`
)

// if-else 
if (error) {
  console.error('Hay un error')
} else {
  console.info('No hay error')
}

// if - else if - else
if (coche.anio < 2010) {
  console.log(`Coche: ${ coche.nombre } es viejo`)
} else if (coche.anio === 2010) {
  console.log(`Coche: ${ coche.nombre } es del 2010`)
} else {
  console.log(`Coche: ${ coche.nombre } es nuevo`)
}

// Switch
switch (tarea1.estado) {
  case Estado.Completado:
    console.log('La tarea está completada')
    break
  case Estado.Incompleto:
    console.log('La tarea no está completada')
    break
  case Estado.Pendiente:
    console.log('La tarea está pendiente')
    break
  default:
    break
}

// try- catch para capturar errores
try {
  // Hago algo que puede darme error
} catch (err) {
  // Aca capturo el error
  console.log(`Error: ${ error }`)
}

/**************************************** 
 *************  Bucles   ****************
 ***************************************/
let newTaskList: Tarea[] = [
  {
    nombre: ' Task 1',
    estado: Estado.Completado,
    urgencia: 2
  },
  {
    nombre: ' Task 2',
    estado: Estado.Pendiente,
    urgencia: 0
  },
  {
    nombre: ' Task 3',
    estado: Estado.Completado,
    urgencia: 15
  }
]

// forEach con un CallBack de parametro
newTaskList.forEach(
  (tarea: Tarea, indice: number) => {
    console.log(`${ indice } - ${ tarea.nombre }`)
  }
)

// for (clasico)
for (let index = 0; index < newTaskList.length; index++) {
  const tarea = newTaskList[index]
  console.log(`${ index } - ${ tarea.nombre }`)
}

// for in
const days = [
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
  'Sunday'
]

for (const day in days) {
  console.log(day)
}

// While
// Siempre debe tener algun punto que deja de cumplirse la condicio, sino es un bucle infinito
let numeroMenorADiez = 0
while(numeroMenorADiez < 10) { // mientras esta condicion sea TRUE se ejecuta
  console.log(`El número: ${numeroMenorADiez} es menor a 10`)
  numeroMenorADiez++
}

// do while - se ejecuta la menos una vez
let numeroMenorACinco = 0
do {
  console.log(`Númeor menor a cindo: ${numeroMenorACinco}`)
  numeroMenorACinco++
} while (numeroMenorACinco < 5)