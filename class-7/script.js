// let store = {
//     withdraw(amount){
//         this.balance-=amount;
//     },
//     deposit(amount){
//         this.balance+=amount;
//     }
// }
// function currentAccount(name,balance,bank){
//     let obj = Object.create(store);
//     obj.name=name;
//     obj.balance=balance;
//     obj.bank=bank;
//     return obj;
// }
// let user1 = currentAccount("Asif",1000,"Kotak");

// let store2 = {
//     withdraw(amount){
//         this.balance-=amount;
//     },
//     deposit(amount){
//         this.balance+=amount;
//     },
//     education(){
//         console.log("You have education loan upto one lakh")
//     }
// }
// function savingAccount(name,balance,typeofUser){
//     let obj = Object.create(store2);
//     obj.name = name;
//     obj.balance = balance
//     obj.typeofUser=typeofUser;
//     return obj;
// }
// let user2 = savingAccount("Gopi",1000,"Student");

// let store = {
//     deposit(amount){
//         this.balance+=amount
//     },
//     withdraw(amount){
//         this.balance-=amount;
//     }
// };
// function privateBank(name,bank,balance){
//     let obj = Object.create(store);
//     obj.name=name;
//     obj.bank=bank;
//     obj.balance=balance;
//     return obj;
// }
// let user1 = privateBank("Asif","Kotak",1000);
// let store2 = {
//     educationLoan(){
//         console.log("Here you have education loan");
//     }
// }
// Object.setPrototypeOf(store2,store);
// function governmentBank(name,bank,balance){
//     let obj = Object.create(store2);
//     obj.name=name;
//     obj.balance=balance;
//     obj.bank=bank;
//     return obj;
// }
// let user2 = governmentBank("Gopi","SBI",1000);

// let store = {
//     deposit(amount){
//         this.balance+=amount;
//     },
//     withdraw(amount){
//         this.balance-=amount;
//     }
// }
// function commonDetails(name,balance){
//     let obj = Object.create(store);
//     obj.name=name;
//     obj.balance=balance;
//     return obj;
// }
// let store2 = {
//     education(){
//         console.log("Here you have education loan");
//     }
// }
// Object.setPrototypeOf(store2,store);
// function bank(name,balance,bank){
//     let obj = commonDetails(name,balance);
//     Object.setPrototypeOf(obj,store2);
//     obj.bank=bank;
//     return obj;
// }
// let user2 = bank("Gopi",1000,"SBI");
// console.log(user2);
// console.log(store2.__proto__);
// console.log(user2.__proto__);
// consoel.log(user2.__proto__.__proto__);

// Bank.prototype.deposit=function(amount){
//     this.balance+=amount;
// }
// Bank.prototype.withdraw=function(amount){
//     this.balance-=amount;
// }
// function Bank(name,balance){
//     this.name=name;
//     this.balance=balance;
// }
// let user1 = new Bank();
// Object.setPrototypeOf(Saving.prototype,Bank.prototype);
// Saving.prototype.education=function(){
//     console.log("Here you have education loan");
// }
// function Saving(name,balance,typeofUser){
//     Bank.call(this,name,balance)
//     this.typeofUser=typeofUser;
// }
// let user2 = new Saving("Gopi",1000,"Student");
