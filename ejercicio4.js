// Escribe un código que tome un array de números y devuelva un nuevo array con solo los números mayores que 5, luego imprime el nuevo array en la consola.

const numeros = [2, 8, 3, 10, 6, 4, 7];

const numerosMayoresQue5 = numeros.filter(numero => numero > 5);

console.log("Números mayores que 5:", numerosMayoresQue5);
