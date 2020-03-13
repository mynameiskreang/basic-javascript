const B = require('./model-b');
const Party = require('./party');

class MainA extends B {
  constructor() {
    super();
    this.party = new Party();
  }

  print() {
    console.log('main-a');
  }
}

class MainB extends B {
  constructor() {
    super();
    this.party = new Party();
  }

  print() {
    console.log('main-b');
  }
}

const mainA = new MainA();
mainA.print();
mainA.printB();

const mainB = new MainB();
mainB.print();
mainB.printB();

console.log(mainA.party.getParty());
console.log(mainB.party.getParty());
console.log(mainB.party.setParty('New Party'));
console.log(mainA.party.getParty());
console.log(mainB.party.getParty());
