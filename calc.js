class Calculator {
  constructor(displayValue, val1, operator) {
    this.displayValue = displayValue;
    this.val1 = val1;
    this.operator = operator;
  }
  add(a,b) {
    return a + b;
  }
  
  subtract(a,b) {
    return a - b;
  }
  
  multiply(a,b) {
    return a * b;
  }
  
  divide(a,b) {
    return a / b;
  }
  
  operate(op, a, b) {
    switch (op) {
      case '+':
        return this.add(a,b);
      case '-':
        return this.subtract(a,b);
      case '*':
        return this.multiply(a,b);
      case '/':
        return this.divide(a,b);
    }
  }
}