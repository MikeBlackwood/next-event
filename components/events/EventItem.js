import Link from "next/link";
import classes from "./EventItem.module.css";
import Button from "../Button";
import DateIcon from "../icons/date-icon";
import AddressIcon from "../icons/address-icon";
import ArrowRightIcon from "../icons/arrow-right-icon";

const  EventItem = ({event}) => {
    const dateFormatted = new Date(event.date).toLocaleDateString('en-US');
    const formattedAddress = event.location.replace(', ', '\n');
    const link = `/events/${event.id}`
    return (
        <li className={classes.item} key={event.id}>
            <img  src={event.image}/>
            <div className={classes.content}>
                <div>
                     <h2>{event.title}</h2>
                </div>
                <div className={classes.date}>
                    <DateIcon/>
                    <time >{dateFormatted}</time>
                </div>
                <div className={classes.address}>
                    <AddressIcon/>
                    <address >{formattedAddress}</address>
                </div>
                <div className={classes.actions}>
                    <Button link={link}><span>Explore</span>
                    <span className={classes.icon}><ArrowRightIcon/></span>
                    </Button>
                </div>
            </div>
        </li>
    )
}

export default EventItem;