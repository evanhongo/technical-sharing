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

class AdventurerFactory {
  createAdventurer(type: string, name: string): IAdventurer {
    switch (type) {
      case "swordman":
        return new Swordman(name)
      case "archer":
        return new Archer(name)
      default:
        break;
    }
  };
}