
import { getAreas, getGuests } from "./database.js";

export const generateAreas = () => {
    const areas = getAreas();
    let areasHTML = "";
    for (const area of areas) {
        areasHTML += `
            <div class="area-box" data-id="${area.id}">
                <h2 class="area-title">${area.name}</h2>
            </div>
        `
    }
    return areasHTML;
};

const getGuestCount = (areaId) => {
    const guests = getGuests(); 
    return guests.filter(guest => guest.areaId === parseInt(areaId)).length; 
};

document.addEventListener("click", (event) => {

    const clickedTitle = event.target.closest(".area-title");
    if (clickedTitle) {
        const areaId = clickedTitle.parentElement.dataset.id; 
        const guestCount = getGuestCount(areaId); 
        alert(`There are ${guestCount} guests in this area`);
    }
});

