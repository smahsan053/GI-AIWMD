// 21. They think of something you could store in a TypeScript Object. Write a program that creates Objects containing these items.

type user_type = {
    name: string;
    age: number;
    email: string;
    profession: string;
}
let user1 : user_type = {
    name: "Syed Muhammad Ahsan Ali",
    age: 26,
    email: "smahsan053@gmail.com",
    profession: "Engineer"
}
let user2 : user_type = {
    name: "Syed Muhammad Rawaha Ali",
    age: 28,
    email: "rawaha053@gmail.com",
    profession: "Chemist"
}
let user3 : user_type = {
    name: "Syed Muhammad Tabish Ali",
    age: 24,
    email: "tabish79@gmail.com",
    profession: "Chemist"
}
console.log(user1);
console.log(user2);
console.log(user3);


