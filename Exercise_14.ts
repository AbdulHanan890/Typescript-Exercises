/*Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. 
You’ll have to think of someone else to invite.*/

let guests1:string[] = ["AHSAN" , "UMER" , "AZEEM" , "AMMAR"];

console.log(`Hi ${guests1[0]}, you are invited to a dinner.\n`);
console.log(`Hi ${guests1[1]}, you are invited to a dinner.\n`);
console.log(`Hi ${guests1[2]}, you are invited to a dinner.\n`);
console.log(`Hi ${guests1[3]}, you are invited to a dinner.\n`);

console.log(`Sorry ${guests1[0]}, can't make it out.\n`); // one guest is out

let new_guest = guests1.push("FAISAL"); //one new guest is added to a list


console.log(`Hi ${guests1[1]}, you are invited to a dinner.\n`);
console.log(`Hi ${guests1[2]}, you are invited to a dinner.\n`);
console.log(`Hi ${guests1[3]}, you are invited to a dinner.\n`);
console.log(`Hi ${guests1[4]}, you are invited to a dinner.\n`);