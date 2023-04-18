import { useRouter } from 'next/router';
import { getEventById } from '../../DUMMY_DATA';
import EventSummary from '../../components/event-detail/event-summary';
import EventLogistics from '../../components/event-detail/event-logistics';
import EventContent from '../../components/event-detail/event-content';
import ErrorAlert from '../../components/ui/error-alert/error-alert';
import Button from '../../components/ui/Button';

function EventDetailsPage() {
    const router = useRouter();
    const eventId = router.query.eventId;

    const event = getEventById(eventId);

    if (!event) {
        return (
            <ErrorAlert>
                <p>No event found!</p>
                <div className='center'>
                    <Button link='/events'>Show All Events</Button>
                </div>
            </ErrorAlert>
        );
    }

    return (
        <div>
            <EventSummary title={event.title} />
            <EventLogistics date={event.date} address={event.location} image={event.image} imageAlt={event.title} />
            <EventContent>
                <p>{event.description}</p>
            </EventContent>
        </div>
    );
}

export default EventDetailsPage;
