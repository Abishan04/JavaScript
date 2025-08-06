// Immediately Invoked Function Expression 
//this is a self executing function
//this is also called anonymous function

//default
(function() {
    console.log("iife function");
})();

//with parameter
(function(name) {
    console.log(`My name is ${name}`);
})("Abishan");