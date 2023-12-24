// const arr = [1, 2, 3, 4, 5,6]
 
// const total = arr.reduce(function (acc, curval){
//      const a = (acc + curval);
//     console.log(`acc ${acc} and curval is ${curval}  and total is ${a}`);
//     return a;
// }, 0)

// console.log(total);

//another example

const shoppingCart =[
 {
    itemname : "js course",
    price: 2999
},
{
    itemname : "py course",
    price: 3999
},
{
    itemname : "java course",
    price: 4999
},
{
    itemname : "cpp course",
    price: 5999
},
]

const pricetopay = shoppingCart.reduce(( acc , item) => (item.price + acc) , 0)

console.log(pricetopay);