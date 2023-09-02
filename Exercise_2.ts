/*Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.*/

let name2:string = "Hannan";
console.log(name2.toLowerCase());
console.log(name2.toUpperCase());
console.log(toTitleCase(name2));

function toTitleCase(str) {
    return str.replace(/\w\S*/g, function(txt) {
      return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    });
  }