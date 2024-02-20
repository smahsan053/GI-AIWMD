"use strict";
// 3. Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.
let personName = "Syed Muhammad Ahsan Ali";
console.log(`Lowercase: ${personName.toLowerCase()}`);
console.log(`Uppercase: ${personName.toUpperCase()}`);
function titlecase(name) {
    let wordArr;
    let returnName;
    wordArr = name.toLowerCase().split(" ").map((element) => {
        return element.replace(element[0], element[0].toUpperCase());
    }).join(" ");
    return wordArr;
}
console.log(`Titlecase: ${titlecase(personName)}`);
