// não precisa passar o numero de parametros que precisa, é só escrever ...args
const sum = (...args) => args.reduce((accumulator, current) => accumulator + current, 0);
console.log(sum(4, 7, 8, 9, 60)); // 88