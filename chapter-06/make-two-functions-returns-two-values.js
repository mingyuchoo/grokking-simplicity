/** Before (Action) */
function shift(array) {
    return array.shift();
}

/** After (Computation) - 1 */
function shift(array) {
    var array_copy = array.slice();  // 1. create copy
    var first = array_copy.shift();  // 2. mutate copy
    return {                         // 3. return copy
        first: first,
        array: array_copy,
    };
}
