// const promiseOne = new Promise(function (resolve , reject){
//     //do an async task
//     //DB calls , cryptography, network
//     setTimeout(function(){
//         console.log('async task is complete');
//         resolve()
//     } , 2000)
// })

// promiseOne.then(function(){
//     console.log("promise consumed");
// })





// new Promise(function(resolve, reject){
//     setTimeout(function(){
//       console.log("Async task 2");
//       resolve()
//     }, 1000)

    
// }).then(function(){
//     console.log("Async 2 resolved");
// })



// const promisethree = new Promise(function(resolve , reject){
//     setTimeout(function(){
//      resolve({username: "chai" , email:"chai@example.com"})
//     },1000)
// })

// promisethree.then(function(user){
//     console.log(user);
// })


// const promisefour = new Promise(function(a, b){
//     setTimeout(function(){
//         let error = false;
//         if(!error){
//             a({username: "hitesh" , password: "123"})
//         }else{
//             b('ERROR: Something went wrong')
//         }
//     }, 1000)
// })


//  promisefour
//  .then((user) => {
//     console.log(user);
//     return user.username
// })
// .then((username) => {
//      console.log(username);
// })
// .catch(function(error){
//     console.log(error)
// })
// .finally(() => {
//     console.log("the promise is resolve or rejected");
// })


// const promisefive = new Promise(function(resolve , reject ){

//     setTimeout(function(){
//         let error = true;
//         if(!error){
//             resolve({username: "javascript" , password: "123"})
//         }else{
//             reject('ERROR: JS went wrong')
//         }
//     }, 1000)
// })

// async function consumepromisefive(){
// try {
//     const response = await promisefive
//     console.log(response);
// } catch (error) {
//     console.log(error);
// }
// }
// consumepromisefive()



fetch('https://jsonplaceholder.typicode.com/users')
.then((response) => {
     return response.json()
} )
.then((data) => {
    console.log(data);
})
.catch(() => console.log(error))