var a;
a = 10;
var a = 20;
console.log(a);
let b;
b = 10;
console.log(b);
const d = 23;
console.log(d);
var sum = () => {
    console.log("Hello world")
}
sum();
function add() {
    console.log("I am a student");
}
add();
sum();
var a1 = [10, 20, 30];
var a2 = [...a1, 40];
console.log(a1);
console.log(a2);
var m = [99, 90, 89, 96, 97];
var [m1, m2, m3, m4, m5] = m;
console.log(m);
console.log(m1);
console.log(m2);
console.log(m3);
console.log(m4);
console.log(m5);
function demo() {
    console.log("hello from demo");
}
var callback = (func) => {
    console.log("Hellofrom callback!!!");
    func();
    demo();
}
callback(demo);
var a3 = [10, 20, 30, 40, 50];
var double = a3.map(n => n * 3);
console.log(double);
var a4 = [1, 2, 3, 4, 5];
var odd = a4.filter(n => n % 2 !== 0);
console.log("Odd numbers:", odd); 
var eve = a4.filter(n => n % 2 === 0);
console.log("Even numbers:", eve);
var sum = a4.reduce((acc, curr) => acc + curr, 0);
console.log("Sum:", sum);
var a5=[1,2,3,4,5];
var num=a5.map(n=>n*2);
var num1=num.filter(n=>n>5);
var r = num1.reduce((a,b)=>a+b,0);
console.log(r);
