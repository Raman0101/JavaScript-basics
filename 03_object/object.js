// Singleton 
// Object.create

const tinderUser = new Object()
tinderUser.name = "User";
tinderUser.age = 22;
console.log(tinderUser);

// Object Literals

const mySym = Symbol("key1");

const jsUser = {
    name : "Raman",
    [mySym] : "key2",
    age : 22,
    location : "Noida",
    email : "rk012@gmail.com"
}

console.log(jsUser.age);
console.log(jsUser["name"]);
console.log(jsUser);
