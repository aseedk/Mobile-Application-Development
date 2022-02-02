function min(args){
    if (typeof(args) === 'number'){
        return args;
    }
    let min = 99999;
    for(let i = 0; i < args.length ; i++){
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
    let max = 0;
    for(let i = 0; i < args.length ; i++){
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
    let sum = 0;
    for(let i = 0; i < args.length ; i++){
        sum += args[i];
    }
    return sum;
}
solveThis = args =>{
    if ('sum' in args){args['sum'] = sum(args['sum']);}
    if ('min' in args){args['min'] = min(args['min']);}
    if ('max' in args){args['max'] = max(args['max']);}
    return args;
}
console.log(solveThis({'sum': [1,5,6],'min': [1,6,7], 'max': [1,8,15]}))
console.log(solveThis({'sum': [3,2,4], 'max': [2,4,3,5], 'min': [5,3,4,3]}))
