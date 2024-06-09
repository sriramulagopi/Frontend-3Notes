// function test(){
//     console.log(this);
// }
// test();
// let a = 10;
// console.log(window.a);

// let obj = {
//     Name:"gopi",
// }
// function callme(){
//     console.log("My name is "+this.Name);
// }
// callme();

// let obj = {
//     Name:'gopi',
// }
// function intro(){
//     console.log(this);
//     console.log(this.Name);
// }
// intro();
// intro.call(obj);


// let arrow = ()=>{
    //     console.log(this);
    //     console.log(this.Name);
    // }
    // arrow.call(obj);
    

// let obj1 = {
//     Name:"Asif",
//     Address:"Khammam",
//     intro1(){
//         console.log(this);
//     },
//     x:()=>{
//         console.log(this);
//     }
// }
// obj1.intro1();
// obj1.x();
// obj1.intro1.call(obj);
// obj1.intro1.call(obj1);

// function sum(a,b){
//     console.log(this);
//     return a+b;
// }
// let obj = {
//     Name:"Gopi"
// }
// console.log(sum(1,2));
// console.log(sum.call(obj));
// console.log(sum.call(obj,1,2,3));

// let obj = {
//     Name:"Asif",
//     Address:"Khammam",
// }
// function test(a,b,c){
//     console.log(a,b,c,this);
// }
// test(1,2,3);
// test.call(obj,1,2,3);


// let obj = {
//     Name:"Gopi"
// }
// function sum1(a,b){
//     console.log(this);
//     console.log(a+b);
// }
// sum1.call(obj);
// sum1.apply(obj);

// sum1.call(obj,1,2,3,4);
// sum1.apply(obj,[1,2,3,4,5]);

// sum1.call(null,1);
// sum1.apply(null,[1]);


// function intro(city,company){
//     console.log("my name is "+this.Name+", I live in "+city+", I work at "+company);
// }
// let obj = {
//     Name:"Asif"
// }
// let obj2 = {
//     Name:"Gopi",
// }
// intro.call(obj,"Delhi","Raw");
// intro.call(obj,"Noida","cars24");
// intro.call(obj,"chennai","Zoho");


// let intro2 = intro.bind(obj);
// intro2("delhi","raw");
// intro2("noida","cars24");
// intro2("chennai","zoho");

// intro2.call(obj2,"delhi","raw")

// function intro(city,company){
//     console.log("My name is "+this.Name+" I live in "+city+" I work at "+company);
// }
// let obj = {
//     Name:"Gopi"
// }
// let intro1 = intro.bind(obj,"Khammam");
// intro1("Flipkart");
// intro1("Amazon");
// intro1("infosys");


// let obj2 = {
//     Name:"Asif",
//     Address:"Khammam",
//     PhoneNO:8121719080,
//     intro(){
//         console.log(this)
//         let arrow = ()=>{
//             console.log(this)
//         }
//         arrow();
//         function inside(){
//             console.log(this)
//         }
//         inside();
//         return function(){
//             function inside2(){
//                 console.log(this)
//             }
//             inside2();
//             return this
//         }
//     },
//     arrow:()=>{
//         console.log(this);
//     }
// }
// console.log(obj2);
// console.log(obj2.intro()());
// obj2.arrow();