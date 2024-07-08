// let p1 = new Promise(function(resolve,reject){
//     let parentsAgreed = true;
//     if(parentsAgreed){
//         resolve('going to goa');
//     }
//     else{
//         reject('Not going to goa');
//     }
// });
// console.log(p1);

// let p2= new Promise((resolve,reject)=>{
//     let condition = true;
//     if(condition){
//         setTimeout(function(){
//             resolve("problem is resolved");
//         },1000);
//     }
//     else{
//         reject(`problem isn't resolve`);
//     }
// })
// console.log(p2);

// let p3 = new Promise((funResolved,funRejected)=>{
//     let conditon = true;
//     if (conditon){
//         setTimeout(()=>{
//             funResolved("It is in resolved state");
//         },3000)
//     }
//     else{
//         funRejected("It is not in resolved state");
//     }
// })
// console.log(p3.then((data)=>{
//     console.log(data);
// }));

// let p4 = new Promise(function callback(resolve,reject){
//     console.log(1);
//     let condition = true;
//     if(condition){
//         setTimeout(()=>{
//             console.log(2);
//             resolve(3);
//         },2000)
//     }
//     else{
//         reject(4);
//     }
//     console.log(5);
// })
// console.log(6);
// p4.then(function thenFun(data){
//     console.log(data);
// });
// console.log(7);

// console.log(1);
// setTimeout(()=>{
//     console.log(2);
// },1000);
// new Promise((resolve,reject)=>{
//     console.log(3);
//     resolve(4);
// }).then((data)=>{
//     console.log(data);
// });
// console.log(5);


// let p5 = new Promise((resolve,reject)=>{
//     let condition = false;
//     if(condition){
//         setTimeout(()=>{
//             resolve("Problem is resolved");
//         },1000);
//     }
//     else{
//         setTimeout(()=>{
//             reject("Problem is not resolved");
//         },1000);
//     }
// });
// console.log(p5);

// let p6 = new Promise((resolve,reject)=>{
//     let condition = false;
//     if (condition){
//         setTimeout(()=>{
//             resolve("My problem is solved");
//         },2000);
//     }
//     else{
//         setTimeout(()=>{
//             reject(`My statement is rejected`);
//         },1000);
//     }
// })
// p6.catch((data)=>{
//     console.log(data);
// })

