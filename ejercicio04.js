function fizzBuzz(n) {                             //Declaramos la función llamada 'fizzBuzz', la cual recibirá como parámetro un número
    if (n <= 0) {                                  //Validamos que el número ingresado sea válido, de lo contrario aborta la función con el mensaje: "El número debe ser positivo"
        console.log("El número debe ser positivo");  
        return;
    }

    for (let i = 1; i <= n; i++) {                //Recorremos cada número iniciando en 1 hasta n (n es el parámtero que le pasamos a la fucnión)
        if (i % 3 === 0 && i % 5 === 0) {         //Con el operador mod '%', validamos si el número es divisible por 3 y por 5. Ser ser así, imprimimos la cadena: 'FizzBuzz'
            console.log("FizzBuzz");
        } else if (i % 3 === 0) {                 //Con el operador mod '%', validamos si el número es divisible por 3. Ser ser así, imprimimos la cadena: 'Fizz'
            console.log("Fizz");
        } else if (i % 5 === 0) {                 //Con el operador mod '%', validamos si el número es divisible por 5. Ser ser así, imprimimos la cadena: 'Buzz'
            console.log("Buzz");                  
        } else {                                  //De no cumplirse niguna de la anteriores condiciones, se imprimi el número con el valor que tiene 'i' en dicha iteración del bucle 'for'
            console.log(i);
        }
   }
}


//A continuación llamo a la función 'fizzBuzz' cpn el parámetro
fizzBuzz(40);