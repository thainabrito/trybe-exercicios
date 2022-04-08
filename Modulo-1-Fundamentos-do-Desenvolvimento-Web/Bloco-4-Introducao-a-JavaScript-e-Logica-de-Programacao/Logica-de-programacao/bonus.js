 let numero = 7;
for (let i = 0; i < numero; i += 2){
    let resultado = '';

    if (i % 1 == 0) {
        for (a = numero - 1; a > i; a -=2){
        resultado += " ";
    }
    
    for (a = 0; a<= i; a+=1){
        if (a==0) {
        resultado += "*";
        } else {
            resultado += " ";
        }
        
       for (a = 0; a<= i; a+=1){
            if (a==5) {
            resultado += "*";
            } else {
                resultado += " ";
            }

            for (a = 0; a<= i; a+=1){
                if (a==6) {
                resultado += "*";
                } else {
                    resultado += " ";
                }

    }
    console.log(resultado);
}

    }

    }

}


/* let numero = 7;
for (let i = 0; i < numero; i += 2){
    let resultado = '';

    if (i % 1 == 0) {
        for (a = numero - 1; a > i; a -=2){
        resultado += " ";
    }
    
    for (a = 0; a<= i; a+=1){
        if (a==0 ) {
        resultado += "*";
        } else {
            resultado += "";
        }
        

    }
    console.log(resultado);

}

} */