/**
 * Target source code
 */

var answer = [];

var window = 5;

for (var i = 0; i < array.length; i++) {
  var sum = 0;
  var count = 0;
  for (var w = 0; w < window; w++) {
    var idx = i + w;
    if (idx < array.length) {
      sum += array[idx];
      count += 1;
    }
  }
  answer.push(sum/count);
}
 

/**
 * Refactoring: Step 1
 */

var answer = [];

var window = 5;

for (var i = 0; i < array.length; i++) {
  var sum = 0;
  var count = 0;
  var subarray = array.slice(i, i + window);
  for (var w = 0; w < subarray.length; w++) {
    sum += subarray[w];
    count += 1;
  }
  answer.push(sum/count);
}


/**
 * Refactoring: Step 2
 */

var answer = [];

var window = 5;

for (var i = 0; i < array.length; i++) {
  var subarray = array.slice(i, i + window);
  answer.push(average(subarray));
}

function average(numbers) {
  return reduce(numbers, 0, plus) / numbers.length;
}

function plus(a, b) {
  return a + b;
}

function reduce(array, init, f) {
  var accumulator = init;
  forEach(array, function(element) {
    accumulator = f(accumulator, element);
  });
  return accumulator;
}

function forEach(array, f) {
  for (var i = 0; i < array.length; i++) {
    var item = array[i];
    f(item);
  }
}


/**
 * Refactoring: Step 3
 */

var indices = [];

for (var i = 0; i < array.length; i++)
  indices.push(i);

var window = 5;

var answer = map(indices, function(i) {
  var subarray = array.slice(i, i + window);
  return average(subarray);
});


/**
 * Refactoring: Step 4
 */

var indices = [];
for (var i = 0; i < array.length; i++)
  indices.push(i);

var window = 5;

var windows = map(indices, function(i) {
  return array.slice(i, i + window);
});

var answer = map(windows, average);


/**
 * Refactoring: Step 5
 */

var window = 5;

var indices = range(0, array.length);
var windows = map(indices, function(i) {
  return array.slice(i, i + window);
});

var answer = map(windows, average);

function range(start, end) {
  var ret = [];
  for (var i = start; i < end; i++) 
    ret.push(i);
  return ret;
}


