const B = require('./model-b');
const Party = require('../party');

class MA extends B {
  constructor() {
    super();
    this.party = new Party();
  }

  print() {
    console.log('model-a');
  }

  printA() {
    console.log('model-a');
  }
}

module.exports = MA;
