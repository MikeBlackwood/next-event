
import EventItem from "./EventItem";
import classes from "./EventList.module.css";

const EventList = ({data}) =>
{
    const renderedEvent = data.map((event) =>{
        return (
          <EventItem key={event.id} event={event}/>
        )
    });

    return (
        <div>
            <ul className={classes.list}>
                {renderedEvent}
            </ul>
        </div>
    )
}

export default EventList;