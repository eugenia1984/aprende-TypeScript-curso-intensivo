/******* Singleton en TS *******/
// - Tiene un constructor privado, que evita se cree una nueva instancia por fuera de la clase
// - Proporciona un metodo estatico(publico) que permite obtener la insancia unica del Singleton,
// este metodo se encarga de crear la instancia si aun no existe y devolverla
// - una variable estatica privada para almacenar la instancia unica, es
// accesible solo dentro de la clase
class MySingleton {
  // atributo estatico privado, donde alamcena la unica instancia del singleon
  private static instance: MySingleton; 
  private data: string;

  // Constructor privado, evita se cree una nueva instancia fuera de la misma
  private constructor() {
    this.data = 'Initial data'
  }

  // Para obtener la instancia unica del Singleton
  public static getInstance(): MySingleton {
    if(!MySingleton.instance) {
      MySingleton.instance = new MySingleton()
    }
    return MySingleton.instance
  }

  // Setter y Getter, para obtener y modificar
  public setData(newData:string): void {
    this.data = newData
  }

  public getData(): string {
    return this.data
  }
}

const singletonInstance1 = MySingleton.getInstance()
console.log(singletonInstance1.getData())
