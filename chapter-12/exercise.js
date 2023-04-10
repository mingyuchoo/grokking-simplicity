/**
 * Exercise 1
 *   - goal:
 *      - implement `map()` function
 *   - inputs: 
 *      - customers :: Array
 *   - outputs:
 *      - customer.firstName :: String
 *      - customer.lastName :: String
 *      - customer.address :: String
 */

map(customers, function(customer) {
  return { 
    firstName: customer.firstName,
    lastName: cusomter.lastName,
    address: customer.address,
  };
});

/**
 * Exercise 2
 *   - goal:
 *     - evaluate 2 values with `testGroup` and `nonTestGroup`
 *     - use `filter()` function
 *   - inputs:
 *     - customers :: Array
 *     - customer.id :: Int
 *     - operator `%`; ex. x % 3 === 0
 */

var testGroup = filter(customers, function (customer) {
  return customer.id % 3 === 0;
});

var nonTestGroup = filter(customers, function (customer) {
  return customer.id % 3 !== 0;
});

/**
 * Exercise 3
 *   - goal:
 *     - implement `sum()`, and `product()` functions
 *     - use `reduce()` function
 */

function sum(numbers) {
  return reduce(numbers, 0, function(total, num) {
    return total + num;
  });
}

function product(numbers) {
  return reduce(numbers, 1, function(total, num) {
    return total * num;
  });
}

/**
 * Exercise 4
 *   - goal:
 *     - implement accumulation function not using with `Math.min()` and `Math.min()`
 *     - use `reduce()` function
 *   - inputs:
 *     - Number.MAX_VALUE
 *     - Number.MIN_VALUE
 */

function min(numbers) {
  return reduce(numbers, Number.MAX_VALUE, function(m, n) {
    if (m < n) return m;
    else       return n;
  });
}


function max(numbers) {
  return reduce(numbers, Number.MIN_VALUE, function(m, n) {
    if (m > n) return m;
    else       return n;
  });
}


/**
 * Exercise 5
 *   - goal: please answer below
 */

map([], xToY)
// > []

filter([], isGood)
// > []

reduce([], init, combine)
// > init

map(array, function(x) { return x; })
// > shallow copied array

filter(array, function(_x) { return true; })
// > shallow copied array 

filter(array, function(_x) { return false; })
// > []

/**
 * Exercise 6
 *   - goal:
 *     - implement `map()` and `filter()` using `reduce()`
 */

// map 1
function map(array, f) {
  return reduce(array, [], function (ret, item) {
    return ret.concat( f([item]) );
  });
}

// map 2
function map(array, f) {
  return reduce(array, [], function (ret, item) {
    ret.push( f(item) );
    return ret;
  });
}

// filter 1
function filter(array, f) {
  return reduce(array, [], function (ret, item) {
    if (f(item)) return ret.concat ([item]);
    else         return ret;
  });
}


// filter 2
function filter(array, f) {
  return reduce(array, [], function (ret, item) {
    if ( f(item) )
      ret.push(item);
    return ret;
  });
}
