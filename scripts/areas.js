import { getAreas } from "./database.js"

export const generateAreas = () => {
    const areas = getAreas()
    let areasHTML = `<ul>`

    for (const area of areas) {
        areasHTML += `<li data-id="${area.id}">${area.name}</li>`
    }

    areasHTML += `</ul>`
    return areasHTML
}
