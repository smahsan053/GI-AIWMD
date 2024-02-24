// 42. Great Magicians: Start with a copy of your program from Exercise 39. Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name. Call show_magicians() to see that the list has actually been modified.

let magicians: string[] = [
    "Harry Houdini",
    "David Copperfield",
    "Penn Jillette",
    "Teller",
    "David Blaine",
    "Derren Brown"
];
function make_great(magicians: string[]) {
    return magicians.map((magicians) => "The Great " + magicians)
}
// function make_great(magicians: string[]) {
//     let make_great_magicians: string[] = magicians.map((magicians) => {
//         return "The Great " + magicians
//     })
//     return make_great_magicians
// }
magicians = make_great(magicians);

function show_magicians(magicians: string[]) {
    console.log(magicians);
}
show_magicians(magicians)
console.log(magicians);
