function hydrate(phrase, sum) {
    sum = 0;
  
    for (let index in phrase) {
      if (parseInt(phrase[index]) > 0) {
        sum += parseInt(phrase[index]);
      }
    }
  
    if (sum === 1) {
      //return sum + ' copo de água';
      return `${sum} copo de água`;
    }
    return `${sum} copos de água`;
  }

  module.exports = hydrate;