// let count = 0;
// let func1 = ()=>{
//     console.log(++count);
// }
// let action = (oldFun,delay)=>{
//     let condition = true;
//     return function(...param){
//         if(condition){
//             oldFun(...param);
//             condition=false;
//             setTimeout(()=>{
//                 condition=true;
//             },delay);
//         }
//     }
// }
// let func2 = action(func1,5000);




// let searchFunc = (event)=>{
//     console.log(event.target.value);
// }
// let func = (oldFun,delay)=>{
//     let id;
//     return function(...param){
//         id = setTimeout(()=>{
//             oldFun(...param)
//         },delay)
//     }
// }
// let func2 = func(searchFunc,200);
