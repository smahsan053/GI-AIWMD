// 35. Animals: Think of at least three different animals that have a common characteristic. Store the names of these animals in a list, and then use a for loop to print out the name of each animal. • Modify your program to print a statement about each animal, such as A dog would make a great pet. • Add a line at the end of your program stating what these animals have in common. You could print a sentence such as Any of these animals would make a great pet!

let animal_name: string[] = ["Elephant", "Hippopotamus", "Rhinoceros"]
for (const name of animal_name) {
    console.log(name);

}
let Elephant: string = "Elephant: Graceful giants of the savanna, elephants roam with majestic presence."
let Hippopotamus: string = "Hippopotamus: Formidable river-dwellers, hippos command respect with their imposing presence."
let Rhinoceros: string = "Rhinoceros: Armored guardians of the plains, rhinos exude strength and resilience."

for (const name of animal_name) {
    if (name === "Elephant") {
        console.log(Elephant);

    } else if (name === "Hippopotamus") {
        console.log(Hippopotamus);

    } else {
        console.log(Rhinoceros);

    }
}
console.log("These large mammals are all herbivores with thick, armored skin and massive bodies. They are also known for their formidable strength and can be found near water sources in their natural habitats.");
