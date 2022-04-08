let qtd = 10;
let ingredientes = ["queijo","presunto","maionese"];
let sacola = [];
for(let index = 1; index < 10; index+=1){
console.log('sacola: ', index)

let pao = [];

for( let index = 1; index < ingredientes.length; index+=1){
console.log('ingredientes: ', index);
pao.push(ingredientes[index])
}
sacola.push(pao);

} 