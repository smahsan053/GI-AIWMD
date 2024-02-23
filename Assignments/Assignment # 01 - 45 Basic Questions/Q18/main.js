"use strict";
// 18. Seeing the World: Think of at least five places in the world you’d like to visit.
// • Store the locations in a array. Make sure the array is not in alphabetical order.
// • Print your array in its original order.
// • Print your array in alphabetical order without modifying the actual list.
// • Show that your array is still in its original order by printing it.
// • Print your array in reverse alphabetical order without changing the order of the original list.
// • Show that your array is still in its original order by printing it again.
// • Reverse the order of your list. Print the array to show that its order has changed.
// • Reverse the order of your list again. Print the list to show it’s back to its original order.
// • Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.
// • Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.
let locations = ["Tokyo", "Paris", "Kashmir", "Switzerland", "Gilgit"];
// Print the array in its original order
console.log("Original Order:", locations);
// Print the array in alphabetical order without modifying the actual list
console.log("Alphabetical Order:", [...locations].sort());
// Show that the array is still in its original order by printing it again
console.log("Original Order (unchanged):", locations);
// Print the array in reverse alphabetical order without changing the order of the original list
console.log("Reverse Alphabetical Order:", [...locations].sort().reverse());
// Show that the array is still in its original order by printing it again
console.log("Original Order (unchanged):", locations);
// Reverse the order of the list
locations.reverse();
// Print the array to show that its order has changed
console.log("Reversed Order:", locations);
// Reverse the order of the list again
locations.reverse();
// Print the array to show it’s back to its original order
console.log("Original Order (restored):", locations);
// Sort the array so it’s stored in alphabetical order
locations.sort();
// Print the array to show that its order has been changed
console.log("Sorted in Alphabetical Order:", locations);
// Sort to change the array so it’s stored in reverse alphabetical order
// locations.sort((a, b) => b.localeCompare(a));
locations.sort().reverse();
// Print the list to show that its order has changed
console.log("Sorted in Reverse Alphabetical Order:", locations);
