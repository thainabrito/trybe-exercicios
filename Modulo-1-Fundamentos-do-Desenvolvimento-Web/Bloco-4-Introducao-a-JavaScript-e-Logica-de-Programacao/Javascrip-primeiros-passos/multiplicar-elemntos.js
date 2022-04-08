let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let novoNumbers = [];
let multiplicacao = 1;

for (index = 0; index < numbers.length; index += 1) {
    multiplicacao = numbers[index] * numbers[index+1]

novoNumbers.push(multiplicacao)

}
console.log(novoNumbers);


//multiplicacao = multiplicacao * numbers[index]

/* multiplicacao = numbers[0] * numbers[1]
novoNumbers.push(multiplicacao)

multiplicacao = numbers[1] * numbers[2] */



//for (index = 0; index < numbers.length; index += 1) {
//soma = soma + numbers[index];

//}

    