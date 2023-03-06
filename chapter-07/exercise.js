/** Before (Action - unsafe code) */
function payrollCalc(employees) {
    //...
    return payrollChecks;
}

/** After (Action - defensive copy) */
function payrollCalcSafe(employees) {
    var copy = deepCopy(employees);         // 1. create deep copy
    var payrollChecks = payrollCalc(copy);  // 2. mutate deep copy
    return deepCopy(payrollChecks);         // 3. return deep copy
}



/** Before (Action - unsafe `user`) */
userChanges.subscribe(function(user) {
    // safe code
    processUser(user);
});


/** After (Action - defensive copy) */
userChanges.subscribe(function(user) {

    var userCopy = deepCopy(user);         // 1. create deep copy

    // safe code
    processUser(userCopy);
}
