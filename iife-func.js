// Immediately Invoked Function Expression 
//this is a self executing function
//this is also called anonymous function
(function() {
    console.log("iife function");
})();

(function(name) {
    console.log(`My name is ${name}`);
})("Abishan");