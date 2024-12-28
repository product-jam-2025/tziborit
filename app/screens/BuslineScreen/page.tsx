"use client";
import StationHeader from "@/src/components/Home/components/StationHeader/StationHeader";
import BuslineDetails from "@/src/components/Busline/components/BuslineDetails/BuslineDetails";
import BuslineRoute from "@/src/components/Busline/components/BuslineRoute/BuslineRoute";
import BuslineAlt from "@/src/components/Busline/components/BuslineAlt/BuslineAlt";
import "@/src/components/Busline/Busline.css";

export default function BuslineScreen() {
  return (
    <main>
        <StationHeader stationName="יפו מרכז" stationNumber={753675} />
        <div className="schedule-container">
          <BuslineDetails lineNumber={517}  />
          <BuslineRoute currentStop={5} stops={[]}/>
          <BuslineAlt/>
        </div>
    </main>
  );
}

