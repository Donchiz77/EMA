import React from "react";
import "./App.css";
import Navbar from "./components/navbar/index.js";
import {
  Inject,
  ScheduleComponent,
  Day,
  Week,
  WorkWeek,
  Month,
  Agenda,
} from "@syncfusion/ej2-react-schedule";

function App() {
  return (
    <div className="App">
      <Navbar />
      <ScheduleComponent currentView="Month">
        <Inject services={[Day, Week, WorkWeek, Month, Agenda]} />
      </ScheduleComponent>
    </div>
  );
}

export default App;
