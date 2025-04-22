console.log("Hello from JS file");

let students = [
  {
    name: "Phurba",
    age: 24,
    address: "Punakha",
    Hobbies: ["Dancing", "Singing", "Traveling"],
    Bio: "She is from punakha and dancing is her passion.She travels place and love sing songs.",
  },
  {
    name: "Susma",
    age: 22,
    address: "samtse",
    Hobbies: ["Dancing", "Swimming", "Skating"],
    Bio: "Swiming is her passion.She indgages herself in skating and dancing in her free time.",
  },
  {
    name: "Tenzin",
    age: 23,
    address: "Thimphu",
    Hobbies: ["Painting", "singing", "Drawing"],
    Bio: "He owns an art gallery of his own. He spends all his time drawing and painting. Singing is his second passion aside after art.",
  },
  {
    name: "Tashi",
    age: 21,
    address: "Bumthang",
    Hobbies: ["Reading", "Writing", "Hiking"],
    Bio: "He spend his time hiking new environments, reading and writing books of nature and love",
  },
];

function submit() {
  const nameInput = document.getElementById("name");
  const name = nameInput.value;

  const mySelect = document.getElementById("option");
  const selectValue = mySelect.value;

  if (!name) {
    alert("Please enter a name");
    return;
  }

  if (selectValue === "Select One") {
    alert("Please select either Age or Address or Bio or Hobbies or All");
    return;
  }

  const student = students.find(function (item) {
    if (name === item.name) {
      return true;
    } else {
      return false;
    }
  });

  if (!student) {
    alert(`No student found with the name ${name}`);
    return;
  }
  switch (selectValue) {
    case "Age":
      alert (`${name} is ${student.age} years old.`);
      break;
    case "Address":
      alert (`${name} is from ${student.address}`);
      break;
    case "Bio":
      alert (`${name} ${student.Bio}`);
      break;
    case "Hobbies":
      alert (`${student.Hobbies}`);
      break;
    default:
      alert (
        `${name} is ${student.age} years old and ${name} is from ${student.address}. ${student.Bio}`
      );
  }
}
