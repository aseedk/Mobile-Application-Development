var a = 0;
function varTest(){
    if (true) {
        var a = 1;
        console.log(a);
    }
    console.log(a);
}
console.log(a);
varTest();
console.log(a);

let b = 0;
function letTest(){
    if (true) {
        let b = 1;
        console.log(b);
    }
    console.log(b);
}
letTest();

const c =0;

function constTest(){
    if (true) {
        const c = 1;
        c=2;
        console.log(c);
    }
    console.log(c);
}
constTest();
