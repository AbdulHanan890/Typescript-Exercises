/*Stripping Names: Store a person’s name, and include some whitespace characters at the beginning and end of the name. Make sure you use each character combination, "\t" and "\n", at least once. 
Print the name once, so the whitespace around the name is displayed. Then print the name after striping the white spaces.*/

let person_name:string = "\t   John Doe  \n"; 

console.log("Name with whitespace: ", person_name);

console.log("Name without whitespace:",person_name.trim());

