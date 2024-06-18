const students = [
  "Albertina",
  "Katerina",
  "Ester",
  "Galis",
  "Oriol",
  "Susana",
  "McCarmen",
  "Gerard",
  "Dayane",
  "Susana",
  "Diego",
  "Maria",
];

// Resultado esperado: https://oscarm.tinytake.com/msc/ODg4Njg3NV8yMjM0MDcwNg

// Utiliza el método forEach para mostrar cada elemento del array por la consola
students.forEach(function(name) {
  console.log(name);
});

// Utiliza el método findIndex para encontrar que índica ocupa el string "Maria"
const indiceMaria = students.findIndex(function(name) {
  return name === "Maria";
});
console.log("Índice de Maria:", indiceMaria); // Resultado: 10

// Utiliza el método some para saber si en este array existe la alumna "Katerina"
const existeKaterina = students.some(function(name) {
  return name === "Katerina";
});
console.log("¿Existe Katerina?", existeKaterina); // Resultado: true

// Utiliza el método find para saber el primer nombre que tiene 5 o menos carácteres
const nombreCorto = students.find(function(name) {
  return name.length <= 5;
});
console.log("Primer nombre con 5 o menos caracteres:", nombreCorto); // Resultado: Ester

// Utiliza el método every para comprobar si todos los strings de este array tienen 4 o más carácteres
const todos4oMas = students.every(function(name) {
  return name.length >= 4;
});
console.log("¿Todos los nombres tienen 4 o más caracteres?", todos4oMas); // Resultado: true

// Utiliza el método filter para obtener un nuevo array que solo incluya aquellos nombres que contengan la letra i
const conI = students.filter(function(name) {
  return name.toLowerCase().includes("i");
});
console.log("Nombres con la letra i:", conI); // Resultado: ['Albertina', 'Katerina', 'Galis', 'Oriol', 'Diego', 'Maria' ]

// Utiliza el método map para obtener un nuevo array donde aparezca solamente la primera inicial de cada nombre
const iniciales = students.map(function(name) {
  return name[0];
});
console.log("Iniciales de los nombres:", iniciales); // Resultado: ["A", "K", "E", "G", "O", "S", "M", "G", "D", "S", "D", "M"]
