//1
function trocarTexto() {
    let paragrafo = document.getElementsByTagName('p')[1];
    paragrafo.innerHTML = "Sendo fera da programação"
}
trocarTexto();

//2
function trocarParaVerde() {
    let quadradoAmarelo = document.getElementsByClassName('main-content')[0];
    quadradoAmarelo.style.background = "rgb(76,164,109)";
}
trocarParaVerde();

//3
function quadradoCentro() {
    let quadradoVermelho = document.getElementsByClassName('center-content')[0];
    quadradoVermelho.style.background = "white";
}
quadradoCentro();

//4
function titulo() {
    let trocarTitulo = document.getElementsByTagName('h1')[0];
    trocarTitulo.innerHTML = "Exercício 5.1 - JavaScrip"
}
titulo();

//5
function maiusculo() {
    let trocarMaiusculo = document.getElementsByTagName('p')[0];
    trocarMaiusculo.innerHTML = trocarMaiusculo.innerHTML.toUpperCase();
}
maiusculo();

//6
function exibirP() {
    let exibir = document.getElementsByTagName('p');
    for (let i = 0; i < exibir.length; i += 1) {
        console.log(exibir[i].innerHTML);
    }
}
exibirP();