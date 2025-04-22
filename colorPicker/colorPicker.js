document.addEventListener("DOMcontentLoaded", function () {
  const button = document.getElementById("button");
  button.style.backgroundColor = "red";
  button.style.color = "white";

  button.addEventListener("click", function () {
    console.log("Button Clicked");
  });
});

document.addEventListener("dblclick", function () {
  console.log("Double Click");
});
document.addEventListener("click", function () {
  console.log("Click");
});

function chooseColor() {
  let myColor = document.getElementById("pickColor");
  let colorValue = myColor.value;
  document.body.style.backgroundColor = colorValue;
}
