/**
 * Target source code
 */

try {
  saveUserData(user);
} catch (error) {
  logToSnapErrors(error);
}

try {
  fetchProduct(productId);
} catch (error) {
  logToSnapErrors(error);
}

/**
 * Refactoring: Step 1
 *   - make code as a function
 */


function withLogging() {
  try {
    saveUserData(user);
  } catch (error) {
    logToSnapErrors(error);
  }
}
withLogging();

/**
 * Refactoring: Step 2
 *   - extract code to external functions
 */

function withLogging(f) {
  try {
    f();
  } catch (error) {
    logToSnapErrors(error);
  }
}

withLogging(function() {
  saveUserData(user);
});


