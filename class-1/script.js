// var fibGenerator = function*() {
//     let a = 0;
//     let b = 1;
//     let c = 1
//     while(true){
//         yield a;
//         a=b;
//         b=c;
//         c=a+b;
//     }
// };
// const gen = fibGenerator();
// console.log(gen.next().value);
// console.log(gen.next().value);
// console.log(gen.next().value);
// console.log(gen.next().value);
// console.log(gen.next().value);

// var createCounter = function(init) {
//     let intial = init;

//     return {
//         increment(){
//             console.log(++intial);
//         },
//         decrement(){
//             console.log(--intial);
//         },
//         reset(){
//             intial=init;
//             console.log(intial);
//         }
//     }
// };
// const counter = createCounter(0);
// counter.increment(); // 1
// counter.increment(); // 2
// counter.decrement(); // 1
// counter.reset(); // 0
// counter.reset(); // 0




// Shallow Cloning
// let obj1 = {
//     a:10,
//     b:20,
// }
// let obj2 = obj1; // Here obj2 stores reference of obj1; 
// console.log(obj1);
// console.log(obj2);
// obj1.a=100;
// console.log(obj1);
// console.log(obj2);

// Using spread cloning to obj2
// Deep cloning (if we clone any object without ref then its known as deep clone)
// let obj1 = {
//     a:10,
//     b:20,
//     c:30,
//     d:40,
// }
// let obj2 = {...obj1};
// console.log(obj1);
// console.log(obj2);
// obj1.a=100;
// console.log(obj1);
// console.log(obj2);

// Shallow cloning (even if it have some what reference then we called it shallow cloing);
// let obj1 = {
//     a:10,
//     b:{
//         c:30,
//         d:40,
//     },
//     e:{
//         f:60,
//         g:70,
//     }
// }
// let obj2 = {...obj1};
// console.log(obj1);
// console.log(obj2);
// obj1.b.c="c value is 30";
// console.log(obj1);
// console.log(obj2);


// let obj1 = {
//     a:10,
//     b:{
//         c:30,
//         d:40,
//         e:50,
//     },
//     f:{
//         g:70,
//     }
// }
// let obj2 = JSON.stringify(obj1);
// obj2 = JSON.parse(obj2);
// console.log(obj1);
// console.log(obj2);
// console.log(obj1===obj2);
// obj1.b.c=100;
// obj1.b.d="d value is 200";
// console.log(obj1);
// console.log(obj2);

// let obj = {
//     Name:"Gopi",
//     Address:"Khammam",
//     x:()=>{
//         console.log(this);
//     }
// }
// obj.x();
// let a = window;
// console.log(a);
// let obj1  = {
//     Name:"Asif",
//     Address:"Khammam",
//     intro(){
//         console.log(this);
//         let x = ()=>{
//             console.log(this)// arrow function depends its global parent;
//         }
//         return x;
//     }
// }
// obj1.intro()();


// const original = {a:1,b:{c:2}};
// const shallowClone = Object.assign({},original);
// console.log(original);
// console.log(shallowClone);
// console.log(original===shallowClone);
// console.log(original.b===shallowClone.b);

// const original = {a:1,b:{c:2}};
// const shallowClone = {...original};
// console.log(original);
// console.log(shallowClone);
// console.log(original===shallowClone);
// console.log(original.b===shallowClone.b);


// const original = [1,2,{a:3}];
// const shallowClone = original.slice();
// console.log(original);
// console.log(shallowClone);
// console.log(original===shallowClone);
// console.log(original.b===shallowClone.b);


// const  original = {a:1,b:{c:2}};
// const shallowClone = {...original};
// shallowClone.b.c = 42;
// console.log(original.b.c);
// console.log(shallowClone.b.c);


// Deep clonging

// const original = {a:1,b:{c:2}};
// const deepClone = JSON.parse(JSON.stringify(original));
// deepClone.b.c="c value is 2";
// console.log(original.b.c);
// console.log(deepClone.b.c);
