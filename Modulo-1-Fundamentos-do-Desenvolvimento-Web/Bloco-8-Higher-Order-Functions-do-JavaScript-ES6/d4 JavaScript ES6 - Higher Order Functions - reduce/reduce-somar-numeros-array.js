const numbers = [32, 15, 3, 2, -5, 56, 10];

// O parâmetro `result` é o acumulador. Ele recebe, do `reduce`, o retorno da função a cada iteração.
const sumNumbers = numbers.reduce((result, number) => result + number); 
console.log(sumNumbers); // 113

// Ou seja:
const getSum = (result, number) => result + number;
const soma = numbers.reduce(getSum);
console.log(soma); // 113