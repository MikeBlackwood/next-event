import { useRouter } from "next/router";
import { getFilteredEvents } from "../../dummy-data";
import EventList from "../../components/events/EventList";
import { Fragment } from "react";
import ResultsTitle from "../../components/events/results-title";
import Button from "../../components/Button";
import ErrorAlert from "../../components/error-alert";

const FilteredEventsPage = () => {
  const router = useRouter();
  const filteredData = router.query.slug;
  if (!filteredData) {
    return <p className="center">Loading</p>;
  }
  const filteredYear = filteredData[0];
  const filteredMonth = filteredData[1];
  const numYear = +filteredYear;
  const numMonth = +filteredMonth;
  const date = new Date(numYear, numMonth - 1);
  if (
    isNaN(numMonth) ||
    isNaN(numYear) ||
    numYear > 2030 ||
    numMonth > 12 ||
    numMonth < 1
  ) {
    return (
      <Fragment>
        <ErrorAlert>
          <p>Not valid date!</p>
        </ErrorAlert>
        <div className="center">
          <Button link="/events">Show All events</Button>
        </div>
      </Fragment>
    );
  }
  const events = getFilteredEvents({ year: numYear, month: numMonth });
  if (!events || events.length === 0) {
    return (
      <Fragment>
        <ErrorAlert>
          <p>No events found for the chosen filter!</p>
        </ErrorAlert>
        <div className="center">
          <Button link="/events">Show All events</Button>
        </div>
      </Fragment>
    );
  }

  return (
    <Fragment>
      <ResultsTitle date={date} />
      <EventList data={events} />
    </Fragment>
  );
};

export default FilteredEventsPage;
