const parent = document.querySelector(".parent");
const grand = document.querySelector(".grand");
const child = document.querySelector(".child");
parent.addEventListener("click",()=>{
    console.log("bubbling phase at parent");
})
child.addEventListener("click",()=>{
    console.log("bubbling phase at child");
});
grand.addEventListener("click",()=>{
    console.log("bubbling phase at grand");
})

// grand.addEventListener("click",()=>{
//     console.log("Capturing phase at grand")
// },true);
// parent.addEventListener("click",()=>{
//     console.log("Capturing Phase at parent")
// },true);
// child.addEventListener("click",()=>{
//     console.log("Capturing phase at child")
// },true);
