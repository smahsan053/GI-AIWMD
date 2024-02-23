"use strict";
// 15. Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite.
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
