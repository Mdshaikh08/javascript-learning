//Immediately Invoked Function Expression(IIFE)

(function chai(){
    console.log(`DB CONNECTED`);
})(); //named iife

((name) => {
    console.log(`DB CONNECTED TWO ${name}`)
})("adnan")  // unnamed iife