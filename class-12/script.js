// function promiseGen(){
//     console.log("inside promiseGen func");
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             console.log("set Timeout");
//             resolve("This is a resolved promise");
//         },5000);
//     });
// }
// console.log("start");
// async function test(){
//     const a = 1;
//     console.log("before promise");
//     const promiseResult = await promiseGen();
//     console.log("after promise");
//     console.log(promiseResult);
//     console.log(a);
// }
// test();
// console.log("end");

// function numGen(){
//     console.log("hello how are you");
//     return "some meaningful data";
// }
// console.log("start");
// async function test(){
//     console.log("before promiseGen");
//     const promiseResult = await promiseGen();
//     console.log(promiseResult);
//     console.log("after promiseGen");
// }
// test();
// console.log("end");


// function numGen(){
//     return 4;
// }
// console.log("start");
// async function test(){
//     console.log("after promiseGen");
//     const promiseGen = await numGen();
//     console.log(promiseGen);
//     console.log("after promiseGen");
// }
// test();
// console.log("end");

// async function numGen(){
//     console.log("inside num gen");
//     return 4;
// }
// async function test(){
//     console.log("start test");
//     const result = await numGen();
//     console.log(result);
//     console.log("end test");
// }
// console.log("before test");
// test();
// console.log("after test");


// async function  promiseGen(){
//     console.log("inside PromiseGen");
//     setTimeout(()=>{
//         console.log("inside setTimeout");
//     },1000);
//     return new Promise((resolve)=>{
//         resolve(4);
//     })
// }
// async function test(){
//     console.log("inside test");
//     const result = await promiseGen();
//     console.log(result);
//     console.log("after result");
// }
// console.log("before test");
// test();
// console.log("after test");


// async function async1(){
//     console.log("async1 start");
//     const data = await async2();
//     console.log(data);
//     console.log("async1 end");
// }
// async function async2(){
//     console.log("async2");
//     return "async2 completed";
// }
// console.log("script start");
// setTimeout((function(){
//     console.log("setTimeout");
// },0));
// async1();


// new Promise(function(resolve){
//     console.log("Promise1");
//     resolve();
// }).then(function(){
//     console.log("Promise 2");
// })
// console.log("script end");


// fetch("https://dummyjson.com/products").then(respond=>respond.json()).then((data)=>{
//     products(data);
// })
// const body = document.querySelector("body");
// const createElement = document.createElement("div");
// function products(data){
//     let product = data.products;
//     for (let i=0;i<product.length;i++){
//         let h1 = document.createElement("h1");
//         h1.innerText=product[i].title;
//         createElement.appendChild(h1);
//     }
//     body.appendChild(createElement);
// }


// const p1 = new Promise((resolve,reject)=>{
//     const condition = true;
//     if(condition){
//         resolve("p1 passed");
//     }
//     else{
//         reject("p1 rejected");
//     }
// });
// const p2 = new Promise((resolve,reject)=>{
//     const condition = false;
//     if(condition){
//         resolve("p2 passed");
//     }
//     else{
//         reject("p2 rejected");
//     }

// })
// async function promiseHandler(){
//     try{
//         const data1 = await p1;
//         console.log(data1);
//         console.log("test");
//         const data2 = await p2;
//         console.log(data2);
//     }
//     catch(e){
//         console.log(e)
//     }
// }
// promiseHandler();


// async function fetchHandler(){
//     const reponse = await fetch("https://dummyjson.com/products");
//     const data = await reponse.json();
//     console.log(data);
// }
// fetchHandler();



// localStorage.setItem("Name","Gopi");
// const key = localStorage.getItem("Name");
// console.log(key);
// localStorage.removeItem("Name");