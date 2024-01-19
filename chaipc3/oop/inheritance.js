class User {
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`Username is ${this.username} is`);
    }
}


class Teacher extends User{
    constructor(username , email , password){
        super(username)
        this.email = email;
        this.password = password;
    }

    addCourse(){
        console.log(` A new course was added by ${this.username}`);
    }

}


const chai = new  Teacher("chai" , "chai@gmail.com" , "password");

chai.addCourse();


const tea = new User("adnan")

console.log(chai === Teacher);
console.log(chai instanceof Teacher);
console.log(Teacher instanceof User);
console.log(User === Teacher);
console.log(Teacher === User);
console.log(chai instanceof User);