const database = {
    areas: [
        {
            id: 1,
            name: "Chamfort River",
            services: [1, 2, 3] // References to service IDs
        },
        {
            id: 2,
            name: "Lost Wolf Hiking Trail",
            services: [4, 5, 6]
        },
        {
            id: 3,
            name: "Lodge",
            services: [7, 8, 9, 5, 11, 12] // Includes Hotel and Restaurant as services
        },
        {
            id: 4,
            name: "Gander River",
            services: [3, 4, 13] // Includes Natural Preserve as a service
        },
        {
            id: 5,
            name: "Campgrounds",
            services: [9, 7, 8, 14, 15] // Includes Office Park and Children's Play Areas as services
        },
        {
            id: 6,
            name: "Pine Bluffs Trails",
            services: [4, 5, 10, 16] // Includes Food Vendors as a service
        }
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
        { id: 4,firstName: "Emily Davis", areaId: 1 },
        { id: 5,firstName: "Chris Brown", areaId: 4 },
        { id: 6,firstName: "Sarah Wilson", areaId: 6 },
        { id: 7,firstName: "Matthew Miller", areaId: 5 },
        { id: 8,firstName: "Ashley Taylor", areaId: 3 },
        { id: 9,firstName: "David Anderson", areaId: 6 },
        { id: 10,firstName: "Jessica Thomas", areaId: 2 }
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