let climbEvent;

document.getElementById("draw-btn").onclick = () => {
  const ladderArea = document.getElementById("ladder-section");
  for (let i = 0; i < 10; i++) {
    const ladderTread = document.createElement("div");
    ladderArea.append(ladderTread);
  }
  const climber = document.createElement("img");
  climber.src = "images/left.png";
  climber.style.position = "absolute";
  climber.style.bottom = "20px";
  climber.style.left = 46 + "%";
  
  climbEvent = setInterval(() =>{
    if (climber.src.includes("left.png")) {
      climber.src = "images/right.png";
    } else {
      climber.src = "images/left.png";
    }
    if(parseInt(climber.style.bottom) < 420){
      climber.style.bottom = parseInt(climber.style.bottom) + 60 + "px";
    }
    else{
      clearInterval(climbEvent);
    }
  }, 1000);

  ladderArea.append(climber);
};


