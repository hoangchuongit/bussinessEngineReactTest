import * as React from "react";
import * as moment from "moment";
import { Row, Col } from "react-bootstrap";
import Layout from "../layout.component";
import events from "./events";

import "react-big-calendar/lib/css/react-big-calendar.css";
import "./calendar.css";

const BigCalendar = require('react-big-calendar');
const localizer = BigCalendar.momentLocalizer(moment);

export default class Calendar extends React.Component {
  render() {
    return (
      <Layout>
        <Row>
          <Col className="be-calendar" sm={10} smOffset={1}>
            <BigCalendar
              selectable
              events={events}
              localizer={localizer}
              defaultView={BigCalendar.Views.MONTH}
              scrollToTime={new Date(1970, 1, 1, 6)}
              defaultDate={new Date()}
              onSelectEvent={event => alert(event.title)}
              onSelectSlot={slotInfo =>
                alert(
                  `selected slot: \n\nstart ${slotInfo.start.toLocaleString()} ` +
                  `\nend: ${slotInfo.end.toLocaleString()}` +
                  `\naction: ${slotInfo.action}`
                )
              }
            />
          </Col>
          <React.Fragment>
          </React.Fragment>
        </Row>
      </Layout>
    )
  }
}
