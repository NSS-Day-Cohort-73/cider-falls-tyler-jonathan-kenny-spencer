import { getAreas } from "./database.js";

export const generateAreas = () => {
    const areas = getAreas();
    let areasHTML = "";

    for (const area of areas) {
        areasHTML += `
            <div class="area-box" data-id="${area.id}">
                <h2>${area.name}</h2>
                <p>Services: </p>
            </div>
        `;
    }

    return areasHTML;
};
