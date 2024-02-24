"use strict";
// 45. Cars: Write a function that stores information about a car in a Object. The function should always receive a manufacturer and a model name. It should then accept an arbitrary number of keyword arguments. Call the function with the required information and two other name-value pairs, such as a color or an optional feature. Print the Object that’s returned to make sure all the information was stored correctly.
function createCar(manufacturer, modelName, ...additionalInfo) {
    let car = {
        manufacturer: manufacturer,
        modelName: modelName
    };
    additionalInfo.forEach(info => {
        let key = Object.keys(info)[0];
        let value = info[key];
        car[key] = value;
    });
    return car;
}
let carInfo = createCar("Toyota", "Camry", { color: "red" }, { year: 2022 });
console.log(carInfo);
let carInfo2 = createCar("Toyota", "Camry", "red", "yellow");
console.log(carInfo2);
