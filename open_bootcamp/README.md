# :computer: Curso de TypeScript de OpenBootcamp

## Herramientas

- [**Node**](https://nodejs.org/es), con `node --version` vemos el númeor de versión y reconfirmamos que lo tenemos instalado

- [**npm**](https://www.npmjs.com/) el gestor de paquetes para isntalar las dependencias

- [**TypeScript**](https://www.typescriptlang.org/), es un superset de JavaScript

- **Visual Studio Code**, extensiones recomendadas: **material icon** para los iconos en los archivos, **JavaScript and TypeScript Nightly**, **TypeScript Hero**, **ESLint**, **npm** y **npm intellisense**, **Path Intellisense**, **Rainbow Brackets**, **TODO Highligh**, **TODO Tree**

---

## ¿Qué hacemos?

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

3. Agregamos dependencias con npm: `npm i --save-dev @types/node nodemon ts-node typescript`, porque son heramientas de **entorno de desarrollo**.

- [@types/node](https://www.npmjs.com/package/@types/node)

- [nodemon](https://www.npmjs.com/package/nodemon)

- [ts-node](https://www.npmjs.com/package/ts-node)

- [TypeScript](https://www.npmjs.com/package/typescript)

Y ahora en el packege.json veo:

```
"devDependencies": {
  "@types/node": "^20.4.5",
  "nodemon": "^3.0.1",
  "ts-node": "^10.9.1",
  "typescript": "^5.1.6"
}
```

4. **tsconfig** para tener el archivo de configuración de TypeScript, para indicar como se va a transpilar de TypeScript a JavaScript. Lo inicializamos:

`npx tsc --init --rootDir build --esModuleInterop --resolveJsonModule --lib es6 --module commonjs --allowjs true --noImplicitAny true`

-> **--rootDir build** el codigo compilado va a ir al directorio build

-> **--lib es6** para usar ECMAScript6

-> **--allowjs** true para tener archivos tanto JsvaScript como TypeScript

-> **--noImplicitAny true**

5. Creamos la carpeta **src** donde tendremos el codigo fuente del proyecto. Y dentro el **index.ts**

6. Agrego un script para ejecutar ts-node: `"tsNode": "cd src && ts-node index.ts"`
y desde consola lo ejecuto: `npm run tsNode`, asi se va a transpilar y ejecutar para ver por consola.

7. Aprovechamos **nodemon** y desde la raiz del proyecto (ts-demo) creamos un archivo **nodemon.json**

`
{
  "watch": ["src"],
  "extensions": ".ts, .js",
  "ignore": [],
  "exec": "ts-node ./src/index.ts"
}
`

Y agrego un script en el package.json para poder ejecutarlo: `"start": "nodemon"`.

Ahora con: `npm run start` lo corremos

8. Con ESLint le ponemos normas/ reglas para que todos desarrollemos igual, sea más mantenible.

---