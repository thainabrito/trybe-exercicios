const currentHour = 3;
const message = "";


if (currentHour>=22) {
    const message = "Não deveríamos comer nada, é hora de dormir"
    console.log(message);    
}

else if (currentHour>=18 && currentHour<22) {
    const message = "Rango da noite, vamos jantar :D"
    console.log(message);
}

else if (currentHour>=14 && currentHour<18) {
    const message = "Vamos fazer um bolo pro café da tarde"
    console.log(message);
}

else if (currentHour>=11 && currentHour<14) {
    const message = "Hora do almoço!!!"
    console.log(message);
}

else if (currentHour>=4 && currentHour<11) {
    const message = "Hmmm, cheiro de café recém passado"
    console.log(message);
}

