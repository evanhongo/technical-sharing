/////////////////////
//  State Pattern  //
/////////////////////

class TrafficLight {
  constructor() {
    this.state = new Red(this);
  }

  flash() {
    this.state.flash();
  }
}

class Red {
  constructor(light) {
    this.light = light;
  }

  flash() {
    console.log("Red");
    this.light.state = new Green(this.light);
  }
}

class Green {
  constructor(light) {
    this.light = light;
  }

  flash() {
    console.log("Green");
    this.light.state = new Yellow(this.light);
  }
}

class Yellow {
  constructor(light) {
    this.light = light;
  }

  flash() {
    console.log("Yellow");
    this.light.state = new Red(this.light);
  }
}

const light = new TrafficLight();
light.flash();
light.flash();
light.flash();
light.flash();
