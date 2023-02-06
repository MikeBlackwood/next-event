import {useRouter} from "next/router";
import {getEventById} from "../../dummy-data";
import {Fragment} from "react";
import EventSummary from "../../components/event-detail/event-summary";
import eventLogistics from "../../components/event-detail/event-logistics";
import EventContent from "../../components/event-detail/event-content";
import EventLogistics from "../../components/event-detail/event-logistics";
const EventDetailPage = () => {
    const router = useRouter();
    const event = getEventById(router.query.id);
    if (!event)
    {
        return (
            <div>
                Event not found
            </div>
        )
    }
    return(
        <Fragment>
            <EventSummary title={event.title}/>
            <EventLogistics date={event.date} address={event.location} image={event.image} alt={event.title}/>

            <EventContent>
                <p>{event.description}</p>
            </EventContent>
        </Fragment>
    )
}

export default EventDetailPage;