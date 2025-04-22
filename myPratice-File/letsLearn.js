let myName = "Furva Ongmo Sherpa";
let age = 24;
let isStudent = true;
let height = 153 + " " + "cm";

console.log(myName);
console.log(age);
console.log(isStudent);
console.log(height);

let myHobbies = ["singing", "dancing", "football", "basketball", "swimming"];

myHobbies.push("cricket");
myHobbies.shift();
console.log(myHobbies);



//object
let person = {
    name: myName,
    age: age,
    isStudent: isStudent,
    hobbies: myHobbies
}

person.address = "Punakha";
console.log(person);



function greetPerson(name) {
    console.log("hello," + name + "!welcome to the programming world!")
};
greetPerson("john")



function displayPersonInfo(personObject) {
    console.log("name:" + personObject.name);
    console.log("age:" + personObject.age);
    console.log("city:" + personObject.address);
}

displayPersonInfo(person)