function add(x,y){
    console.log(`x + y = ${x+y}`);
}
function sub(x,y){
   console.log(`x - y = ${x-y}`); 
}
function mul(x,y){
    console.log(`x * y = ${x*y}`); 
}
function div(x,y){
    if(y==0){
        console.log("Cannot divide by 0");
    }
    else{
        console.log(`x / y = ${x/y}`); 
    }  
}
function mod(x,y){
    console.log(`x % y = ${x%y}`); 
}
function power(x,y){
    console.log(`x**y = ${x**y}`);
}
function calculator(x,y,fun1){

 if (isNaN(x)&& isNaN(y)) {
    console.log("x and y are not numbers");
    return;
  }
  if (isNaN(x)) {
    console.log("x is not a number");
    return;
  }if (isNaN(y)) {
    console.log("y is not a number");
    return;
  }
    x = Number(x);
    y = Number(y);
    fun1(x,y);
}

calculator(4,"1",mod);
