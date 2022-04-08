function myFizzBuzz(num) {
    if (typeof num !== 'number') return false;
    if (num % 3 === 0 && num % 5 === 0) return 'fizzbuzz';
    if (num % 3 === 0) return 'fizz';
    if (num % 5 === 0) return 'buzz';

    return num;
  }
  
  // implemente seus testes aqui
  describe('Divisão por 3 e 5', () => {
    it('Se é divisivel por 3 e 5', () => {
        //expect('fizzbuzz').toEqual(myFizzBuzz(15));ou
        expect(myFizzBuzz(15)).toContain('fizzbuzz');
    });

    it('Se é divisivel por 3', () => {
        expect(myFizzBuzz(9)).toContain('fizz');
    });

    it('Se é divisivel por 5', () => {
        expect(myFizzBuzz(20)).toContain('buzz');
    });

    it('Se não é divisivel nem por 3 nem por 5', () => {
        expect(2).toEqual(myFizzBuzz(2));
    });

    it('Se não é um número', () => {
        expect(false).toEqual(myFizzBuzz('a'));
    });

});


/* //do gabarito:
// myFizzBuzz.test.js
const myFizzBuzz = require('./myFizzBuzz.js');

describe('testa a função myFizzBuzz', () => {
  it('verifica, se de acordo com o parâmetro recebido, retorna o valor esperado', () => {
    expect(myFizzBuzz(15)).toBe('fizzbuzz');
    expect(myFizzBuzz(3)).toBe('fizz');
    expect(myFizzBuzz(5)).toBe('buzz');
    expect(myFizzBuzz(1)).toBe(1);
    expect(myFizzBuzz('2')).toBe(false);
  })
}); */