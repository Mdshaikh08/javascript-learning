function sayMyName(){
    console.log("A")
    console.log("d")
    console.log("n")
    console.log("a")
    console.log("n")
}
 
//sayMyName()

function addTwoNumbers(number1, number2){
let result = number1 + number2
return result
}

const result = addTwoNumbers(3 ,5);
//console.log( result)

function loginUserMsg(username = "no one"){

        return `${username}  logged In`
    
}
//console.log(loginUserMsg("hitesh"))
console.log(loginUserMsg("adnan"))
