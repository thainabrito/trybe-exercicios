const names = ['Mateus', 'José', 'Ana', 'Cláudia', 'Bruna'];

const hasName = (arr, name) => {
  return names.some((nome) => nome === name);
}

console.log(hasName(names, 'Ana'))