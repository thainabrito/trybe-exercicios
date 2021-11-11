 
///2
let vector = [1,6,7,9,5,3,4,2,8]
let novoArray = [];

for (i=0;i<=vector.length;i+=1){
    if (vector[i]%2==0){
        novoArray.push(vector[i])
    }
}
console.log(novoArray)