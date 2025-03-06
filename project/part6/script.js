document.getElementById("hamburger-toggle").onclick = () => {
  document.querySelector(".nav-links").classList.toggle("nav-hidden");
};

const getActivities = async () => {
  const url = "https://jaervin1.github.io/json/activity.json";
  try {
    const response = await fetch(url);
    return response.json();
  } catch (e) {
    console.log(e);
  }
};

const showActivities = async () => {
  const activities = await getActivities();
  const activitiesSection = document.getElementById("explore");

  activities.forEach((activity) => {
    const activitySection = document.createElement("div");
    const activityInfo = document.createElement("div");

    const activityName = document.createElement("h3");
    activityName.innerHTML = activity.name;
    activityInfo.appendChild(activityName);

    //Stars
    const rating = Math.round(activity.rating);
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

    image.src =
      activity.pictures && activity.pictures.length > 0
        ? activity.pictures[0] // First Picture
        : "images/default.jpg"; //Default 

    activityImage.appendChild(image);

    activityInfo.classList.add("result-info");
    activitySection.appendChild(activityInfo);

    activityImage.classList.add("result-image");
    activitySection.appendChild(activityImage);

    activitySection.classList.add("result", "content");

    activitiesSection.appendChild(activitySection);
  });
};

showActivities();
