// // This is my first javascript code!
// console.log('Hello World');
// let name ='Aramide'; // string literal
// console.log(name);

// // cannot be a reserved keyword
// // should be meaningful
// // cannot start with a number (1name)
// // cannot contain a space or hyphen (-)
// // are case-sensitive

// let firstName = 'Aramide'; // undefined
// let lastName = 'Ashiwaju';
// console.log(lastName);

// let interestRate = 0.3;
// interestRate = 1;
// console.log(interestRate);

// let age = '30'; // Number Literal
// let isApproved = 'false'; // Boolean Literal
// let middleName = 'undefined';
// let selectedColour = 'null';

// let person = {
// name: 'Aramide',
// age: 30
// };
// console.log(person);

// let selectedColors = ['red', 'blue'];
// selectedColors [2] = '1';
// console.log(selectedColors.length);
// function greet (name, lastName) {
// console.log('Hello' + name + '' + lastName);
// }
// greet('David', 'Ted');

// let likes = 0;
// likes ++;
// likes ++;
// likes --;
// console.log(likes);


//BANKING SYSTEM WITH THE SWITCH STATEMENT
// let enterPin = prompt('enter pin');
// let loginPin = enterPin.toLowerCase();

// let accName = "Ashiwaju Aramide";
// let deposit = "deposit";
// let withdraw = "withdraw";
// let accBal = 1000;
// let checkBal = "balance";

// if (loginPin ==  1234 || loginPin == "admin") {
//     let action = prompt("what would you like to do").toLowerCase();
//     switch (action) {
//         case "deposit":
//             let amount = Number(prompt('Enter amount to deposit'));
//             accBal += amount
//             console.log(`You deposited #${amount}, and your new balance is #${accBal}`);
//             break;

//         case "withdraw":
//             let withdrawn = parseInt(prompt("Enter amount to withdraw"));
//             if (withdrawn > accBal) {
//                 console.log("Insufficient balance");
//             } else {
//             accBal -= withdrawn;
//             console.log(`You withdrew #${withdrawn}, and your new balance is #${accBal}`);
//             }
//             break;

//         case "balance":
//             console.log(`Your account balance is #${accBal}`);
            
//         default:
//             console.log("Ooops something went wrong!");
//     };
// } else {
//     console.log("Wrong PIN or Username");
// }

//Loops
for(i = 0; i <= 12; i++ ){
    console.log(`${i} X ${12} = ${i * 12}`);
};

for (let index = 1; index < 21; index++) {
    if(index % 2 == 0)
    console.log(index);
    ;
}

let marks = [1, 3, 5, 6, 7, 8, 10, 9, 4]
const evenNum = [];
for (let i= 0; i < marks.length; i++) {
    if (marks[i] % 2 == 0)
        evenNum.push(marks[i]); 
};
console.log(evenNum);

const fruits = "apple"
const food = []
food.push(fruits)
console.log(food);

setTimeout(()=> {
    console.log("First log");
    }, 3000)
    console.log("Second log");
    
    const doSomething = new Promise((resolve, reject)=>{
        let success = false;
        if (success) {
            resolve("Promise fulfilled")
        } else {
           reject("Promise not fulfilled") 
        }
    })
    console.log(doSomething);
    
//ASYNC AND AWAIT FUNCTION
// const getData = ()=>{
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve("our data is now available")
//         }, 20000);
//     })
// }
// const data2 = await getData();
// console.log(data2);


//Fetching data from API using "fetch"
let url = 'https://jsonplaceholder.typicode.com/users'
//tie the link to a variable name or call the fetch directly and insert the link
fetch(url)
//parse the response
.then(res=>res.json())
//accessing the data 
.then(data=>console.log(data))
//catching errors
.catch(err=>console.log(err));

//Function to get the first 5 data
const getData = async()=>{
    const response = await fetch(url);
    const data = await response.json();
    const first5 = data.slice(0,5);
    console.log(first5); 
    let div = document.querySelector('#container')
    first5.forEach((user)=>{
    // console.log(`${user.id} ${user.name} ${user.username} ${user.address}`);
     div.innerHTML += `<p>${user.id} ${user.name} ${user.username} ${user.address}</p>`
  })
}
getData()

//Function with Try/Catch 
    const getUsers = async () => {
        try{
            const response = await fetch(url)
            const data = await response.json()
            console.log(data.slice(0,3));
        } catch (error) {
            console.log(error); 
        }
    }
    getUsers()

//     let p = document.querySelector('#container')
//     first5.forEach((item)=>{
//     console.log(item);
//   })