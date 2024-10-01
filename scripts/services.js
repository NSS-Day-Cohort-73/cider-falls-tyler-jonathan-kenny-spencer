import { getServiceAreas, getServices, getAreas } from "./database.js";

const services = getServices();
const areas = getAreas();

document.addEventListener(
    "click",
    (event) => {
        const clickedTarget = event.target;
        if (clickedTarget.dataset.type === "service") {
            const serviceId = parseInt(clickedTarget.dataset.serviceid);
            const serviceName = clickedTarget.dataset.name; 
            
            const associatedAreas = findAService(serviceId);
            const areaNames = associatedAreas.map(area => area.name).join(", ");

            if (areaNames.length > 0) {
                window.alert(`${serviceName} is available in the following areas: ${areaNames}`);
            } else {
                window.alert(`${serviceName} is not available in any area at the moment.`);
            }
        }
    }
);

export const findAService = (serviceId) => {
    const serviceAreas = getServiceAreas();
    const areas = getAreas();

    const matchingServiceAreas = serviceAreas.filter(sa => sa.serviceId === serviceId);

    const foundAreas = matchingServiceAreas.map(sa => {
        return areas.find(area => area.id === sa.areaId);
    });

    return foundAreas;
};

export const ParkService = () => {
    const services = getServices();
    let html = '';
    
    for (const serv of services) {
        html += `<ul class="services" data-type="service" data-serviceid="${serv.id}" data-name="${serv.name}">${serv.name}, </ul>`;
    }
    return html;
};
