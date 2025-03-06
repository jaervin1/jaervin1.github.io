const showShoes = async() => {
    const shoes = getShoes();
    const shoesSection = document.getElementById("shoes-section");

    array.forEach(shoe => {
        const shoeSection = document.createElement("div");
        const reviewList = document.createElement("ul");
        for(let i in shoe.reviews){
            const review = document.createElement("li");
            review.innerHTML = shoe.reviews[i];
            reviewList.appendChild(review);
        }
        const shoeName = document.createElement("h3");
        shoeName.innerHTML = shoe.name;
        const shoeBrand = document.createElement("p");
        shoeBrand.innerHTML = shoe.brand;
        shoeSection.appendChild(shoeName);
        shoeSection.appendChild(shoeBrand);
        shoeSection.appendChild(reviewList);
        shoesSection.appendChild(shoeSection);





    });
};