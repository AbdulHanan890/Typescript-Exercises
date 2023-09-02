/*Shrinking Guest List: 
You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests*/

let more_guest3:string[] = [ 'Atta', 'azeem', 'ali', 'Hannan', 'umer', 'Hamza' ]

console.log("sorry i can invite only to person, Because new dinner table won’t arrive in time for the dinner");

const kicked_out = more_guest3.pop();
console.log(`sorry ${kicked_out}, i can't invite you.`);

const kicked_out1 = more_guest3.pop();
console.log(`sorry ${kicked_out1}, i can't invite you.`);

const kicked_out2 = more_guest3.pop();
console.log(`sorry ${kicked_out2}, i can't invite you.`);

const kicked_out3 = more_guest3.pop();
console.log(`sorry ${kicked_out3}, i can't invite you.`);

console.log(`hi ${more_guest3[0]}, you are still invited.`);
console.log(`hi ${more_guest3[1]}, you are still invited.`);

const indextoremove = 0;
const indextoremove2 = 1;

more_guest3.splice(indextoremove, 1 );
more_guest3.splice(indextoremove, 1 );

console.log(more_guest3);

