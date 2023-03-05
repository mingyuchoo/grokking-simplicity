/** Computation */
function push(array, elem) {
    var copy = array.slice(); // 1. make copy
    copy.push(elem);          // 2. change copy
    return copy;              // 3. return copy
}

/** Before (Action) */
function add_contact(mailing_list, email) {
    var list_copy = mailing_list.slice();
    list_copy.push(email);
    return list_copy;
}

/** After (Computation) */
function add_contact(mailing_list, email) {
    return push(mailing_list, email);
}


a[15] = 2;
function arraySet(array, idx, value) {
    var copy = array.slice();   // 1. make copy
    copy[idx] = value;          // 2. change copy
    return copy;                // 3. return copy
}
