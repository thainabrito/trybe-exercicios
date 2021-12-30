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
    it('Remove o 3', () => {
        const numeros = [1, 2, 3, 4];
        expect([1, 2, 4]).toEqual(myRemove(numeros, 3));
    });
});

/*   const array = [1, 2, 3, 4];

test('Se tirou o 3', () => {
  expect(array).not.toContain(3);
});

test('Sunday is not a workday', () => {
  expect(workDays).not.toContain('Sunday');
}); */