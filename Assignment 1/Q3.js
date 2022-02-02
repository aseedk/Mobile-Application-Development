Prime = num => {
    for (let i =2; i <= num/2; i++){
        if (num%i === 0)
            return false;
    }
    return true;
}
CheckPrimeInArray = (...args) => {
    let output = [];
    args.forEach(array => {
        let sum = 0;
        console.log("Checking Prime of Array: ", array);
        array.forEach(element => {
            if(Prime(element))
                sum += element;
        })
        output.push({"input: ": array, "sumOfPrime: ":  sum})
    })
    return output;
}
console.log(CheckPrimeInArray([4, 3], [2, 2], [4, 8, 9]))
console.log(CheckPrimeInArray([4, 3], [2, 2, 3, 44]))
