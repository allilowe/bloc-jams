//write function named forEach
//do not use Array.prototype.foEach- write own function named forEach
//use a loop to go through all elements in the points Array
//execute a callback for each element
//in landing.js-replace the for loop in the animatePoints function with a forEach block and confirm selling points still animate properly

function forEach(array, callback) {
//loop through all (1)elements in points Array
    for (var i =0; i <= array.length; i++) {
        callback(array[i]);
    }

}
