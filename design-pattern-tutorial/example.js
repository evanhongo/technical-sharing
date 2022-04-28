//////////////////////
// Strategy Pattern //
//////////////////////

const handleRequest = {
  type1: (params) => {
    console.log("handle type1 req");
  },
  type2: (params) => {
    console.log("handle type2 req");
  },
};
//handleRequest["type1"]();

//////////////////////
// Strategy Pattern //
//////////////////////
class Sword {
  constructor() {
    this.atk = 10;
    this.range = 1;
  }
}

class Adventurer {
  constructor(atk, def) {
    this.hp = 100;
    this.atk = atk;
    this.def = def;
    this.state = new NormalState(this);
  }

  setWeapon(weapon) {
    this.weapon = weapon;
  }

  setClothes(clothes) {
    this.clothes = clothes;
  }

  chooseAttackStrategy(strategy) {
    this.attackStrategy = strategy;
    return this;
  }

  attack() {
    if (!this.attackStrategy) this.attackStrategy = new NormalAttack();
    this.attackStrategy.execute(this);
    //this.state.attack(this);
    return this;
  }

  //使用道具
  useItem(item) {
    item.execute(this);
    return this;
  }

  getDamage(damage) {
    this.hp = this.hp >= damage ? this.hp - damage : 0;
    return this;
  }

  setState(state) {
    this.state = state;
    return this;
  }
}

class Swordman extends Adventurer {
  constructor(atk, def) {
    super(atk, def);
  }

  clone() {
    const swordman = new Swordman();
    swordman.hp = this.hp;
    swordman.atk = this.atk;
    swordman.def = this.def;
    swordman.state = this.state;
    return swordman;
  }
}

class SwordmanEquipmentFactory {
  createWeapon() {
    const sword = new Sword();
    return sword;
  }

  createClothes() {
    const armor = new armor();
    return armor;
  }
}

class SwordmanFactory {
  equipmentFactory = new SwordmanEquipmentFactory();

  createAdventurer() {
    const swordman = new Swordman();
    swordman.setWeapon(equipmentFactory.createWeapon());
    swordman.setClothes(equipmentFactory.createClothes());
    return swordman;
  }
}

class NormalAttack {
  execute(adventurer) {
    console.log(`使用一般攻擊造成${adventurer.atk}傷害`);
  }
}

class Skill {
  constructor() {
    this.level = 1;
  }

  execute(adventurer) {
    console.log(`使用技能造成${adventurer.atk * 5}傷害`);
  }
}

class NormalState {
  constructor(adventurer) {
    this.name = "normal";
    adventurer.atk = 60;
  }
}

class FuriedState {
  constructor(adventurer) {
    this.name = "furied";
    adventurer.atk *= 1.5;
  }
}

class Antidote {
  execute(adventurer) {
    if (adventurer.negativeStateTimer) {
      clearInterval(adventurer.negativeStateTimer);
      console.log("解毒");
    }
  }
}

///////////////////////
// Decorator Pattern //
///////////////////////

const sleep = (t) =>
  new Promise((resolve) => {
    setTimeout(() => resolve(), t);
  });

const withPowerUp = async (adventurer, increasement, interval) => {
  console.log(`攻擊力在${interval / 1000}秒上升${increasement}`);
  adventurer.atk += increasement;
  await sleep(interval);
  adventurer.atk -= increasement;
};

const withPoisoned = async (adventurer) => {
  console.log("中毒");
  if (adventurer.negativeStateTimer) {
    clearInterval(adventurer.negativeStateTimer);
  }

  const timer = setInterval(() => {
    adventurer.hp = adventurer.hp > 0 ? adventurer.hp - 1 : 0;
  }, 1000);

  adventurer.negativeStateTimer = timer;
};

const demo = async () => {
  const factory = new SwordmanFactory();
  const ad = factory.createAdventurer();

  // ad.chooseAttackStrategy(new Skill()).attack();
  // ad.chooseAttackStrategy(new NormalAttack()).attack();

  //在5秒內攻擊力上升10
  withPowerUp(ad, 10, 5000);
  ad.attack();
  // await sleep(6000);
  // ad.attack();

  // ad.setState(new FuriedState(ad)).attack();
  // ad.setState(new NormalState(ad)).attack();

  console.log(`剩餘HP:${ad.hp}`);
  withPoisoned(ad);
  await sleep(5000);
  ad.useItem(new Antidote());
  console.log(`剩餘HP:${ad.hp}`);

  ///////////////////////
  // Prototype Pattern //
  ///////////////////////
  const ad2 = ad.clone();
  ad2.attack();
};

demo();
