// ! Data and functions are tied together in OOP

class User {
    constructor(name, email, password){
        this.name = name; // property of the object (instance)
        this.email = email; 
        this.password = password;
    }
    // this is a function or method inside the class
    sayHi(){
        console.log(`Hi, my name is ${this.name}`);
    }
}

const michael = new User('Michael', 'michael@email.biz', 'supersafepassword')

// console.log(michael); 
// output is: User {
//   name: 'Michael',
//   email: 'michael@email.biz',
//   password: 'supersafepassword'
// }



michael.sayHi();
// output is Hi, my name is Michael