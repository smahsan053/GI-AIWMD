"use strict";
// 43. Unchanged Magicians: Start with your work from Exercise 40. Call the function make_great() with a copy of the array of magicians’ names. Because the original array will be unchanged, return the new array and store it in a separate array. Call show_magicians() with each array to show that you have one array of the original names and one array with the Great added to each magician’s name.
let magicians = [
    "Harry Houdini",
    "David Copperfield",
    "Penn Jillette",
    "Teller",
    "David Blaine",
    "Derren Brown"
];
function make_great(magicians) {
    let great_magicians = magicians.map((magicians) => {
        return "The Great " + magicians;
    });
    return great_magicians;
}
let greatMagicians = make_great([...magicians]);
function show_magicians(magicians) {
    console.log(magicians);
}
show_magicians(magicians);
show_magicians(greatMagicians);
