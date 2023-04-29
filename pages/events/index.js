import { Fragment } from "react";
import { getAllEvents } from "../../DUMMY_DATA";
import EventList from "../../components/events/EventList";
import EventsSearch from "../../components/events/EventsSearch";
import { useRouter } from "next/router";
import Head from "next/head";

function Events() {
    const events = getAllEvents()
    const router = useRouter()

    function findEventHandler(year, month) {
        const fullPath = `/events/${year}/${month}`

        router.push(fullPath)
    }

    return (
        <Fragment>
            <Head>
                <title>All Events</title>
                <meta name="description" content="Find a lot of new great events that allow you to evlove your skills!"/>
            </Head>
            <EventsSearch onSearch={findEventHandler}/>
            <EventList items={events}/>
        </Fragment>
    );
}

export default Events