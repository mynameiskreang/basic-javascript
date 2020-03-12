class A {
  constructor() {
  }

  print() {
    console.log('A');
  }

  superPrint() {
    console.log('Super A');
  }
}

class B extends A {
  constructor() {
    super();
  }

  print() {
    console.log('B');
  };
}

class C extends B {
  constructor() {
    super();
  }
}

const classA = new A();
const classB = new B();
const classC = new C();

classA.print();
classB.print();
classB.superPrint();
classC.print();
classC.superPrint();
