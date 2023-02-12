import { useRouter } from "next/router";
import Head from "next/head";
import { getEventById, getAllEvents } from "../../util/apiUtil";
import { Fragment } from "react";
import EventSummary from "../../components/event-detail/event-summary";
import eventLogistics from "../../components/event-detail/event-logistics";
import EventContent from "../../components/event-detail/event-content";
import EventLogistics from "../../components/event-detail/event-logistics";
const EventDetailPage = (props) => {
  const { event } = props;

  if (!event) {
    return <div>Event not found</div>;
  }
  return (
    <Fragment>
      <Head>
        <title>{event.title}</title>
        <meta name="description" content={event.description} />
      </Head>
      <EventSummary title={event.title} />
      <EventLogistics
        date={event.date}
        address={event.location}
        image={event.image}
        alt={event.title}
      />

      <EventContent>
        <p>{event.description}</p>
      </EventContent>
    </Fragment>
  );
};

export async function getStaticProps(context) {
  const id = context.params.id;
  const data = await getEventById(id);
  return {
    props: {
      event: data,
    },
  };
}

export async function getStaticPaths() {
  const events = await getAllEvents();
  const paths = events.map((event) => ({ params: { id: event.id } }));
  return {
    paths: paths,
    fallback: true,
  };
}
export default EventDetailPage;
