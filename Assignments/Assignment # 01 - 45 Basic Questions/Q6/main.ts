// Stripping Names: Store a person’s name, and include some whitespace characters at the beginning and end of the name. Make sure you use each character combination, "\t" and "\n", at least once. Print the name once, so the whitespace around the name is displayed. Then print the name after striping the white spaces.

let person_name: string = "\t \n   Syed Muhammad Ahsan Ali \t\n"
console.log(`${person_name}`);
let stripped_name = person_name.trim()
console.log(stripped_name);

