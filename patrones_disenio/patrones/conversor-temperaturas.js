/*
* Crea un programa en JavaScript que permita convertir temperaturas 
* entre Celsius, Fahrenheit y Kelvin. El programa deberá tener 
* las siguientes funcionalidades:
* - Solicitar al usuario que ingrese una temperatura y su unidad de medida 
* (Celsius, Fahrenheit o Kelvin).
* - Validar la entrada del usuario para asegurarse de que se haya ingresado
*  una temperatura válida y una unidad de medida válida.
* - Utilizar funciones para realizar las conversiones de temperatura entre
* las tres unidades de medida.
* - Utilizar los métodos de arrays (forEach, map, reduce, etc.) para mostrar * los resultados de las conversiones de manera ordenada.
* - Permitir al usuario realizar múltiples conversiones sin tener 
* que reiniciar el programa.
* - El programa debe mostrar los siguientes mensajes:
* -> "Ingrese una temperatura y su unidad de medida (Celsius, Fahrenheit o Kelvin):"
* -> "La temperatura equivalente en Celsius es: {temperatura en Celsius}"
* -> "La temperatura equivalente en Fahrenheit es: {temperatura en Fahrenheit}"
* -> "La temperatura equivalente en Kelvin es: {temperatura en Kelvin}"
*
* Recuerda que las fórmulas para convertir entre Celsius, Fahrenheit y Kelvin son las siguientes:
* Celsius a Fahrenheit: F = (C * 9/5) + 32
* Celsius a Kelvin: K = C + 273.15
* Fahrenheit a Celsius: C = (F - 32) * 5/9
* Fahrenheit a Kelvin: K = (F - 32) * 5/9 + 273.15
* Kelvin a Celsius: C = K - 273.15
* Kelvin a Fahrenheit: F = (K - 273.15) * 9/5 + 32
*
* Puedes utilizar la estructura de control if para determinar la unidad 
* de medida ingresada por el usuario y llamar a las funciones 
* correspondientes para realizar las conversiones.
*/

// Funciones de conversión
const celsiusToFahrenheit = (celsius) => (celsius * 9/5) + 32
const celsiusToKelvin = (celsius) => celsius + 273.15
const fahrenheitToCelsius = (fahrenheit) => (fahrenheit - 32) * 5/9;
const fahrenheitToKelvin = (fahrenheit) => (fahrenheit - 32) * 5/9 + 273.15;
const kelvinToCelsius = (kelvin) => kelvin - 273.15;
const kelvinToFahrenheit = (kelvin) => (kelvin - 273.15) * 9/5 + 32

// Función para solicitar y validar la entrada del usuario
function obtenerTemperaturaValida() {
  const temperaturaStr = prompt("Ingrese una temperatura y su unidad de medida (Celsius, Fahrenheit o Kelvin): ");
  const matches = temperaturaStr.match(/^([-+]?\d+(\.\d+)?)(?:\s*([CFKcfk]))?$/);

  if (matches) {
      const temperatura = parseFloat(matches[1]);
      const unidad = (matches[3] || '').toUpperCase();

      if (unidad === 'C') {
          return { temperatura, unidad: 'C' };
      } else if (unidad === 'F') {
          return { temperatura, unidad: 'F' };
      } else if (unidad === 'K') {
          return { temperatura, unidad: 'K' };
      }
  }

  console.log("Entrada inválida. Asegúrese de ingresar una temperatura numérica seguida de 'C', 'F' o 'K'.");
  return obtenerTemperaturaValida();
}

// Función principal
function main() {
  while (true) {
      const { temperatura, unidad } = obtenerTemperaturaValida();

      if (unidad === 'C') {
          const fahrenheit = celsiusToFahrenheit(temperatura);
          const kelvin = celsiusToKelvin(temperatura);

          console.log(`La temperatura equivalente en Celsius es: ${temperatura}`);
          console.log(`La temperatura equivalente en Fahrenheit es: ${fahrenheit}`);
          console.log(`La temperatura equivalente en Kelvin es: ${kelvin}`);
      } else if (unidad === 'F') {
          const celsius = fahrenheitToCelsius(temperatura);
          const kelvin = fahrenheitToKelvin(temperatura);

          console.log(`La temperatura equivalente en Celsius es: ${celsius}`);
          console.log(`La temperatura equivalente en Fahrenheit es: ${temperatura}`);
          console.log(`La temperatura equivalente en Kelvin es: ${kelvin}`);
      } else if (unidad === 'K') {
          const celsius = kelvinToCelsius(temperatura);
          const fahrenheit = kelvinToFahrenheit(temperatura);

          console.log(`La temperatura equivalente en Celsius es: ${celsius}`);
          console.log(`La temperatura equivalente en Fahrenheit es: ${fahrenheit}`);
          console.log(`La temperatura equivalente en Kelvin es: ${temperatura}`);
      }

      const continuar = prompt("¿Desea realizar otra conversión? (S/N)").toUpperCase();
      if (continuar !== 'S') {
          break;
      }
  }
}

// Llamar a la función principal
main();