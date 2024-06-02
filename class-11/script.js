// function intro1(name){
//     return new Promise((resolve,reject)=>{
//         let condition = true;
//         if(condition){
//             setTimeout(()=>{
//                 resolve(`My name is ${name}.`);
//             },1000);
//         }
//         else{
//             setTimeout(()=>{
//                 reject(`name was not found.`);
//             },1000);
//         }
//     })
// }
// function intro2(city){
//     return new Promise((resolve,reject)=>{
//         let condition = true;
//         if(condition){
//             setTimeout(()=>{
//                 resolve(`I live in ${city}.`)
//             },600)
//         }
//         else{
//             setTimeout(()=>{
//                 reject(`city was not found.`);
//             })
//         }
//     })
// }
// function intro3(company){
//     return new Promise((resolve,reject)=>{
//         let condition = true;
//         if(condition){
//             setTimeout(()=>{
//                 resolve(`I work at ${company}.`);
//             },300)
//         }
//         else{
//             setTimeout(()=>{
//                 reject(`company wasn't found.`);
//             },1000)
//         }
//     })
// }
// intro1("Gopi").then((data)=>{
//     console.log(data);
//     return intro2("Khammam");
// }).then((data)=>{
//     console.log(data);
//     return intro3("Microsoft")
// }).then((data)=>{
//     console.log(data);
// }).catch((data)=>{
//     console.log(data)
// })



// function intro1(name){
//     return new Promise((resolve,reject)=>{
//         let condition = false;
//         if(condition){
//             setTimeout(()=>{
//                 resolve(`My name is ${name}.`);
//             },1000);
//         }
//         else{
//             setTimeout(()=>{
//                 reject(`name was not found.`);
//             },1000);
//         }
//     })
// }
// function intro2(city){
//     return new Promise((resolve,reject)=>{
//         let condition = false;
//         if(condition){
//             setTimeout(()=>{
//                 resolve(`I live in ${city}.`)
//             },600)
//         }
//         else{
//             setTimeout(()=>{
//                 reject(`city was not found.`);
//             })
//         }
//     })
// }
// function intro3(company){
//     return new Promise((resolve,reject)=>{
//         let condition = false;
//         if(condition){
//             setTimeout(()=>{
//                 resolve(`I work at ${company}.`);
//             },300)
//         }
//         else{
//             setTimeout(()=>{
//                 reject(`company wasn't found.`);
//             },1000)
//         }
//     })
// }
// intro1("Gopi").then((data)=>{
//     console.log(data);
//     return intro2("Khammam");
// }).then((data)=>{
//     console.log(data);
//     return intro3("Microsoft")
// }).then((data)=>{
//     console.log(data);
// }).catch((data)=>{
//     console.log(data)
// })




// function intro1(name){
//     return new Promise((resolve,reject)=>{
//         let condition = true;
//         if(condition){
//             setTimeout(()=>{
//                 resolve(`My name is ${name}.`);
//             },1000);
//         }
//         else{
//             setTimeout(()=>{
//                 reject(`name was not found.`);
//             },1000);
//         }
//     })
// }
// function intro2(city){
//     return new Promise((resolve,reject)=>{
//         let condition = true;
//         if(condition){
//             setTimeout(()=>{
//                 resolve(`I live in ${city}.`)
//             },600)
//         }
//         else{
//             setTimeout(()=>{
//                 reject(`city was not found.`);
//             })
//         }
//     })
// }
// function intro3(company){
//     return new Promise((resolve,reject)=>{
//         let condition = false;
//         if(condition){
//             setTimeout(()=>{
//                 resolve(`I work at ${company}.`);
//             },300)
//         }
//         else{
//             setTimeout(()=>{
//                 reject(`company wasn't found.`);
//             },1000)
//         }
//     })
// }
// intro1("Gopi").then((data)=>{
//     console.log(data);
//     return intro2("Khammam");
// }).then((data)=>{
//     console.log(data);
//     return intro3("Microsoft")
// }).then((data)=>{
//     console.log(data);
// }).catch((data)=>{
//     console.log(data)
// })


function intro(condition,delay,solvedData,rejectedData){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            if(condition){
                resolve(solvedData);
            }
            else{
                reject(rejectedData);
            }
        },delay);
    });
}
/******    Promise.all()     *******/
// 1.Even it has one reject state then the result going to be that reject data(Here we get the fastest failing promise).
// 2.If all the promises are fullfilled then the result is going be in array with fullfilled data.  

// let p1 = intro(true,3000,"p1 fullfilled","p1 rejected");
// let p2 = intro(true,1000,"p2 fullfilled","p2 rejected");
// let p3 = intro(true,5000,"p3 fullfilled","p3 rejected");
// let result = Promise.all([p1,p2,p3]);
// result.then((data)=>{
//     console.log(data);
// }).catch((err)=>{
//     console.log(err);
// })

// let p1 = intro(true,3000,"p1 fullfilled","p1 rejected");
// let p2 = intro(false,1000,"p2 fullfilled","p2 rejected");
// let p3 = intro(true,5000,"p3 fullfilled","p3 rejected");
// let result = Promise.all([p1,p2,p3]);
// result.then((data)=>{
//     console.log(data);
// }).catch((err)=>{
//     console.log(err);
// })


/******    Promise.any()     *******/
// 1.Even it has one fullfilled state then the result is going to be which one has fullfilled and as well as less time duration;
// 2.Suppose if all promises are rejected then result would be AggregateError
// Note:- Aggregate error is not a string it is a object.

// let p1 = intro(true,3000,"p1 fullfilled","p1 rejected");
// let p2 = intro(true,1000,"p2 fullfilled","p2 rejected");
// let p3 = intro(false,5000,"p3 fullfilled","p3 rejected");
// let result = Promise.any([p1,p2,p3]);
// result.then((data)=>{
//     console.log(data);
// }).catch((err)=>{
//     console.log(err);
// })


// let p1 = intro(false,3000,"p1 fullfilled","p1 rejected");
// let p2 = intro(false,1000,"p2 fullfilled","p2 rejected");
// let p3 = intro(false,5000,"p3 fullfilled","p3 rejected");
// let result = Promise.any([p1,p2,p3]);
// result.then((data)=>{
//     console.log(data);
// }).catch((err)=>{
//     console.log(err,err.errors);
// })


/******   Promise.race()   *******/
// It gives which one has settled either it is fullfilled state or rejected state.

// const p1 = intro(true,500,"p1 fullfilled","p1 rejected");
// const p2 = intro(false,1000,"p1 fullfilled","p2 rejected");
// const p3 = intro(true,5000,"p1 fullfilled","p2 rejected");
// const result = Promise.race([p1,p2,p3]);
// result.then((data)=>{
//     console.log(data)
// }).catch((data)=>{
//     console.log(data);
// })

/********   Promise.allSettled() ***********/
// This is only not dependent on time.
// And it will print all fullfilled and rejected values 

// let p1 = intro(true,1000,"p1 fullfilled","p1 rejected");
// let p2 = intro(false,2000,"p1 fullfilled","p2 rejected");
// let p3 = intro(true,3000,"p1 fullfilled","p2 rejected");
// let results = Promise.allSettled([p1,p2,p3]);
// results.then((data)=>{
//     console.log(data)
// })



// function intro(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             resolve("Problem is solved state");
//         },2000)
//     })
// }
// async function test(){
//     let a = 1;
//     let result =  await intro();
//     console.log(result);
//     console.log(a);
// }
// let result = test();
// console.log(result);

// function promiseGen(){
//     console.log("Inside promiseGen");
//     return new Promise((resolve,reject)=>{
//         console.log("Inside promise");
//         setTimeout(()=>{
//             console.log("set Timeout");
//             resolve("This is a resolve promise");
//         },5000);
//     })
// }
// console.log("start");
// async function test(){
//     const a = 1;
//     console.log("Before Promise");
//     const promiseResult = await promiseGen();
//     console.log("after promise");
//     console.log(promiseResult);
//     console.log(a);
// }
// test();
// console.log("end");