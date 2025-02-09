//Do Stuff when button clicked
document.getElementById("btn-click-me").onclick = () => {
    console.log("wow");
    const groupMessage = document.getElementById("group-message");
    groupMessage.innerHTML = "Good Times";
    groupMessage.classList.remove("sad");
    groupMessage.classList.add("happy")
};

document .getElementById("btn-color").onclick = () => {
    const messageP = document.getElementById("group-message");
    messageP.innerHTML = "Bad Times";
    messageP.classList.remove("happy")
    messageP.classList.add("sad");
};

document.getElementById("btn-clear").onclick = () => {
    const groupMessage = document.getElementById("group-message");
    groupMessage.innerHTML = "";
}; /* Make sure to put semi-colon right after the parantheses */


//Key Down
document.getElementById("feeling").onkeyup = (event) =>{
    //const emotion = document.getElementById("feeling").value;
    const emotion = event.currentTarget.value;
    document.getElementById("mirror-feeling").innerHTML = emotion;
};


//Variables
//var - old, global variable. e.g., var num = 5;
//let - new. e.g., let userName = "jen";
//const - new, constant, EVERYTHING IS A CONSTANT. e.g., const count = 10;