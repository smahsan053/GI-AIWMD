// 37. Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message that reads I love TypeScript. Make a large shirt and a medium shirt with the default message, and a shirt of any size with a different message.

function make_shirt(size: string = "Large", message: string = "I love TypeScript") {
    if (size === "Medium" || size === "Large") {
        console.log(`The Size of Shirt is ${size} & Message written on it is  "I love TypeScript"`);
    } else {
    console.log(`The Size of Shirt is ${size} & Message written on it is  "${message}"`);
}
}
make_shirt("Large", "Keep Calm and Code On")
make_shirt("Medium", "Keep Calm and Code On")
make_shirt("Small", "Keep Calm and Code On")
make_shirt()

