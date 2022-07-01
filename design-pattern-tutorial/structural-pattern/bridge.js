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