let numero = 7;

  for (let i = 1; i <= numero ; i++) {
    let resultado = "";
    for (let a = 1; a <= (2 * numero - 1); a++) {
      if (i != numero ) {
        if (a == numero + 1 - i || a == numero - 1 + i) {
           resultado += "*";
        }             //linhas laterais
        else {
          resultado += " ";
        }
      }
      else {
        resultado += "*"; //ultima linha
      }
    }
    console.log(resultado);
    
  }