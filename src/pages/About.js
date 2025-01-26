

export default function getAboutPage() {
    const content = document.querySelector('#content');
    
    const aboutContainer = document.createElement('div');
    aboutContainer.classList.add('about-container');

    const h1 = document.createElement('h2');
    h1.classList.add('about-title');
    h1.textContent = 'Welcome to Funny Pizza! 🍕';

    const p1 = document.createElement('p');
    p1.classList.add('text');
    p1.textContent = 'At [Your Pizzeria Name], we believe that pizza is more than just food – it\'s an experience! Founded in [Year], our mission has always been to serve the most delicious, freshly made pizzas that bring joy to every bite.';


    const h2 = document.createElement('h2');
    h2.classList.add('about-title');
    h2.textContent = 'Our Story';

    const p2 = document.createElement('p');
    p2.classList.add('text');
    p2.textContent = 'Our journey began with a passion for authentic, handcrafted pizza. Inspired by traditional Italian recipes and combined with a modern twist, we strive to bring the best of both worlds to your table. From our humble beginnings in a small corner shop, we’ve grown into a vibrant community hub where families, friends, and pizza lovers unite.';

    aboutContainer.appendChild(h1);
    aboutContainer.appendChild(p1);
    aboutContainer.appendChild(h2);
    aboutContainer.appendChild(p2);



    content.appendChild(aboutContainer);
}

