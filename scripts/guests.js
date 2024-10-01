import {getGuests} from "./database.js"

const guests = getGuests()



export const generateGuests = () =>{
 let guestsHTML = `<ul>`

 for (const guest of guests) {
    guestsHTML += `<li data-type = "guests">${guest.firstName}</li>`
    
 }
    guestsHTML += `</ul>`
    return guestsHTML
}