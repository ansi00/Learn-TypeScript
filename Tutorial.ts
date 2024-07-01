// // working with type annotations

let id: number = 5;
let company: string = "Acme limited";
let isPublished: boolean = true;

let arr: number[] = [1,2,3,4,5];
let x: any = "Anas";
let val : any[] = ["Anas", 22 , true, ]


const concatenate = (a:string , b:string): string => {
    return a + b ;
}

concatenate("Hello", "World!");
concatenate("5", "10");


// // interfaces in TypeScript

interface UserInterface {
    id : number,
    name : string,
    age? : number
    greet(message: string): void
}


const User: UserInterface = {
    id : 2,
    name : "Anas",
    greet(message){
        console.log(message);
        
    }
}
User.greet("Hello!")
if(!User.age){
    console.log("No Age available for user");  
}else{
console.log(User.age);
}

// Unions practise

type IDFIELDTYPE = number | string; // using union for data types

const printID = (id: IDFIELDTYPE):void =>{
    console.log("ID" + id);
}

printID("1abdc");
printID(22);

 // Intersections practise

interface BuisnessPartner  {
    name : string,
    creditScore : number
}


interface EmployeeDetails {
    id : number ,
    email : string
}

type Employee = BuisnessPartner & EmployeeDetails; // using intersection

const signedContract = (employee : Employee):void =>{
console.log(employee.name+" "+"with email"+" "+ employee.email+" " + "Signed Contract and his credit Score is"+" "+ employee.creditScore);


}

signedContract({name: "Anas", creditScore: 1272, id:34, email:"anas@gmail.com"})


// enums practise 

enum loginError  {
    Unauthorized = "User is not authorized",
    noUser = "User doesn't exist",
    wrongCredentials = "InCorrect email or password",
    internal = "Internal Error"
}


const printError =(error:loginError):void=>{
    if(error == loginError.Unauthorized){
    console.log(loginError.Unauthorized);
    }
    else if(error == loginError.noUser){
        console.log(loginError.noUser);      
    }
    else if(error == loginError.wrongCredentials){
        console.log(loginError.wrongCredentials);
        
    }else{
        console.log(loginError.internal);
        
    }
}

printError(loginError.Unauthorized)
printError(loginError.noUser)
printError(loginError.wrongCredentials)
printError(loginError.internal)


// Generic types practise 

class StorageContainer<T> {
    private contents : T[];

constructor(){
    this.contents = [];
}

    addItem(item :T):void{
this.contents.push(item);
    }

    getItem(idx:number): T | undefined{
        return this.contents[idx];
    }
}

const usernames = new StorageContainer<string>();

usernames.addItem("Anas");
usernames.addItem("Abbas");
console.log(usernames.getItem(1));

const age = new StorageContainer<number>();

age.addItem(22);
age.addItem(25);
age.addItem(34);


console.log(age.getItem(0));
console.log(age.getItem(1));
console.log(age.getItem(2));

