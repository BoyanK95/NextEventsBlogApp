import { getFeaturedEvents } from '../DUMMY_DATA';
import EventList from './components/events/EventList';

function HomePage(params) {
    const feateredEvents = getFeaturedEvents();

    return (
        <div>
            <EventList items={feateredEvents}/>
        </div>
    );
}

export default HomePage;
