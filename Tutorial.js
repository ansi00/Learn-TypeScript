"use strict";
// // working with type annotations
let id = 5;
let company = "Acme limited";
let isPublished = true;
let arr = [1, 2, 3, 4, 5];
let x = "Anas";
let val = ["Anas", 22, true,];
const concatenate = (a, b) => {
    return a + b;
};
concatenate("Hello", "World!");
concatenate("5", "10");
const User = {
    id: 2,
    name: "Anas",
    greet(message) {
        console.log(message);
    }
};
User.greet("Hello!");
if (!User.age) {
    console.log("No Age available for user");
}
else {
    console.log(User.age);
}
const printID = (id) => {
    console.log("ID" + id);
};
printID("1abdc");
printID(22);
const signedContract = (employee) => {
    console.log(employee.name + " " + "with email" + " " + employee.email + " " + "Signed Contract and his credit Score is" + " " + employee.creditScore);
};
signedContract({ name: "Anas", creditScore: 1272, id: 34, email: "anas@gmail.com" });
// enums practise 
var loginError;
(function (loginError) {
    loginError["Unauthorized"] = "User is not authorized";
    loginError["noUser"] = "User doesn't exist";
    loginError["wrongCredentials"] = "InCorrect email or password";
    loginError["internal"] = "Internal Error";
})(loginError || (loginError = {}));
const printError = (error) => {
    if (error == loginError.Unauthorized) {
        console.log(loginError.Unauthorized);
    }
    else if (error == loginError.noUser) {
        console.log(loginError.noUser);
    }
    else if (error == loginError.wrongCredentials) {
        console.log(loginError.wrongCredentials);
    }
    else {
        console.log(loginError.internal);
    }
};
printError(loginError.Unauthorized);
printError(loginError.noUser);
printError(loginError.wrongCredentials);
printError(loginError.internal);
// Generic types practise 
class StorageContainer {
    constructor() {
        this.contents = [];
    }
    addItem(item) {
        this.contents.push(item);
    }
    getItem(idx) {
        return this.contents[idx];
    }
}
const usernames = new StorageContainer();
usernames.addItem("Anas");
usernames.addItem("Abbas");
console.log(usernames.getItem(1));
const age = new StorageContainer();
age.addItem(22);
age.addItem(25);
age.addItem(34);
console.log(age.getItem(0));
console.log(age.getItem(1));
console.log(age.getItem(2));
