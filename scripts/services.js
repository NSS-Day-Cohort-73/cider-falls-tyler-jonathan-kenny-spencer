import { getServices, getAreas } from "./database.js";

const services = getServices();
const areas = getAreas();

document.addEventListener(
    "click",
    (event) => {
        const clickedTarget = event.target;
        if (clickedTarget.dataset.type === "service") {
            const serviceId = parseInt(clickedTarget.dataset.serviceid);
            const serviceName = clickedTarget.dataset.name;
            const associatedAreas = findAService({ id: serviceId }, areas);
            const areaNames = associatedAreas.map(area => area.name).join(", ");

            if (areaNames.length > 0) {
                window.alert(`${serviceName} is available in the following areas: ${areaNames}`);
            } else {
                window.alert(`${serviceName} is not available in any area at the moment.`);
            }
        }
    }
);

const findAService = (servObject, areasArray) => {
    let foundAreas = [];
    for (const area of areasArray) {
        if (area.services.includes(servObject.id)) {
            foundAreas.push(area); 
        }
    }
    return foundAreas;
};

export const ParkService = () => {
    let html = '';
    
    for (const serv of services) {
        html += `<lu class="services" data-type="service" data-serviceid="${serv.id}" data-name="${serv.name}">${serv.name}, </lu>`;
    }
    return html;
};
