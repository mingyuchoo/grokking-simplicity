
function objectSet(object, key, value) {
  var copy = Object.assign({}, object);
  copy[key] = value;
  return copy;
}

/**
 * Code smell: implicit argument in function name 
 */

function setPriceByName(cart, name, price) {
  var item = cart[name];
  var newItem = objectSet(item, 'price', price);
  var newCart = objectSet(cart, name, newItem);
  return newCart;
}

function setQuantityByName(cart, name, quantity) {
  var item = cart[name];
  var newItem = objectSet(item, 'quantity', quant);
  var newCart = objectSet(cart, name, newItem);
  return newCart;
}

function setShippingByName(cart, name, ship) {
  var item = cart[name];
  var newItem = objectSet(item, 'shipping', ship);
  var newCart = objectSet(cart, name, newItem);
  return newCart;
}

function setTaxByName(cart, name, tax) {
  var item = cart[name];
  var newItem = objectSet(item, 'tax', tax);
  var newCart = objectSet(cart, name, newItem);
  return newCart;
}

cart = setPriceByName(cart, 'shoe', 13);
cart = setQuantityByName(cart, 'shoe', 3);
cart = setShippingByName(cart, 'shoe', 0);
cart = setTaxByName(cart, 'shoe', 2.34);

/**
 * Refactoring: express implicit argument
 */

var validItemFields = ['price', 'quantity', 'shipping', 'tax'];
var translations = { 'quantity': 'number' };

function setFieldByName(cart, name, field, value) {
  if (!validItemFields.includes(field)) {
    throw "Not a valid item field: " + "'" + field + "'";
  }
  if (translations.hasOwnProperty(field)) {
    field = translations[field];
  }
  var item = carg[name];
  var newItem = objectSet(item, field, nvalue);
  var newCart = objectSet(cart, name, newItem);
  return newCart;
}

cart = setFieldByName(cart, 'shoe', 'price', 13);
cart = setFieldByName(cart, 'shoe', 'quantity', 3);
cart = setFieldByName(cart, 'shoe', 'shipping', 0);
cart = setFieldByName(cart, 'shoe', 'tax', 2.34);

