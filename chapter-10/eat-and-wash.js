/**
 * Target source code
 */

// cook to eat
for (var i = 0; i < foods.length; i++) {
  var food = foods[i];
  cook(food);
  eat(food);
}

// wash to put away
for (var i = 0; i < dishes.length; i++) {
  var dish = dishes[i];
  wash(dish);
  dry(dish);
  putAway(dish);
}


/**
 * Refactoring: Step 1
 *   - make functions
 */

function cookAndEatFoods() {
  for (var i = 0; i < foods.length; i++) {
    var food = foods[i];
    cook(food);
    eat(food);
  }
}

cookAndEatFoods();

function cleanDishes() {
  for (var i = 0; i < dishes.length; i++) {
    var dish = dishes[i];
    wash(dish);
    dry(dish);
    putAway(dish);
  }
}

cleanDishes();


/**
 * Refactoring: Step 2
 *   - change varaible names to general
 */

function cookAndEatFoods() {
  for (var i = 0; i < foods.length; i++) {
    var item = foods[i];
    cook(item);
    eat(item);
  }
}

cookAndEatFoods();

function cleanDishes() {
  for (var i = 0; i < dishes.length; i++) {
    var item = dishes[i];
    wash(item);
    dry(item);
    putAway(item);
  }
}

cleanDishes();


/**
 * Refactoring: Step 3
 *   - express implicit argument
 */

function cookAndEatArray(array) {
  for (var i = 0; i < array.length; i++) {
    var item = array[i];
    cook(item);
    eat(item);
  }
}

cookAndEatFoods(foods);

function cleanArray(array) {
  for (var i = 0; i < array.length; i++) {
    var item = array[i];
    wash(item);
    dry(item);
    putAway(item);
  }
}

cleanDishes(dishes);

/**
 * Refactoring: Step 4
 *   - split code in loop to external functions
 */

function cookAndEatArray(array) {
  for (var i = 0; i < array.length; i++) {
    var item = array[i];
    cookAndEat(item);
  }
}

function cookAndEat(food) {
  cook(food);
  eat(food);
}

cookAndEatArray(foods);

function cleanArray(array) {
  for (var i = 0; i < array.length; i++) {
    var item = array[i];
    clean(item);
  }
}

function clean(dish) {
  wash(dish);
  dry(dish);
  putAway(dish);
}

cleanArray(dishes);

/**
 * Refactoring: Step 5
 *   - change function's names 
 */

function operateOnArray(array, f) {
  for (var i = 0; i < array.length; i++) {
    var item = array[i];
    f(item);
  }
}

function cookAndEat(food) {
  cook(food);
  eat(food);
}

operateOnArray(foods, cookAndEat);

function clean(dish) {
  wash(dish);
  dry(dish);
  putAway(dish);
  }
}

operateOnArray(dishes, clean);


/**
 * Refactoring: Step 6
 *   - rename function more generally
 */

function forEach(array, f) {
  for(var i = 0; i < array.length; i++) {
    var item = array[i];
    f(item);
  }
}

function cookAndEat(food) {
  cook(food);
  eat(food);
}

forEach(foods, cookandEat);

function clean(dish) {
  wash(dish);
  dry(dish);
  putAway(dish);
}

forEach(dishes, clean);


/**
 * Refactoring: Step 7
 *   - replace body with callback
 */

function forEach(array, f) {
  for(var i = 0; i < array.length; i++) {
    var item = array[i];
    f(item);
  }
}

forEach(foods, function(food) {
  cook(food);
  eat(food);
});

forEach(dishes, function(dish) {
  wash(dish);
  dry(dish);
  putAway(dish);
});



