const service = require("./service");

test('1 - testa se retorna numero de 0 a 100', () => {
    retornaNumeroAleatorio = jest.fn().mockReturnValue(10);
    retornaNumeroAleatorio();
    expect(retornaNumeroAleatorio).toHaveBeenCalled();
    expect(retornaNumeroAleatorio()).toBe(10);
    expect(retornaNumeroAleatorio).toHaveBeenCalledTimes(2);
  });


  test('2 - Com a mesma função do exercício anterior, utilizando o mock, crie uma nova implementação, que deve receber dois parâmetros e retornar a divisão do primeiro pelo segundo. Essa implementação deve ocorrer uma única vez.', () => {
 retornaNumeroAleatorio  = jest.fn().mockImplementationOnce((a, b) => a / b); //tem once pq deve ocorrer 1 unica vez
 expect(retornaNumeroAleatorio(10,5)).toBe(2); // divisao aplicada
 expect(retornaNumeroAleatorio).toHaveBeenCalled(); // funcao chamada
 expect(retornaNumeroAleatorio).toHaveBeenCalledTimes(1); // ocorre 1 unica vez
 expect(retornaNumeroAleatorio).toHaveBeenCalledWith(10, 5);// foi chamado com esses parametros acima
});


test('3 - multiplica 3 parametros e reseta para fazer dobro de um parametro só', () => {
  // original
  retornaNumeroAleatorio  = jest.fn().mockImplementation((a, b, c) => a * b * c);
  // testes do original
  expect(retornaNumeroAleatorio(10,5,2)).toBe(100); // divisao aplicada
 expect(retornaNumeroAleatorio).toHaveBeenCalled(); // funcao chamada
 expect(retornaNumeroAleatorio).toHaveBeenCalledTimes(1); // ocorre 1 unica vez
 expect(retornaNumeroAleatorio).toHaveBeenCalledWith(10, 5, 2);

  
 // reseta
 retornaNumeroAleatorio.mockReset();
 retornaNumeroAleatorio.mockImplementation(a => a * 2);

  // testes do reset
        retornaNumeroAleatorio(3);
  expect(retornaNumeroAleatorio).toHaveBeenCalledTimes(1);
  expect(retornaNumeroAleatorio(3)).toBe(6);
  expect(retornaNumeroAleatorio).toHaveBeenCalledTimes(2);
  expect(retornaNumeroAleatorio).toHaveBeenLastCalledWith(3);
});




test('4 - criar tres funcoes e fazer mock delas', () => {
  // original primeira funcao
  expect(service.palavraMaiuscula("oi")).toBe("OI");
  // reset primeira funcao
  const mockPalavraMinuscula = jest.spyOn(service, "palavraMaiuscula").mockImplementation(palavra => palavra.toLowerCase());
  expect(mockPalavraMinuscula("OLA")).toBe("ola");

  // original segunda funcao
  expect(service.primeiraLetra("batata")).toBe("b");
  // reset segunda funcao
  const mockPrimeiraLetra = jest.spyOn(service, "primeiraLetra").mockImplementation(palavra => palavra.substr(-1, 1)); //pegar ultima letra
  expect(mockPrimeiraLetra("batata")).toBe("a");

  // original terceira funcao
  expect(service.concatenaDuasStrings("b","o")).toBe("bo");
  // reset tereira funcao
  const mockConcatenaDuasStrings = jest.spyOn(service, "concatenaDuasStrings").mockImplementation((a, b, c) => a.concat(b, c));
   expect(mockConcatenaDuasStrings("b","o","2")).toBe("bo2");

// restaura a primeira funcao para a original dela
   service.palavraMaiuscula.mockRestore();
   expect(service.palavraMaiuscula("mano")).toBe("MANO");
});






  test("5 - Crie uma função que faça requisição para a api https://dog.ceo/api/breeds/image/random", async () => {
    // promisse com sucesso
  service.fetch("request sucess");

    service.fetchDog();
    expect(service.fetchDog).toHaveBeenCalled();
    expect(service.fetchDog).toHaveBeenCalledTimes(1);
    await expect(service.fetchDog()).resolves.toBe("request sucess");
    expect(service.fetchDog).toHaveBeenCalledTimes(2);

    // promisse rejeitada
    service.fetchDog.mockRejectedValue("request failed");

    expect(service.fetchDog).toHaveBeenCalledTimes(0);
    await expect(service.fetchDog()).rejects.toMatch("request failed");
    expect(service.fetchDog).toHaveBeenCalledTimes(1);
  });