add = (x,y) => console.log(`x + y = ${x+y}`);
sub = (x,y) => console.log(`x - y = ${x-y}`); 
mul = (x,y) => console.log(`x * y = ${x*y}`); 
div = (x,y) =>{
     if(y==0){
        console.log("Cannot divide by 0");
    }
    else{
        console.log(`x / y = ${x/y}`); 
    }  
}   
calculator = (x,y,fun1) =>{
    
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

calculator(4,"1",mul);
