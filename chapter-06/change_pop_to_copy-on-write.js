// var a = [1, 2, 3, 4];
// var b = a.pop();
// console.log(b);  // 4
// console.log(a);  // [1, 2, 3]

/** Before (Action) */
function last_element(array) {
    return array[array.length - 1];
}

/** Before (Action) */
function drop_last(array) {
    array.pop();
}

/** Before (Action) */
function drop_last(array) {
    var array_copy = array.slice(); // 1. make copy
    array_copy.pop();               // 2. change copy
    return array_copy;              // 3. return copy
}

/** Before (Action) */
function pop(array) {
    return array.pop();
}

/** After (Computation) */
function pop(array) {
    var array_copy = array.slice();
    var first = array_copy.pop();
    return {
        first: first,
        array: array_copy
    };
}
