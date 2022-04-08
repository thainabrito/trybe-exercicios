// função com o texto acordando
const acordar = () => 'Acordando!!';

const cafe = () => 'Bora tomar café!!';

const dormir = () => 'Partiu dormir!!';

const doingThings = (callback) => {
    const result = callback();
    console.log(result);
};

doingThings(acordar);
doingThings(cafe);
doingThings(dormir);
