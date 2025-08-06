function add(x,y){
    return x+y;
}
function sub(x,y){
    return x-y;
}
function mul(x,y){
    return x*y;
}
function div(x,y){
    return x/y;
}
function calculator(x,y,fun1){
    console.log(fun1(x,y));
}

calculator(10,20,add);
calculator(10,20,sub);
calculator(10,20,mul);
calculator(10,20,div);