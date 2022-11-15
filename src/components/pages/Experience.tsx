import { Timeline, TimelineItem } from "../Timeline";

export function Experience() {
  return (
    <>
      <h3>Work experience</h3>
      <p></p>
      <Timeline>
        <TimelineItem
          from="mar. 2011"
          to="jan. 2014"
          title="Fullstack developer"
        ></TimelineItem>
        <TimelineItem
          from="aug. 2009"
          to="may 2011"
          title="System Developer &amp; Webdesigner"
        >
          Maintaining and developing addons for several Magento webshops. Also
          responsible for the design and development of the company website.
        </TimelineItem>
      </Timeline>
    </>
  );
}
