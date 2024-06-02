// function userCreator(name,bank,balance){
//     let obj = {};
//     obj.name=name;
//     obj.bank=bank;
//     obj.balance=balance;
//     obj.withdraw=function(amount){
//         obj.balance=obj.balance-amount;
//     }
//     return obj
// }
// let user1 = userCreator("Gopi","SBI",1000);
// let user2 = userCreator("Asif","Kotak",1000);
// user1.withdraw(100);
// console.log(user1);
// user1.withdraw(500);
// console.log(user1);

// let atm = {
//     withdraw(amount){
//         this.balance=this.balance-amount
//     }
// };
// function userCreator1(name,bank,balance){
//     let obj = {};
//     obj.name=name;
//     obj.bank=bank;
//     obj.balance=balance;
//     obj.__proto__=atm;
//     return obj;
// }
// let user1 = userCreator1("Gopi","SBI",1000);
// let user2 = userCreator1("Asif","Kotak",1000);
// user1.withdraw(200);
// console.log(user1);
// user1.withdraw(300);
// console.log(user1);


// console.log(Function.prototype.__proto__);
// console.log(Function.__proto__.__proto__);
// function User(){

// };
// let result = new User();
// console.log(User.prototype);
// console.log(User.__proto__);
// console.log(User.__proto__===Function.prototype);
// console.log(result.__proto__);
// console.log(result);
// console.log(result.__proto__===User.prototype);
// console.log(result===result.__proto__);

// function User1(name,bank,balance){
//     this.name=name;
//     this.bank=bank;
//     this.balance=balance;
// }
// User1.prototype.withdraw=function(amount){
//     this.balance=this.balance-amount;
// }
// let person1 = new User1("Asif","Kotak",1000);
// let person2 = new User1("Gopi","SBI",1000);
// person1.withdraw(300);
// console.log(person1);
// person1.withdraw(500);
// console.log(person1);

// class user{
//     constructor(name,bank,balance){
//         this.name=name;
//         this.bank=bank;
//         this.balance=balance;
//     }
//     withdraw(amount){
//         this.balance=this.balance-amount;
//     }
// }
// let person1 = new user("Gopi","SBI",1000);
// let person2 = new user("Asif","Kotak",1000);
// person1.withdraw(300);
// console.log(person1);
// person2.withdraw(400);
// console.log(person2);
