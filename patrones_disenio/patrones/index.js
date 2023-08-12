/*****************************************************
 ************** PROGRAMACION FUNCIONAL *************** 
 ****************************************************/

/************ FUNCIONES DE PRIMER ORDEN Y ORDEN SUPERIOR ***********/
function add(x, y) {
  return x+y
}
let resultado = add(5, 6)
console.log(resultado) // output: 11

// Guardo la funcion en la variable func
let funcAdd = add; 
console.log(funcAdd(1,2)) // output: 3

/*** Una FUNCION DE ORDEN SUPERIOR puede recibir a otra función como parametro ***/
function operation(a,b, fn) {
  console.log('Aqui va el desarrollo de otro código')
  let res = fn(a,b)
  console.log(res)
}

operation(10,2, funcAdd)

let funcA = function() {
  console.log('Algo')
}
funcA()

/*********************** ARROW FUNCTION *****************************/
let funcArrow = () => console.log('Algo, con arrow function')
funcArrow()

/*********************** FUNCIÓN ANONIMA ****************************/
operation(10, 2 ,(x,y) => x*y)

operation(1,2, (x,y) => {
  let z = x+y
  return z+2
})

/***************************************************************
********************** ITERANDO ARRAYS ************************* 
**************************************************************/
const datos = ['elemento 1', 'elemento 2', 'elemento 3']

/****************** forEach  ***************************/ 
//Recorre elemento por elemento y ejecuta la funcion, NO modifica el array original
datos.forEach((el) => console.log(`Elemento: ${el.toUpperCase()}`))

/*************** sort ***************************/
// Reordena el array, SI modifica el array origianl
const numeros = [3,1,2]
numeros.sort() // ascendente
console.log(`Array ordenado ascendentemente: ${numeros}`)
numeros.sort((a, b) => a-b) // descendente
console.log(`Array ordenado descendentemente: ${numeros}`)

/*************************** map ******************************/
// Recorre todos los elementos del array, ejecuta la función, 
// hace el cambio y devuelve un nuevo array, no modifica el original
const valores = [1, 2, 3, 4, 5]
const cuadrados = valores.map(el => el*el)
/*
* Ejemplo con funcion anonima
* const cuadrados = valores.map(function(el) {
* return el*el
* })
*/
console.log(`Los valores cuadrados del array: ${valores}, son: ${cuadrado}`)

/************** reduce *******************/
/**
 * Calls the specified callback function for all the elements in an array.
 * The return value of the callback function is the accumulated result, 
 * and is provided as an argument in the next call to the callback function.
 * @param callbackfn — A function that accepts up to four arguments. 
 * The reduce method calls the callbackfn function one time for each 
 * element in the array.
 * @param initialValue — If initialValue is specified, it is used as the 
 * initial value to start the accumulation. The first call to the callbackfn 
 * function provides this value as an argument instead of an array value.
 */
const numbers = [1,2,3,4,5]
const initialValue = 0
const sum = numbers.reduce((acumulator, current) => acumulator + current, initialValue)
// El metodo reduce, se usa para sacar promedios, el mayr o menor, por ejemplo
