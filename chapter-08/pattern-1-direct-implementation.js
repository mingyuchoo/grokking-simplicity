// freeTieClip()
//   |- |- array index
//   |- |- for loop
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

// isInCart()
//   |- array index
//   |- for loop

function isInCart(cart, name) {
    for (var i = 0; i < cart.length; i++) {
        if (cart[i].name === name)
            return true;
    }
    return false;
}

// remove_item_by_name()
//   |- array index
//   |- for loop
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

// add_item()
//   |- add_element_last()

function add_item(cart, item) {
    return add_element_last(cart, item);
}

// calc_total()
//   |- array index
//   |- for loop

function calc_total(cart) {
    var total = 0;
    for (var i = 0; i < cart.length; i++) {
        var item = cart[i];
        total += item.price;
    }
    return total;
}

// gets_free_shipping()
//   |- calc_total()

function gets_free_shipping(cart) {
    return calc_total(cart) >= 20;
}

// setPriceByName()
//   |- .slice()
//   |- array index
//   |- for loop
//   |- setPrice()

function setPriceByName(cart, name, price) {
    var cartCopy = cart.slice();
    for (var i = 0; i < cartCopy.length; i++) {
        if (cartCopy[i].name === name)
            cartCopy[i] = setPrice(cartCopy[i], price);
    }
    return cartCopy;
}

// cartTax()
//   |- calc_tax()

function cartTax(cart) {
    return calc_tax(calc_total(cart));
}
