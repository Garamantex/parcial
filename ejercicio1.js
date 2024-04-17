function formatString(str) {
    // Elimina los espacios en blanco al principio y al final
    str = str.trim();

    // Capitaliza la primera y la última letra
    str = str.charAt(0).toUpperCase() + str.slice(1, -1) + str.slice(-1).toUpperCase();

    return str;
}

console.log(formatString(" hola mundo "));