// let p1 = new Promise((resolve,reject)=>{
//     let condition = true;
//     if(condition){
//         resolve("Problem was resolved");
//     }
//     else{
//         reject("problem was rejected");
//     }
// })
// console.log(p1)
// console.log(p1.catch((data)=>{
//     console.log(data)
// }))

// let p1 = new Promise((resolve,reject)=>{
//     let condition = true;
//     if(condition){
//         setTimeout(()=>{
//             resolve("Problem was resolved");
//         },2000)
//     }
//     else{
//         setTimeout(()=>{
//             reject("problem was rejected");
//         })
//     }
// })
// console.log(p1);
// console.log(p1.catch((data)=>{
//     console.log(data);
// }))

// let p1 = new Promise((resolve,reject)=>{
//     let condition = true;
//     if (condition){
//         setTimeout(()=>{
//             resolve("Problem resolved");
//         },2000)
//     }
//     else{
//         setTimeout(()=>{
//             reject("Problem rejected");
//         })
//     }
// })
// p1.then((data)=>{
//     console.log(data);
// }).catch((data)=>{
//     console.log(data);
// })

// p1.catch((data)=>{
//     console.log(data);
// }).then((data)=>{
//     console.log(data);
// })

// let p1 = new Promise((resolve,reject)=>{
//     let condition = false;
//     if (condition){
//         setTimeout(()=>{
//             resolve("Problem was resolved");
//         },2000)
//     }
//     else{
//         setTimeout(()=>{
//             reject("Problem was rejected");
//         },2000)
//     }
// })
// console.log(p1);// if condition is not satisfied p1.then(func) it will ignore .then 
// console.log(p1.then((data)=>{
//     console.log(data);
// })
// )
// p1.catch((data)=>{
//     console.log(data);
// }).then((data)=>{
//     console.log(data);
// })
// p1.then((data)=>{
//     console.log(data);
// }).catch((data)=>{
//     console.log(data);
// })

// let p1 = new Promise((resolve,reject)=>{
//     let condition = false;
//     if (condition){
//         setTimeout(()=>{
//             resolve("statement resolved");
//         },2000);
//     }
//     else{
//         setTimeout(()=>{
//             reject("statement rejected");
//         });
//     }
// })
// console.log(p1);
// console.log(p1.then((data)=>{console.log(data)}).catch((data)=>{console.log(data)}))
// console.log(p1.then((data)=>{
//     console.log(data);
// }))
// console.log(p1.catch((data)=>{console.log(data)}));
// console.log(p1.catch((data)=>{console.log(data)}).then((data)=>{console.log(data)}))

// console.log(p1.then((data)=>{
//     console.log(data);
//     return "new Promise";
// }))

// let p1 = new Promise((resolve,reject)=>{
//     let condition = false;
//     if(condition){
//         setTimeout(()=>{
//             resolve("resolved state");
//         },2000);
//     }
//     else{
//         setTimeout(()=>{
//             reject("rejected state");
//         },2000);
//     }
// });

// console.log(p1);
// console.log(p1.then((data)=>{console.log(data)}))// it ignore .then and print promise object if the condition is false;
// let p2 = p1.catch((data)=>{console.log(data)
//     return "parent promise is failed";
// })
// console.log(p2);
// .catch will excute when the promise is rejected as well as it return new promise.
// .then will excute when the promise is fullfilled as well as it return new promise.

// function intro1(name){
//     return new Promise((resolve,reject)=>{
//         let condition = true;
//         if(condition){
//             setTimeout(()=>{
//                 resolve(`My name is ${name}`);
//             },500);
//         }
//         else{
//             setTimeout(()=>{
//                 reject(`Your name is not found`);
//             },500)
//         }
//     })
// }
// function intro2(city){
//     return new Promise((resolve,reject)=>{
//         let condition = true;
//         if(condition){
//             setTimeout(()=>{
//                 resolve(`I live in ${city}`);
//             },300)
//         }
//         else{
//             setTimeout(()=>{
//                 reject(`Your city is not found`);
//             },300)
//         }
//     })
// }
// function intro3(company){
//     return new Promise((resolve,reject)=>{
//         let condition = true;
//         if(condition){
//             setTimeout(()=>{
//                 resolve(`I work at ${company}`);
//             },100)
//         }
//         else{
//             setTimeout(()=>{
//                 reject(`Your working company is not found`);
//             },100)
//         }
//     })
// }
// intro1("gopi").then((data)=>{
//     console.log(data)
// })
// intro2("Khammam").then((data)=>{
//     console.log(data)
// })
// intro3("Amazon").then((data)=>{
//     console.log(data)
// })


// intro1("Gopi").then((data)=>{
//     console.log(data);
//     intro2("Khammam").then((data)=>{
//         console.log(data);
//         intro3("Flipkart").then((data)=>{
//             console.log(data);
//         })
//     })
// })

// intro1("Gopi").then((data)=>{
//         console.log(data);
//         return intro2("Khammam");
//     }).then((data)=>{
//             console.log(data);
//             return intro3("Amazon")
//         }).then((data)=>{
//                 console.log(data);
//             })