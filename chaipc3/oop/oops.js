const user = {
    username: "hitesh",
    loginCount : 8,
    signedIn : true,

    getUserDetails: function(){
        // console.log(`username: ${this.username}`)
        console.log(this);
    }
}

// console.log(user.username);
// console.log(user.getUserDetails());

// console.log(this);

function User(username , loginCount, isLoggedIn){
      this.myusername = username;
      this.logincount = loginCount;
      this.isloggedin = isLoggedIn;

      this.greeting =  function(){
         console.log(`welcome ${this.username}`);
      }

      return this

}
// agar hum new keyword use na kare to ek naya input jo diya ha wo pichle ke bracket mai hi store hoga yaani 
//pichle instance mai hi store hoga isliye neeche ke example mai dono ke aage se new hatado to usertwo ko
//call kare bigair hi userone key instance mai store ho jaega aur userone ko over write kr dega
//isliye agar dono ke aage new keyword use karenge to dono alag alag instance(object) mai store honge
//isliye promise ke aage new use karte hai ke koi dusra promise use over write na karde
const userONe =  new User("hitesh" , 12,true)
const usertwo =  new User("ChaiAurCode" , 14 , false)
console.log(userONe.constructor);


