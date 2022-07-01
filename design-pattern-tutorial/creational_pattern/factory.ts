interface IAdventurer {
    name: string;
    hp: number;
    greet(): void;
  }
  
class Swordman implements IAdventurer {
  constructor(name) {
    this.name = name;
    this.hp = 150;    
  }
  
  greet() {
    console.log("hello!!")
  }
}
  
class Archer implements IAdventurer {
  constructor(name) {
    this.name = name
    this.hp = 100;
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