import { parkAreas } from "./areas.js"; 
import { ParkService } from "./services.js";
//import { parkGuests } from "./guests.js"; 

const mainContainer = document.querySelector("#container"); // Target the container in your HTML

const applicationHTML = `
    <h1>Cider Falls Park</h1>
    
    <article class="details">
        <section class="detail--column list details__areas">
            <h2>Park Areas</h2>
            ${parkAreas()} 
        </section>
        <section class="detail--column details__guests">
            <h2>Guest List</h2>
            ${ParkService()} 
        </section>
    </article>

    <footer>
        <p>Contact Info: Reach us at info@ciderfallspark.com</p>
    </footer>
`;

// Render the applicationHTML to the DOM
mainContainer.innerHTML = applicationHTML;
