 const customer1 = {
    firstName: 'Roberto',
    age: 22,
    job: 'Teacher',
  };
  
  console.log(customer1);
  
  customer1.lastName = 'Faria';  //aqui
  //console.log(customer1);
  
   const customer2 = {
    firstName: 'Maria',
    age: 23,
    job: 'Medic',
  };
  
  //console.log(customer2);
  customer2['lastName'] = 'Silva';  //aqui
  console.log(customer2);