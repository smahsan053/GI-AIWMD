// 32. Checking Usernames: Do the following to create a program that simulates how websites ensure that everyone has a unique username.
// • Make a list of five or more usernames called current_users.

import { log } from "console";

// • Make another list of five usernames called new_users. Make sure one or two of the new usernames are also in the current_users list.

// • Loop through the new_users list to see if each new username has already been used. If it has, print a message that the person will need to enter a new username. If a username has not been used, print a message saying that the username is available.

// • Make sure your comparison is case insensitive. If 'John' has been used, 'JOHN' should not be accepted.

let current_users: Array<string> = ["Ahsan", "Ali", "Tabish", "Noman", "Fasih"]
let new_users: Array<string> = ["Faizan", "tabish", "Rizwan", "Nadeem", "Fasih"]

for (const user of new_users) {
    if (current_users.map((e) => {
        return e.toLowerCase()
    }).includes(user.toLowerCase())) {
        console.log("Username not available. Please enter another username");

    } else {
        console.log("Username available");

    }

}