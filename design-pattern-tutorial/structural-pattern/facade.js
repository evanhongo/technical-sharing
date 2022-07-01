class CoffeeMachine {
  addCoffeeBeans() {
    //放入咖啡豆
    return this;
  }

  grind() {
    //研磨咖啡豆
    return this;
  }

  brew() {
    //沖煮咖啡
    return this;
  }

  stirWithMilk() {
    //與牛奶攪拌
    return "拿鐵";
  }
}

class CoffeeMachineFacade {
  static makeCoffee() {
    const coffeeMachine = new CoffeeMachine();

    return coffeeMachine.addCoffeeBeans().grind().brew().stirWithMilk();
  }
}

console.log(CoffeeMachineFacade.makeCoffee());