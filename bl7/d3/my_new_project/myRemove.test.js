function myRemove(arr, item) {
    let newArr = [];
    for (let index = 0; index < arr.length; index += 1) {
      if (item !== arr[index]) {
        newArr.push(arr[index]);
      }
    }
    return newArr;
  }
  
  // implemente seus testes aqui
describe('Remove números', () => {
    it('Array sem 3', () => {
        const numeros = [1, 2, 3, 4];
        expect([1, 2, 4]).toEqual(myRemove(numeros, 3));
    });

    it('Ve se nao retorna 1 2 3 4', () => {
        const numeros = [1, 2, 3, 4];
        expect([1, 2, 3, 4]).not.toEqual(myRemove(numeros, 3));
    });

    it('Array sem 5', () => {
        const numeros = [1, 2, 3, 4];
        expect([1, 2, 3, 4]).toEqual(myRemove(numeros, 5));
    });

});



/* 
 describe('Remove números', () => {
    it('Remove o 3', () => {
        const numeros = [1, 2, 3, 4];
        expect(myRemove(numeros, 3)).not.toContain(3);
    });
});

  */