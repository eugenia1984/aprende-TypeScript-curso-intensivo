// Esto es un comentario en TS, igual que en JS

/**
 * Asi podemos documentar en TS nuestros proyectos: 
 * funciones, componentes, etc
 */

/***************************************************************/
/********************  Tipado  de  datos  **********************/
/**************************************************************/

/**************  Declaración de variables *******************/
// tipado inferido, infiere que es de tipo string
let firstName = 'María Eugenia'
// no voy a poder asignarle otro tipo de valor, como por ejemplo: firstName = 10
// Declaro el tipo de dato, no lo necesita inferir
let eMail: string = 'costamariaeugenia1@gmail.com'

// Otro mode es concatenar con + o con ,
console.log(`Hola, mi nombre es: ${ firstName }`)
console.log(`El e-mail de ${ firstName } es: ${ eMail }`)

// Ejemplo de constante
// no se puede reasignar un valor, no se modifica
const PI: number = 3.1416 


// Ejemplo de boolean
let error:boolean = false
console.log(`¿Hay error?: ${error}`) // aca con .toString no es boolean sino es string
// Mejor declarar el tipo si solo declaro la variable,
// sino despues cuando asigno un valor podria ser cualquier cosa menso boolean
let esPrimo: boolean 


// instancia 3 variables sin valor inicial
let a:string, b:boolean, c:number;
a = 'TYpeScript'
b = true
c = 2.34


/*********** Siempre evitar usar ANY **************/
// Se pierde el tipado, se puede asignar distintos tipos de datos a una misma variable

/************ Tipo dedatos complejos, no primitivos **********/
// se pasan por referencia en vez de por valor
// Ejemplo de array
let taskList: string[] = ['Task 1', 'Task 2', 'Task 3']