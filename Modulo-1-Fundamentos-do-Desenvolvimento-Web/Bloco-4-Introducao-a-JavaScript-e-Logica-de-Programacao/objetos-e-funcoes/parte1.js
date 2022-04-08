
//1
let info = {
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
  };

  //console.log("Bom dia " + info.personagem)
 




//2
info.recorrente = "sim";
//console.log(info.recorrente)
console.log(info)
 



//3
for (let index in info) {
    //console.log(index);
  }




//4
for (let index in info) {
    //console.log(info[index]);
  }


/* 
//5
let info2 = {
    personagem: 'Tio Patinhas',
    origem: "Christmas on Bear Mountain, Dell's Four Color Comics #178",
    nota: 'O último MacPatinhas',
    recorrente: 'ambos'
  };

console.log(info.personagem + " e " + info2.personagem)
console.log(info.origem + " e " + info2.origem)
console.log(info.nota + " e " + info2.nota)
console.log(info2.recorrente) */




 //6
let array = ["React", "Jest", "HTML", "CSS", "JavaScript"]
 let objeto = {
    tecnologias: [
      {
        titulo: 'O Pior Dia de Todos',
      },
    ],
  };

  //console.log(leitor);
objeto.tecnologias[0].tech = array[0];
objeto.tecnologias[0].name = "Stefannia";
console.log(objeto.tecnologias[0]);
//console.log("O livro favorito de " + leitor.nome + " " + leitor.sobrenome + " se chama " + leitor.livrosFavoritos[0].titulo)
 


//7
let livrosFavoritos = [{
    titulo: 'Harry Potter e o Prisioneiro de Azkaban',
    autor: 'JK Rowling',
    editor: 'Rocco',
  }
]

livrosFavoritos[0].titulo2 = "Pedra Filosofal"

let array = [];
array.push(livrosFavoritos[0].titulo)
array.push(livrosFavoritos[0].titulo2)
//console.log(array)
//console.log(livrosFavoritos[0].titulo)
//console.log(livrosFavoritos[0].titulo2)

//8
console.log(leitor.nome + " tem " + array.length + " livros favoritos")
