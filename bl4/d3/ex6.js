seeprimo = 7;
let armazenamento = [];

for (let i = 1; i <= seeprimo; i+=1){
    if (seeprimo%i==0) {
        armazenamento.push(i)
    }
}
 if (armazenamento[0]==1 && armazenamento[1]==seeprimo){
    console.log(seeprimo + " é primo")
    } else {
        console.log(seeprimo + " não é primo")
    }