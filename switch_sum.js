function sum(x, y, operator) {
  if (isNaN(x)) {
    console.log("x is not a number");
    return;
  }if (isNaN(y)) {
    console.log("y is not a number");
    return;
  }else{
    x = Number(x);
    y = Number(y);
  }

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
let y = "10";

sum(x, y, "/"); 