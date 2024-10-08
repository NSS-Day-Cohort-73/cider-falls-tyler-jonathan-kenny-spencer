import {generateGuests} from "./guests.js"
import { generateAreas } from "./areas.js";
import { ParkService } from "./services.js";

const mainContainer = document.querySelector("#container");



const applicationHTML = `
    
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
            ${generateGuests()}
        </section>
    </article>

   <footer>
    <p>Contact Info: Reach us at info@ciderfallspark.com</p>
    <p>Phone: (555) 123-4567</p>
    <p>Office Address: 1234 Forest Drive, Cider Falls, CA 98765</p>
    <p>Contact: Joe Mama, Park Manager</p>
</footer>

`;

mainContainer.innerHTML = applicationHTML;

