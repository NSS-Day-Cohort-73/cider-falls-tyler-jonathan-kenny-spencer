const database = {
    areas: [
        { id: 1, name: "Chamfort River" },
        { id: 2, name: "Lost Wolf Hiking Trail" },
        { id: 3, name: "Lodge" },
        { id: 4, name: "Gander River" },
        { id: 5, name: "Campgrounds" },
        { id: 6, name: "Pine Bluffs Trails" }
    ],
    services: [
        { id: 1, name: "Rafting" },
        { id: 2, name: "Canoeing" },
        { id: 3, name: "Fishing" },
        { id: 4, name: "Hiking" },
        { id: 5, name: "Picnicking" },
        { id: 6, name: "Rock Climbing" },
        { id: 7, name: "Lodging" },
        { id: 8, name: "Parking" },
        { id: 9, name: "Information" },
        { id: 10, name: "Zip Lines" },
        { id: 11, name: "Hotel" },
        { id: 12, name: "Restaurant" },
        { id: 13, name: "Natural Preserve" },
        { id: 14, name: "Office Park" },
        { id: 15, name: "Children's Play Areas" },
        { id: 16, name: "Food Vendors" }
    ],
    guests: [
        { id: 1, firstName: "John Doe", areaId: 1 },
        { id: 2, firstName: "Jane Smith", areaId: 2 },
        { id: 3, firstName: "Michael Johnson", areaId: 3 },
        { id: 4, firstName: "Emily Davis", areaId: 1 },
        { id: 5, firstName: "Chris Brown", areaId: 4 },
        { id: 6, firstName: "Sarah Wilson", areaId: 6 },
        { id: 7, firstName: "Matthew Miller", areaId: 5 },
        { id: 8, firstName: "Ashley Taylor", areaId: 3 },
        { id: 9, firstName: "David Anderson", areaId: 6 },
        { id: 10, firstName: "Jessica Thomas", areaId: 2 }
    ],
    serviceAreas: [
        { areaId: 1, serviceId: 1 },
        { areaId: 1, serviceId: 2 },
        { areaId: 1, serviceId: 3 },
        { areaId: 2, serviceId: 4 },
        { areaId: 2, serviceId: 5 },
        { areaId: 2, serviceId: 6 },
        { areaId: 3, serviceId: 7 },
        { areaId: 3, serviceId: 8 },
        { areaId: 3, serviceId: 9 },
        { areaId: 3, serviceId: 5 },
        { areaId: 3, serviceId: 11 },
        { areaId: 3, serviceId: 12 },
        { areaId: 4, serviceId: 3 },
        { areaId: 4, serviceId: 4 },
        { areaId: 4, serviceId: 13 },
        { areaId: 5, serviceId: 9 },
        { areaId: 5, serviceId: 7 },
        { areaId: 5, serviceId: 8 },
        { areaId: 5, serviceId: 14 },
        { areaId: 5, serviceId: 15 },
        { areaId: 6, serviceId: 4 },
        { areaId: 6, serviceId: 5 },
        { areaId: 6, serviceId: 10 },
        { areaId: 6, serviceId: 16 }
    ]
};

export const getGuests = () => {
    return database.guests.map(guest => ({ ...guest }));
};

export const getServices = () => {
    return database.services.map(service => ({ ...service }));
};

export const getAreas = () => {
    return database.areas.map(area => ({ ...area }));
};

export const getServiceAreas = () => {
    return database.serviceAreas.map(sa => ({ ...sa }));
};
