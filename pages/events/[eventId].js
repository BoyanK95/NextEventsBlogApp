import EventSummary from '../../components/event-detail/event-summary';
import EventLogistics from '../../components/event-detail/event-logistics';
import EventContent from '../../components/event-detail/event-content';
import ErrorAlert from '../../components/ui/error-alert/error-alert';
import Button from '../../components/ui/Button';
import Head from 'next/head';
import { getAllEvents, getEventById, getFeaturedEvents } from '../../helpers/api-util';

function EventDetailsPage(props) {
    const event = props.selectedEvent;
    console.log(event);
    console.log(event.date);
    if (!event) {
        return (
            <>
                <Head>
                    <title>Event Not Found</title>
                    <meta name='description' content='Event hasnt been found!' />
                </Head>
                <ErrorAlert>
                    <p>No event found!</p>
                    <div className='center'>
                        <Button link='/events'>Show All Events</Button>
                    </div>
                </ErrorAlert>
            </>
        );
    }

    return (
        <>
            <Head>
                <title>{event.title}</title>
                <meta name='description' content={event.description} />
            </Head>
            <EventSummary title={event.title} />
            <EventLogistics date={event.date} address={event.location} image={event.image} imageAlt={event.title} />
            <EventContent>
                <p>{event.description}</p>
            </EventContent>
        </>
    );
}
export async function getStaticProps(context) {
    const eventId = context.params.eventId;

    const event = await getEventById(eventId);

    return {
        props: {
            selectedEvent: event
        }
    };
}

export async function getStaticPaths() {
    const events = await getAllEvents();

    const paths = events.map((event) => ({ params: { eventId: event.id } }));

    return {
        paths: paths,
        fallback: false
    };
}

export default EventDetailsPage;
