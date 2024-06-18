/**
 * Dado el siguiente array de números, aplica adecuadamente cada uno de los métodos de array obteenr la información requerida
 *
 * Resultado esperado: https://oscarm.tinytake.com/msc/ODg4NjgxMF8yMjM0MDYyNg
 */

const numbers = [-5, -3, -1, 1, 3, 5, 7, 9, 11, 13, 15, 17, 19];

/**
 * Utiliza la método forEach para mostrar cada número por consola
 */
numbers.forEach(function(number) {
    console.log(number);
  });
  
/**
 * Utiliza el método find para encontrar el primer número mayor de 10
 */
const mayorQue10 = numbers.find(function(number) {
    return number > 10;
  });
  console.log("Primer número mayor que 10:", mayorQue10); // Resultado: 11
  
/**
 * Utliza el método some para saber si existe un número mayor de 20
 */
const existeMayor20 = numbers.some(function(number) {
    return number > 20;
  });
  console.log("¿Existe un número mayor que 20?", existeMayor20); // Resultado: true
  
/**
 * Utiliza el método every para comprobar si todos los números de este array son impares
 */
const todosImpares = numbers.every(function(number) {
    return number % 2 !== 0;
  });
  console.log("¿Todos los números son impares?", todosImpares); // Resultado: false
  
/**
 * Utiliza el método filter para obtener un nuevo array con todos los números que son mayores de 3 pero menores de 9
 */
const filtrados = numbers.filter(function(number) {
    return number > 3 && number < 9;
  });
  console.log("Números entre 3 y 9:", filtrados); // Resultado: [5, 7]
  
/**
 * Utiliza el método map para obtener otro array donde, para cada posición, ontengamos un -1 si el número que ocupaba aquella posición es negativo, y un +1 si el nuemero es positivo
 * [-1, -1, -1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
 */
const signos = numbers.map(function(number) {
    if (number > 0) {
      return 1;
    } else {
      return -1;
    }
  });
  console.log("Signos de los números:", signos); // Resultado: [-1, -1, -1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
  