// Variables

let age = 30; //Changable and reassignable
const name = "John"; //Constant and unchangeable

//Data types-------
const user1 = 'John Doe'; //String  
const num1 = 25;  //Number
const isHuman = true; //Boolean
const rating = 4.5 //Decimal
const x = null; //Null
const y = undefined;
let z;

// console.log(typeof user1);
// console.log(typeof num1);
// console.log(typeof isHuman);
// console.log(typeof rating);
// console.log(typeof x);
// console.log(typeof y);
// console.log(typeof z);


//Arrays--------
const fruits = ['apple', 'banana', 'orange'];

// console.log(fruits[1]);

fruits[3] = 'grape';
// console.log(fruits[3]);

fruits.push('strawberry');
// console.log(fruits);

fruits.unshift('kiwi');
// console.log(fruits);

fruits.pop();
// console.log(fruits);


//Objects--------   
const person = {
    firstName: 'John',
    lastName: 'Doe',
    age: 30,
    hobbies: ['music', 'sports'],
    address: {
        street: '123 Main St',
        city: 'New York',
        state: 'NY'
    }
};

// console.log(person);
// console.log(person.hobbies[0]);
// console.log(person.address.city);

//obnject destructuring
const {firstName, lastName, address:{ street }} =person;
// console.log(firstName);


//Arrays of objects--------------
const todos = [
    {
        id: 1,
        text: 'Do the dishes',
        isCompleted: true
    },
    {
        id: 2,
        text: 'Take out the trash',
        isCompleted: false
    },
    {
        id: 3,
        text: 'Mow the lawn',
        isCompleted: true
    }
];

// console.log(todos);

// console.log(todos[1].text);

const todosJSON = JSON.stringify(todos);
// console.log(todosJSON);

//For loop--------
for( let i = 0; i < todos.length; i++){
    console.log(todos[i]);
}

// forEach, map, filter--------------
todos.forEach(function(todo){
    // console.log(todo.text);
});

//map returns an array
const todoTEXT = todos.map( function(todo){
    return todo.text;
});
// console.log(todoTEXT);

//filter returns an array with elements that meet the set condition
const Finishedtodos = todos.filter( function(todo){
    return todo.isCompleted === true;
});
// console.log(Finishedtodos);

const finishedTasks = todos.filter( function(todo){
    return todo.isCompleted == true;
}).map( function(todo){
    return todo.text;
});

// console.log(finishedTasks);


//Conditions------------------------------

const user = true;
const auth = true;

const login = user === auth ? true : false;

console.log(login);


//Functions --------------

function addNum(num1, num2){
    return(num1 + num2);
}
console.log(addNum(3,4));


const addNums = (num1, num2) =>{
    return num1 + num2;
}
console.log(addNums(10,10));


//OOP------------------------ 
function Person( firstName, lastName, dob){
    this.firstName = firstName;
    this.lastName = lastName;
    this.dob = new Date(dob); //Date object using the date constructor

    //methods for the object
    this.getBirthYear = () =>{
        return(this.dob.getFullYear());
    }
    this.getFullName = () =>{
        return(`${this.firstName} ${this.lastName}`);
    }
}

const person1 = new Person('Arthur', 'Yawe', '1-15-2001');
console.log(person1);
console.log(person1.firstName);
console.log(person1.getBirthYear());
console.log(person1.getFullName());
const person2 = new Person('John', 'Doe', '1-15-2001');
console.log(person2);

