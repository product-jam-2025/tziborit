import React from 'react';
import './BuslineRoute.css';

// Define the types for the props
interface BusStopProps {
  name: string;
  status: string;
}

interface BuslineRouteProps {
  currentStop: number;
  stops: BusStopProps[];
}

// Define the hardcoded stops
const hardcodedStops: BusStopProps[] = [
  { name: "דרך עזה / מטודלה", status: "people" },
  { name: "דרך עזה / רד״ק", status: "people-group" },
  { name: "המלך ג׳ורג׳ / קק״ל", status: "stop" },
  { name: "המלך ג׳ורג׳ / בן יהודה", status: "stop" },
  { name: "דרך עזה / ז׳בוטינסקי", status: "stop" },
  { name: "יפו מרכז", status: "stop" },
  { name: "הנביאים / שטרואס", status: "" }
];

// Main component
export default function BuslineRoute(props: BuslineRouteProps) {

  // const { currentStop, stops } = props;

  const stops = hardcodedStops;
  const currentStop = 2;

  return (
    <div className="route">
      <div className="timeline-container">
        {stops.map((stop, index) => (
          <div key={index} className="station-container">
            <div className="station-container-graphic">
              <div className={`connection-line ${index <= currentStop ? 'active' : ''}`}></div>
              <div className={`station ${index === currentStop ? 'current' : ''} ${index <= currentStop ? 'active' : ''}`}>
                {index === currentStop && <div className="bus-icon">🚌</div>}
              </div>
            </div>
            <div className="station-info">{stop.name}</div>
          </div>
        ))}
      </div>
    </div>
  );
}