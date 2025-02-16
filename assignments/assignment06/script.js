//Exercise 1
document.getElementById("transportation-input");



document.getElementById("transportation-input").onchange = () => {
    let transportationType = document.getElementById("transportation-input").value;
    console.log(transportationType);
    const transportImage = document.getElementById("transport-img");
    transportImage.classList.remove("hidden")
    if(transportationType === "bike"){
        transportImage.src = "images/bike.jpg";
    }
    else if(transportationType === "skateboard"){
        transportImage.src = "images/skateboard.png";
    }
    else if(transportationType === "scooter"){
        transportImage.src = "images/scooter.jpeg";
    }
    else if(transportationType === "car"){
        transportImage.src = "images/car.jpeg";
    }
    else{
        transportImage.classList.add("hidden");
    }
    
};



//Exercise 2

document.getElementById("btn-red").onclick = () => {
    changeHeartColor("red");
}

document.getElementById("btn-green").onclick = () => {
    changeHeartColor("green");
}

document.getElementById("btn-blue").onclick = () => {
    changeHeartColor("blue");
}



const changeHeartColor = (selectedColor) => {
    document.getElementById("heart").style.color = selectedColor;
};


