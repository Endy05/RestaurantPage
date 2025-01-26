import BBQChickenPizza from "../images/BBQChickenPizza.jpg";
import PepperoniPizza from "../images/PepperoniPizza.jpg";
import PizzaMargherita from "../images/PizzaMargherita.jpg";
import SeafoodPizza from "../images/SeafoodPizza.jpg";
import VegetarianPizza from "../images/VegetarianPizza.jpg";

const pizzas = [
    {
      name: "Pizza Margherita",
      ingredients: ["tomato sauce", "mozzarella", "fresh basil"],
      price: 10.99,
      image: PizzaMargherita,
    },
    {
      name: "Pepperoni Pizza",
      ingredients: ["tomato sauce", "mozzarella", "pepperoni"],
      price: 12.99,
      image: PepperoniPizza,
    },
    {
      name: "Vegetarian Pizza",
      ingredients: ["tomato sauce", "mozzarella", "bell peppers", "onions", "mushrooms", "olives"],
      price: 11.99,
      image: VegetarianPizza,
    },
    {
      name: "BBQ Chicken Pizza",
      ingredients: ["BBQ sauce", "chicken", "mozzarella", "red onions", "cilantro"],
      price: 13.99,
      image: BBQChickenPizza,
    },
    {
      name: "Seafood Pizza",
      ingredients: ["tomato sauce", "mozzarella", "shrimp", "mussels", "garlic"],
      price: 15.99,
      image: SeafoodPizza,
    },
];

 
export default function getMenuPage() {
    const content = document.querySelector('#content');

    const containerPizzas = document.createElement('div');
    containerPizzas.classList.add("pizza-container");

    pizzas.forEach(pizza => {
        const pizzaDiv = document.createElement("div");
        pizzaDiv.classList.add("pizza");

        const pizzaImage = document.createElement("img");
        pizzaImage.classList.add('pizza-image')
        pizzaImage.src = pizza.image;
        pizzaImage.alt = pizza.name; 

        const pizzaTextConteiner = document.createElement('div');
        pizzaTextConteiner.classList.add('pizza-text-container');

        const pizzaName = document.createElement("h3");
        pizzaName.textContent = pizza.name;

        const pizzaIngredients = document.createElement("p");
        pizzaIngredients.textContent = "Ingredients: " + pizza.ingredients.join(", ");

        const pizzaPrice = document.createElement("p");
        pizzaPrice.textContent = "Price: $" + pizza.price.toFixed(2);
   

        pizzaTextConteiner.appendChild(pizzaName);
        pizzaTextConteiner.appendChild(pizzaIngredients);
        pizzaTextConteiner.appendChild(pizzaPrice);

        pizzaDiv.appendChild(pizzaImage);
      pizzaDiv.appendChild(pizzaTextConteiner);

        containerPizzas.appendChild(pizzaDiv);
    });

    content.appendChild(containerPizzas);
}
