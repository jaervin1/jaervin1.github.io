document.getElementById("hamburger-toggle").onclick = () => {
  document.querySelector(".nav-links").classList.toggle("nav-hidden");
};

class Activity {
  constructor(
    name,
    id,
    author,
    location,
    description,
    length,
    type,
    difficulty,
    rating,
    activityType,
    reviews,
    pictures
  ) {
    this.name = name;
    this.id = id;
    this.author = author;
    this.location = location;
    this.description = description;
    this.length = length;
    this.type = type;
    this.difficulty = difficulty;
    this.rating = rating;
    this.activityType = activityType;
    this.reviews = reviews;
    this.pictures = pictures;
  }

  get getActivityPopup() {
    const activityPopup = document.createElement("div");

        let activityContent = document.createElement("div");
        activityContent.classList.add("activity-content");

        let infoSection = document.createElement("section");
        infoSection.classList.add("activity-info");

        let activityName = document.createElement("h1");
        activityName.textContent = this.name;

        let activityLocation = document.createElement("h3");
        activityLocation.textContent = this.location;

        let divider = document.createElement("hr");

        let activityList = document.createElement("ul");
        activityList.id = "activity-add-info";

        let lengthItem = document.createElement("li");
        lengthItem.textContent = `Length: ${this.length} miles`;

        let difficultyItem = document.createElement("li");
        difficultyItem.textContent = `Difficulty: ${this.difficulty}`;

        let typeItem = document.createElement("li");
        typeItem.textContent = `Type: ${this.type}`;

        let ratingItem = document.createElement("li");
        let starRating = this.createStarRating();
        ratingItem.appendChild(starRating);
        ratingItem.innerHTML += ` (${this.reviews.length} reviews)`;

        activityList.append(lengthItem, difficultyItem, typeItem, ratingItem);

        let activityDescription = document.createElement("p");
        activityDescription.id = "activity-description";
        activityDescription.textContent = this.description;

        infoSection.append(activityName, activityLocation, divider, activityList, activityDescription);

        let imageSection = document.createElement("section");
        imageSection.classList.add("activity-image");

        let activityImage = document.createElement("img");
        activityImage.src = this.pictures[0] || "https://placehold.co/500x250"; // Use default if no image provide

        imageSection.appendChild(activityImage);
        activityContent.append(infoSection, imageSection);

        return activityContent;
    }
  

  createStarRating() {
    let ratingContainer = document.createElement("span");
    for (let i = 0; i < 5; i++) {
      let star = document.createElement("span");
      star.classList.add("fa", "fa-star");
      if (i < Math.round(this.rating)) {
        star.classList.add("checked");
      }
      ratingContainer.appendChild(star);
    }
    return ratingContainer;
  }
}

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

  activities.forEach((activityData) => {
    console.log("activity");
    const activity = new Activity(
      activityData.name,
      activityData.id,
      activityData.author,
      activityData.location,
      activityData.description,
      activityData.length,
      activityData.type,
      activityData.difficulty,
      activityData.rating,
      activityData.activityType,
      activityData.reviews,
      activityData.pictures
    );
    const activitySection = document.createElement("div");
    const activityInfo = document.createElement("div");

    const activityName = document.createElement("h3");
    activityName.innerHTML = activity.name;
    activityInfo.appendChild(activityName);

    //Stars
    const rating = Math.round(activity.rating);
    console.log(activity.rating);
    for (let i = 1; i <= 5; i++) {
      const star = document.createElement("span");
      star.classList.add("fa", "fa-star");
      if (i <= rating) {
        star.classList.add("checked");
      } else {
        star.classList.add("unchecked");
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

    const modalContent = document.getElementById("modalContent");
    
    activitySection.onclick = () => {
      modalContent.innerHTML = "";
      modalContent.appendChild(activity.getActivityPopup);
      document.getElementById("activityModal").style.display = "block";
    };

    activitiesSection.appendChild(activitySection);
  });
};

showActivities();
