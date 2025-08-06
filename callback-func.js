function goodBye() {
    console.log("Good Bye Abishan");
}
function getMyinfo(name, fun1) {
    console.log(`My name is ${name}`);
    fun1();
    
}

getMyinfo("Abishan",goodBye);