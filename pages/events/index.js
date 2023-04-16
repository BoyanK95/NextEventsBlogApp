import { Fragment } from "react";
import { getAllEvents } from "../../DUMMY_DATA";
import EventList from "../../components/events/EventList";
import EventsSearch from "../../components/events/EventsSearch";

function Events() {
    const events = getAllEvents()

    return (
        <Fragment>
            <EventsSearch />
            <EventList items={events}/>
        </Fragment>
    );
}

export default Events