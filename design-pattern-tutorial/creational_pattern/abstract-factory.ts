interface IWeapon {
  atk: number;
  range: number;
}
  
interface IClothes {
  def: number;
}
  
class Sword implements IWeapon {
  constructor() {
    this.atk = 10;
    this.range = 1;
  }
}

class Bow implements IWeapon {
  constructor() {
    this.atk = 6;
    this.range = 3;
  }
}

class Armor implements IClothes {
  constructor() {
    this.def = 10;    
  }
}

class Leather implements IClothes {
  constructor() {
    this.def = 8;    
  }
}

interface IAdventurer {
  name: string;
  hp: number;
  weapon: IWeapon;
  clothes: IClothes;
  greet(): void;
}
  
class Swordman implements IAdventurer {
  constructor(name) {
    this.name = name;
    this.hp = 150;
    this.weapon = new Sword();
  }
  
  greet() {
    console.log("hello!!")
  }
}
  
class Archer implements IAdventurer {
  constructor(name) {
    this.name = name
    this.hp = 100;
    this.weapon = new Leather();
  }
  
  greet() {
    console.log("yeah!!")
  }
}
  
interface IAdventurerFactory {
  createAdventurer(): IAdventurer;
}
  
class SwordmanFactory implements IAdventurerFactory {
  createAdventurer(name: string) {
    return new Swordman(name)
  }
}
  
class ArcherFactory implements IAdventurerFactory {
  createAdventurer(name: string) {
    return new Archer(name)
  }
}