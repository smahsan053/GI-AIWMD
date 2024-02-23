"use strict";
// 19. Dinner Guests: Working with one of the programs from Exercises 14 through 18, print a message indicating the number of people you are inviting to dinner.
// Using Exercise: 14
let invitees = ["Ahsan", "Ali", "Tabish"];
let message = "You are cordially invited to dinner at my place.";
invitees.forEach((i) => {
    console.log(`Hey ${i}, ${message}`);
});
let num_guests = invitees.length;
console.log(`Total Number of Guests for Dinner: ${num_guests}`);
