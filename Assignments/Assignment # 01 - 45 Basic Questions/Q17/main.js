"use strict";
// // 17. Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.
// • Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.
// • Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.
// • Print a message to each of the two people still on your list, letting them know they’re still invited.
// • Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end of your program.
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
console.log("Alas! My new dinner table won’t arrive in time for the dinner. So I can invite only two people for dinner.");
// console.log(new_invitees);
// new_invitees.forEach((guest) => {
//     console.log(guest);
//     let pop_guest = new_invitees.pop()
//     console.log(`Sorry! ${pop_guest} Your invittion is being cancelled`);
// })
for (let index = new_invitees.length - 1; index >= 0; index--) {
    console.log(index);
    console.log(new_invitees);
    if (index >= 2) {
        let pop_guest = new_invitees.pop();
        console.log(`Sorry! ${pop_guest} Your invittion is being cancelled`);
    }
    else if (index >= 0 && index < 2) {
        console.log(`Hey! ${new_invitees[index]} You are still invited`);
    }
}
console.log(new_invitees);
new_invitees.pop();
new_invitees.pop();
console.log(new_invitees);
