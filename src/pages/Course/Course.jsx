import PageModel from "../../components/PageModel";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import TitleShadow from "../../components/TitleShadow";
import TimelineElement from "../../components/TimelineElement";
import Lorem from "../../components/Lorem";

const Course = () => {
  return (
    <PageModel>
      <TitleShadow
        text="Mon parcours"
        shadowText="Formations"
        className="mt-10"
      />
      <VerticalTimeline layout="1-column-left">
        <TimelineElement>
          <Lorem word={50} />
        </TimelineElement>
        <TimelineElement>
          <Lorem word={80} />
        </TimelineElement>
        <TimelineElement>
          <Lorem word={100} />
        </TimelineElement>
        <TimelineElement>
          <Lorem word={200} />
        </TimelineElement>
        <TimelineElement>
          <Lorem word={30} />
        </TimelineElement>
      </VerticalTimeline>
    </PageModel>
  );
};

export default Course;
