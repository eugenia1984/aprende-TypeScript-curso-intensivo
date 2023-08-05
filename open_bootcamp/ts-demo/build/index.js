"use strict";
// Esto es un comentario en TS, igual que en JS
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
/**
 * Asi podemos documentar en TS nuestros proyectos:
 * funciones, componentes, etc
 */
/****************************************************************/
/********************  Tipado  de  datos  ***********************/
/***************************************************************/
/****************  Declaración de variables ********************/
// tipado inferido, infiere que es de tipo string
let firstName = 'María Eugenia';
// no voy a poder asignarle otro tipo de valor, 
// como por ejemplo: firstName = 10
// Declaro el tipo de dato, no lo necesita inferir
let eMail = 'costamariaeugenia1@gmail.com';
// Otro mode es concatenar con + o con ,
console.log(`Hola, mi nombre es: ${firstName}`);
console.log(`El e-mail de ${firstName} es: ${eMail}`);
// Ejemplo de constante
// no se puede reasignar un valor, no se modifica
const PI = 3.1416;
// Ejemplo de boolean
let error = false;
// aca con .toString no es boolean sino es string
console.log(`¿Hay error?: ${error}`);
// Mejor declarar el tipo si solo declaro la variable,
// sino despues cuando asigno un valor podria ser cualquier cosa menos boolean
let esPrimo;
// instancia 3 variables sin valor inicial
let a, b, c;
a = 'TYpeScript';
b = true;
c = 2.34;
/********************  Siempre evitar usar ANY  *****************/
// Se pierde el tipado, se puede asignar distintos tipos
// de datos a una misma variable
/************  Tipo de datos complejos, no primitivos  ***********/
// se pasan por referencia en vez de por valor
/********************  Ejemplo de array **************************/
let taskList = ['Task 1', 'Task 2', 'Task 3'];
// Ejemplo de combinar tipos en arrays
// Puedo tener valores que sean: string, number o boolean
let values = [false, 'Hola', true, 56];
/************************  Ejemplo de enum  ***********************/
var Estado;
(function (Estado) {
    Estado["Completado"] = "C";
    Estado["Incompleto"] = "I";
    Estado["Pendiente"] = "P";
})(Estado || (Estado = {}));
let estadoTareas = Estado.Completado;
// el valor que guardo es 'C'
var PuestoCarrera;
(function (PuestoCarrera) {
    PuestoCarrera[PuestoCarrera["Primero"] = 1] = "Primero";
    PuestoCarrera[PuestoCarrera["Segundo"] = 2] = "Segundo";
    PuestoCarrera[PuestoCarrera["Tercero"] = 3] = "Tercero";
})(PuestoCarrera || (PuestoCarrera = {}));
let puestoMaraton = PuestoCarrera.Segundo;
// Podemos crear variables que sigan la interface Tarea
let tarea1 = {
    nombre: 'Tarea 1',
    estado: Estado.Pendiente,
    urgencia: 10
};
console.log(`Tarea: ${tarea1.nombre}`);
let coche = {
    nombre: 'Audi',
    precio: 45000,
    anio: 2012
};
/******************************************
 **********   Condicionales   ************
 *****************************************/
// Operador ternario
console.log(coche.anio < 2000 ?
    `Coche: ${coche.nombre} es viejo`
    :
        `Coche: ${coche.nombre} es nuevo`);
// if-else 
if (error) {
    console.error('Hay un error');
}
else {
    console.info('No hay error');
}
// if - else if - else
if (coche.anio < 2010) {
    console.log(`Coche: ${coche.nombre} es viejo`);
}
else if (coche.anio === 2010) {
    console.log(`Coche: ${coche.nombre} es del 2010`);
}
else {
    console.log(`Coche: ${coche.nombre} es nuevo`);
}
// Switch
switch (tarea1.estado) {
    case Estado.Completado:
        console.log('La tarea está completada');
        break;
    case Estado.Incompleto:
        console.log('La tarea no está completada');
        break;
    case Estado.Pendiente:
        console.log('La tarea está pendiente');
        break;
    default:
        break;
}
// try- catch para capturar errores
try {
    // Hago algo que puede darme error
}
catch (err) {
    // Aca capturo el error
    console.log(`Error: ${error}`);
}
/****************************************
 *************  Bucles   ****************
 ***************************************/
let newTaskList = [
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
];
// forEach con un CallBack de parametro
newTaskList.forEach((tarea, indice) => {
    console.log(`${indice} - ${tarea.nombre}`);
});
// for (clasico)
for (let index = 0; index < newTaskList.length; index++) {
    const tarea = newTaskList[index];
    console.log(`${index} - ${tarea.nombre}`);
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
];
for (const day in days) {
    console.log(day);
}
// While
// Siempre debe tener algun punto que deja de cumplirse la condicio, sino es un bucle infinito
let numeroMenorADiez = 0;
while (numeroMenorADiez < 10) { // mientras esta condicion sea TRUE se ejecuta
    console.log(`El número: ${numeroMenorADiez} es menor a 10`);
    numeroMenorADiez++;
}
// do while - se ejecuta la menos una vez
let numeroMenorACinco = 0;
do {
    console.log(`Númeor menor a cindo: ${numeroMenorACinco}`);
    numeroMenorACinco++;
} while (numeroMenorACinco < 5);
/************************************************
 ****** Destructuraciòn y Spread Operator *******
 ***********************************************/
// Asignación múltiple de variables -> desestructuración 
/*
Me ahorro de hacer:
let nombre = tarea1.nombre
let estado = tarea1.estado
let urgencia = tarea1.urgencia
*/
let { nombre, estado, urgencia } = tarea1;
// Spread operator en array
let listaCompraLunes = ['leche', 'papas'];
let listaCompraMartes = [...listaCompraLunes, 'pan', 'huevos'];
// Spread operator en objetos
let estadoApp = {
    usuario: 'admin',
    session: 3,
    jwt: 'Bearer12345678'
};
// cambiar un valor por propagación
let nuevoEstado = Object.assign(Object.assign({}, estadoApp), { session: 4 });
/*********************************************
****************  Funciones  *****************
*********************************************/
// los nombres en camelCase
/**
 * Function that displays a console greeting
 */
function sayHi() {
    let nombre = 'Euge';
    console.log(`Hello world!: ${nombre}`);
}
sayHi(); // Invoco a la funcion
/**
 * Function that displays a console greeting
 * @param nombre a string, the name of the person to greet
 */
function sayHiPerson(nombre) {
}
const persona = 'Euge';
sayHiPerson(persona); // pasando por valor
/**
 * Function that displays by console a farewell greeting
 * @param nombre a string, the name of the person to greet, by default: 'Pepe'
 */
function sayByePersona(nombre = 'Pepe') {
    console.log(`Bye! ${nombre} `);
}
// toma el valor por default Pepe, el parametro nombre queda nombre?:string, es opcional
sayByePersona();
sayByePersona('Ana');
// Parametros opcionales
/**
 *  Function that displays by console a farewell greeting
 * @param nombre (Optional) a string, the name of the person to greet
 */
function sayByeOptional(nombre) {
    (nombre) ? console.log(`Bye, ${nombre}!`) : console.log('Bye!');
}
sayByeOptional();
sayByeOptional('Juanjo');
// Varios parametros
function variosParams(nombre, apellido, edad = 18) {
    (apellido) ? console.log(`${nombre} ${apellido}, tiene ${edad} años.`) : console.log(`${nombre}, tiene ${edad} años.`);
}
variosParams('Martin'); // Martin, tiene 18 años
variosParams('Juan', 'Perez'); // Juan Perez, tiene 18 años
variosParams('Ana', undefined, 30); // Ana, tiene 30 años
variosParams('Analía', 'Bruni', 30); // Analía Bruni, tiene 30 años
// Varios tipos
function exampleDifferentTypes(a) {
    if (typeof (a) === 'string') {
        console.log('Es un string');
    }
    else if (typeof (a) === 'number') {
        console.log('Es un number');
    }
    else {
        console.log('No es string ni number');
    }
}
// Return
/**
 * exampleReturn
 * @param nombre: first name
 * @param apellidos: last name
 * @returns: the full name (first name and last name)
 */
function exampleReturn(nombre, apellidos) {
    return `${nombre} ${apellidos}`;
}
console.log(exampleReturn('Marìa', 'Costa'));
// Spread operator con multiparametros
/**
 * exampleMultiparam it's an axample function of multiparams,
 * not know how much params we will have
 * @param nombres an array of names (string)
 */
function exampleMultiparam(...nombres) {
    nombres.forEach(nombre => console.log(nombre));
}
exampleMultiparam('Ana', 'Marcos', 'Mia', 'Luna');
const listaNombres = ['Carlos', 'Mateo'];
exampleMultiparam(...listaNombres);
let empleadoMartin = {
    nombre: 'Martin',
    apellido: 'San Jose',
    edad: 30
};
/************************  Arrow function  ***************************/
const showEmployee = (empleado) => `${empleado.nombre} ${empleado.apellido} tiene ${empleado.edad} años`;
showEmployee(empleadoMartin);
const employeeData = (empleado) => {
    if (empleado.edad > 70) {
        return `${empleado.nombre} está en edad de jubilarse`;
    }
    else {
        return `${empleado.nombre} está en edad laboral`;
    }
};
employeeData(empleadoMartin);
const getSalary = (empleado, cobrar) => {
    if (empleado.edad > 70) {
        return;
    }
    else {
        cobrar(); // callback a ejecutar
    }
};
const cobrarEmpleado = (empleado) => {
    console.log(`${empleado.nombre} cobra su salario`);
};
getSalary(empleadoMartin, () => 'Cobrar salario');
/********************  Funciones asincronas ******************************/
// Promise<string> -> Represents the completion of an asynchronous operation
function asyncExample() {
    return __awaiter(this, void 0, void 0, function* () {
        // Aca podria hacer una peticion HTTP
        yield console.log('Tarea a completar antes de seguir con la secuencia de instrucciones');
        console.log('Tarea completada');
        return 'Completado';
    });
}
// .then() se va a hacer una vez que completa la promesa
// .catch() para capturar errores
// finally() se ejecuta siempre
asyncExample()
    .then(response => console.log('Respuesta: ', response))
    .catch(error => console.error('Error: ', error))
    .finally(() => console.info('Todo terminado'));
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
    let index = 0;
    while (index < 5) {
        // emitimos un valor incrementado
        yield index++;
    }
}
// Guardamos la función generadora en una variable
let generadora = generatorExample();
// Accedemos a los valores emitidos
console.log(generadora.next().value); // 0
console.log(generadora.next().value); // 1
console.log(generadora.next().value); // 2
// Worker y Watcher
// Se usa en React y Angular para gestionar el estado de la app
// una funcion esta escuchando un evento
// Y otras funciones trabajan de forma asincrona
// El 'watcher' llama al 'worker'
function* watcher(valor) {
    yield valor; // emitimos el valor inicial
    yield* worker(valor); // llamamos a las emisiones del worker para que emita otros valores
    yield valor + 4; // amitimos le valor final
}
function* worker(valor) {
    yield valor + 1;
    yield valor + 2;
    yield valor + 3;
}
let generatorSaga = watcher(0);
console.log(generatorSaga.next().value); // 0 (lo ha hecho el watcher)
console.log(generatorSaga.next().value); // 1 (lo ha hecho el worker)
console.log(generatorSaga.next().value); // 2 (lo ha hecho el worker)
console.log(generatorSaga.next().value); // 3 (lo ha hecho el worker)
console.log(generatorSaga.next().value); // 4 (lo ha hecho el watcher)
