const User = {
    username: "adnan",
    price: 999,
    
    welcomeMessage: function(){
        console.log(`${this.username} , welcome to website`);
        console.log(this);
    }
}

// User.welcomeMessage();
// User.username = "sam";
// User.welcomeMessage();

//console.log(this)

// const chai = function () {
//     let username = "adnan"
//     console.log(this);
// }

const chai = () => {
    let username = "adnan"
    console.log(this);
}
//chai()

const addTwo = (num1 , num2) =>  num1 + num2

console.log(addTwo(3,5))