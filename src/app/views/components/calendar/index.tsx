import * as React from "react";
import Layout from "../layout.component";
import * as moment from "moment";
import events from "./events";

import "react-big-calendar/lib/css/react-big-calendar.css";
import "./calendar.css";

const BigCalendar = require('react-big-calendar');
const localizer = BigCalendar.momentLocalizer(moment);


// Init localizer

// class CalendarEvent {
//   title: string;
//   allDay: boolean;
//   start: Date;
//   end: Date;
//   desc: string;

//   constructor(_title: string, _start: Date, _end: Date, _allDay?: boolean, _desc?: string) {
//       this.title = _title;
//       this.allDay = _allDay || false;
//       this.start = _start;
//       this.end = _end;
//       this.desc = _desc || '';
//   }
// }

export default class Calendar extends React.Component {
  render() {
    return (
      <Layout>
        <React.Fragment>
          <h3 className="callout">
            Click an event to see more info, or drag the mouse over the calendar to
            select a date/time range.
          </h3>
          <BigCalendar
            selectable
            events={events}
            localizer={localizer}
            defaultView={BigCalendar.Views.MONTH}
            scrollToTime={new Date(1970, 1, 1, 6)}
            defaultDate={new Date(2015, 3, 12)}
            onSelectEvent={event => alert(event.title)}
            onSelectSlot={slotInfo =>
              alert(
                `selected slot: \n\nstart ${slotInfo.start.toLocaleString()} ` +
                `\nend: ${slotInfo.end.toLocaleString()}` +
                `\naction: ${slotInfo.action}`
              )
            }
          />
        </React.Fragment>
      </Layout>
    )
  }
}
