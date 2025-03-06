document.getElementById("hamburger-toggle").onclick = () => {
  document.querySelector(".nav-links").classList.toggle("nav-hidden");
};

const getActivities = async () => {
  const url = "https://portiaportia.github.io/json/shoes.json";
  try {
    const response = await fetch(url);
    return response.json;
  } catch (e) {
    console.log(e);
  }
};

const showActivities = async () => {
  const activities = await getActivities();
  const activitysSection = document.getElementById("explore");

  activities.array.forEach((activity) => {
    const activitySection = document.createElement("div");
    const activityInfo = document.createElement("div");

    activitySection.appendChild(activityInfo);

    const activityName = document.createElement("h3");
    activityName.innerHTML = activity.name;
    activityInfo.appendChild(activityName);

    //Stars
    for (let i = 1; i <= 5; i++) {
      const star = document.createElement("span");
      star.classList.add("fa", "fa-star");
      if (i <= rating) {
        star.classList.add("checked");
      }
      activityInfo.appendChild(star);
    }

    const description = document.createElement("p");
    description.innerHTML = activity.description;
    activityInfo.appendChild(description);

    const activityImage = document.createElement("div");
    const image = document.createElement("img");

    image.src = activity.pictures.at(0); // First Picture

    activityImage.appendChild(image);

    activitySection.appendChild(activityImage);

    
  });
};
