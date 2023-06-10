function createPhoneNumber(digitos) {
    const regex = /^[1-9][0-9]*$/;                                                     //Expresión regular para que valide solo números entre 0 y el 9
    numeroFormateado = '';  
 
    if(digitos.length != 10){                                                              //Valido que la longitud del número telefónico sea de 10 dígitos.                   
        return("El número telefónico debe tener una longitud de 10 dígitos");
    }

    for (var i = 0; i < 10; i++) {                                      
        digitoEvaluar = digitos[i];

        if(regex.test(digitoEvaluar)){                                                //Evalúo cada dígito (con base a la expresión regular definida en la variable regex) para que sea numérico
            numeroFormateado = numeroFormateado + digitoEvaluar;
        }else{
            return("Formato de número ingresado es invávilo, debe ser numérico, entero positivo entre 0 y 9  ó iniciar con dígito diferente a cero (0)" );
        }
    }
  
    numeroFormateado = numeroFormateado.replace(/(\d{3})(\d{3})(\d{4})/, '($1) $2-$3');//retorna la salida con el formato de número solicitado
    return numeroFormateado;
}


  
  console.log(createPhoneNumber([1, 9, 5, 1, 'd', 8, 9, 8, 8, 9])) ;