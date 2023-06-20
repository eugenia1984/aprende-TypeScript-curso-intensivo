// template union type
type HeroId2 = `${ string }-${ string }-${ string }-${ string }-${ string }`

type Hero2 = {
  readonly id?: HeroId2
  name: string
  age: number
  isActive?: boolean 
}

const hero2: Hero2 = {
  id: `123-456-789-123-567`,
  name: 'Miles Morales',
  age: 21,
  isActive: true
}

function createHero2(hero: Hero2): Hero2 {
  const {name, age} = hero
  return {
    id: crypto.randomUUID(),
    name,
    age,
    isActive: true
  }
}

/************************ TUPLA ********************/
type RGB2 = readonly [number, number, number]
const black: RGB2 = [0, 0, 0]
// Al tener el READONLLY no podria hacer: black.push(4)

/********************* ENUMS ************************/
enum ERROR_TYPES {
  NOT_FOUND= 'notFound',
  UNAUTHORIZED= 'unauthorized',
  FORBIDDEN= 'forbidden'
}

function mostrarMensaje(tipoDeError: ERROR_TYPES) {
  if(tipoDeError === ERROR_TYPES.NOT_FOUND) {
    console.log('No se encuentra el recurso')
  } else if (tipoDeError === ERROR_TYPES.UNAUTHORIZED) {
    console.log('No tienens permisos para acceder')
  } else if(tipoDeError === ERROR_TYPES.FORBIDDEN) {
    console.log('No tienes permisos para acceder')
  }
}