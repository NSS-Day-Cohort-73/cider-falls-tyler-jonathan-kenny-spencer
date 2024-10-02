
import { getAreas, getGuests,getServiceAreas, getServices,  } from "./database.js";

export const generateAreas = () => {
    const areas = getAreas();
    const serviceAreas = getServiceAreas()
    const services = getServices()
    let areasHTML = "";
    for (const area of areas) {
        let servicesForArea = []
        for (const serviceArea of serviceAreas) {
            if (serviceArea.areaId === area.id){
                for (const service of services){
                    if(service.id === serviceArea.serviceId){
                        servicesForArea.push(service.name)
                    }
                }
            }
            
        }
        console.log(servicesForArea)
        let serviceListHTML = "<ul>"
        for (const serviceArea of servicesForArea) {
            serviceListHTML += `<li>${serviceArea}</li>`
        }
        serviceListHTML += "</ul>"

        areasHTML += `
            <div class="area-box" data-id="${area.id}">
                <h2 class="area-title">${area.name}</h2>
                <h3 class= "area-services"> ${serviceListHTML}</h3>
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

