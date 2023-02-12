import { getFeaturedEvents } from "../util/apiUtil";
import EventList from "../components/events/EventList";
import Head from "next/head";
const HomePage = (props) => {
  return (
    <div>
      <Head>
        <title>Next Events</title>
        <meta name="description" content="testing next element" />
      </Head>
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
