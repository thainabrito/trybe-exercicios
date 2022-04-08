// Faça uma lista com as suas frutas favoritas
const specialFruit = ['alface', 'tomatinhos', 'azeite'];

// Faça uma lista de complementos que você gostaria de adicionar
const additionalItens = ['sal', 'queijo branco', 'castanhas'];

const fruitSalad = (fruit, additional) => {
  const additionalSalad = [...specialFruit, ...additionalItens]
  return additionalSalad;
};
console.log(fruitSalad());

//console.log(fruitSalad(specialFruit, additionalItens));