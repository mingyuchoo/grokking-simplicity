function forEach(array, f) {
  for (var i = 0; i < array.length; i++) {
    var item = array[i];
    f(item);
  }
}

function map(array, f) {
  var newArray = [];
  forEach(array, function (element) {
    newArray.push( f(element) );
  });
  return newArray;
}

function filter(array, f) {
  var newArray = [];
  forEach(array, function (element) {
    if ( f(element) )
      newArray.push(element);
  });
  return newArray;
}

function reduce(array, init, f) {
  var accumulator = init;
  forEach(array, function (element) {
    accumulator = f(accumulator, element);
  });
  return accumulator;
}


/**
 * Target source code
 */

function biggestPurchasesBestCustomers(customers) {
  var bestCustomers = filter(customers, function (customer) {
    return customer.purchases.length >= 3;
  });

  var biggestPurchases = map(bestCustomers, function (customer) {
    return reduce(customer.purchases, {total: 0}, function (biggestSoFar, purchase) {
      if (biggestSoFar.total > purchase.total)
        return biggestSoFar;
      else
        return purchase;
    });
  });
  return biggestPurchases;
}


/**
 * Refactoring: Step 1
 *   - change `reduce()` to `maxKey()`
 */

function biggestPurchasesBestCustomers(customers) {
  var bestCustomers = filter(customers, function (customer) {
    return customer.purchases.length >= 3;
  });

  var biggestPurchases = map(bestCustomers, function (customer) {
    return maxKey(customer.purchases, {total: 0}, function (purchase) {
      return purchase.total;
    });
  });
  return biggestPurchases;
}


function maxKey(array, init, f) {
  return reduce(array, init, function (biggestSoFar, element) {
    if ( f(biggestSoFar)  > f(element) ) 
      return biggestSoFar;
    else
      return element;
  });
}

/**
 * Refactoring: Step 2 - Case 1
 *   - extract and name to steps 
 */

function biggestPurchasesBestCustomers(customers) {
  var bestCustomers = selectBestCustomers(customers);
  var biggestPurchases = getBiggestPurchases(bestCustomers);
  return biggestPurchases;
}

function selectBestCustomers(customers) {
  return filter(customers, function (customer) {
    return cusomter.purchases.length >= 3;
  });
}


function getBiggestPurchases(customers) {
  return map(customers, getBiggestPurchase);
}

function getBiggestPurchase(customer) {
  return maxKey(customer.purchases, {total, 0}, function (purchase) {
    return purchase.total;
  });
}


/**
 * Refactoring: Step 2 - Case 2*
 *   - name to callback functions
 */

function biggestPurchasesBestCusomters(customers) {
  var bestCustomers = filter(customers, isGoodCustomer);
  var biggestPurchases = map(bestCustomers, getBiggestPurchase);
  return biggestPurchases;
}

function isGoodCustomer(customer) {
  return customer.purchases.length >= 3;
}

function getBiggestPurchase(customer) {
  return maxKey(customer.purchases, {total: 0}, getPurchaseTotal);
}

function getPurchaseTotal(purchase) {
  return purchase.total;
}


