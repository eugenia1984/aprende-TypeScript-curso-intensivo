/**** FUNCIONES DE PRIMER ORDEN Y ORDEN SUPERIOR ****/
function add(x, y) {
  return x+y
}
let resultado = add(5, 6)
console.log(resultado) // output: 11

// Guardo la funcion en la variable func
let funcAdd = add; 
console.log(funcAdd(1,2)) // output: 3

/* Una FUNCION DE ORDEN SUPERIOR puede recibir a otra función como parametro */
function operation(a,b, fn) {
  console.log()
}