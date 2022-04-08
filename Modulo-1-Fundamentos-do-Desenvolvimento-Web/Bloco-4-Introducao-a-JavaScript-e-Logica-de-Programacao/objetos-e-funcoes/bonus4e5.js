let moradores = {
    blocoUm: [
      {
        nome: 'Luiza',
        sobrenome: 'Guimarães',
        andar: 10,
        apartamento: 1005,
      },
      {
        nome: 'William',
        sobrenome: 'Albuquerque',
        andar: 5,
        apartamento: 502,
      },
    ],
    blocoDois: [
      {
        nome: 'Murilo',
        sobrenome: 'Ferraz',
        andar: 8,
        apartamento: 804,
      },
      {
        nome: 'Zoey',
        sobrenome: 'Brooks',
        andar: 1,
        apartamento: 101,
      },
    ],
  };

  //4
  console.log("O morador do bloco 2 de nome " + moradores.blocoDois[1].nome + " " + moradores.blocoDois[1].sobrenome + " mora no " + moradores.blocoDois[1].andar + "° andar, apartamento " + moradores.blocoDois[1].apartamento)


//console.log(moradores.blocoUm.length)

  //5
  for (i= 0;i<moradores.blocoUm.length;i+=1){
      console.log(moradores.blocoUm[i].nome + " " + moradores.blocoUm[i].sobrenome)
  }

  for (i= 0;i<moradores.blocoDois.length;i+=1){
    console.log(moradores.blocoDois[i].nome + " " + moradores.blocoDois[i].sobrenome)
}