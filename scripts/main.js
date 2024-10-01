import { generateAreas } from "./areas.js";
import { ParkService } from "./services.js";

const mainContainer = document.querySelector("#container");



const applicationHTML = `
    <h1>Cider Falls Park</h1>
    
    <article class="details">
        <section class="detail--column details__service">
            <h2>Park Services</h2>
            ${ParkService()} 
        </section>
        <section class="detail--column list details__areas">
            <h2>Park Areas</h2>
            ${generateAreas()}
        </section>
        <section class="detail--column details__guests">
            <h2>Guest List</h2>
        </section>
    </article>

    <footer>
        <p>Contact Info: Reach us at info@ciderfallspark.com</p>
    </footer>
`;

mainContainer.innerHTML = applicationHTML;
