const userObj = {
    userName: "Vipul",
    price: 500,
    welcomeMsg: function(){
        console.log(`${this.userName}, welcome to my world`);
        // console.log(this)
    }
}
userObj.welcomeMsg()
// console.log(this)

function chai() {
    console.log("chai ---- >", this);
}

const coffee = () => {
    console.log("coffee ---- >", this);
}

chai();
coffee();

// Immediately Invoked Function Expressions (IIFE)

(function one () {
    console.log("Hello");
})();
( two = ()=> {
    console.log("Hello 2");
})()