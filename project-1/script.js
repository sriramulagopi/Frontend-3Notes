let arr = [[1,1,1],[1,0,1],[1,1,1]];
let arr1 = [];
const body = document.querySelector("body");
const div1 = document.createElement("div");
const script = document.querySelector("script");
div1.className="container";
for (let i=0;i<arr.length;i++){
    let createDiv = document.createElement("div");
    for (let j=0;j<arr.length;j++){
        if(arr[i][j]===1){
            let div = document.createElement("div");
            createDiv.append(div);
            div.addEventListener("click",fillColor)
        }
    }
    div1.append(createDiv);
}
let seconds = 500;
body.insertBefore(div1,script);
function fillColor(e){
    e.target.style.background="green";
    arr1.push(e.target);
    if(arr1.length===(arr.length*arr[0].length)-1){
        for (let i=arr1.length-1;i>=0;i--){
            stepByStep(arr1[i]);
        }
        arr1=[];
        seconds=500;
    }
}
function stepByStep(target){
    let element = new Promise((resolve)=>{
        setTimeout(()=>{
            resolve(target);
        },seconds)
    });
    element.then((data)=>{
        data.style.background="none";
    })
    seconds+=500;   
}
