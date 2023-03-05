/** Before (Computation) */
function first_element(array) {
    return array[0];
}

/** Before (Action) */
function drop_first(array) {
    array.shift();
}

/** After (Computation) */
function drop_first(array) {
    var array_copy = array.slice();  // 1. make copy
    array_copy.shift();              // 2. change copy
    return array_copy;               // 3. return copy
}
