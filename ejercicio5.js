const numeroSecreto = Math.floor(Math.random() * 100) + 1;
let numeroUsuario = -1;
numeroUsuario = prompt("Ingrese un número entre 1 y 100:");

while (numeroUsuario != numeroSecreto) {
    if (numeroUsuario < numeroSecreto) {
        alert("El número secreto es mayor. Inténtalo de nuevo.");
    } else if (numeroUsuario > numeroSecreto) {
        alert("El número secreto es menor. Inténtalo de nuevo.");
    }
    numeroUsuario = prompt("Ingrese un número entre 1 y 100:");
}

console.log("¡Felicidades! Has adivinado el número secreto.");

// profe este lo puse a ejecutar desde el index.html para no instalar complementos que lo permitan hacer
// en la consola