"use strict";
// 12. Greetings: Start with the array you used in Exercise 11, but instead of just printing each person’s name, print a message to them. The text of each message should be the same, but each message should be personalized with the person’s name.
let names = ["Naeem", "Abdul Qadir", "Sameer", "Waleed", "Minhaj", "Zaryab"];
let message = "It’s hard to meet people in life who are willing to give everything without the hope of any return. I call myself lucky because I have someone like that in my life. It’s you ❤️";
names.forEach((e) => {
    console.log(`Hey ${e}! ${message}`);
});
