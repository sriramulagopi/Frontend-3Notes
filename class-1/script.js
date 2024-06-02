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