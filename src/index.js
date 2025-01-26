import "./styles.css";

import getMenuPage from './pages/Menu.js';
import getHomePage from "./pages/Home.js";
import getAboutPage from "./pages/About.js";

document.addEventListener("DOMContentLoaded", () => {
    getAboutPage();
});

const menuButton = document.querySelector('.menu');
const homeButton = document.querySelector('.home');
const aboutButton = document.querySelector('.about');
const content = document.querySelector('#content');


menuButton.addEventListener('click',() => {
    content.textContent = '';
    getMenuPage();
});

homeButton.addEventListener('click', () => {
    content.textContent = '';
    getHomePage();
})

aboutButton.addEventListener('click', () => {
    content.textContent = '';
    getAboutPage();
}) 






