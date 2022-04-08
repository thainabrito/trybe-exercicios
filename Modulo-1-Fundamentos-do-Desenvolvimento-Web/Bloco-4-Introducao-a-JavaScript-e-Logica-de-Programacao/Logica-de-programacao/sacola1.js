let qtd = 10;
let ingredientes = ["queijo","presunto","maionese"];
let sacola = [];

for (let index = 0; index < 10; index+=1){
    let pao = [];

    for (let index2 = 0; index2 < ingredientes.length; index2 += 1){
        pao.push(ingredientes)
        //ingredientes.splice(2,1)
        let retorno = ingredientes.indexOf("maionese");
        ingredientes.splice(retorno,1)
        ingredientes.push("catchup")
        sacola.push(pao);
    }

    
}

console.log("sacola: ", sacola[4])