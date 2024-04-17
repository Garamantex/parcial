console.log('Hello, world!');

const colecion = [10, 2, 3, 4, 5];

console.log(colecion[0]);

colecion.push(6);

console.log(colecion);

colecion.pop();

console.log(colecion);

colecion.shift();

console.log(colecion);

// remover elemeto especifico del array
colecion.splice(1, 1);

console.log(colecion);


// crea una funcion que buque el costo de un auto en un objeto con autos y precios, retorna el modelo y el precio del auto

const autos = {
    auto1: 1000,
    auto2: 2000,
    auto3: 3000
}

function buscarAuto(auto) {
    return `El auto ${auto} tiene un costo de ${autos[auto]}`;
}

console.log(buscarAuto('auto1'));