import EventList from '../components/events/EventList';
import { getFeaturedEvents } from '../helpers/api-util';

function HomePage({ events }) {
    return (
        <div>
            <EventList items={events} />
        </div>
    );
}

export async function getStaticProps() {
    const feateredEvents = await getFeaturedEvents();

    return {
        props: {
            events: feateredEvents
        },
        revalidate: 600
    };
}

export default HomePage;
