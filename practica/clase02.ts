// template union type
type HeroId2 = `${ string }-${ string }-${ string }-${ string }-${ string }`

type Hero2 = {
  readonly id?: HeroId2
  name: string
  age: number
  isActive?: boolean
}

function createHero2(hero: Hero2): Hero2 {
  const { name, age } = hero
  return {
    id: crypto.randomUUID(),
    name,
    age,
    isActive: true
  }
}

const hero2: Hero2 = createHero2({
  name: 'Miles Morales',
  age: 21,
})

/************************ TUPLA ********************/
type RGB2 = readonly [number, number, number]
const black: RGB2 = [0, 0, 0]
// Al tener el READONLLY no podria hacer: black.push(4)

/********************* Enums ************************/
const enum ERROR_TYPES {
  NOT_FOUND = 'notFound',
  UNAUTHORIZED = 'unauthorized',
  FORBIDDEN = 'forbidden'
}

function mostrarMensaje(tipoDeError: ERROR_TYPES) {
  if (tipoDeError === ERROR_TYPES.NOT_FOUND) {
    console.log('No se encuentra el recurso')
  } else if (tipoDeError === ERROR_TYPES.UNAUTHORIZED) {
    console.log('No tienens permisos para acceder')
  } else if (tipoDeError === ERROR_TYPES.FORBIDDEN) {
    console.log('No tienes permisos para acceder')
  }
}

/**************** Aserciones de tipos **********************/
// puede devolver: null si no lo encuentra o HTMLElement si lo encuentra
// ¿Como sabe TS que estas recuperando un elemento <canvas />?
// Necesitamos un tipo mas especifico: HTMLCanvasElement

//La PEOR forma:
/*
const canvas = document.getElementById('canvas') as HTMLCanvasElement
const ctx = canvas.getContext('2d')
*/

//Un poco mejor, pero: document.getElementById('span') -> no daria error
/*
const canvas = document.getElementById('canvas')  
if (canvas != null) {
  const ctx = (canvas as HTMLCanvasElement).getContext('2d')
}
*/


// La mejor opcion, con: instanceof HTMLCanvasElement
const canvas = document.getElementById('canvas')

if (canvas != null && canvas instanceof HTMLCanvasElement) {
  const ctx = canvas.getContext('2d')
}

/**************** Interfaces **************/
interface Hero3 {
  id: string
  name: string
  age: number
  saludar: () => void
}

const hero3: Hero3 = {
  id: '1',
  name: 'Spiderman',
  age: 30,
  saludar: () => console.log('Hola')
}

// Pueden estar anidadas
interface Product {
  id: number
  name: string
  price: number
  quantity: number
}

interface Shoe extends Product {
  size: number
}

interface ShoppingCart {
  totalPrice: number
  products: (Product | Shoe)[]
}

interface ShoppingCartOps {
  add: (product: Product) => void,
  remove: (id: number) => void,
  claer: () => void
}

// interface ShoppingCartOps {
//   add(product: Product): void
//   remove(id: number): void
//   claer(): void
// }

const carrito: ShoppingCart = {
  totalPrice: 100,
  products: [
    {
      id: 1,
      name: 'Product 1',
      price: 100,
      quantity: 1
    }
  ]
}