# <img width="48" height="48" src="https://img.icons8.com/color/48/typescript.png" alt="typescript"/> CLASE 1

---

## <img width="48" height="48" src="https://img.icons8.com/color/48/typescript.png" alt="typescript"/> ¿Qué es TypeScript ?

- Es JavaScript con una sintaxis para tipos.

- Es un superset de JavaScript, le agrega **tipos estáticos**(su base es JavaScript).

- No funciona en tiempo de ejecución, se compila y llega al navegador como JavaScript.

<img src="https://github.com/eugenia1984/aprende-TypeScript-curso-intensivo/assets/72580574/01a67373-7b04-447d-9836-b789d43f9ee3" width="350" alt="typescript y javascript">


---

## <img width="48" height="48" src="https://img.icons8.com/color/48/typescript.png" alt="typescript"/> ¿Por qué aprenderlo?

- Se está utilizando cada vez más. Hay más opciones de trabajo.

- Es sencillo de aprender.


---

## <img width="48" height="48" src="https://img.icons8.com/color/48/typescript.png" alt="typescript"/> Ventajas

- Fue creado en 2012 por **Microsoft**, en sus aplicaciones muy grandes necesitaban el grado de seguridad de los tipos.

- JavaScript es de tipo débil y dinámico, por ejemplo si tenemos una variable **a** se puede inicializar como un **string** y luego asignarle un valor **number**:
```JavaScript
let a = 'hola'
a = 10
```

En cambio con TypeScript:

```TypeScript
let a:string = 'chau'
// a = 2 esto no se puede hacer, ya se infiere es de tipo string no number
```

Ejemplo de una función con TypeScript:
```TypeScript
function suma(a:number, b:number):number {
  return a+b
}
suma(2,3)
```

- El codigo se va 'autodocumentando', ya no es necesario escribir tanto explicando las funciones.


- Añade: seguridad y robustez.

---

## <img width="48" height="48" src="https://img.icons8.com/color/48/typescript.png" alt="typescript"/> Concepto inferir 

```TypeScript
let saludo:string = 'hola mundo'
// infiere que es de tipo string, no puede volver a tener reasignado un valor que no sea de string
let nombre = 'María Eugenia' 
```

---


## <img width="48" height="48" src="https://img.icons8.com/color/48/typescript.png" alt="typescript"/> TypeScript compilación

**TS** funciona en tiempo de **compilación** y **JS** funciona en tiempo de **navegacion**

---

## <img width="48" height="48" src="https://img.icons8.com/color/48/typescript.png" alt="typescript"/> Herramientas 

- **VSC** esta creado con TS, ya lo tine nativo, por lo que si se escribe el código en VSC, ya nos va a ir marcando los errores. También tenemos el autocomplete.

- **TS** es capaz de observar como es y te dice su forma.

- Hay una extensión en VSC: **Pretty TypeScript Errors** de yoavbls

---

## <img width="48" height="48" src="https://img.icons8.com/color/48/typescript.png" alt="typescript"/> Tipos en TypeScript

- string

- number

- null

- undefined

- boolean

- any, asi IGNORA el tipado de TS, por eso hay que evitarlo si o si

- unknown, no sabemos cual es el tipo


Para los tipos básicos no es necesario tipar cuando declaro las variables.

---

## <img width="48" height="48" src="https://img.icons8.com/color/48/typescript.png" alt="typescript"/> Funciones

Los parametros de las funciones no tienen inferencia, si no tienen contexto

```TypeScript
function saludar(name: string) {
  console.log(`Hola ${ name }`)
}

saludar('Pepe')
```

---

## <img width="48" height="48" src="https://img.icons8.com/color/48/typescript.png" alt="typescript"/> Tipar funciones parametros


Si en los **parametros** tenemos un **objeto**, tneemos distintas formas de tiparlo...


...1er opción:

```TypeScript
function saludoCompleto({ name, age }: { name: string, age: number }) {
  console.log(`Hola ${ name }, tienen ${ age } años`)
}
```

...2da forma de tiparlo:

```TypeScript
function saludoCompleto2(persona: { name:string, age:number }) {
  const {name, age} = persona // si o si necesito desestructurar
  console.log(`Hola ${ name }, tienen ${ age } años`)
}
```

- También se puede tipar el **Return** de la función:

```TypeScript
function saludoCompleto3(persona: { name:string, age:number }): number { // devuelve number
  const {name, age} = persona 
  console.log(`Hola ${ name }, tienen ${ age } años`)
  return age  // devuelve number
}
```

---

## <img width="48" height="48" src="https://img.icons8.com/color/48/typescript.png" alt="typescript"/> Tipar "arrow functions"

Ojo esto esta sin tipar, es solo para indicar la parte del callback.

![image](https://github.com/eugenia1984/aprende-TypeScript-curso-intensivo/assets/72580574/efe91de5-ad93-45bf-bbd8-9f1667c6b400)

OJO, no usar **Function** para tipar, es el **any** de las funciones, hay que evitarlo, hay que decir que funcion necesitamos

```TypeScript
const sayHiFromFunction = (fn: (name:string) => void) => {
  return fn('Euge')
}

sayHiFromFunction((name: string) => {
  console.log(`Hola ${name}`)
})
```

**void** porque no tiene un **return**, si no usamos **void** devuelve **undefined** explicitamente. Si tengo void e igualmente devuelve algo, no hya problemas en la compilación.


---

## <img width="48" height="48" src="https://img.icons8.com/color/48/typescript.png" alt="typescript"/> never / void


NEVER

VOID

```TypeScript
const sayHiFromFunction = (fn: (name:string) => void) => {
  return fn('Euge')
}

sayHiFromFunction((name: string) => {
  console.log(`Hola ${name}`)
})
```

```TypeScript

```

```TypeScript

```

---

## <img width="48" height="48" src="https://img.icons8.com/color/48/typescript.png" alt="typescript"/> Objetos

---

## <img width="48" height="48" src="https://img.icons8.com/color/48/typescript.png" alt="typescript"/> Type Alias

---

## <img width="48" height="48" src="https://img.icons8.com/color/48/typescript.png" alt="typescript"/> Optional properties

---

## <img width="48" height="48" src="https://img.icons8.com/color/48/typescript.png" alt="typescript"/> Optional chaining operator

---

## <img width="48" height="48" src="https://img.icons8.com/color/48/typescript.png" alt="typescript"/> Mutabilidad

---

## <img width="48" height="48" src="https://img.icons8.com/color/48/typescript.png" alt="typescript"/> Object freeze

---

## <img width="48" height="48" src="https://img.icons8.com/color/48/typescript.png" alt="typescript"/> Template union types

---

## <img width="48" height="48" src="https://img.icons8.com/color/48/typescript.png" alt="typescript"/> Preguntas y respuestas 

---

## <img width="48" height="48" src="https://img.icons8.com/color/48/typescript.png" alt="typescript"/> Union Types

---

## <img width="48" height="48" src="https://img.icons8.com/color/48/typescript.png" alt="typescript"/> Intersection types

---

## <img width="48" height="48" src="https://img.icons8.com/color/48/typescript.png" alt="typescript"/> Type indexing

---

## <img width="48" height="48" src="https://img.icons8.com/color/48/typescript.png" alt="typescript"/> Type from value y typeof

---

## <img width="48" height="48" src="https://img.icons8.com/color/48/typescript.png" alt="typescript"/> Type from function return

---

## <img width="48" height="48" src="https://img.icons8.com/color/48/typescript.png" alt="typescript"/> Arrays

---

## <img width="48" height="48" src="https://img.icons8.com/color/48/typescript.png" alt="typescript"/> Matrices y tuplas

---

