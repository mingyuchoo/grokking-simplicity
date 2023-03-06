/** Before (Action) */
function add_item_to_cart(name, price) {

    // safe zone
    var item = make_cart_item(name, price);
    shopping_cart = add_item(shopping_cart, item);
    var total = calc_total(shopping_cart);
    set_cart_total_dom(total);
    update_shipping_icons(shopping_cart);
    update_tax_dom(total);

    // unsafe code
    black_friday_promotion(shopping_cart);
}

/** After (Action - defensive copy) */
function add_item_to_cart(name, price) {

    // safe zone
    var item = make_cart_item(name, price);
    shopping_cart = add_item(shopping_cart, item);
    var total = calc_total(shopping_cart);
    set_cart_total_dom(total);
    update_shipping_icons(shopping_cart);
    update_tax_dom(total);

    // be safe by defensive copy
    var cart_copy = deepCopy(shopping_cart);

    // unsafe code
    black_friday_promotion(cart_copy);

    // be safe by defrensive copy
    shipping_cart = deepCopy(cart_copy);
}



/** Refactoring (Action - defensive copy) */
function add_item_to_cart(name, price) {

    // safe zone
    var item = make_cart_item(name, price);
    shopping_cart = add_item(shopping_cart, item);
    var total = calc_total(shopping_cart);
    set_cart_total_dom(total);
    update_shipping_icons(shopping_cart);
    update_tax_dom(total);

    // added safe code using defensive copy
    shopping_cart = black_frideay_promotion_safe(shopping_cart);
}

/** Refactoring (Action - defensive copy) */
function black_friday_promotion_safe(cart) {
    // be safe by defensive copy
    var cart_copy = deepCopy(shopping_cart);

    // unsafe code
    black_friday_promotion(cart_copy);

    // be safe by defrensive copy
    shipping_cart = deepCopy(cart_copy);
}
