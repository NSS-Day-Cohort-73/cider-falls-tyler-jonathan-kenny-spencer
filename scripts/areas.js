import { getAreas } from "./database.js"

export const generateAreas = () => {
    const areas = getAreas()
    
    let areasHTML = ""

    for (const area of areas) {
        areasHTML += `
            <div class="area-box" data-id="${area.id}">
            </div>
        `
    }

    return areasHTML
}


const getGuestCount = () => {
    return 10
} //replace with function from guests.js

document.addEventListener("click", (event) => {
    const clickedTitle = event.target.closest(".area-title")
    if (clickedTitle) {
        // const areaId = clickedTitle.parentElement.dataset.id
        const guestCount = getGuestCount()
        alert(`There are ${guestCount} guests in this area`)
    }
})