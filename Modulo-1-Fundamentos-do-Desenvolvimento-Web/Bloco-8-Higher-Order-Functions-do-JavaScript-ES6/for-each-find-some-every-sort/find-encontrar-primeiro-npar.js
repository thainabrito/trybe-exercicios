const numbers = [19, 21, 30, 3, 45, 22, 15];

const isEven2 = numbers.find((number) => number % 2 === 0);

console.log(isEven2); // 30

//verifica se é par

/* const numbers = [19, 21, 30, 3, 45, 22, 15];

const verifyEven = (number) => number % 2 === 0;

const isEven = numbers.find(verifyEven);

console.log(isEven); // 30

console.log(verifyEven(9)); // False
console.log(verifyEven(14)); // True */