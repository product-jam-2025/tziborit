"use client";
import StationHeader from "@/src/components/Home/components/StationHeader/StationHeader";
import BuslineDetails from "@/src/components/Busline/components/BuslineDetails/BuslineDetails";
import BuslineRoute from "@/src/components/Busline/components/BuslineRoute/BuslineRoute";
import BuslineAlt from "@/src/components/Busline/components/BuslineAlt/BuslineAlt";
import "@/src/components/Busline/Busline.css";
import {useEffect, useState} from "react";

export default function BuslineScreen() {
    const [lineNumber, setLineNumber] = useState<number>(517)
    useEffect(() => {
        const query = new URLSearchParams(window.location.search);
        const lineNumberParam = query.get('lineNumber');
        if (lineNumberParam) {
            setLineNumber(Number(lineNumberParam));
        }
    }, []);
  return (
    <main>
        <StationHeader stationName="יפו מרכז" stationNumber={753675} />
        <div className="schedule-container">
          <BuslineDetails lineNumber={lineNumber}/>
          <BuslineRoute currentStop={5} stops={[]}/>
          <BuslineAlt curLineNumber={lineNumber}/>
        </div>
    </main>
  );
}

