var hel="{\"hell\":\"jaipur\",\"hr\":67}";
console.log(typeof(JSON.parse(hel)));
const accountSid = 1444
// accountSid=123//not allowed
accountSsid=1234//allowed
console.log(typeof(accountSsid));
function test() {
    var x = 10;
    console.log(x); // 10
}
test();
// console.log(x); it is givinf reference error because var is function scoped
function test() {
    if (true) {
        let y = 20;
        const z = 30;
        var x = 10;
    }
    console.log(x); // 10 (function-scoped)
    // console.log(y); // ReferenceError (block-scoped)
    // console.log(z); // ReferenceError (block-scoped)
}
// x; //gives reference error
var x;
console.log(x); //gives undefined
test();
// datatypes in js
var name = "hello"; //string
var age = 23; //number
var isLoggedIn = false; //boolean
var state; //undefined
var nullVar = null; //null
var sym = Symbol("hello"); //symbol
var bigInt = 1234567890123456789012345678901234567890n; //bigint
var arr = [1, 2, 3, 4]; //array
var arr1 = [1, "hello", true, null]; //array with multiple datatypes
var obj = { name: "hello", age: 23 };//object
console.log(typeof(sym));//symbol
console.log(typeof(bigInt));//bigint
console.log(typeof(state));//undefined
console.log(typeof(nullVar));//null


