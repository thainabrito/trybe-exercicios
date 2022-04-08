const numbers = [32, 15, 3, 2, -5, 56, 10];

const getSum = (result, number) => {
  console.log(result); // 10 32 47 50 52 47 103
  return result + number;
  };

//Esse 10 é o valor inicial do reduce.Caso nenhum parâmetro seja passado,será a primeira posição do array
const sumNumbers = numbers.reduce(getSum, 10);
console.log(sumNumbers); // 123

//somou e crescentou 10 do inicial