// const myObj = new Object()
const mySym = Symbol("key11")
const myObj = {}
myObj.name = "Vipul"
myObj["email"] = "vip@gmail.com"
myObj[mySym] = "key222"
console.log(myObj);
console.log(myObj.name);
console.log(myObj["email"]);
console.log(myObj[mySym]);