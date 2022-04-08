let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let novoNumbers = [];
let multiplicacao = 0;
let ultimo = numbers[numbers.length-1];


for (index = 0; index < numbers.length-1; index += 1) {
    multiplicacao = numbers[index] * numbers[index+1]

novoNumbers.push(multiplicacao)


}
novoNumbers.push(ultimo * 2)
console.log(novoNumbers);