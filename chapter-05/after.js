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
      button.hide_free_shipping_icon();
  }
}

/** Action */
function update_tax_dom(total) {
  set_tax_dom(calc_tax(total));
}

/** Calculation */
function add_element_last(array, elem) {
  var new_array = array.slice();
  new_array.push(elem);
  return new_array;
}

/** Calculation */
function add_item(cart, item) {
  return add_element_last(cart, item);
}

/** Calculation */
function make_cart_item(name, price) {
  return {
    name: name,
    price: price,
  };
}

/** Calculation */
function calc_total(cart) {
  var total = 0;
  for (var i = 0; i < cart.length; i++) {
    var item = cart[i];
    total += item.price;
  }
  return total;
}

/** Calculation */
function gets_free_shipping(cart) {
  return calc_total(cart) >= 20;
}

/** Calculation */
function calc_tax(amount) {
  return amount * 0.10;
}