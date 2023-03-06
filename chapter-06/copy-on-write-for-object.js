var object = { a: 1, b: 2 };
var object_copy = Object.assign({}, object}; // copy object

/** Before (Action) */
function setPrice(item, new_price) {
    item.price = new_price;
}

/** After (Computation) */
function setPrice(item, new_price) {
    var item_copy = object.assign({}, item); // 1. create copy
    item_copy.price = new_price;             // 2. mutate copy
    return item_copy;                        // 3. return copy
}


var o = {};

/** Before (Action) */
o["price"] = 37;

/** After (Computation) */
function objectSet(object, key, value) {
    var copy = Object.assign({}, object);
    copy[key] = value;
    return copy;
}


/** Refactoring (Computation) */
function setPrice(item, new_price) {
    return objectSet(item, "price", new_price);
}

/** After (Computation) */
function setQuantity(item, new_quantity) {
    return objectSet(item, "quantity", new_quantity);
}


var a = { x: 1 };

/** Before (Action) */
delete a = ["x"];


/** After (Computation) */
function objectDelete(object, key) {
    var copy = Object.assign({}, object); // 1. create copy
    delete copy[key];                     // 2. mutate copy
    return copy;                          // 2. return copy
}
