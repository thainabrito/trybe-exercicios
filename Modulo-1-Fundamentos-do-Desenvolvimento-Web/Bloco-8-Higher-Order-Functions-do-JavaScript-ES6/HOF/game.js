const mage = {
    healthPoints: 130,
    intelligence: 45,
    mana: 125,
    damage: undefined,
  };
  
  const warrior = {
    healthPoints: 200,
    strength: 30,
    weaponDmg: 2,
    damage: undefined,
  };
  
  const dragon = {
    healthPoints: 350,
    strength: 50,
    damage: undefined,
  };
  
  const battleMembers = { mage, warrior, dragon };

  const dragonAttack = (dragon) => {
    const minDmg = 15;
    const { strength } = dragon;
    const dragonDmg = Math.floor((Math.random() * (strength - minDmg + 1) + minDmg));
    return dragonDmg;
  };
console.log(dragonAttack());