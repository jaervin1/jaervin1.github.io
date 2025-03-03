class Pizza {
    constructor(id, sauce, price, cheese, ingredients, picture) {
        this.id = id;
        this.sauce = sauce;
        this.price = price;
        this.ingredients = ingredients;
        this.picture = picture;
    }

    get getPizzaPopup() {
        const pizzaPopup = document.createElement("section");
        pizzaPopup.id = "pizzaPopup";

        let pizzaName = document.createElement("h3");
        pizzaName.innerHTML = this.id;

        let pizzaIngredients = document.createElement("p");

        pizzaIngredients.innerHTML += "Ingredients: ";
        for(let i in this.ingredients){
            pizzaIngredients.innerHTML += this.ingredients[i] + ", ";
        }

        let pizzaSauce = document.createElement("p");
        pizzaSauce.innerHTML = "Sauce: " + this.sauce;

        let pizzaCost = document.createElement("p");
        pizzaCost.innerHTML = "Price: $" + this.price;

        let pizzaImage = document.createElement("img");
        pizzaImage.src = this.picture;
        pizzaImage.style.maxWidth = "100%";

        const pizzaInfo = document.createElement("div");
        const pizzaPic = document.createElement("div");

        pizzaInfo.appendChild(pizzaName);
        pizzaInfo.appendChild(pizzaSauce);
        pizzaInfo.appendChild(pizzaIngredients);
        pizzaInfo.appendChild(pizzaCost);

        pizzaPic.appendChild(pizzaImage);

        pizzaPopup.appendChild(pizzaInfo);
        pizzaPopup.appendChild(pizzaPic);
        return pizzaPopup;
    }
}

const pizzas = [];
const hawaiian = new Pizza("Hawaiian", "Hawaiian sauce", 25, ["cheese"], ["pineapples", "tomatoes", "basil"], "images/hawaiian-pizza.jpg");
pizzas.push(hawaiian);
const buffChickenRanch = new Pizza("Buffalo Chicken Ranch", "Olive oil", 19, ["cheese"], ["tomatoes", "chicken", "ranch", "buffalo sauce"], "images/buff-chkn-ranch.jpg");
pizzas.push(buffChickenRanch);
const margarita = new Pizza("Margarita", "Olive oil", 28, ["cheese"], ["tomatoes", "tomato slices", "basil"], "images/margarita.jpg");
pizzas.push(margarita);
const veggieSupreme = new Pizza("Veggie Supreme", "Marinara Sauce", 17.0, ["cheese"], ["Mushrooms", "Black Olives", "Garlic"], "images/veggie-pizza.jpg");
pizzas.push(veggieSupreme);
const pepperoni = new Pizza("Pepperoni", "Tomato Sauce", 18.5, ["cheese"], ["Pepperoni", "Oregano"], "images/pepperoni.jpg");
pizzas.push(pepperoni);

let exerciseSection = document.getElementById("exercises");

window.onload = () => {
    const pizzaList = document.createElement("ul");
    pizzaList.id = "pizza-list";
    pizzas.forEach(pizza => {
        let pizzaLI = document.createElement("li");

        let pizzaName = document.createElement("h3");
        pizzaName.innerHTML = pizza.id;

        let pizzaImage = document.createElement("img");
        pizzaImage.src = pizza.picture;
        pizzaImage.style.maxWidth = "150px";

        pizzaLI.appendChild(pizzaName);
        pizzaLI.appendChild(pizzaImage);
        pizzaLI.onclick = () => {
            const modalContent = document.getElementById("modalContent");
            modalContent.innerHTML = "";
            modalContent.appendChild(pizza.getPizzaPopup);
            document.getElementById("pizzaModal").style.display = "block";
        };

        pizzaList.appendChild(pizzaLI);
    });
    exerciseSection.appendChild(pizzaList);
};