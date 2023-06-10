function drawX(n) {                                     //Declaro la función 'drawX' que recibirá como parámetro el número
  longitudLínea = n                                     //En la variable 'longitudLínea' asigno el valor de la variable 'n', que contendrá la cantidad de caracteres de cada líne a imprimir
  
  for (let i = 1; i <= longitudLínea; i++) {            //Declaramos este 'for' con la variable 'i', la cual nos ayudará a contolar cada líena de la figura 'X' que vamos a dibujar 
    let salida = "";
                                                        
    for (let j = 1; j <= longitudLínea; j++) {          //Declaramos este 'for' con la variable 'j', la cual nos ayudará a contolar cada columna de la figura a armar
      if (j === i || j === longitudLínea - i + 1) {
        salida += "*";
      } else {
        salida += " ";
      }
    }
    
    console.log(salida);                                //La variable 'salida' tendrá concatenada lo que se imprimirá en cada línea, después de cada iterarción de la variable 'j'
  }
}


//Invocamos a la función 'drawX' pasando como parámetro el valor de 9
drawX(13);