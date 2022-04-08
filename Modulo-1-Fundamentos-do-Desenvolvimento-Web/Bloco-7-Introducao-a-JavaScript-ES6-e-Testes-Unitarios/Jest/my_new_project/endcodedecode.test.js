function encode(string) {
    let palavra1 = string.replace(/a/g, '1');
    palavra1 = palavra1.replace(/e/g, '2');
    palavra1 = palavra1.replace(/i/g, '3');
    palavra1 = palavra1.replace(/o/g, '4');
    palavra1 = palavra1.replace(/u/g, '5');
    return palavra1;
  }
  
  function decode(string) {
    let palavra2 = string.replace(/1/g, 'a');
    palavra2 = palavra2.replace(/2/g, 'e');
    palavra2 = palavra2.replace(/3/g, 'i');
    palavra2 = palavra2.replace(/4/g, 'o');
    palavra2 = palavra2.replace(/5/g, 'u');
    return palavra2;
  }

  describe('Funções encode e decode', () => {
     it('Se encode é uma função', () => { 
        expect(typeof(encode)).toBe('function');
        });
    it('Trocar letras por números', () => { 
        expect(encode('Stefannia aluna da Trybe')).toBe('St2f1nn31 1l5n1 d1 Tryb2');
    });
    it('Trocar números por letras', () => { 
        expect(decode('St2f1nn31 1l5n1 d1 Tryb2')).toBe('Stefannia aluna da Trybe');
    });
    it('Se outras letras não são trocadas', () => { 
        expect(encode('bcdfghjklmnpqrstvwxyz')).toBe('bcdfghjklmnpqrstvwxyz');
    });
    it('Se outros números não são trocados', () => { 
        expect(decode('06789')).toBe('06789');
    });
    it('Se tem o mesmo numero de caracteres', () => { 
    expect(encode('Stefannia aluna da Trybe').length).toBe('St2f1nn31 1l5n1 d1 Tryb2'.length);
    });
});