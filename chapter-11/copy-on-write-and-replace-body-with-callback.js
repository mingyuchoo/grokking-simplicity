/**
 * Target source code
 */

function arraySet(array, idx, value) {
  var copy = array.slice();
  copy[idx] = value;
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

function drop_first(array) {
  var array_copy = array.slice();
  array_copy.shift();
  return array_copy;
}

/**
 * Refactoring: Step 1
 *   - extract functions
 */

function arraySet(array, idx, value) {
  return withArrayCopy(array);
}

function withArrayCopy(array) {
  var copy =  array.slice();
  copy[idx] = value;
  return copy;
}

/**
 * Refactoring: Step 2
 *   - replace body with callback
 */

function arraySet(array, idx, value) {
  return withArrayCopy(
    array,
    function(copy) {
      copy[idx] = value;
    });
}

function withArrayCopy(array, modify) {
  var copy = array.slice();
  modify(copy);
  return copy;
}

