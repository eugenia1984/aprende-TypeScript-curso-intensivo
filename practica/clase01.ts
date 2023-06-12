// Tipos
const number = 1
const n:number = 2
let cadenaDeTexto = 'hola' // si hacemoscadena. vemos todos los métodos de los string
cadenaDeTexto.toLowerCase()
let nulo = null
let indefinido:undefined = undefined

// ¿Que pasa cuando no puede inferir un tipo? ANY
let cualquierCosa // any, IGNORA el tipado

let noSeQueTipoEs:unknown
noSeQueTipoEs = 'Soy un string'

// Inferencia de tipos
// a y b os infiere como number
const a = 1
const b = 2
const c = a + b // c también será number

