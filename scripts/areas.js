import { getAreas } from "./database.js";

export const parkAreas = () => {
    const areas = getAreas()
    const areasContainer = document.getElementById('areas-container')

    areasContainer.innerHTML = ''

    for (let i = 0; i < areas.length; i++) {
        const area = areas[i]
        const areaElement = document.createElement('div')
        areaElement.classList.add('area')
        areaElement.innerHTML = `<h2>${area.name}</h2><p>Services: ${area.services.join(', ')}</p>`;
        areasContainer.appendChild(areaElement)
    }
};
