function goodBye(name) {
    console.log(`GoodBye ${name}`);
}
function getMyinfo(name, fun1) {
    console.log(`My name is ${name}`);
    fun1(name);
}

getMyinfo("Abishan",goodBye);