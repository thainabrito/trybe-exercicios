let numero = 4;
for (let i = 1; i <= numero; i+=1){
    let resultado = '';//numero de linhas

    for (let a = numero; a >= i; a-=1) {
        resultado += "*"; //numero de estrelas
    }
    console.log(resultado)
}