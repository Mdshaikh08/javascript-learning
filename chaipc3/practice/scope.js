let a = 10
const b = 20 
var c = 30

console.log(a);

function one() {
    const username = "Adnan"
    function two() {
        const website = "youtube"
        console.log(username);
    }
      //console.log(website)
      two()
}
    one()

    //+++++++++++++++++++++++++++++++interesting+++++++++++++++++++++++++++++++++++++++++++++++++

    funtion addOne(num){
      return num + 1

    }
    addOne(5)

    const addTwo = function(num){
        return num + 2
    }
    addTwo(5)