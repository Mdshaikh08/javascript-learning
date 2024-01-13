// For of

const arr = [1, 2, 3, 4, 5]
 
for (const num of arr) {
    //console.log(num);

}

const greeting = "Hello World!";
for(const greet of greeting){
    
    let i = greet;
    if (i == " "){
    continue;
    }
 //   console.log(`Each char is ${greet}`);
}

//Maps(datatype)

const map = new Map()
map.set('IN' , "india")
map.set('Fr' , "France")
map.set('USA' , "United States Of America")

//console.log(map);

for (const [key , value] of map){
   // console.log(key , ':-' , value);
}

const myObj = {
    'game1' : 'NFS',
    'game2' : 'spidermap',
}
for (const [key , value] of myObj){
    console.log(key , ':-' , value);
}