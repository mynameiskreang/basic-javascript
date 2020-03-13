class Party {
  constructor() {
    this.word = 'My Party';
  }

  print() {
    console.log('party');
  }

  getParty() {
    return this.word;
  }

  setParty(word) {
    this.word = word;
  }
}

module.exports = Party;
