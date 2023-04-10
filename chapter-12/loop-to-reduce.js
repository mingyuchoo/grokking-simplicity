/**
 * Target source code
 */

function countAllPurchases(customers) {
  var total = 0; 
  for (var i = 0; i < customers.length; i++) {
    var customer = customers[i];
    total = total + customer.purchases.length;
  }
  return total;
}

/**
 * Refactoring: Step 1
 *   - forEach()
 */

function countAllPurchases(customers) {
  var total = 0;
  forEach(customers, function(customer) {
    total = total + customer.purchases.length;
  });
  return total;
}

function forEach(array, f) {
  for (var i = 0; i < array.length; i++) {
    var item = array[i];
    f(item);
  }
}

/**
 * Refactoring: Step 2
 *   - reduce()
 */

function countAllPurchases(customers) {
  return reduce(customers, 0, function (total, customer) {
    return total + customer.purchases.length;
  }
  );
}

function reduce(array, init, f) {
  var accumulator = init;
  forEach(array, function (element) {
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

