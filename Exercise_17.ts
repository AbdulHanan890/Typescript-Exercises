/*Seeing the World: Think of at least five places in the world you’d like to visit*/


// Store the locations in an array
let locations: string[] = ["Tokyo", "Paris", "Madina", "Makkah", "Istanbul"];

// Print the array in its original order
console.log("Original order:", locations);

// Print the array in alphabetical order without modifying the actual list
console.log("Alphabetical order:", [...locations].sort()); 

// Show that the array is still in its original order
console.log("Original order:", locations);

// Print the array in reverse alphabetical order without changing the original list
console.log("Reverse alphabetical order:", [...locations].sort().reverse());

// Show that the array is still in its original order
console.log("Original order:", locations);

// Reverse the order of the list
locations = locations.reverse();
console.log("Reversed order:", locations);

// Reverse the order of the list again
locations = locations.reverse();
console.log("Original order:", locations);

// Sort the array in alphabetical order
locations.sort();
console.log("Alphabetical order:", locations);

// Sort the array in reverse alphabetical order
locations.sort((a, b) => b.localeCompare(a));
console.log("Reverse alphabetical order:", locations);
