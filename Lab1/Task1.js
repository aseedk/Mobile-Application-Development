name = "34";
age = 34;
biography = {name, age};
console.log(biography['name'], biography['age'])

if (biography['name'] == biography['age']){
    console.log("Passed")
}else {
    console.log("Failed")
}
if (biography['name'] === biography['age']){
    console.log("Passed")
}else {
    console.log("Failed")
}

n1 = 10;
n2 =20;
console.log(typeof(n1) == typeof(n2))
