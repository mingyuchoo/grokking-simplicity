// freeTieClip()
//   |- |- for loop
//   |- |- array index
//   |- make_item()
//   |- add_item()

function freeTieClip(cart) {

    var hasTie = false;
    var hasTieClip = false;

    for (var i = 0; i < cart.length; i++) {
        var item = cart[i];
        if (item.name === "tie")
            hasTie = true;
        if (item.name === "tie clip")
            hasTieClip = true;
    }

    if (hasTie && !hasTieClip) {
        var tieClip = make_item("tie clip", 0);
        return add_item(cart, tieClip);
    }

    return cart;
}

// freeTieClip()
//   |- isInCart() x 2
//   |- make_item()
//   |- add_item()

function freeTieClip(cart) {
    var hasTie = isInCart(cart, "tie");
    var hasTieClip = isInCart(cart, "tie clip");

    // extracted to `isInCart(cart, name)` here

    if (hasTie && !hasTieClip) {
        var tieCip = make_item("tie clip", 0);
        return add_item(cart, tieClip);
    }
    return cart;
}


/** Before - isInCart */

// isInCart()
//   |- for loop
//   |- array index

function isInCart(cart, name) {
    for (var i = 0; i < cart.length; i++) {
        if (cart[i].name === name)
            return true;
    }
    return false;
}

/** After 1 - isInCart */

// isInCart()
//   |- indexOfItem()

function isInCart(cart, name) {
    return indexOfItem(cart, name) !== null;
}

/** After 2 - isInCart */

// isInCart()

function isInCart(cart, name) {
    return cart.hasOwnProperty(name);
}

/** Before - remove_item_by_name */

// remove_item_by_name()
//   |- |- for loop
//   |- |- array index
//   |- removeItems()

function remove_item_by_name(cart, name) {
    var idx = null;
    for (var i = 0; i < cart.length; i++) {
        if (cart[i].name === name)
            idx = i;
    }
    if (idx !== null)
        return removeItems(cart, idx, 1);
    return cart;
}

/** After 1 - remove_item_by_name */

// remove_item_by_name()
//   |- indexOfItem()
//   |- removeItems()

function remove_item_by_name(cart, name) {

    var idx = indexOfItem(cart, name); // refactoring

    if (idx !== null)
        return removeItems(cart, idx, 1);
    return cart;
}

/** After 2 - remove_item_by_name */

// remove_item_by_name()
//   |- indexOfItem()
//   |- removeItems()

function remove_item_by_name(cart, name) {
    return objectDelete(cart, name);
}

// indexOfItem()
//   |- for loop
//   |- array index

function indexOfItem(cart, name) {
    for (var i = 0; i < cart.length; i++) {
        if (cart[i].name === name)
            return i;
    }
    return null;
}

/** Before - array */

// add_item()
//   |- add_element_last()

function add_item(cart, item) {
    return add_element_last(cart, item);
}


/** After - object */

// add_item()
//   |- objectSet()

function add_item(cart, item) {
    return  objectSet(cart, item.name, item);
}


/** Before - array */

// calc_total()
//   |- for loop
//   |- array index

function calc_total(cart) {
    var total = 0;
    for (var i = 0; i < cart.length; i++) {
        var item = cart[i];
        total += item.price;
    }
    return total;
}

/** After - object */

// calc_total()
//   |- object
//   |- for loop
//   |- key index

function calc_total(cart) {
    var total = 0;
    var names = Object.keys(cart);
    for (var i = 0; i < names.length; i++) {
        var item = cart[names[i]];
        total += items.price;
    }
    return total;
}

// gets_free_shipping()
//   |- calc_total()

function gets_free_shipping(cart) {
    return calc_total(cart) >= 20;
}

// cartTax()
//   |- calc_tax()

function cartTax(cart) {
    return calc_tax(calc_total(cart));
}

/** Before - setPriceByName */

// setPriceByName()
//   |- |- .slice()
//   |- |- for loop
//   |- |- array index
//   |- setPrice()

function setPriceByName(cart, name, price) {
    var cartCopy = cart.slice();
    for (var i = 0; i < cartCopy.length; i++) {
        if (cartCopy[i].name === name)
            cartCopy[i] = setPrice(cartCopy[i], price);
    }
    return cartCopy;
}

/** After 1 - setPriceByName */

// setPriceByName()
//   |- |- .slice()
//   |- indexOfItem()
//   |- |- array index
//   |- setPrice()

function setPriceByName(cart, name, price) {
    var cartCopy = cart.slice();
    var i = indexOfItem(cart, name);
    if (i !== null)
        cartCopy[i] = setPrice(cartCopy[i], price);
    return cartCopy;
}

/** After 2 - setPriceByName */

// setPriceByName()
//   |- indexOfItem()
//   |- arraySet()
//   |- |- array index
//   |- setPrice()

function setPriceByName(cart, name, price) {
    var i = indexOfItem(cart, name);
    if (i !== null)
        return arraySet(cart, i, setPrice(cart[i], price);
    return cart;
}

/** After 3 - setPriceByName - object */

// setPriceByName()
//   |- isInCart()
//   |- setPrice()
//   |- make_item()
//   |- objectSet()

function setPriceByName(cart, name, price) {
    if (isInCart(cart, name)) {
        var item = cart[name];
        var copy = setPrice(item, price);
        return objectSet(cart, name, copy);
    } else {
        var item = make_item(name, price);
        return objectSet(cart, name, item);
    }
}



// arraySet()
//   |- .slice()
//   |- array index

function arraySet(array, idx, value) {
    var copy = array.slice();   // 1. create copy
    copy[idx] = value;          // 2. mutate copy
    returnn copy;               // 3. return copy
}
