//declare variable for DOM manipulation
let button1 = document.querySelector("#btn1");
let button2 = document.querySelector("#btn2");
let dogImg = document.createElement("img");
let dogList = document.querySelector("#img-container");
let dogListItem = document.createElement("li");

//event listener for clicking buttons
button1.addEventListener("click", randomDog);
button2.addEventListener("click", changeButton);

randomDog();
//function for getting dog image
function randomDog() {
  fetch("https://dog.ceo/api/breeds/image/random")
    .then((response) => response.json())
    .then((data) => {
      dogImg.src = data.message;
      dogListItem.appendChild(dogImg);
      dogList.appendChild(dogListItem);
      dogList.style.listStyleType = "none"; //removes the bullet point from <li> item
    })
    .catch((error) => console.log(error));
}

//just because the task specified 2 buttons :)

function changeButton() {
  if (button2.innerText === "Who's a good boy!?") {
    button2.innerText = "🐶You are! Yes, you are!🐶";
  } else {
    button2.innerText = "Who's a good boy!?";
  }
}
