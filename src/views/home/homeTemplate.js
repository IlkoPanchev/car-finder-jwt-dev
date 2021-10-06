import {html} from '../../../node_modules/lit-html/lit-html.js';
import carImg from '../../../assets/car.webp';

export const homeTemplate = () => html` 
      <section id="main">
            <div id="welcome-container">
                <h1>Welcome To Car Finder</h1>
                <img class="hero" src="${carImg}" alt="carIntro">
                <h2>To see all the offers click the link below:</h2>
                <div>
                    <a href='/listings' class="button">Offers</a>
                </div>
            </div>
        </section>`;