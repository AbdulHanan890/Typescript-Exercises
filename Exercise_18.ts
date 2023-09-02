//Dinner Guests: Working with one of the programs from Exercises 14 through 18, 
// print a message indicating the number of people you are inviting to dinner./

let more_guest4:string[]= [`Ali Ammar`, `Azeem`, `Ahsan`];

console.log("dinner guests:"); 
for(let i =0;i<more_guest4.length;i++){
    console.log(`-`, more_guest4[i]);
}

let guestList: number = more_guest4.length;
console.log(`The number of peoples invited to dinner is ${guestList}`);
