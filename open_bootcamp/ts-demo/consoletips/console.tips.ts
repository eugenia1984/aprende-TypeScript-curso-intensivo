// Console Log
console.log('Hola')


let lista = ['Uno', 'Dos', 'Tres']
lista.forEach(() => console.log) // (valor) => console.log(valor)

let nombre = 'Eugenia'
console.log(`Hola ${ nombre }`) // template string/literals/ back ticks

// Console clear
console.clear() // para borrar toda la consola

// console Assert
let numeroCien: number = 100
console.assert(numeroCien === 100, 'Mensaje', 'Otro mensaje') // si es true va Mensaje sino OTro mensaje

// Console Count
function contador(texto: string) {
  console.count(texto) // para contar
}

contador('Hola') // 1
contador('Adios') // 1
contador('Hola') // 2

console.countReset() // resetea el contador

// Console Info, Warn, Error
// la salida sale con color celeste si es info, amarillo si es warn
// y rojo si es error. Ademas esta con el simbolo !, por ejemplo en warn

// Console Trace
function uno() {
  dos()
}

function dos() {
  tres()
}

function tres() {
  console.trace() // traza por donde se ha ido ejecutando para llegar a este punto
}

uno() // inicia el trace por consola

// Console DIR -> mostrar valores de objetos de manera bonita
let coche = {
  nombre: 'Audi',
  matricula: '123456',
  especificacioneS: [
    {
      motor: 'v12',
      potencia: '300CV'
    }
  ]
}

console.dir(coche)

// Console Table -> mostrar objetos o listas en tablas
console.table(coche)

// Console.time -> Contabilizar el tiempo de ejecucion
function espera() {
  for(let index=0; index <1000; index++) {
    //
  }
}

// 'Prueba' es el nombre, para identificarlas, por si hay mas de una
console.time('Prueba') // inicia el cronometro
espera()
console.timeEnd('Prueba') // para terminar y contabilizar el tiempo que paso

// Console.group -> Agrupaciones de console
// se pueden tener agrupaciones dentro de otras agrupaciones, queda como un arbol
console.group('Números')
console.log('1')
console.log('2')
console.log('3')
console.log('4')
console.groupEnd()