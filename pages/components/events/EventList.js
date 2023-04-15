import EventItem from './EventItem';

function EventList({ items }) {
    return (
        <ul>
            {items.map((item) => (
                <EventItem
                    key={item.id}
                    id={item.id}
                    title={item.title}
                    date={item.date}
                    location={item.location}
                    image={item.image}
                />
            ))}
        </ul>
    );
}

export default EventList;
