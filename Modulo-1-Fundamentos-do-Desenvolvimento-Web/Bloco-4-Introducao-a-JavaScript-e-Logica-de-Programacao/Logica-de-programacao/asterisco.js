/* //1 imprimir número de asteriscos pedido
let asterisco = "*****";
let numero = 4;

for (i = 0; i < numero; i += 1) {
    console.log(asterisco)
} */


/* 
//2 imprimir triangulo retângulo com base de acordo com número
let numero = 4;
for (let i = 1; i <= numero; i+=1){
    let resultado = '';//numero de linhas

    for (let a = 1; a <= i; a+=1) {
        resultado += "*"; //numero de estrelas
    }
    console.log(resultado)
}
 */



/*  
//3 inverter triângulo
let numero = 5;
for (let i = 1; i <= numero; i+=1){
    let resultado = '';//numero de linhas

    for (let a = numero; a >= i; a-=1) {
       resultado += " "; //numero de espaços
    }

    for (let a = 1; a <= i; a+=1) {
        resultado += "*"; //numero de estrelas
    }
    console.log(resultado)
}
 */


  //4 pirâmide com n asteriscos de base:
let numero = 5;
for (let i = 0; i < numero; i += 2){
    let resultado = '';

    
        for (a = 4; a > i; a -=2){
        resultado += " ";
    }
    for (a = 0; a<= i; a+=1){
        resultado += "*";
    }
    console.log(resultado);


}