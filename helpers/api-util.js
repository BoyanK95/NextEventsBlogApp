export async function getAllEvents() {
    try {
        const res = await fetch('https://nexteventsblog-default-rtdb.firebaseio.com/events.json');
        const data = await res.json();

        const events = [];

        for (const key in data) {
            events.push({
                id: key,
                ...data[key]
            });
        }

        return events;
    } catch (error) {
        console.log(error);
    }
}

export async function getFeaturedEvents() {
    const allEvets = await getAllEvents();
    return allEvets.filter((event) => event.isFeatured);
}


export async function getEventById(id) {
    const allEvets = await getAllEvents();
    return allEvets.filter((event) => event.id === id);
}