// class Bank{
//     constructor(name,balance){
//         this.name=name;
//         this.balance=balance;
//     }
//     deposit(amount){
//         this.balance+=amount;
//     }
// }
// class SavingAccount{
//     constructor(name,balance,typeofuser){
//         this.name=name; // this is also availble in Bank class
//         this.balance=balance; // this is also availble in Bank class
//         this.typeofuser=typeofuser;
//     }
//     deposit(amount){ // this function is availble in Bank class
//         this.balance+=amount;
//     }
//     education(){
//         console.log("Here we are providing education loan");
//     }
// }

// class Bank {
//   constructor(name, balance) {
//     this.name = name;
//     this.balance = balance;
//   }
//   withdraw(amount) {
//     this.balance -= amount;
//   }
//   deposit(amount) {
//     this.balance += amount;
//   }
// }
// class SavingAccount extends Bank {
//   constructor(name, balance, typeofuser) {
//     super(name, balance);
//     this.typeofuser=typeofuser;
//   }
//   education(){
//     console.log("Here you have education loan");
//   }
// }
// let person1 = new SavingAccount("Gopi",2000,"Saving Account");

// class Bank{
//     #balance;
//     constructor(name,balance){
//         this.name=name;
//         this.#balance=balance;
//     }
//     updateBalance(amount){
//         this.#balance+=amount;
//     }
//     getName(){
//         return this.name;
//     }
//     setName(updatedName){
//         this.name=updatedName;
//     }
//     getBalance(){
//         return this.#balance;
//     }
//     setBalance(amount){
//         this.#balance=amount;
//     }
// }
// let person1 = new Bank("Asif",20000);
// console.log(person1);
// person1.#balance=10000;
// console.log(person1);
// console.log(person1.getBalance())
// person1.setBalance(1000);
// console.log(person1);
// console.log(person1.getName());
// person1.setName("Gopi");
// console.log(person1);
// person1.updateBalance(2000);
// console.log(person1);

// class Bank{
//     #balance
//     constructor(name,balance){
//         this.name=name;
//         this.#balance=balance;
//     }
//     updateBalance(amount){
//         this.#balance+=amount;
//     }
//     get balance(){
//         return this.#balance;
//     }
//     set balance(amount){
//         this.#balance=amount;
//     }
//     get Name(){ // get function doesn't take any parameters.
//         return this.name;
//     }
//     set Name(name){ // set function take only single parameter.
//         this.name=name;
//     }
// }
// let person1 = new Bank("Asif",2000);
// console.log(person1.balance);
// person1.balance=3000;
// console.log(person1.balance);
// console.log(person1.Name);
// person1.Name="Gopi";
// console.log(person1.Name);
// console.log(person1);
// person1.updateBalance(1000);
// console.log(person1);


// console.log("start");
// setTimeout(()=>{
//     console.log("mid");
// },0);
// console.log("end");


// function intro(name){
//     setTimeout(()=>{
//         return `My name is ${name}`;
//     })
// }
// let result = intro("Gopi");
// console.log(result);

// function intro1(name,callback){
//     setTimeout(()=>{
//         callback(`My name is ${name}`);
//     },1000)
// }
// intro1("Gopi",function(string){
//     console.log(string)
// })


// function intro2(name,callback){
//     setTimeout(()=>{
//         callback("My name is "+name);
//     },1000)
// }
// intro2("Gopi",function(string){
//     console.log(string);
// })

// function intro3(city,callback){
//     setTimeout(()=>{
//         callback("I live in "+city);
//     },500)
// }
// intro3("Khammam",function(string){
//     console.log(string);
// })

// function intro4(birthPlace,callback){
//     setTimeout(()=>{
//         callback("My birthplace is "+birthPlace);
//     },200);
// }
// intro4("Kodad",function(string){
//     console.log(string);
// })




// function intro2(name,callback){
//     setTimeout(()=>{
//         callback("My name is "+name);
//     },1000)
// }
// function intro3(city,callback){
//     setTimeout(()=>{
//         callback("I live in "+city);
//     },500)
// }
// function intro4(birthPlace,callback){
//     setTimeout(()=>{
//         callback("My birthplace is "+birthPlace);
//     },200);
// }
// intro2("Gopi",function(string){
//     console.log(string);
//     intro3("Khammam",function(string){
//         console.log(string);
//         intro4("Kodad",function(string){
//             console.log(string);
//         })
//     })
// })