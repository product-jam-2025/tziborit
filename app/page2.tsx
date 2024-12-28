import StationHeader from "@/src/screens/home/components/StationHeader/StationHeader";
import BuslineDetails from "@/src/screens/Busline/components/BuslineDetails/BuslineDetails";
import BuslineRoute from "@/src/screens/Busline/components/BuslineRoute/BuslineRoute";
import BuslineAlt from "@/src/screens/Busline/components/BuslineAlt/BuslineAlt";
import "../src/screens/Busline/Busline.css";



export default function Busline() {
  return (
    <main>
        <StationHeader stationName="יפו מרכז" stationNumber={753675} />
        <div className="schedule-container">
          <BuslineDetails lineNumber={517} />
          <BuslineRoute currentStop={5} stops={[]}/>
          <BuslineAlt/>
        </div>
    </main>
  );
}

