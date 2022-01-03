   //sorteio numero aleatorio ate 5  
     
     const sorteio = (numeroApostado) => {
        const numberGenerator = () => {
            return (Math.random() * 5).toFixed(); //toFixed para inteiro
          }
return(numeroApostado == numberGenerator()) ? 'Parabéns você ganhou' : 'Tente novamente';
    }
    console.log(sorteio(4));









/*  
// substitui return(numeroApostado == numberGenerator()) ? 'Parabéns você ganhou' : 'Tente novamente';
if (numeroApostado == numberGenerator()) {
    return "Parabéns você ganhou";
} 
    return "Tente novamente"; */







/*     const sorteio = (numeroApostado) => {
        const numberGenerator = () => {
            const numeroAleatorio =  toFixed(Math.random()) * 5; //to fixed ṕara inteiros
      }
        return (numeroApostado == numberGenerator()) ? 'Parabéns você ganhou' : 'Tente novamente';
    }
    console.log(sorteio(5)); */