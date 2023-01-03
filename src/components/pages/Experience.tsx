import { Timeline, TimelineItem } from "../Timeline";

export function Experience() {
  return (
    <>
      <h3>Work experience</h3>
      <p></p>
      <Timeline>
        <TimelineItem
          from="feb. 2020"
          to="present"
          title="Senior Frontend Engineer @ Otravo"
        >
          Maintaining and improving the frontend of the platform hosting 200+
          flight ticket booking websites that are under the Otravo/Travelgenio
          umbrella. Frontend is built with React, Redux, TypeScript.
        </TimelineItem>
        <TimelineItem
          from="feb. 2016"
          to="feb. 2020"
          title="Lead Full-stack Developer @ PSK Syd AB"
        >
          Taking lead of the development building and maintaining and ERP system
          with a IBM Domino backend. Introduced micro-service architecture and a
          React frontend. This meant a decoupling of the frontend and backend
          and a more flexible and scalable system.
        </TimelineItem>
        <TimelineItem
          from="jul. 2015"
          to="aug. 2016"
          title="Co-founder &amp; Lead Developer @ Startup"
        >
          Took the experience from building the warehouse management system to
          found my own startup and make the system accesible for smaller
          companies. I was responsible for the development of the system and the
          business development.
        </TimelineItem>
        <TimelineItem
          from="aug. 2014"
          to="jul. 2015"
          title="Full stack Developer @ NerdsOfSweden"
        >
          Merged my web agency with another web agency.
        </TimelineItem>
        <TimelineItem
          from="jan. 2011"
          to="aug. 2014"
          title="Co-founder &amp; Developer | agency"
        >
          Co-founded a web agency. Mostly developing websites and web
          applications for small and medium-sized businesses.
        </TimelineItem>
        <TimelineItem
          from="mar. 2011"
          to="jan. 2014"
          title="Fullstack developer"
        >
          Building a warehouse management system for a large logistics company.
        </TimelineItem>
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
