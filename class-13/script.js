// let func1 = (event)=>{
//     console.log(event.target.value);
// }
// function func2(oldFun,delay){
//     let id;
//     return (...param)=>{
//         clearInterval(id);
//         id = setTimeout(()=>{
//             oldFun(...param);
//         },delay);
//     }
// }
// let result = func2(func1,100);


// let count = 0;
// function func1(){
//     console.log(++count);
// }
// function func2(oldFun,delay){
//     let condition = true;
//     return (...param)=>{
//         if(condition){
//             oldFun(...param);
//             condition=false;
//             setTimeout(()=>{
//                 condition=true;
//             },delay)
//         }
//     }
// }
// const result = func2(func1,5000);



// let condition = true;
// function func2(){
//     if(condition){
//         console.log(++count);
//         condition=false;
//         setTimeout(()=>{
//             condition=true;
//         },5000)
//     }
// }
