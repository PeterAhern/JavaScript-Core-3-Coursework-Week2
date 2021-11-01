//DOM manipulation variables

let bodyEl = document.querySelector("body");
let imgEl = document.createElement("img");

// function to make API call
function getBadJoke() {
  fetch("https://xkcd.now.sh/?comic=latest")
    .then((response) => response.json())
    .then((data) => {
      console.log(data); //requested by the exercise
      imgEl.src = data.img;
      bodyEl.appendChild(imgEl);
    })
    .catch((error) => console.log(error));
}

getBadJoke(); // and finally we call the function
