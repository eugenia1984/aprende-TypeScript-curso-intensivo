/****************  Singleton  ************/

class Singleton {
  constructor() {
    // Aqui tendriamos la logica del singleton
    if(Singleton.instance) {
      return Singleton.instance
    }

    console.log('Se ha creado una nueva instancia de Singleton')

    Singleton.instance = this
  }

  static getInstance() {
    // corroboramos si existe una
    if(Singleton.instance) {
      return Singleton.instance
    }
    // si no existe se la creo
    return new Singleton()
  }
}

// Creamos un objeto singleton
const singleton1 = new Singleton()

// intentamos crear otro objeto Singleton
const singleton = new Singleton()

console.log(singleton1 === singleton2)

/****** Patron de diseño con Singleton simulando Base de Datos *****/
class DataBase {
  constructor() {
    if(DataBase.instance) {
      return DataBase.instance
    }

    console.log('Se ha creado una nueva instancia de DataBase')

    // simulacion de configuracion de conexion a una base de datos
    // De este modo me aseguro que hay una sola conexion a la base de datos en todo el programa
    this.host = 'localhost'
    this.username= 'admin'
    this.password = 'root'

    DataBase.instance = this
  }

  query(sql) {
    console.log(`Ejecutando la consulta: ${sql}`)
  }
}

const db1 = new DataBase()
const db2 = new DataBase()
console.log(db1 === db2)
db1.query('SELECT * FROM users')
db2.query('UPDATE products SET price=10 WHERE price=1')
