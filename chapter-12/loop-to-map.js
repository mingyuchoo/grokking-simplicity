/**
 * Target source code
 *   - for loop
 */

function emailsForCustomers(customers, goods, bests) {
  var emails = [];
  for (var i = 0; i < customers.length; i++) {
    var customer = customers[i];
    var email = emailForCustomer(customer, goods, bests);
    emails.push(email);
  }

  return emails;
}

/**
 * Refactoring: Step 1
 *   - forEach()
 */

function emailsForCustomer(customers, goods, bests) {
  var emails = [];
  forEach(customers, function (customer) {
    var email = emailForCustomer(customer, goods, bests);
    emails.push(email);
  });
  return emails;
}

function forEach(array, f) {
  for (var i = 0; i < array.length; i++) {
    var item = array[i];
    f(item);
  }
}

/**
 * Refactoring: Step 2
 *   - map()
 */

function emailsForCustomers(customers, goods, bests) {
  return map(customers, function (customer) {
    return emailForCustomer(customer, goods, bests);
  });
}

function map(array, f) {
  var newArray = [];
  forEach(array, function (element) {
    newArray.push( f(element) );
  });
  return newArray;
}

function forEach(array, f) {
  for (var i = 0; i < array.length; i++) {
    var item = array[i];
    f(item);
  }
}
