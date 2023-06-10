function next_pal(num){                                                //Creo la función con el nombre "next_pal"
  if (num > 0){
  while (true) {                                                       //Creo iteración mientras que la condición sea verdadera
      ++num                                                            //Contiuamos al siguinte número que le sigue al número que introducimos a la condición para continuar con la búsqueda del siguinte número palíndromo
      let num_invertido = num.toString().split("").reverse().join(""); //El número actual que estamos evaluando si es palíndromo lo asignamos a la variable "num_invertido", pero, de manera invertida
      if (parseInt(num_invertido) === num) {                           //Comparamos (las variables "num_invertido" y "num")para saber si son iguales el número evaluado en el momento, con el mismo número pero que habíamos invertido en la línea anterio de código.
          return num;                                                  //De ser igual, quiere decir que el número evaluado en la variable "num" es palíndromo	y retornaría true
      } 
    }
  } else{
    return("El número no es positivo");
  }
}
  
console.log(next_pal(3452));                                           //Llamado a función "next_pal" con parámetro de valor de 1441 