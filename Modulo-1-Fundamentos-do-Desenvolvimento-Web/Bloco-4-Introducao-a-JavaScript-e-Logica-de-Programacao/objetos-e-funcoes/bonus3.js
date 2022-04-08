const basket = [
    'Melancia', 'Abacate', 'Melancia', 'Melancia', 'Uva', 'Laranja',
    'Jaca', 'Pera', 'Melancia', 'Uva', 'Laranja', 'Melancia',
    'Banana', 'Uva', 'Pera', 'Abacate', 'Laranja', 'Abacate',
    'Banana', 'Melancia', 'Laranja', 'Laranja', 'Jaca', 'Uva',
    'Banana', 'Uva', 'Laranja', 'Pera', 'Melancia', 'Uva',
    'Jaca', 'Banana', 'Pera', 'Abacate', 'Melancia', 'Melancia',
    'Laranja', 'Pera', 'Banana', 'Jaca', 'Laranja', 'Melancia',
    'Abacate', 'Abacate', 'Pera', 'Melancia', 'Banana', 'Banana',
    'Abacate', 'Uva', 'Laranja', 'Banana', 'Abacate', 'Uva',
    'Uva', 'Abacate', 'Abacate', 'Melancia', 'Uva', 'Jaca',
    'Uva', 'Banana', 'Abacate', 'Banana', 'Uva', 'Banana',
    'Laranja', 'Laranja', 'Jaca', 'Jaca', 'Abacate', 'Jaca',
    'Laranja', 'Melancia', 'Pera', 'Jaca', 'Melancia', 'Uva',
    'Abacate', 'Jaca', 'Jaca', 'Abacate', 'Uva', 'Laranja',
    'Pera', 'Melancia', 'Jaca', 'Pera', 'Laranja', 'Jaca',
    'Pera', 'Melancia', 'Jaca', 'Banana', 'Laranja', 'Jaca',
    'Banana', 'Pera', 'Abacate', 'Uva',
  ];

  let melancia = 0;

  for (i=1;i<=basket.length;i+=1){
      if (basket[i]=="Melancia") {
          melancia = melancia + 1
      }
  }

  let abacate = 0;

  for (i=1;i<=basket.length;i+=1){
      if (basket[i]=="Abacate") {
          abacate = abacate + 1
      }
  }

  let uva = 0;

  for (i=1;i<=basket.length;i+=1){
      if (basket[i]=="Uva") {
          uva += 1
      }
  }
  
  let pera = 0;

  for (i=1;i<=basket.length;i+=1){
      if (basket[i]=="Pera") {
          pera += 1
      }
  }

  let laranja = 0;

  for (i=1;i<=basket.length;i+=1){
      if (basket[i]=="Laranja") {
          laranja += 1
      }
  }
  
  let jaca = 0;

  for (i=1;i<=basket.length;i+=1){
      if (basket[i]=="Jaca") {
          jaca += 1
      }
  }
  
  let banana = 0;

  for (i=1;i<=basket.length;i+=1){
      if (basket[i]=="Banana") {
          banana += 1
      }
  }

  console.log("Sua cesta possui " + melancia + " melancias, " + abacate + " abacates, " + uva + " uvas, " + pera + " peras, " + laranja + " laranjas, " + jaca + " jacas e " + banana + " bananas")