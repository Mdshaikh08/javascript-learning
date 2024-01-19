let myHeroes = ["thor" , "spiderman"]

let heropower = {
    thor : "hammer",
    spiderman: "sling",

    getspiderpoer: function () {
        console.log(`spidy power is ${this.spiderman}`);
    }
}

Object.prototype.hitesh = function () {
    console.log(`hitesh is present in all object`);
}


Array.prototype.heyhitesh = function () {
    console.log(`hitesh says hi`);
}
// heropower.hitesh()
// heropower.heyhitesh()
myHeroes.heyhitesh();
myHeroes.hitesh();



//inheritance

const teacher ={
    makeVideo : true,

}

const teachingsupport = {
    isAvailable: false
}

const TAsupport = {
    makeassignment: "js assignment",
    fulltime: true,
    __proto__ : teachingsupport

}

Object.setPrototypeOf(teachingsupport, teacher)

let name = "    hitesh"

String.prototype.change = function () {
    console.log(this.trim().length);
}


change("   adan   ")