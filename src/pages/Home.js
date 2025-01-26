import restaurantImage from "../images/present.jpg";

export default function getHomePage() {
    const content = document.getElementById("content");
 
    const container = document.createElement('div');
    container.classList.add('container');

    const textConteiner = document.createElement('div');
    textConteiner.classList.add('text-container');

    const heading = document.createElement("h1");
    heading.style.fontSize = 28;
    heading.textContent = "Welcome to Gourmet Paradise";

    const image = document.createElement("img");
    image.src = restaurantImage;
    image.classList.add('present');
    image.alt = "Restaurant Image";

    const description = document.createElement("p");
    description.textContent = "Experience the finest cuisine in a cozy atmosphere. Our restaurant offers a variety of exquisite dishes made with the freshest ingredients, prepared by talented chefs who are passionate about delivering unforgettable flavors. Whether you're here for a casual dinner or a special occasion, we guarantee a dining experience that will delight your senses. Come and indulge in a meal that combines quality, tradition, and innovation, all served in a warm and welcoming environment.";
    
    
    content.appendChild(container);
    container.appendChild(textConteiner);
    container.appendChild(image);
    textConteiner.appendChild(heading);
    textConteiner.appendChild(description);
}
