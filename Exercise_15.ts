/*More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.*/

let guest_more:string[] = [ "azeem" , "ali" , "umer" ];

console.log("we just found a bigger dinner table.");

const indextoinsert = 2;
const elementtoinsert = "Hannan";
const indextoinsert2 = 0;
const elementtoinsert2 = "Atta";

guest_more.splice(indextoinsert,0 ,elementtoinsert);
guest_more.splice(indextoinsert2,0 ,elementtoinsert2);


guest_more.push("Hamza");

console.log(guest_more);

console.log(`hi ${guest_more[0]} you are invited to a dinner.`);
console.log(`hi ${guest_more[1]} you are invited to a dinner.`); 
console.log(`hi ${guest_more[2]} you are invited to a dinner.`); 
console.log(`hi ${guest_more[3]} you are invited to a dinner.`);  
console.log(`hi ${guest_more[4]} you are invited to a dinner.`); 
console.log(`hi ${guest_more[5]} you are invited to a dinner.`); 
