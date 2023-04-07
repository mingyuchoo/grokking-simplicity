/**
 * Target source code
 */

// Case 1
saveUserData(user);

try {
  saveUserData(user);
} catch (error) {
  logToSnapErrors(error);
}

// Case 2
fetchProject(productId);

try {
  fetchProduct(productId);
} catch (error) {
  logToSnapErrors(error);
}

/**
 * Solution 1
 *   - still have some problems
 *      1. might forgot to add
 *      2. modify all functions to apply manually
 */

function withLogging(f) {
  try {
    f();
  } catch (error) {
    logToSnapErrors(error);
  }
}

// Case 1
withLogging(function() {
  saveUserData(user);
});


// Case 2
withLogging(function() {
  fetchProduct(productID);
});

/**
 * Refactoring: Step 1
 *   - change name more specifically
 */

try {
  saveUserDataNoLogging(users); 
} catch (error) {
  logToSnapErrors(error);
}

try {
  fetchProductNoLogging(productId);
} catch (error) {
  logToSnapErrors(error);
}

/**
 * Refactoring: Step 2
 *   - wrap with function names
 */

function saveUserDataWithLogging(user) {
  try {
    saveUserDataNoLogging(user);
  } catch (error) {
    logToSnapErrors(error);
  }
}

function fetchProductWithLogging(productId) {
  try {
    fetchProductNoLogging(productId);
  } catch (error) {
    logToSnapErrors(error);
  }
}

/**
 * Refactoring: Setp 3
 *   - replace body with callback
 */

// extract same code 
function (arg) {
  try {
    saveUserDataNoLogging(arg); // will be replaced
  } catch (error) {
    logToSnapErrors(error);
  }
}

// return function
function wrapLogging(f) {
  return function (arg) {
    try {
      f(arg);
    } catch (error) {
      logToSnapErrors(error);
    }
  }
}

var saveUserDataWithLogging = wrapLogging(saveUserDataNoLogging);
var fetchProudctWithLogging = wrapLogging(fetchProductNoLogging);

