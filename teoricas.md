1. Explica la diferencia entre los operadores == y === en JavaScript.
    Son operadores de igualacion, su diferencia es lo estricto a la hora de hacer la igualacion
        == compara el valor del dato ingresado que sea igual al otro
        === ademas de comparar el valor del dato tambien hace la validacion en su tipo de dato (str, int, boolean, etc)


2. ¿Qué es una declaración switch en JavaScript y cuándo es útil su uso?
    Es una declaracion que evalua una expresion y compara su valor con diferentes casos (case) y cuando uno de estos se cumpla ejecuta la instruccion de codigo asociada a ese Case


3. ¿Cuál es la diferencia entre un array y un objeto en JavaScript? Proporciona un ejemplo de cada uno.
    - array es una coleccion de datos ordenada que permite guardar datos en posiciones numericas, su indice inicia en 0 y son utiles para guardar multiples valores de un mismo tipo
        Ejemplo Aray:
            const array = [1, 2, 3, 4, 5, 6];
            console.log(array);

    - objeto es una coleccion de datos con clave y valor, son entidades que tienes propiedades y metodos para operar, la clave son cadenas que identifican los valores asociados, son utiles para guardar informacion de manera estructutrada y acceder a los valores por medio de las claves
        Ejemplo Objeto:
            const objeto = {
                nombre: 'Alejandro',
                edad: 30,
                ciudad: 'Pereira'
            };
            console.log(objeto);


4. Explica cómo funciona el operador ternario en JavaScript y proporciona un ejemplo de su uso.
    Es una manera de hacer una validacion de manera mas abreviada, atraves de una expresion mas simplificada validamos si una condicione se cumple u otra por si no se cumple
    Ejemplo:
        const edad = 20;
        const mensaje = edad >= 18 ? 'Mayor de edad' : 'Menor de edad';
        console.log(mensaje);


5. ¿Qué es un operador de comparación en JavaScript? Proporciona ejemplos de al menos dos operadores de comparación y explica cómo funcionan.
    Como su nombre lo indica son operadores que nos sirven para realizar validaciones de comparacion entre datos, regularmente que sean de un mismo tipo, algunos de estos son:

    1. Igual (==): devuelve TRUE si todos los operadores son iguales
        const igualacion = 10 == 10;
        console.log(igualacion);
    2. Diferente (!=): Devuelve TRUE si la comparacion NO es igual
        const diferente = 18 =! 21;
        console.log(diferente);
    3. Mayor que (>): Devuelve TRUE si el valor es mayor si el valor de la izquierda es mayor que el de la derecha.
        const mayor = 17 > 18;
        console.log(mayor);
    4. Estrictamente igual (===): Devuelve TRUE si los operadores son igual valor y tipo.
        const estricto = '10' === '10';
        console.log(estricto);
    5. Menor o igual que (<=): Devuelve TRUE si el operador de la izquierda es menor o igual al de la derecha.
        const menorque = 15 <= 5;
        console.log(menorque);


