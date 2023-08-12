/********* POO en TypeScript ***********/
// CLASE
class Persona {
  // el atributo puede ser PRIVATE
  private nombre: string;

  constructor(nombre: string) {
    this.nombre = nombre;
  }

  getinfo(): string {
    return `Nombre: ${ this.nombre }`
  }
}

const persona = new Persona('John Doe')
// Como el nombre es PRIVATE no se puede acceder por fuera de la clase
// solo se puede acceder al metodo publico getInfo
console.log(persona.getinfo())

// HERENCIA
// En este caso el atributo name es PUBLIC
class Drink {
  constructor(public name: string) {
    this.name = name
  }

  info(): string {
    return `Drink: ${ this.name }`
  }
}

class Beer extends Drink {
  constructor(name: string, public alcohol: number) {
    super(name)
  }

  info(): string {
    return `${ super.info() }, alcohol: ${ this.alcohol }}`
  }
}

const myBeer = new Beer('Corona', 6.5)
myBeer.info()

/*********************** Interface ******************/
// para establecer reglas ya segurarnos que una clase 
// tenga cierto comportamiento
interface Animal {
  emitirSonido(): void;
  mostrarEdad(): number;
}

// Como la clase DOg extiende de Animal, debe implementar 
// todos sus métodos, debe cumplir el contrato 
class Dog implements Animal {
  private name: string;
  private age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  emitirSonido(): void {
    console.log('Guau!')
  }

  mostrarEdad(): number {
    return this.age
  }
}

class Cat implements Animal {
  private name: string;
  private age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  emitirSonido(): void {
    console.log('Miau!')
  }

  mostrarEdad(): number {
    return this.age
  }
}

// creo un array con elementos del tipo interface Animal
const animales:Animal[] = [
  new Dog('Firulais', 5),
  new Cat('Garfield', 3)
]

for(const animal of animales) {
  console.log(`Sonido: ${animal.emitirSonido()}`)
  console.log(`Edad: ${animal.mostrarEdad()}`)
  console.log('- - - - - - - - - - - - - - - ')
}