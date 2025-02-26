const arrayArea = document.getElementById("array-area");

const xButton = document.createElement("span");
xButton.innerHTML = "&#10006;"
xButton.onclick = () => {
  popup.classList.add("hidden");
};

let popup = document.getElementById("popup");

const imageArray = {
  "Happy Birthday": "images/birthday.jpg",
  "Crazy Clown": "images/clown.jpg",
  "It's Raining": "images/rain.jpg",
  "Quiet Time": "images/read.jpg",
  "Working Hard": "images/shovel.jpg",
  "Work from Home": "images/work.jpg",
};

for (let text in imageArray) {
  let phrase = document.createElement("p");
  phrase.innerHTML = text;
  arrayArea.append(phrase);
  let popupImage = document.createElement("img");


  phrase.onclick = () => {
    popup.innerHTML = "";
    popupImage.src = imageArray[text];
    popup.append(xButton);
    popup.append(phrase);
    popup.append(popupImage);
    popup.classList.remove("hidden");
    arrayArea.append(phrase);
  };


}
