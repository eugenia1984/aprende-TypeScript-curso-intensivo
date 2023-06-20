# <img width="48" height="48" src="https://img.icons8.com/color/48/typescript.png" alt="typescript"/> CLASE 2 :computer:

## ¿Por qué usar TS?

- popularidad

- empleo

- compila a JS

## ¿Qué es TS?

- lenguaje de programación

- superset de JS

- para añadir tipos al lenguaje

## ¿Por qué usar TS?

Uno de los problemas de JS es que es un lenguaje con tipado dinámico y débil.

```JavaScript
2 + '2' = '22'
```

## ¿Qué no hace TS?

- analiza en tiempo real de compilación, de forma estática

- no aregla los problemas en tiempo de ejecución


---


## Tuplas


Son mutables, con el **Readonly** se soluciona.

```TypeScript
type RGB = readonly [number, number, number]
const black: RGB = [0, 0, 0]
// Al tener el READONLLY no podria hacer: black.push(4)
```

---

## <img width="48" height="48" src="https://img.icons8.com/color/48/typescript.png" alt="typescript"/>  Cómo crear y extender tus tipos 


```TypeScript
// template union type
type HeroId2 = `${ string }-${ string }-${ string }-${ string }-${ string }`

type Hero2 = {
  readonly id?: HeroId2
  name: string
  age: number
  isActive?: boolean 
}
```


---

## <img width="48" height="48" src="https://img.icons8.com/color/48/typescript.png" alt="typescript"/> Enums

Como en Js no tenemos Enum, odriamos guardar los posibles valores en una constante, de este modo:

```JavaScript
const ERROR_TYPES = {
  NOT_FOUND: 'notFound',
  UNAUTHORIZED: 'unauthorized',
  FORBIDDEN: 'forbidden'
}

function mostrarMensaje(tipoDeError) {
  if(tipoDeError === ERROR_TYPES.NOT_FOUND) {
    console.log('No se encuentra el recurso')
  } else if (tipoDeError === ERROR_TYPES.UNAUTHORIZED) {
    console.log('No tienens permisos para acceder')
  } else if(tipoDeError === ERROR_TYPES.FORBIDDEN) {
    console.log('No tienes permisos para acceder')
  }
}
```


En TS si tenemos **Enum**, se utiliza para una colección de datos finitos.

```TypeScript
```


```TypeScript
```
---

## <img width="48" height="48" src="https://img.icons8.com/color/48/typescript.png" alt="typescript"/> Type vs Interface

---

## <img width="48" height="48" src="https://img.icons8.com/color/48/typescript.png" alt="typescript"/> Clases

---

## <img width="48" height="48" src="https://img.icons8.com/color/48/typescript.png" alt="typescript"/> Genéricos

---

## <img width="48" height="48" src="https://img.icons8.com/color/48/typescript.png" alt="typescript"/> Utility Types

---