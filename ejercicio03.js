function countNameRepetitions(names) {
  const cuenta = {};                                                              //creo un objeto llamado 'cuenta'

  for (var i = 0; i < names.length; i++) {                                        //Recorro cada elemento del array(name) que paso por parámetro
    var nombre = names[i];

    if (typeof nombre === 'string' && /^[A-Za-zÁÉÍÓÚáéíóúÜüÑñ]+$/.test(nombre))  //Con esta expresión regular valido que los elementos del array sean de tipo 'string'
      if (cuenta[nombre]) {                                                      //Valido si existe el elemento del array dentro del objeto 'cuenta',
        cuenta[nombre].contador++;                                               //si existe, a la propiedad 'contador' del objeto 'cuenta' lo incremento en 1  
      } else {
        cuenta[nombre] = {                                                       //Si el elemento del array no existe en el objeto 'cuenta',
          nombre: nombre,                                                        //lo adiciono con la propieda 'nombre', que contendrá el elemento de array
          contador: 1                                                            //y contendrá la propieda 'contador' con el número de veces que se repetirá dicho elemento en el array
        };
      }
    else{
      return("El array debe tener elementos solamente de tipo 'string'");
    }
  }
   
  const elementos = Object.keys(cuenta);                                        //En el array elementos, almacenanos los nombres únicos (Clave) del objeto 'cuenta'
  let resultado = '';                                                           // Variable 'resultado' que contendrá la salida solicitada de la funcicón.

  elementos.forEach((elemento, index) => {                                      //Recorremos cada elemento del array 'elementos', referenciando dicho elemento con su índice 
    comilla = "'";
    const repeticiones = comilla + '*'.repeat(cuenta[elemento].contador) + comilla; //En la variable 'repeticiones' almacenamos la cantidad de veces que se repite dicho elemento, representado por comilla al inicio y al final y el caracter '*' con la cantidad de veces que se repite el elemento en el array
    var coma = index < elementos.length - 1 ? ',' : '';                         //Ponemos ',' al final de cada salida. excepto para el último elemento
    resultado += `${elemento}: ${repeticiones}${coma}\n`;  
  }); 

  
  return resultado;

}

//A continuación llamo a la función 'countNameRepetitions' y le paso el array a evaluar
const resultado = countNameRepetitions(['Jorge', 'Gabriela', 'Selene', 'Mercedes', 'Matías', 'Matías', 'Jorge']);

console.log(resultado);