function sum(x, y, operator) {
  if (isNaN(x) && isNaN(y)) {
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
  

  switch (operator) {
    case "+":
      console.log(x + y);
      break;
    case "-":
      console.log(x - y);
      break;
    case "*":
      console.log(x * y );
      break;
    case "/":
      console.log(y == 0 ? "Cannot divide by 0" : x / y);
      break;
    default:
      console.log("Unsupported operator");
  }
}

let x = 10;
let y = "6";

sum(x, y, "*"); 