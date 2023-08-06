# :computer: Curso de TypeScript de OpenBootcamp

[https://github.com/gorkavillara/curso-typescript-05-junio/tree/tema-01-introduccion](https://github.com/gorkavillara/curso-typescript-05-junio/tree/tema-01-introduccion) es el repositorio en GitHub donde subieron el código por si tenemos dudas.

---

## <img width="40" height="40" src="https://img.icons8.com/stickers/40/maintenance.png" alt="maintenance"/> Herramientas

- [<img width="40" height="40" src="https://img.icons8.com/color/40/nodejs.png" alt="nodejs"/> **Node**](https://nodejs.org/es), con `node --version` vemos el númeor de versión y reconfirmamos que lo tenemos instalado

- [<img width="40" height="40" src="https://img.icons8.com/color/40/npm.png" alt="npm"/> **npm**](https://www.npmjs.com/) el gestor de paquetes para isntalar las dependencias: [@types/node](https://www.npmjs.com/package/@types/node), [nodemon](https://www.npmjs.com/package/nodemon), [rimraf](https://www.npmjs.com/package/rimraf), [ts-node](https://www.npmjs.com/package/ts-node), [typescript](typescript) y [cookies-utils](https://www.npmjs.com/package/cookies-utils)

- [<img width="40" height="40" src="https://img.icons8.com/color/40/typescript.png" alt="typescript"/> **TypeScript**](https://www.typescriptlang.org/), es un superset de JavaScript

- <img width="40" height="40" src="https://img.icons8.com/color/40/visual-studio-code-2019.png" alt="visual-studio-code-2019"/> **Visual Studio Code**, extensiones recomendadas: **material icon** para los iconos en los archivos, **JavaScript and TypeScript Nightly**, **TypeScript Hero**, **ESLint**, **npm** y **npm intellisense**, **Path Intellisense**, **Rainbow Brackets**, **TODO Highligh**, **TODO Tree**

---

## <img width="40" height="40" src="https://img.icons8.com/external-flaticons-lineal-color-flat-icons/40/external-command-line-computer-science-flaticons-lineal-color-flat-icons.png" alt="external-command-line-computer-science-flaticons-lineal-color-flat-icons"/> ¿Qué hacemos?

1. `mkdir ts-demo` para crear la carpeta

2. `npm init` para iniciar un proyecto con el archivo package.json asi se instalan las dependencias. Si utilizamos `npm init -y` le decimos yes a todo por defecto, pero lo vamos a crear manual, con el **menu de preguntas**:

- package name: (ts-demo)

- version: (1.0.0)

- description: Proyecto de ejemplo para el desarrollo con TS

- entry point: (index.js)

- test command: en el caso de que hagamos test, y frameworks como Jest para hacer pruebas unitarias, en este caso no se utilizara, se deja vacio.

- git repository: https://github.com/eugenia1984/aprende-TypeScript-curso-intensivo

- keywords: ts, typescript, frontend, javascript -> es opcional, son las palabras claves con las que buscaran el paquete en npm

- author: Maria Eugenia Costa

- license: (ISC)

-> Se ve el resumen de como se vera el **package.json**

- Is this OK? (yes)

3. Agregamos dependencias con npm: `npm i --save-dev @types/node nodemon ts-node typescript rimraf`, porque son heramientas de **entorno de desarrollo**.

- [@types/node](https://www.npmjs.com/package/@types/node)

- [nodemon](https://www.npmjs.com/package/nodemon), para ir actualizando los cambios sin necesidad de estar finalizar la ejecución de la terminal y volver a correrla.

- [ts-node](https://www.npmjs.com/package/ts-node)

- [TypeScript](https://www.npmjs.com/package/typescript)

- rimraf, para generar build más potentes, sin necesidad de usar Webpack.

Y ahora en el packege.json veo:

```JSON
"devDependencies": {
  "@types/node": "^20.4.5",
  "nodemon": "^3.0.1",
  "rimraf": "^5.0.1",
  "ts-node": "^10.9.1",
  "typescript": "^5.1.6"
}
```

4. **tsconfig** para tener el archivo de configuración de TypeScript, para indicar como se va a transpilar de TypeScript a JavaScript. Lo inicializamos:

`npx tsc --init --outDir build --rootDir src --esModuleInterop --resolveJsonModule --lib es6 --module commonjs --allowjs true --noImplicitAny true`

-> **--outDir build** el codigo compilado va a ir al directorio build

-> **rootDir src**

-> **--lib es6** para usar ECMAScript6

-> **--allowjs** true para tener archivos tanto JsvaScript como TypeScript

-> **--noImplicitAny true**

5. Creamos la carpeta **src** donde tendremos el codigo fuente del proyecto. Y dentro el **index.ts**

6. Agrego un script para ejecutar ts-node: `"tsNode": "cd src && ts-node index.ts"`
 y desde consola lo ejecuto: `npm run tsNode`, asi se va a transpilar y ejecutar para ver por consola.

7. Aprovechamos **nodemon** y desde la raiz del proyecto (ts-demo) creamos un archivo **nodemon.json**

```JSON
{
  "watch": ["src"],
  "extensions": ".ts, .js",
  "ignore": [],
  "exec": "ts-node ./src/index.ts"
}
```

Y agrego un script en el package.json para poder ejecutarlo: `"start": "nodemon"`.

Ahora con: `npm run start` lo corremos.

Con `ctrl+c` paro la ejecución.

8. Creamos otro script para el build, en el package.json, en la parte de script: `"transpilation": "tsc"`. Y lo corremos `npm run transpilation`

9. Agregamos un nuevo script para usar **rimraf**:

`"build:prod":"rimraf ./build && tsc"`, hago una **build** (`rimraf`) desde la carpeta **build** ( `./build`) y despues lo **traspilo** (`&& tsc`)

Y también: `"start:prod":"npm run build:prod && node build/index.js"`, para obviar los comandos: `tsNode`, `start` y `transpilation`

-> Ahora con ` npm run start:prod` agarramos el archivos TS, hacemos el build, transpilamos y corremos el archivo JavaScript creado.

10. Con ESLint le ponemos normas/ reglas para que todos desarrollemos igual, sea más mantenible.

---

## <img width="30" height="30" src="https://img.icons8.com/isometric/30/experimental-book-isometric.png" alt="book"/> ¿Qué vemos ?

- 1 - **Tipado de datos** primitivos y no promitivos(array, enum, interface, type). **BuiltIn Types**: number, string, boolean, void, null, undefined. Asignación múltiple de variables con **desestructuración**. **spread operator** en array y objeto.

- 2 - **condicionales** (operador ternario, if, if-else, if-else if-else, swich) y **bucles** (for, forEach, for in, while, do while)

- 3 - manejo de errores: **try-catch**

- 4 - **funciones**: parametros opcionales, varios parametros, spread operator con multiparametros, return, arrow function, funcion callback, sobrecarga de funciones, funciones asíncronas (async-await, .then() - .catch() - .finally()), funciones generadoras(yield). **type**

- 5 - **persistencia de datos** en el navegador (LocalStorage-nativo de JavaSCript-, SessionStorage-nativo de JavaScript-, Cookies se trabaja manual o con librerias). Paquete npm **cookie-utils**: `npm install cookies-utils` (existe la libreria **cookies** que es para peticiones HTTP, más pensado para el Back, para un server de Express). Ejecución de **eventos**

- 6 - **Clases**(properties, methods, constructor), **import**/**export**

---
