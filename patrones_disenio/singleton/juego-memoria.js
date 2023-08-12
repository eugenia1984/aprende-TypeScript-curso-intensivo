/*
* Juego de Memoria de Colores
* Instrucciones:
* 
* Implementa la clase ColorSequenceGenerator que siga el patrón Singleton. 
* Esta clase debe ser responsable de generar secuencias aleatorias de colores.
*
* Crea un método estático getInstance() en la clase ColorSequenceGenerator 
* que devuelva la instancia única del generador de secuencias. Si no hay una 
* instancia previa, se debe crear una nueva y devolverla.
*
* Implementa un método generateSequence(length) en la clase 
* ColorSequenceGenerator que genere una secuencia de colores aleatoria con la longitud especificada. 
* Puedes representar los colores posibles utilizando un array (por ejemplo,
* ['rojo', 'verde', 'azul', 'amarillo']) y generar una secuencia mezclando aleatoriamente los colores.
*
* Crea una función playGame() que maneje la lógica del juego. Esta función debe obtener la instancia 
* del ColorSequenceGenerator y generar una secuencia de colores utilizando el método generateSequence().
* Luego, solicita al jugador que repita la secuencia y verifica si la respuesta es correcta.
*
* Utiliza la consola para interactuar con el jugador. Muestra los colores de la secuencia y 
* solicita que los repita. Verifica si la respuesta del jugador coincide con la secuencia generada.
*/
class ColorSequenceGenerator {
  constructor() {
    if (ColorSequenceGenerator.instance) {
      return ColorSequenceGenerator.instance;
    }
    ColorSequenceGenerator.instance = this;
    this.colors = ['rojo', 'verde', 'azul', 'amarillo'];
  }

  generateSequence(length) {
    const sequence = [];
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * this.colors.length);
      sequence.push(this.colors[randomIndex]);
    }
    return sequence;
  }
}

function playGame() {
  const generator = ColorSequenceGenerator.getInstance();
  const sequence = generator.generateSequence(5); // Change the length as needed
  console.log('Secuencia de colores:', sequence);

  console.log('Repite la secuencia de colores:');
  const readline = require('readline');
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  let userInputSequence = [];

  function getUserInput() {
    rl.question('Ingresa el siguiente color: ', (color) => {
      if (generator.colors.includes(color)) {
        userInputSequence.push(color);
        if (userInputSequence.length === sequence.length) {
          checkSequence();
        } else {
          getUserInput();
        }
      } else {
        console.log('Color no válido. Los colores válidos son:', generator.colors.join(', '));
        getUserInput();
      }
    });
  }

  function checkSequence() {
    let isCorrect = true;
    for (let i = 0; i < sequence.length; i++) {
      if (userInputSequence[i] !== sequence[i]) {
        isCorrect = false;
        break;
      }
    }
    if (isCorrect) {
      console.log('¡Secuencia correcta! ¡Has ganado!');
    } else {
      console.log('¡Secuencia incorrecta! ¡Inténtalo de nuevo!');
    }
    rl.close();
  }

  getUserInput();
}

playGame();