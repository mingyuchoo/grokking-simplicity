/**
 * Exercise 1: 
 *   - replace with callback
 */

function withArrayCopy(array, modify) {
  var copy = array.slice();
  modify(copy);
  return copy;
}

function push(array, elem) {
  var copy = array.slice();
  copy.push(elem);
  return copy;
}

function drop_last(array) {
  var array_copy = array.slice();
  array_copy.pop();
  return array_copy;
}

function dropy_first(array) {
  var array_copy = array.slice();
  array_copy.shift();
  return array_copy;
}

/**
 * Solution: 
 *   - replace body with callback with `withArrayCopy()`
 */

function push(array, elem) {
  return withArrayCopy(array, function(copy) {
    copy.push(elem);
  });
}

function drop_last(array) {
  return withArrayCopy(array, function(copy) {
    copy.pop();
  });
}

function drop_first(array) {
  return withArrayCopy(array, function(copy) {
    copy.shift();
  });
}

/**
 * Exercise 2: 
 *   - replace with callback
 */

function objectSet(object, key, value) {
  var copy = Object.assign({}, object);
  copy[key] = value;
  return copy;
}

function objectDelete(object, key) {
  var copy = Object.assign({}, object);
  delete copy[key];
  return copy;
}


/**
 * Solution: 
 *   - replace body with callback with `withArrayCopy()`
 */

function withObjectCopy(object, modify) {
  var copy = Object.assign({}, object);
  modify(copy);
  return copy;
}

function objectSet(object, key, value) {
  return withObjectCopy(object, function(copy) {
    copy[key] = value;
  });
}

function objectDelete(object, key) {
  return withObjectCopy(object, function(copy) {
    delete copy[key];
  });
}


/**
 * Exercise 3: 
 *   - replace with callback
 */

try {
  codeThatMightThrow();
} catch(e) {
  // ignore errors and do nothing
}


/**
 * Solution:
 *   - replace with callback 
 */

function wrapIgnoreErrors(f) {
  return function(a1, a2, a3) {
    try {
      return f(a1, a2, a3);
    } catch (error) {
      return null;
    }
  };
}


/**
 * Exercise 4: 
 *   - create a function named `makeAdder()`
 *     that adds some numer to another number
 */

var increment = makeAdder(1);
// > increment(1)
// 11

var plus10 = makeAdder(10);
// > plus10(12);
// 22

/**
 * Solution:
 */

function makeAdder(n) {
  return function(x) {
    return n + x;
  };
}


