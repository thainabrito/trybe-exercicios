let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let soma = 0;
let maior = 0;

/* //1 mostrar elementos
for (index = 0; index < numbers.length; index += 1) {
    console.log(numbers[index]);
    } */



/* //2 somar elementos
for (index = 0; index < numbers.length; index += 1) {
soma = soma + numbers[index];

}
console.log(soma); */



/* //3 média dos elementos
for (index = 0; index < numbers.length; index += 1) {
    soma = soma + numbers[index];
    
    }
    console.log(soma/numbers.length);  */



/* //4 imprimir se é maior que 20
for (index = 0; index < numbers.length; index += 1) {
    soma = soma + numbers[index];
    
    }
    
if ((soma/numbers.length) > 20) {
    console.log("valor maior que 20")
} else {
    console.log("valor menor ou igual a 20")
} */



/* //5 imprimir maior valor do array
for (index = 0; index < numbers.length; index += 1) {
    if (numbers[index] > maior ) {
        maior = numbers[index];
    }
}
console.log(maior); */



/* //6 imprimir ímpares
for (index = 0; index < numbers.length; index += 1) {
    if (numbers[index]%2 != 0) {
        console.log(numbers[index])
    }
} */



/* //7 imprimir menor número do array
let menor = numbers[0];
for (index = 0; index < numbers.length; index += 1) {
    if (numbers[index] < menor ) {
        menor = numbers[index];
    }
}
console.log(menor); */



/* //8 Utilizando for, um array que vá de 1 até 25 e imprima o resultado
let array = [1];
for (index = 0; index < 25; index += 1) {
array.push(array[0]+index);
}


for (arrays of array) {
    console.log(arrays)
} */



//9 Utilizando o exercício anterior imprima o resultado da divisão de cada um dos elementos por 2
let array = [1];
for (index = 0; index < 25; index += 1) {
array.push(array[0]+index);
}


for (arrays of array) {
    console.log(arrays/2)
}