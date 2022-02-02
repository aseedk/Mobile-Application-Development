Array1 = [1, "a", 2];
Array2 = ["b", 3 , "c"];
console.log("COPY WITHIN");
console.log(Array1);
Array1.copyWithin(2, 0)
console.log(Array1);
console.log(Array2);
Array2.copyWithin(1, 0, 1)
console.log(Array2);
console.log("COPY WITHIN");

console.log("ENTRIES");
console.log(Array1.entries())
console.log(Array2.entries())
for (const element of Array1.entries()) {
    console.log(element);
}
for (const element of Array2.entries()) {
    console.log(element);
}
console.log("ENTRIES");

console.log("FILL");
console.log(Array1);
Array1.fill(1,2,2)
console.log(Array1);
Array1.fill(2,1)
console.log(Array1);
Array1.fill(5)
console.log(Array1);
console.log("FILL");

console.log("FILTER AND FIND");
Array3 = [1,2,3,4,5]
Array4 = Array3.filter(n => n > 3);
Array5 = Array3.find(n => n > 3);
console.log(Array4)
console.log(Array5)
console.log("FILTER AND FIND");

console.log("DISPLAY");
function display(number) {
    return number * 420;
}
console.log(Array4.map(display))
console.log(Array5.map(display))
