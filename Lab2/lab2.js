//find sum of multiples of 3 below 20 
function sumOfMultiples(num) {
    var sum = 0;
    for (var i = 0; i < num; i++) {
        if (i % 3 === 0) {
            sum += i;
        }
    }
    return sum;
}
console.log(sumOfMultiples(20));

//Implement min and max methods which returns minimum and maximum value of supplied arguments. 

function minValue(...args) {
    return Math.min(...args);
}
console.log("The minimum value is: ",minValue(2,3,1,6,0));

function maxValue(...args) {
    return Math.max(...args);
}
console.log("The max value is: ",maxValue(2,3,1,6,0));

// implement 4 functions with different arguements.

function addValue(x,y){
    if(typeof x!==undefined && typeof y!==undefined){
        return x+y;
    }
}
console.log("The sum of values is: ",addValue(2,3));

function substractValue(x=0,y=0,z=0){
    return x-y-z   

}
console.log("The difference of values is: ", substractValue(10,3,3))

function multValue(a,...args){
    var product = 1;
    for(var i=0;i<args.length;i++){
        product=product*args[i];
    
    }
    return product*a;
}
console.log("The product of values is: ",multValue(3,3,4));

function divideValue(d){
    var res = d;
    for(var i=1;i<arguments.length;i++){
        res = res/arguments[i];
        
    }
    return res;
}
console.log("The division of values is: ",divideValue(10,2,5));

//task 4

function min(args){
    if (typeof(args) === 'number'){
        return args;
    }
    min = 99999;
    for(var i = 0; i < args.length ; i++){
        if(args[i] < min){
            min = args[i]
        }
    }
    return min;
}
function max(args){
    if (typeof(args) === 'number'){
        return args;
    }
    max = 0;
    for(var i = 0; i < args.length ; i++){
        if(args[i] > min){
            max = args[i]
        }
    }
    return max;
}
function sum(args){
    if (typeof(args) === 'number'){
        return args;
    }
    sum = 0;
    for(var i = 0; i < args.length ; i++){
        sum += args[i];
    }
    return sum;
}
var solveThis = args =>{
    if ('sum' in args){args['sum'] = sum(args['sum']);}
    if ('min' in args){args['min'] = min(args['min']);}
    if ('max' in args){args['max'] = max(args['max']);}
    return args;
}
console.log(solveThis({'sum': [1,5,6],'min': [1,6,7], 'max': [1,8,15]}))