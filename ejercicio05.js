function drawX(n) {                                     //Declaro la función 'drawX' que recibirá como parámetro el número
  const longitudLínea = n;                                     //En la variable 'longitudLínea' asigno el valor de la variable 'n', que contendrá la cantidad de caracteres de cada líne a imprimir
  let resultado = "";

  for (let i = 1; i <= longitudLínea; i++) {            //Declaramos este 'for' con la variable 'i', la cual nos ayudará a contolar cada líena de la figura 'X' que vamos a dibujar 
    let salida = "";
                                                          
    for (let j = 1; j <= longitudLínea; j++) {          //Declaramos este 'for' con la variable 'j', la cual nos ayudará a contolar cada columna de la figura a armar
      if (j === i || j === longitudLínea - i + 1) {
        salida += "*";
      } else {
        salida += " ";
      }
    }
    
    resultado += salida + "\n";                         //Concatenamos en la variable 'resultado', cada iteración en el for 'i'
    
  }

  
  return resultado; //La variable 'resultado' tendrá concatenada la salida solicitada.

}


//Invocamos a la función 'drawX' pasando como parámetro el valor de 13
console.log(drawX(13));