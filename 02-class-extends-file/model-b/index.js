const Party = require('../party');

class MB {
  constructor() {
    this.party = new Party();
  }

  print() {
    console.log('model-b');
  }

  printB() {
    console.log('model-b');
  }
}

module.exports = MB;
