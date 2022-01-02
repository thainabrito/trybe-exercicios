// numero aleatório até 5 com casas decimais:

/* const numberGenerator = () => {
    return Math.random() * 5;
  }
  
  console.log(numberGenerator()); */




// numero aleatório até 5 sem casas decimais:

  const numberGenerator = () => {
    numeroAleatorio =  Math.random() * 5; //gerar aleatorio
    return numeroAleatorio.toFixed(); //para arredondar
  }
  
  console.log(numberGenerator());