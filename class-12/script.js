// function promiseGen(){
//     console.log("Hello how are you");
//     return "some meaningful data";
// }
// // await is considering this return statement as async code
// console.log("start");
// async function test(){
//     console.log("Before promiseGen");
//     const promiseResult = await promiseGen();
//     console.log("after promiseGen");
//     return promiseResult;
// }
// test();
// console.log(test())
// console.log("end");
// await is waiting for return value
// await waits only for async code



// function numGen(){
//     console.log("inside numGen");
//     return 4;
// }
// console.log("start");
// async function test(){
//     console.log("before promiseGen");
//     const result = await 4;
//     console.log(result);
//     console.log("after promise");
// }
// test();
// console.log("end");


// console.log("start");
// async function test1(){
//     console.log("before promiseGen");
//     const promiseGen = await numGen();
//     console.log(promiseGen);
//     console.log("after promiseGen");
// }
// test1();
// console.log("end");



// async function numGen(){
//     let count = 1;
//     for (let i=0;i<1000;i++){
//         count++;
//     }
//     console.log(count);
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


// async function promiseGen(){
//     console.log("inside promise gen");
//     setTimeout(()=>{
//         console.log("inside setTime");
//     },1000);
//     return new Promise((resolve)=>{
//         resolve(4);
//     });
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