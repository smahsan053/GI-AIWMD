import inquirer from "inquirer";
import chalk from "chalk";
async function getUserAge() {
    const answers = await inquirer.prompt(
        [
            {
                name: "name",
                type: "input",
                message: "Enter Your Name",
                validate: (ans) => {
                    if (!ans) {
                        return "Please give your answer"
                    }
                    return true
                }
            }
            ,
            {
                name: "age",
                type: "number", // input for string value
                message: "Enter Your Age"
            }
            ,
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
                message: "Please confirm"
            },
            {
                name: "email",
                type: "checkbox", // input for string value
                message: "What is your Email",
                choices: ["Cricket@gmail.com", "FootBall@gmail.com", "Badminton@gmail.com"],
            }
        ]
    )
    // console.log(`${chalk.bold(chalk.green(`Dear ${answers.name}`), chalk.blue(`Your age is ${answers.age}`))}`)
    console.log(`${chalk.bold(`${chalk.green(`Dear ${answers.name},\n`)}${chalk.blue(`Your age is ${answers.age}\n`)}${chalk.bgMagenta(`Your hobby is ${answers.hobby}\n`)}${chalk.cyanBright(`Really? ${answers.confirmation ? "Yes" : "No"}\n`)}${chalk.blueBright(`Alright! Your email is ${answers.email}\n`)}`)}`);

}
getUserAge()

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
