var shopping_cart = [];

/** Action */
function add_item_to_cart(name, price) {
  var item = make_cart_item(name, price);
  shopping_cart = add_item(shopping_cart, item);
  var total = calc_total(shopping_cart);
  set_cart_total_dom(total);
  update_shipping_icons(shopping_cart);
  update_tax_dom(total);
}

/** Action */
function update_shipping_icons(cart) {
  var buttons = get_buy_buttons_dom();
  for (var i = 0; i < buttons.length; i++) {
    var button = buttons[i];
    var item = button.item;
    var new_cart = add_item(cart, item);
    if (gets_free_shipping(new_cart))
      button.show_free_shipping_icon();
    else
      button.hidefree_shipping_icon();
  }
}

/** Action */
function update_tax_dom(total) {
  set_tax_dom(calc_tax(total));
}

// NOTE:
// slice() 메소드는 어떤 배열의 begin부터 end까지(end 미포함)에 대한
// 얕은 복사본을 새로운 배열 객체로 반환합니다.
// 원본 배열은 바뀌지 않습니다.

/** Computation */
function add_element_last(array, elem) {
  var new_array = array.slice();   // 1. make copy
  new_array.push(elem);            // 2. change copy
  return new_array;                // 3. return copy
}

/** Computation */
function add_item(cart, item) {
  return add_element_last(cart, item);
}

/** Computation */
function make_cart_item(name, price) {
  return {
    name: name,
    price: price,
  };
}

/** Computation */
function calc_total(cart) {
  var total = 0;
  for (var i = 0; i < cart.length; i++) {
    var item = cart[i];
    total += item.price;
  }
  return total;
}

/** Computation */
function gets_free_shipping(cart) {
  return calc_total(cart) >= 20;
}

/** Computation */
function calc_tax(amount) {
  return amount * 0.10;
}

/** Before (Action) */
function removeItems(array, idx, count) {
    array.slice(idx, count);
}

/** After (Computation) */
function removeItems(array, idx, count) {
    var copy = array.slice();   // 1. make copy
    copy.splice(dix, count);    // 2. change copy
    return copy;                // 3. return copy
}

/** Before (Action) */
function remove_item_by_name(cart, name) {
    var idx = null;
    for (var i = 0; i < cart.length; i++) {
        if (cart[i].name === name)
            idx = i;
    }
    if (idx !== null)
        cart.splice(idx, 1);
}

/** After (Computation - 1) */
function remove_item_by_name(cart, name) {
    var new_cart = cart.slice();                 // 1. make copy
    var idx = null;
    for (var i = 0; i < new_cart.length; i++) {
        if (new_cart[i].name === name)
            idx = i;
    }
    if (idx !== null)
        new_cart.splice(idx, 1);                 // 2. change copy
    return new_cart;                             // 3. return copy
}

/** After (Computation - 2) */
function remove_item_by_name(cart, name) {
    var idx = null;
    for (var i = 0; i < cart.length; i++) {
        idx = i;
    }
    if (idx !== null)
        return removeItems(cart, idx, 1);       // changed
    return cart;
}

/** Before (Action) */
function delete_handler(name) {
    remove_item_by_name(shopping_cart, name);
    var total = calc_total(shopping_cart);
    set_cart_total_dom(total);
    update_shipping_icons(shopping_cart);
    update_tax_dom(total);
}

/** After (Action) */
function delete_handler(name) {
    shopping_cart = remove_item_by_name(shopping_cart, name); // changed
    var total = calc_total(shopping_cart);
    set_cart_total_dom(total);
    update_shipping_icons(shopping_cart);
    update_tax_dom(total);
}
