/*
Aplicación de descuentos con Strategy
Bienvenidos al ejercicio de aplicación de descuentos con el patrón de diseño Strategy. En este ejercicio, tendrás la oportunidad de aplicar tus conocimientos sobre el patrón Strategy y su implementación en JavaScript.

El objetivo de este ejercicio es implementar un sistema de descuentos para una aplicación de comercio electrónico. Deberás crear diferentes estrategias de descuento y aplicarlas a productos específicos.

A continuación, se presentan los pasos que debes seguir para resolver el ejercicio:

Lee cuidadosamente el código proporcionado, el cual incluye las clases base como Producto, la interfaz DescuentoStrategy y las implementaciones de las estrategias de descuento.

Tu tarea principal es implementar el método calcularDescuento() en la clase Producto. Este método debe aceptar una instancia de DescuentoStrategy y aplicar la estrategia de descuento correspondiente al precio del producto.

Asegúrate de que cada estrategia de descuento, como DescuentoPorcentaje, DescuentoCantidadFija y SinDescuento, se implemente correctamente y se aplique al producto de manera adecuada.

Para verificar la solución, se proporciona un archivo de evaluación que contiene casos de prueba. Cada caso de prueba describe un escenario y se espera que implementes las aserciones correspondientes para comprobar si el resultado es el esperado.

Ejecuta el archivo de evaluación para verificar si tu solución funciona correctamente. Si todas las aserciones pasan, significa que has implementado el patrón Strategy de manera exitosa y los descuentos se aplican correctamente a los productos.

Recuerda leer atentamente las instrucciones y el código proporcionado, y presta atención a los detalles. Utiliza tus conocimientos sobre el patrón de diseño Strategy y las clases que se te han dado para resolver el ejercicio.
*/
// Clase Producto
class Producto {
  constructor(nombre, precio) {
    this.nombre = nombre;
    this.precio = precio;
  }

  calcularDescuento(descuentoStrategy) {
    return descuentoStrategy.aplicarDescuento(this.precio);
  }
}

// Interfaz DescuentoStrategy
class DescuentoStrategy {
  aplicarDescuento(precio) {
    // Este método será implementado por las clases de estrategia concretas
  }
}

// Estrategia de descuento: DescuentoPorcentaje
class DescuentoPorcentaje extends DescuentoStrategy {
  constructor(porcentaje) {
    super();
    this.porcentaje = porcentaje;
  }

  aplicarDescuento(precio) {
    return precio * (1 - this.porcentaje / 100);
  }
}

// Estrategia de descuento: DescuentoCantidadFija
class DescuentoCantidadFija extends DescuentoStrategy {
  constructor(cantidad) {
    super();
    this.cantidad = cantidad;
  }

  aplicarDescuento(precio) {
    return precio - this.cantidad;
  }
}

// Estrategia de descuento: SinDescuento
class SinDescuento extends DescuentoStrategy {
  aplicarDescuento(precio) {
    return precio;
  }
}

// Crear productos
const producto1 = new Producto("Camisa", 30);
const producto2 = new Producto("Pantalón", 50);

// Aplicar estrategias de descuento
const descuento10Porciento = new DescuentoPorcentaje(10);
const descuento20Pesos = new DescuentoCantidadFija(20);
const sinDescuento = new SinDescuento();

const precioProducto1ConDescuento1 = producto1.calcularDescuento(descuento10Porciento);
const precioProducto2ConDescuento2 = producto2.calcularDescuento(descuento20Pesos);
const precioProducto1SinDescuento = producto1.calcularDescuento(sinDescuento);

console.log("Precio producto 1 con 10% de descuento:", precioProducto1ConDescuento1);
console.log("Precio producto 2 con $20 de descuento:", precioProducto2ConDescuento2);
console.log("Precio producto 1 sin descuento:", precioProducto1SinDescuento);
