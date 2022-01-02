const gabarito = () => {
    let RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
    let STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];
    let pontos = 0;
    for (var i = 0; i < RIGHT_ANSWERS.length; i += 1) {
        if (RIGHT_ANSWERS[i] === STUDENT_ANSWERS[i]) {
            pontos += 1; 
        } else if (STUDENT_ANSWERS[i] === "N.A") {
            pontos += 0;
        } else {
            pontos -= 0.5;
        }
    }
    return pontos;   
}
console.log(gabarito());