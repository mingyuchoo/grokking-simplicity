/**
 * Exercise 1
 */


function bigSpenders(customer) {
  var withBigPurchases = filter(customers, hasBigPurchase);
  var with2OrMorePurchases = filter(withBigPurchases, has2OrMorePurchases);
  return with2OrMorePurchases;
}

function hasBigPurchases(customer) {
  return filter(customer.purchases, isBigPurchase).length > 0;
}

function isBigPurchase(purchase) {
  return purchase.total > 100;
}

function has2OrMorePurchases(customer) {
  return customer.purchases.length >= 2;
}


/**
 * Exercise 2
 */

function average(numbers) {
  return reduce(numbers, 0, plus) / numbers.length;
}

function plus(a, b) {
  return a + b;
}


/**
 * Exercise 3
 */

function averagePurchaseTotals(customers) {
  return map(customers, function (customer) {
    var purchaseTotals = map(customer.purchases, function (purchase) {
      return purchase.total;
    });
    return average(purchaseTotals);
  });
}


