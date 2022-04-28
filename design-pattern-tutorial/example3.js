///////////////////////
//  Adapter Pattern  //
///////////////////////

//Example 1
const companyA = {
  show: () => {
    console.log("Product list of 'A' company");
  },
};

// const companyB = {
//   show: () => {
//     console.log("Product list of 'B' company");
//   },
// };

const companyB = {
  getList: () => {
    console.log("Product list of 'B' company");
  },
};

const companyB_Adapter = {
  show: () => {
    companyB.getList();
  },
};

const renderList = (company) => {
  if (company.show) {
    company.show();
  }
};

renderList(companyA);
//renderList(companyB);
renderList(companyB_Adapter);

//Example 2
const getWeatherData = () => [
  {
    name: "ProbabilityOfPrecipitation",
    number: "12%",
  },
  {
    name: "MaximumTemperature",
    number: "30",
  },
  {
    name: "MinimumTemperature",
    number: "20",
  },
];

const getNewWeatherData = {
  ProbabilityOfPrecipitation: "12%",
  Temperature: "26",
  Wind: 7,
};

const getWeatherDataAdapter = () => {
  const infos = getWeatherData();
  const joinInfos = (name, value) => {
    if (!hasThisItem(name)) {
      infos.push({
        name: name,
        number: value,
      });
    }
  };

  const hasThisItem = (name) => {
    return infos.some((info) => info.name === name);
  };

  for (let name in getNewWeatherData) {
    joinInfos(name, getNewWeatherData[name]);
  }
  return infos;
};

const renderView = (fn) => {
  console.log("Show view");
  console.log(JSON.stringify(fn()));
};

renderView(getWeatherDataAdapter);

///////////////////////
//  Bridge Pattern  //
///////////////////////

//input device

class Gesture {
  constructor(output) {
    this.output = output;
  }

  tap() {
    this.output.click();
  }

  swipe() {
    this.output.move();
  }
}

class Mouse {
  constructor(output) {
    this.output = output;
  }

  click() {
    this.output.click();
  }

  move() {
    this.output.move();
  }

  down() {
    this.output.drag();
  }

  wheel() {
    this.output.zoom();
  }
}

//output device

class Screen {
  click() {
    console.log("Screen select");
  }
  move() {
    console.log("Screen move");
  }
  drag() {
    console.log("Screen drag");
  }
  zoom() {
    console.log("Screen zoom in");
  }
}

class Audio {
  click() {
    console.log("Sound oink");
  }
  move() {
    console.log("Sound waves");
  }
  drag() {
    console.log("Sound screetch");
  }
  zoom() {
    console.log("Sound volume up");
  }
}

const screen = new Screen();
const audio = new Audio();

const gesture = new Gesture(screen);
const mouse = new Mouse(audio);

gesture.tap();
gesture.swipe();
gesture.pinch();
mouse.click();
mouse.move();
mouse.wheel();

//////////////////////
//  Facade Pattern  //
//////////////////////

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

//console.log(CoffeeMachineFacade.makeCoffee());
