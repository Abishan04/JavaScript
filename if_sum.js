function sum(x, y, operator) {
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
  }else{
    x = Number(x);
    y = Number(y);
    
    if (operator == "+") {
      console.log(x + y);
    } else if (operator == "-") {
      console.log(x - y);
    } else if (operator == "*") {
      console.log(x * y );
    } else if (operator == "/") {
      console.log(y == 0 ? "Cannot divide by 0" : x / y);
    } else {
      console.log("Unsupported operator");      
    }
  }
}

let x = 10;
let y = 2;

sum(x, y, "/"); 