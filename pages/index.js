import EventList from '../components/events/EventList';
import Head from 'next/head';
import { getFeaturedEvents } from '../helpers/api-util';

function HomePage({ events }) {
    return (
        <div>
            <Head>
                <title>Featured Events</title>
                <meta name='description' content='Find featured NextJS Events' />
            </Head>
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
