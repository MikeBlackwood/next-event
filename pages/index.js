import { getFeaturedEvents } from "../util/apiUtil";
import EventList from "../components/events/EventList";

const HomePage = (props) => {
  return (
    <div>
      <EventList data={props.featuredEvents} />
    </div>
  );
};

export async function getStaticProps() {
  const events = await getFeaturedEvents();

  return {
    props: {
      featuredEvents: events,
    },
    revalidate: 1800,
  };
}
export default HomePage;
