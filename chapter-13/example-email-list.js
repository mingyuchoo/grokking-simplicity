/**
 * input:
 *   - customers: Array
 * output:
 *   - emails: Array
 * how-to:
 *   - filter(), map()
 */

var fistTimers = filter(customers, function (customer) {
  return customer.purchases.length === 1;
});

var firstTimerEmails = map(firstTimers, function (customer) {
  return customer.email;
});


/**
 * Refactoring: Step 1
 */

var firstTimers = filter(customers, isFurstTimer);
var fistTimerEmails = map(firstTimers, getCustomerEmail);

function isFirstTimer(customer) {
  return customer.purchases.length === 1;
}

function getCustomerEmail(customer) {
  return customer.email;
}


