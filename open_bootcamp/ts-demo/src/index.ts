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
}

let coche: Producto = {
  nombre: 'Audi',
  precio: 45000
}
console.log(`Producto: ${ coche.nombre }`)