/**
 * Target source code
 */

function selectBestCustomers(customers) {
  var newArray = [];
  for (var i = 0; i < customers.length; i++) {
    var customer = customers[i];
    if (customer.purchases.length >= 3) 
      newArray.push(customer);
  }
  return newArray;
}

/**
 * Refactoring: Step 1
 *   - forEach()
 */

function selectBestCustomers(customers) {
  var newArray = [];
  forEach(customers, function (customer) {
    if (customer.purchases.length >= 3)
      newArray.push(customer);
  });
  return newArray;
}

function forEach(array, f) {
  for (var i = 0; i < array.length; i++) {
    var item = array[i];
    f(item);
  }
}

/**
 * Refactoring: Step 2
 *   - filter()
 */


function selectBestCustomers(customers) {
  return filter(customers, function (customer) { // predicate 
    return customer.purchases.length >= 3;
  });
}

function filter(array, f) {
  var newArray = [];
  forEach(array, function (element) {
    if ( f(element) )
      newArray.push(element);
  });
  return newArray;
}

function forEach(array, f) {
  for (var i = 0; i < array.length; i++) {
    var item = array[i];
    f(item);
  }
}

