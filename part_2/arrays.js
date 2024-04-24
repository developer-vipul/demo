const myHeros = ["Hanuman", "Krishna",]
console.log(myHeros);
myHeros.push("Shiva")
console.log(myHeros);
myHeros.pop()
console.log(myHeros);
myHeros.join(["Arjun"])
const myHeros2 = ["SpiderMan", "Superman",]
const newArr = [...myHeros, ...myHeros2]
console.log(newArr);