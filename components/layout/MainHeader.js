import Link from 'next/Link';
import classes from './MainHeader.module.css';

function MainHeader() {
    return (
        <header className={classes.header}>
            <div className={classes.logo}>
                <Link href='/'>Featured Events</Link>
            </div>
            <nav className={classes.navigation}>
                <ul>
                    <li>
                        <Link href='/events'>Browse All Events</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default MainHeader;
