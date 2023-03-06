/** Computation */
function push(array, elem) {
    var copy = array.slice(); // 1. create copy
    copy.push(elem);          // 2. mutate copy
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
    var copy = array.slice();   // 1. create copy
    copy[idx] = value;          // 2. mutate copy
    return copy;                // 3. return copy
}


/** Before (Action) */
function setQuantityByName(cart, name, quantity) {
    for (var i = 0; i < cart.length; i++) {
        if (cart[i].name === name)
            cart[i].quantity = quantity;
    }
}

/** After (Computation) */
function setQuantityByName(cart, name, quantity) {
    var cartCopy = cart.slice();                                        // 1. create copy
    for (var i = 0; i < cartCopy.length; i++) {
        if (cartCopy[i].name === name)
            cartCopy[i] = objectSet(cartCopy[i], 'quantity', quantity); // 2. mutate copy
    }
    return cartCopy;                                                    // 3. return copy
}


/** (Computation) */
function objectSet(object, key, value) {
    var copy = Object.assign({}, object); // 1. create copy
    copy[key] = value;                    // 2. mutate copy
    return copy;                          // 3. return copy
}
