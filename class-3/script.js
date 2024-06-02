// let arr = [];
// console.log(arr.__proto__);
// console.log(Array.prototype);
// console.log(Array.prototype===arr.__proto__);
// console.log(Array.prototype.__proto__);
// console.log(arr.__proto__.__proto__);
// console.log(Array.prototype.__proto__===arr.__proto__.__proto__);

// let obj = {};
// console.log(obj.__proto__);
// console.log(Object.prototype);
// console.log(Object.prototype===Array.prototype.__proto__);
// console.log(obj.__proto__.__proto__);
// console.log(Object.prototype.__proto__);

// let arr = new Array(3);
// console.log(arr);

// let obj1 = {
//     Name:"Gopi",
// }
// let obj2 = {
//     Name:"Asif",
//     Address:"Khammam",
// }
// console.log(obj1.Address);
// obj1.__proto__=obj2;
// console.log(obj1.Address);
// console.log(obj1);
// console.log(obj1.__proto__);// here __proto__ is extended
// console.log(obj1.__proto__.__proto__);
// console.log(obj1.__proto__===obj2)
// console.log(obj2.__proto__===obj1.__proto__.__proto__)




/****** This is better example compare to above example ******/
// let arr = [];
// console.log(arr.__proto__);
// console.log(Array.prototype);
// console.log(Array.prototype===arr.__proto__);
// console.log(Array.prototype.__proto__);
// console.log(arr.__proto__.__proto__)
// let arr1 = new Array(3);
// arr1[0]=100;
// console.log(arr1);

// let obj = {};
// let obj1 = new Object(1);
// console.log(obj1);
// console.log(obj.__proto__);
// console.log(Object.prototype);
// console.log(Object.prototype===obj.__proto__);
// console.log(obj.__proto__.__proto__);
// console.log(Object.prototype.__proto__);
// console.log(Array.prototype.__proto__===Object.prototype)

// let obj1 = {
//     Name:"Gopi",
// }
// let obj2 = {
//     Name:"Asif",
//     Address:"Khammam",
// }
// console.log(obj1.Address);
// obj1.__proto__=obj2;
// console.log(obj1.Address);
// console.log(obj1.__proto__);
// console.log(obj2===obj1.__proto__);
// console.log(obj2.__proto__===obj1.__proto__.__proto__);