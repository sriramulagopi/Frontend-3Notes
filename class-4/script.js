// console.log(Array.prototype.map);
// delete Array.prototype.map;
// Array.prototype.map=function (callback){
//     let arr = [];
//     for (let i=0;i<this.length;i++){
//         arr[i]=callback(this[i],i,this);
//     }
//     return arr;
// }
// let array = [1,2,3,4,5].map((item)=>item*2);
// console.log(array);

// console.log(Array.prototype.filter);
// delete Array.prototype.filter;
// Array.prototype.filter= function(callback){
//     let arr1 = [];
//     for (let i=0;i<this.length;i++){
//         if(callback(this[i],i,this)){
//             arr1.push(this[i]);
//         }
//     }
//     return arr1;
// }
// let arr = [17,21,15,25,30,40,51,18].filter((item,i,l)=>{
//     console.log(item,i,l)
//     if(item>18){
//         return item;
//     }
// })
// console.log(arr);

// let arr1 = [1,2,3,4,5,6,7,8,9,10].filter((item)=>{
//     return item%2===0;
// })
// console.log(arr1);

// function test(a,b,c,d,e){
//     console.log(a,b,c,d,e)
// }
// test.call(1,2,3,4);
// console.log(test.__proto__)
// console.log(Function.__proto__===test.__proto__);
// console.log(Function.__proto__);



// console.log(Array.prototype.map);
// delete Array.prototype.map;
// Array.prototype.map=function(callback){
//     let res = [];
//     for (let i=0;i<this.length;i++){
//         res[i]=callback(this[i],i,this);
//     }
//     return res;
// }
// let arr = [1,2,3,4,5,6,7,8,9,10];
// arr=arr.map((item)=>item*2);
// console.log(arr);

// console.log(Array.prototype.filter);
// delete Array.prototype.filter;
// Array.prototype.filter=function(callback){
//     let res = [];
//     for (let i=0;i<this.length;i++){
//         if(callback(this[i],i,this)){
//             res.push(this[i]);
//         }
//     }
//     return res;
// }
// let arr = [1,2,3,4,5,6,7,8,9,10];
// arr=arr.filter((item,i,list)=>{
//     console.log(item,i,list)
//     if(item%2===0){
//         return item;
//     }
// });
// console.log(arr);

// let obj1 = {
//     a:10,
//     b:20,
// }
// function intro(a,b,c){
//     console.log(this);
//     console.log(a,b,c);
//     return a+b+c;
// }
// delete Function.prototype.call;
// Function.prototype.call=function(obj,...restParam){
//     obj.tempFun = this||window;
//     let result = obj.tempFun(...restParam);
//     delete obj.tempFun;
//     return result;
// }
// intro.call(obj1,10,20,30)
// console.log(intro.call(obj1,1,2,3))

// let obj1 = {
//     a:10,
//     b:20,
//     c:30,
// }
// function intro(a,b,c){
//     console.log(this);
//     console.log(a,b,c);
//     return a+b+c;
// }
// delete Function.prototype.apply;
// Function.prototype.apply=function(obj,restParam){
//     obj=obj||window;
//     obj.tempFunc = this;
//     let result = obj.tempFunc(...restParam);
//     delete obj.tempFunc;
//     return result;
// }
// intro.apply(obj1,[1,2,3])
// console.log(intro.apply(obj1,[10,20,30]))
// intro.apply(null,[1,2,3]);

// // console.log(Function.prototype.bind);
// // delete Function.prototype.bind;
// // Function.prototype.bind=function(obj,...restParam){
// //     let func = this;
// //     return function(...restParam1){
// //         return func.call(obj,...restParam,...restParam1);
// //     }
// // }

// // let obj = {
// //     Name:"Gopi",
// // }
// // function intro(city,company){
// //     console.log(this.Name,city,company);
// // }
// // let intro1 = intro.bind(obj);
// // intro1("Khammam","peopleMart");

// console.log(Array.prototype.reduce);
// delete Array.prototype.reduce;
// Array.prototype.reduce=function(callback,intialValue){
//     let returnValue = intialValue;
//     for (let i=0;i<this.length;i++){
//         if(!returnValue){
//             returnValue=this[i];
//         }
//         else{
//           returnValue=callback(returnValue,this[i],i,this);
//         }
//     }
//     return returnValue;
// }
// let arr = [1,2,3,4,5,6,7,8,9,10].reduce((a,b)=>{
//     return a+b;
// },10);
// console.log(arr);