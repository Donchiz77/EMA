import React from "react";
import "./style.css";
import axios from 'axios';
import {
  Inject,
  ScheduleComponent,
  Day,
  Week,
  WorkWeek,
  Month,
  Agenda,
} from "@syncfusion/ej2-react-schedule";

function Schedule() {
  return (
    <div className="appointment">
      <ScheduleComponent currentView="Month">
        <Inject services={[Day, Week, WorkWeek, Month, Agenda]} />
      </ScheduleComponent>
    </div>
  );
}

export default Schedule;