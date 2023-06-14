// Tipos
const number = 1
const n: number = 2
let cadenaDeTexto = 'hola' // si hacemoscadena. vemos todos los métodos de los string
cadenaDeTexto.toLowerCase()
let nulo = null
let indefinido: undefined = undefined

// ¿Que pasa cuando no puede inferir un tipo? ANY
let cualquierCosa // any, IGNORA el tipado

let noSeQueTipoEs: unknown
noSeQueTipoEs = 'Soy un string'

// Inferencia de tipos
// a y b os infiere como number
const a = 1
const b = 2
const c = a + b // c también será number

// Funciones
// Los parametros de las funciones no tienen inferencia, si no tienen contexto
function saludar(name: string) {
  console.log(`Hola ${ name }`)
}

saludar('Pepe')

// Primer forma de tipar un objeto
// si solo tenia: {name:string, age:number} a la propiedad name le reasigno string, no indico que es string
function saludoCompleto({ name, age }: { name: string, age: number }) {
  console.log(`Hola ${ name }, tienen ${ age } años`)
}

saludoCompleto({ 'Pepe', 30})

// Segunda forma de tipar un objeto
function saludoCompleto2(persona: { name: string, age: number }) {
  const { name, age } = persona // si o si necesito desestructurar
  console.log(`Hola ${ name }, tienen ${ age } años`)
}

// Tipando lo que devuelve una funcion
function saludoCompleto3(persona: { name: string, age: number }): number { // devuelve number
  const { name, age } = persona
  console.log(`Hola ${ name }, tienen ${ age } años`)
  return age  // devuelve number
}

// Funciones como parametro
// Funciones son FIRST CLASS CITIZEN(ciudadanos de primera clase)
// Es cun callback, una funcion que invoca a otra funcion
const sayHiFromFunction = (fn: (name: string) => void) => {
  return fn('Euge')
}

sayHiFromFunction((name: string) => {
  console.log(`Hola ${ name }`)
})

const sumar = (num1: number, num2: number): number => a + b


// Otro modo de tipar
// primero indico los tipos y luego la arrow function
const restar: (num1: number, num2: number) => number = (a, b) => { return a - b }

// never
//Para funciones que sabemos que nunca van a devolver nada. Tienen un throw y ahi finaliza la función, nunca llega al return implícito, nunca termina de ejecutarse la función.
function throwError(message: string): never {
  if(message) throw new Error(message)
  throw new Error(message)
}

// inferencia funciones anonimas segun el contexto
const avengers = ['Spidey', 'Hulk', 'Avengers']
avengers.forEach(avenger => {
  console.log(avenger.toUpperCase())
})


/**** Objects ******/
let hero = {
  name: 'Thor',
  age: 1500
}

// hero.name= 1234434
// esto no es posible porque ya infiere que name es string

function createHero(name: string, age:number) {
  return { name, age  }
}

const thor = createHero('Thor', 1500)