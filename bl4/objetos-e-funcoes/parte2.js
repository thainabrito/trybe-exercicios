/* 
//1
let palavra = 'arara';

verificaPalindrome = palavra.split('').reverse().join('');
//console.log(verificaPalindrome)

if (palavra == verificaPalindrome) {
    console.log("true")
} else {
    console.log("false")
}
 */




/* //2
let array = [2, 3, 6, 7, 10, 1];
function maiorIndice() {
    let maior = array[0]
    
    for (let i = 1; i < array.length; i+=1){
        if (array[i] => maior) {
            maior = array[i];
        }
    } 
    return maior;
}

console.log(array.indexOf(maiorIndice())); */



/* 
//3
let array = [2, 4, 6, 7, 10, 0, -3];

function menorIndice() {
    let menor = array[0]
    
    for (let i = 1; i < array.length; i+=1){
        if (array[i] < menor) {
            menor = array[i];
        }
    } 
    return menor;
}

console.log(array.indexOf(menorIndice())); */


/* 
//4
let array = ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana'];
function maiorIndice() {
    let maior = array[0]
    
    for (let i = 1; i < array.length; i+=1){
        if (array[i].length > maior.length) {
            maior = array[i];
        }
    } 
    return maior;
    
}
console.log(maiorIndice());
 */


/* 
//5
let array = [2, 3, 2, 5, 8, 2, 3];
let comparacao = 1;
let soma = 0;
let elemento;
for (let i=0; i < array.length; i+=1)
{
        for (let a = i; a < array.length; a+=1)
        {
                if (array[i] == array[a])
                 soma+=1;
                if (comparacao<soma)
                {
                  comparacao=soma; 
                  elemento = array[i];
                }
        }
        soma = 0;
}
console.log(elemento) ;
 */



/* 
//6
let numero = 5;
let resultado = 0;

for (i=numero; i>=0; i-=1){
    resultado = resultado + i
}
console.log(resultado) */



//7
let word = "trybe";
let ending = "be";

separacaoword = word.split('');
//console.log(separacaoword)

separacaoending = ending.split('');
//console.log(separacaoending)

let penultimaword = separacaoword[separacaoword.length-2];
//console.log(penultimaword)

let ultimaword = separacaoword[separacaoword.length-1];
//console.log(ultimaword)

let penultimaending = separacaoending[separacaoending.length-2];
//console.log(penultimaending)

let ultimaending = separacaoending[separacaoending.length-1];
//console.log(ultimaending)

if (penultimaword == penultimaending & ultimaword == ultimaending) {
    console.log("true")
} else {
    console.log("false")
}