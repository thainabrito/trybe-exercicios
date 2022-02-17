// funcao para exercicios 1, 2 e 3
const retornaNumeroAleatorio = () => Math.floor(Math.random() * 100);

// primeira funcao ex 4
const palavraMaiuscula = (palavra) => (palavra.toUpperCase());

// segunda funcao ex 4
const primeiraLetra = (palavra) => (palavra.substr(0, 1));//pega primeira letra

// segunda funcao ex 4
const concatenaDuasStrings = (a,b) => (a+b); //console.log(concatenaDuasStrings("z","q"))

// exercicio 5 
function fetch() {
    return fetch("https://dog.ceo/api/breeds/image/random").then(response =>
      response
        .json()
        .then(json =>
          response.ok ? Promise.resolve(json) : Promise.reject(json)
        )
    );
  }

module.exports = { retornaNumeroAleatorio, palavraMaiuscula, primeiraLetra,
concatenaDuasStrings, fetch };