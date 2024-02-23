"use strict";
// 20. Think of something you could store in a array. For example, you could make a list of mountains, rivers, countries, cities, languages, or anything else you’d like. Write a program that creates a list containing these items.
let countries = ["Pakistan", "Australia", "Newzealand"];
let mountains = ["K2", "Mount Everest", "Nanga Parbat"];
let cities = ["Karachi", "Sydney", "Toronto"];
let languages = ["Urdu", "English", "Sindhi"];
console.log("List of Countries:");
for (let index = 0; index < countries.length; index++) {
    console.log(`${index + 1}. ${countries[index]}`);
}
console.log("List of Mountains:");
for (let index = 0; index < mountains.length; index++) {
    console.log(`${index + 1}. ${mountains[index]}`);
}
console.log("List of Cities:");
for (let index = 0; index < cities.length; index++) {
    console.log(`${index + 1}. ${cities[index]}`);
}
console.log("List of Languages:");
for (let index = 0; index < languages.length; index++) {
    console.log(`${index + 1}. ${languages[index]}`);
}
