"use strict";
// 16. More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
// • Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.
// • Add one new guest to the beginning of your array.
// • Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list. • Print a new set of invitation messages, one for each person in your list.
let invitees = ["Ahsan", "Ali", "Tabish"];
let message = "You are cordially invited to dinner at my place.";
invitees.forEach((i) => {
    console.log(`Hey ${i}, ${message}`);
});
console.log(`Unfortunately, ${invitees[0]} will not be able to attend dinner, so sending invitations again with modified list. Apology for inconvenience`);
let new_invitees = [invitees[0].replace("Ahsan", "Hussain"), invitees[1], invitees[2]];
new_invitees.forEach((i) => {
    console.log(`Hey ${i}, ${message}`);
});
console.log("Hey Guys, I just found a bigger dinner table, So I've decided to invite three more peoples at dinner");
new_invitees.unshift("Jameel");
new_invitees.splice(2, 0, "Wajid");
new_invitees.push("Zaryab");
new_invitees.forEach((i) => {
    console.log(`Hey ${i}, ${message}`);
});
