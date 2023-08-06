import {
  setCookie,
  getCookieValue,
  deleteCookie,
  deleteAllCookies
} from 'cookies-utils'
import { Curso } from './models/Curso'
import { Estudiante } from './models/Estudiante'
import { LISTA_CURSOS } from './mock/cursos.mock'

/*****************************************************************
********************  Tipado  de  datos  *************************
*****************************************************************/

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


/********************  Siempre evitar usar ANY  *******************/
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

/********************  Ejemplo de interface ******************/
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

/************************************************** 
 **************   Condicionales   *****************
 *************************************************/

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

/************************************************* 
 *****************  Bucles   *********************
 ************************************************/

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
while (numeroMenorADiez < 10) { // mientras esta condicion sea TRUE se ejecuta
  console.log(`El número: ${ numeroMenorADiez } es menor a 10`)
  numeroMenorADiez++
}

// do while - se ejecuta la menos una vez
let numeroMenorACinco = 0
do {
  console.log(`Númeor menor a cindo: ${ numeroMenorACinco }`)
  numeroMenorACinco++
} while (numeroMenorACinco < 5)

/************************************************************
 ************ Destructuraciòn y Spread Operator ************* 
 ***********************************************************/

// Asignación múltiple de variables -> desestructuración 
/*
Me ahorro de hacer:
let nombre = tarea1.nombre
let estado = tarea1.estado
let urgencia = tarea1.urgencia
*/
let { nombre, estado, urgencia } = tarea1

// Spread operator en array
let listaCompraLunes: string[] = ['leche', 'papas']
let listaCompraMartes: string[] = [...listaCompraLunes, 'pan', 'huevos']

// Spread operator en objetos
let estadoApp = {
  usuario: 'admin',
  session: 3,
  jwt: 'Bearer12345678'
}

// cambiar un valor por propagación
let nuevoEstado = {
  ...estadoApp,
  session: 4
}

/***********************************************************
***********************  Funciones  ************************
***********************************************************/
// los nombres en camelCase

/**
 * Function that displays a console greeting
 */
function sayHi(): void {
  let nombre = 'Euge'
  console.log(`Hello world!: ${ nombre }`)
}

sayHi() // Invoco a la funcion

/**
 * Function that displays a console greeting
 * @param nombre a string, the name of the person to greet
 */
function sayHiPerson(nombre: string) {

}

const persona = 'Euge'
sayHiPerson(persona) // pasando por valor

/**
 * Function that displays by console a farewell greeting
 * @param nombre a string, the name of the person to greet, by default: 'Pepe'
 */
function sayByePersona(nombre: string = 'Pepe') {
  console.log(`Bye! ${ nombre } `)
}

// toma el valor por default Pepe, el parametro nombre queda nombre?:string, es opcional
sayByePersona()
sayByePersona('Ana')

// Parametros opcionales

/**
 *  Function that displays by console a farewell greeting
 * @param nombre (Optional) a string, the name of the person to greet
 */
function sayByeOptional(nombre?: string) { // nombre?: string => nombre: string | undefined
  (nombre) ? console.log(`Bye, ${ nombre }!`) : console.log('Bye!')
}

sayByeOptional()
sayByeOptional('Juanjo')

// Varios parametros
function variosParams(nombre: string, apellido?: string, edad: number = 18) {
  (apellido) ? console.log(`${ nombre } ${ apellido }, tiene ${ edad } años.`) : console.log(`${ nombre }, tiene ${ edad } años.`)
}

variosParams('Martin') // Martin, tiene 18 años
variosParams('Juan', 'Perez') // Juan Perez, tiene 18 años
variosParams('Ana', undefined, 30) // Ana, tiene 30 años
variosParams('Analía', 'Bruni', 30) // Analía Bruni, tiene 30 años

// Varios tipos
function exampleDifferentTypes(a: string | number) {
  if (typeof (a) === 'string') {
    console.log('Es un string')
  } else if (typeof (a) === 'number') {
    console.log('Es un number')
  } else {
    console.log('No es string ni number')
  }
}

// Return
/**
 * exampleReturn 
 * @param nombre: first name 
 * @param apellidos: last name 
 * @returns: the full name (first name and last name) 
 */
function exampleReturn(nombre: string, apellidos: string): string {
  return `${ nombre } ${ apellidos }`
}

console.log(exampleReturn('Marìa', 'Costa'))

// Spread operator con multiparametros
/**
 * exampleMultiparam it's an axample function of multiparams,
 * not know how much params we will have 
 * @param nombres an array of names (string)
 */
function exampleMultiparam(...nombres: string[]): void {
  nombres.forEach(nombre => console.log(nombre))
}

exampleMultiparam('Ana', 'Marcos', 'Mia', 'Luna')
const listaNombres = ['Carlos', 'Mateo']
exampleMultiparam(...listaNombres)

type Empleado = {
  nombre: string
  apellido: string
  edad: number
}
let empleadoMartin: Empleado = {
  nombre: 'Martin',
  apellido: 'San Jose',
  edad: 30
}

/************************  Arrow function  ***************************/
const showEmployee = (empleado: Empleado): string => `${ empleado.nombre } ${ empleado.apellido } tiene ${ empleado.edad } años`

showEmployee(empleadoMartin)

const employeeData = (empleado: Empleado): string => {
  if (empleado.edad > 70) {
    return `${ empleado.nombre } está en edad de jubilarse`
  } else {
    return `${ empleado.nombre } está en edad laboral`
  }
}

employeeData(empleadoMartin)

const getSalary = (empleado: Empleado, cobrar: () => string) => {
  if (empleado.edad > 70) {
    return
  } else {
    cobrar() // callback a ejecutar
  }
}

const cobrarEmpleado = (empleado: Empleado) => {
  console.log(`${ empleado.nombre } cobra su salario`)
}

getSalary(empleadoMartin, () => 'Cobrar salario')

/********************  Funciones asincronas ******************************/
// Promise<string> -> Represents the completion of an asynchronous operation

async function asyncExample(): Promise<string> {
  // Aca podria hacer una peticion HTTP
  await console.log('Tarea a completar antes de seguir con la secuencia de instrucciones')
  console.log('Tarea completada')
  return 'Completado'
}

// .then() se va a hacer una vez que completa la promesa
// .catch() para capturar errores
// finally() se ejecuta siempre
asyncExample()
  .then(response => console.log('Respuesta: ', response))
  .catch(error => console.error('Error: ', error))
  .finally(() => console.info('Todo terminado'))

/*********************  Funcion generadora ****************************/
/*
- What is a generator function?
A generator function is a special function that can be exited AND re-entered.
Those functions use the function* notation.
Calling a generator returns a generator object (instead of executing its body).
You need to call the next function to execute the function's body.

- The next function
When called, the next function executes the function's body UNTIL the first yield expression or return statement. If the next function reaches a yield expression, the generator is put in a paused state. To resume its execution, we need to call the next function again.

The next function returns:
A value property that contains the yielded value.
A done property that indicates if the generator has yielded its last value.

- What is the yield keyword?
The yield keyword pauses the execution of a generator. It also can return a value. It causes the next function to return an IteratorResult object.
You can think of it as the return keyword for generators.
You can only use it in a generator function.
*/

// yield -> para emitir valores
function* generatorExample() {
  let index = 0
  while (index < 5) {
    // emitimos un valor incrementado
    yield index++
  }
}

// Guardamos la función generadora en una variable
let generadora = generatorExample()

// Accedemos a los valores emitidos
console.log(generadora.next().value) // 0
console.log(generadora.next().value) // 1
console.log(generadora.next().value) // 2

// Worker y Watcher
// Se usa en React y Angular para gestionar el estado de la app
// una funcion esta escuchando un evento
// Y otras funciones trabajan de forma asincrona
// El 'watcher' llama al 'worker'

function* watcher(valor: number) {
  yield valor // emitimos el valor inicial
  yield* worker(valor) // llamamos a las emisiones del worker para que emita otros valores
  yield valor + 4 // amitimos le valor final
}
function* worker(valor: number) {
  yield valor + 1
  yield valor + 2
  yield valor + 3
}

let generatorSaga = watcher(0)
console.log(generatorSaga.next().value) // 0 (lo ha hecho el watcher)
console.log(generatorSaga.next().value) // 1 (lo ha hecho el worker)
console.log(generatorSaga.next().value) // 2 (lo ha hecho el worker)
console.log(generatorSaga.next().value) // 3 (lo ha hecho el worker)
console.log(generatorSaga.next().value) // 4 (lo ha hecho el watcher)

// Sobrecarga de funciones
// En los métodos de las clases
// Una misma funcion, dependiendo del parametro que recibe,
// hace una cosa u otra. En cambio si para un mismo parametro 
// puedo tener más de un tipo, entonces ahi utilizamos ||
function mostrarError(error: string): void {
  console.log(`Ha habido un error: ${ error }`)
}

// Ejemplo de sobrecarga:
// function mostrarError(error: string, codigo:number): void {
//   console.log(`Ha habido un error: ${error}, el código es: ${codigo}`)
// }

/***************************************************************
*******************  PERSISTENCIA DE DATOS  ******************** 
***************************************************************/

/********************* LocalStorage ************************/
// Almacena los datos en el navegador, persiste, 
// no se elimina automaticamente
// 'nombre' es la key, y 'Euge' es el value que guardo
const guardarEnLocalStorage = (): void => {
  localStorage.set('nombre', 'Euge')
}

// si estaba guardado ok voy a tener 'Euge', sino undefined
const leerEnLocalStorage = (): void => {
  let name = localStorage.get('nombre')
}

/******************* SessionStorage *************************/
// La sesion del navegador, los datos se persisten en la
// sesion del navegador, si cambias de sesion se pierde

/************************  Cookies **************************/
/*
-Tienen una fecha de cauducidad y tienen un ámbito de URL
-Se ven en el mismo navegador, con las herramientas de desarrollo,
en el Aplication esta el Storae: LocalStorage, SesisonStorage(se
pierde por sesion) y cookies; Cache, etc
*/
const enum SameSite {
  lax = 'lax',
  strict = 'strict',
  none = 'none'
}
interface CookieOptions {
  name: string
  value: string
  maxAge?: number
  expires?: Date
  path?: string
  domain?: string
  secure?: boolean
  sameSite?: SameSite
}
const cookieOptions: CookieOptions = {
  name: "usuario",
  value: "Eugenia",
  maxAge: 600,
  expires: new Date(2099, 10, 1),
  path: "/"
}

// seteamos la cookie
setCookie(cookieOptions)

// Leer una cookie
let cookieLeida = getCookieValue("usuario")

// Eliminar la cookie
deleteCookie("usuario")

// Eliminar todas las cookies
deleteAllCookies()

/************************************************
******************  EVENTOS  ******************** 
************************************************/
// Clase Temporizador, para generar un evento a los 10seg
class Temporizador {
  // atributo
  public terminar?: (tiempo: number) => void
  // metodo
  public empezar(): void {
    setTimeout(() => {
      // Comprobamos que exista la función terminar, dado que es opcional
      if (!this.terminar) return
      // cuando pasen los 10seg se ejecuta la función terminar()
      this.terminar(Date.now())
    }, 1000)
  }
}

const miTemporizador: Temporizador = new Temporizador()
// Definimos la función del callback a ejecutar a los 10seg
miTemporizador.terminar = (tiempo: number) => console.log(`Evento terminado en: ${ tiempo } `)

//Lanzamos el temporizador
// se inicial el timeOut y al terminar, a los 10seg, se ejecuta terminar()
miTemporizador.empezar()

// Ademas del setTimout esta el setInterval
// Para eliminar la función del stack de ejecución de la función, util para el setInterval
delete miTemporizador.terminar

// Utilizando los elementos del DOm les puedo definir funciones ante eventos
/*
Ejemplo:
document.getElementById("boton-login").addEventListener('click', () => console.log('Click en login'))
con React directamente utilizamos el onClick en el <button>
*/

/******************************************************
***********************  CLASES  **********************
*******************************************************/
// POO
// Las clases pueden ser PUBLIC(por default) o PRIVATE
// Pueden tener PROPERTIES y METHODS

// Ejemplo de clase Estudiante

// instanciamos un objeto de la clase Curso
// const cursoTS: Curso = new Curso('TypeScript', 15)
// const cursoJS: Curso = new Curso('JavaScript', 20)
// const listaCursos: Curso[] = []
// listaCursos.push(cursoTS, cursoJS)

// instanciamos un objeto de la clase Estudiante, usnaod el mock
const Martin: Estudiante = new Estudiante('Martin', LISTA_CURSOS, 'San José')

const cursoAngular: Curso = new Curso('Angular', 40)
Martin.cursos.push(cursoAngular)

console.timeLog(`${ Martin.nombre } estudia:`)
Martin.cursos.forEach((curso: Curso) => console.log(`${ curso.nombre } (${ curso.horas } hs)`))

// Conocer las horas estudiadas, usando el getter
Martin.horasEstudiadas

/*
Saber la instancia de un objeto/variable:
- InstanceOf(Empleado) -> para saber si es una instancia de
- TypeOf(martin) -> para saber el tipo
Se usan en JS, porque en TS si ya tenemos todo bien tipado no lo necesitarìamos usar, más si no usamos los any implícitos
*/

let texto = new String('Hola') // string constructor