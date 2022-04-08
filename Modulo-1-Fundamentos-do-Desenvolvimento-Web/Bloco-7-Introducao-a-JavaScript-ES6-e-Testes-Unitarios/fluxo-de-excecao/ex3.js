const lesson1 = {
    materia: 'Matemática',
    numeroEstudantes: 20,
    professor: 'Maria Clara',
    turno: 'manhã',
  };
  
  const lesson2 = {
    materia: 'História',
    numeroEstudantes: 20,
    professor: 'Carlos',
  };
  
  const lesson3 = {
    materia: 'Matemática',
    numeroEstudantes: 10,
    professor: 'Maria Clara',
    turno: 'noite',
  };

//1
lesson2.turno = "noite";
//console.log(lesson2)

//2
for (const property in lesson2) {
    //console.log(property);
  }

//3
//let tamanho = Object.keys(lesson2).length;
//console.log(tamanho);

//4
//console.log(Object.values(lesson2));

//5
const allLessons = Object.assign({}, { lesson1, lesson2, lesson3 });
//console.log(allLessons);

//6
/* const getNumberOfStudents = (obj) => {
    let total = 0;
    for (i in Object.keys(obj)) {
      total += obj[Object.keys(obj)[i]].numeroEstudantes;
    }
    return total;
  };
  console.log(getNumberOfStudents(allLessons));
 */
//7 Crie uma função que obtenha o valor da chave de acordo com a sua posição no objeto
//const getValueByNumber = (obj,number) => Object.values(obj)[number];
//console.log(getValueByNumber(lesson2,0));

//8
const verifyPair = (obj, key, value) => {
    const arr = Object.entries(obj);
    let isEqual = false;
    for (let index in arr) {
      if (arr[index][0] === key && arr[index][1] === value) isEqual = true;
    }
    return isEqual;
  };
  //console.log(verifyPair(lesson2,'professor','Carlos'));

//bonus 1
const getNumberOfStudents = (obj) => {
    let total = 0;
    const array = Object.keys(obj);
    for (index in array) {
        if (obj[array[index]].materia === "Matemática") {
      total += obj[array[index]].numeroEstudantes;
    }
}
    return total;
  };
  //console.log(getNumberOfStudents(allLessons));

//bonus 2
const getInfo = (obj, name) => {
    const allLessons = [];
    let allStudent = 0;
    const array = Object.values(obj);
    for (index in array) {
      if (array[index].professor === name) {
        allLessons.push(array[index].materia)
        allStudent += array[index].numeroEstudantes;
      }
    }
    return { lessons: allLessons, estudantes: allStudent };
  }
  
  const createReport = (allLessons, name) => {
    const report = {};
    report.professor = name;
    Object.assign(report, getInfo(allLessons, name));
    return report;
  }
  console.log(createReport(allLessons, 'Maria Clara'));