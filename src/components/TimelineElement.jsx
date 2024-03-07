import { VerticalTimelineElement } from "react-vertical-timeline-component";
/**
 * 
 * @param {{options : {date : string,icon? : React.ReactNode},children}} param0 
 * @returns 
 */
const TimelineElement = ({ options,children }) => {
  return (
    <VerticalTimelineElement
    icon={options?.icon}
      date={options?.date ?? "Add your date here..."}
      iconStyle={{ borderRadius : 0, background: "#fff"}}
      iconClassName="shadow-3d"
      className="vertical-timeline-element--work"
      contentStyle={{
        background: "#fff",
        boxShadow: "0 3px 0 #aaa,0 0 2px 3px #f1f1f1",
        display: "flex",
        flexDirection: "column-reverse",
        borderRadius : 0
      }}
    >
      {children}
    </VerticalTimelineElement>
  );
};

export default TimelineElement;
