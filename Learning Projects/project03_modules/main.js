import inquirer from "inquirer";
async function getUserAge() {
    const answers = await inquirer.prompt([
        {
            name: "name",
            type: "input",
            message: "Enter Your Name",
            validate: (ans) => {
                if (!ans) {
                    return "Please give your answer";
                }
                return true;
            }
        },
        {
            name: "age",
            type: "number", // input for string value
            message: "Enter Your Age"
        },
        {
            name: "hobby",
            type: "list", // input for string value
            message: "Select Your Hobby",
            choices: ["Cricket", "FootBall", "Badminton"],
            default: "nothing"
        },
        {
            name: "confirmation",
            type: "confirm", // input for string value
            message: "Select Your Hobby"
        },
        {
            name: "email",
            type: "checkbox", // input for string value
            message: "What is your Email",
            choices: ["Cricket@gmail.com", "FootBall@gmail.com", "Badminton@gmail.com"],
        }
    ]);
    console.log("Dear " + (answers.name) + ", Insha Allah, in " + (60 - answers.age) + " years you will be 60 years old. Dear, I found it quite interesting after knowing that your hobby is " + (answers.hobby) + ". Now please confirm do You want to play with me? " + (answers.confirmation ? "Yes, I" : "No, I don't") + " want to play. Ok confirm your email. My email is " + (answers.email));
}
getUserAge();
// --------------------------------------- OR ------------------------------------------
//     const answers = await inquirer.prompt({
//         name: "age",
//         type: "number", // input for string value
//         message: "Enter Your Age"
//     })
//     console.log("Insha Allah, in " + (60 - answers.age) + " years you will be 60 years old.");
// --------------------------------------- OR ------------------------------------------
// inquirer.prompt({
//     name: "age",
//     type: "number", // input for string value
//     message: "Enter Your Age"
// }).then(answers => {
//     console.log("Insha Allah, in " + (60 - answers.age) + " years you will be 60 years old.");
// });
