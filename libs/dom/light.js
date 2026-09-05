export class Light {
  on = false;

  constructor({ lightBulb }) {
    this.lightBulb = lightBulb;
  }

  turnOn() {
    this.on = true;
    this.lightBulb.classList.remove("off");
  }

  turnOff() {
    this.on = false;
    this.lightBulb.classList.add("off");
  }

  toggleLight() {
    if (this.on) {
      this.turnOff();
    } else {
      this.turnOn();
    }
  }
}
