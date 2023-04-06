/**
 * Code smell: implicit argument in function name
 */

function multiplyByFour(x) {
  return x * 4;
}

function multiplyBySix(x) {
  return x * 6;
}

function multiplyBy12(x) {
  return x * 12;
}

function multiplyByPi(x) {
  return x * Math.PI;
}

/**
 * Refactoring: express implicit argument
 */

function multiply(x, y) {
  return x * y;
}

