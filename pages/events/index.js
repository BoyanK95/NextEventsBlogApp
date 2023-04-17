import { Fragment } from "react";
import { getAllEvents } from "../../DUMMY_DATA";
import EventList from "../../components/events/EventList";
import EventsSearch from "../../components/events/EventsSearch";
import { useRouter } from "next/router";

function Events() {
    const events = getAllEvents()
    const router = useRouter()

    function findEventHandler(year, month) {
        const fullPath = `/event/${year}/${month}`

        router.push(fullPath)
    }

    return (
        <Fragment>
            <EventsSearch onSearch={findEventHandler}/>
            <EventList items={events}/>
        </Fragment>
    );
}

export default Events