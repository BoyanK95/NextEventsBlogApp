import Link from 'next/Link';
import classes from './Button.module.css';

function Button(props) {
    if (!props.link) {
        return (
            <button className={classes.btn} onClick={props.onClick}>
                {props.children}
            </button>
        );
    }

    return (
        <Link className={classes.btn} href={props.link}>
            {props.children}
        </Link>
    );
}

export default Button;
