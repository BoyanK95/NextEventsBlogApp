import Link from 'next/Link';
import classes from './EventItem.module.css';
import Button from '../ui/Button';

function EventItem({ title, image, date, location, id }) {
    const readableDate = new Date(date).toLocaleDateString('en-US', {
        day: 'numeric',
        month: 'long',
        year: 'numeric'
    });

    const formattedAddress = location.replace(', ', '\n');
    const exploreLink = `/events/${id}`;

    return (
        <li className={classes.item}>
            <img src={'/' + image} alt={title} />
            <div className={classes.content}>
                <div className={classes.address}>
                    <h2>{title}</h2>
                </div>
                <div className={classes.date}>
                    <time>{readableDate}</time>
                </div>
                <div className={classes.address}>
                    <address>{formattedAddress}</address>
                </div>
                <div className={classes.actions}>
                    <Button link={exploreLink}>Explore Event</Button>
                </div>
            </div>
        </li>
    );
}

export default EventItem;