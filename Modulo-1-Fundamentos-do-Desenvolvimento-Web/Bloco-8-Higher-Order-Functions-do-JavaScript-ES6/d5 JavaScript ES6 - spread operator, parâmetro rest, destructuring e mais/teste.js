const { name, age } = character;
console.log(`Esse é o ${name}, ele tem ${age} anos.`);

const printProductDetails = ({ name, price, seller }) => {
    console.log(`Promoção! ${name} por apenas ${price} é só aqui: ${seller}`);
  };
printProductDetails(product);