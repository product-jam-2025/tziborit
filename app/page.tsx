import BusInfoListItem from "@/src/screens/home/components/BusInfoListItem/BusInfoListItem";
import StationHeader from "@/src/screens/home/components/StationHeader/StationHeader";

export default function Home() {
  return (
    <main>
      <div>
        <StationHeader stationName="יפו מרכז" stationNumber={753675}/>
        <BusInfoListItem/>
        <BusInfoListItem/>
        <BusInfoListItem/>
        <BusInfoListItem/>
        <BusInfoListItem/>
        <StationHeader stationName="אגרון" stationNumber={753675}/>
        <BusInfoListItem/>
        <BusInfoListItem/>
        <BusInfoListItem/>
        <BusInfoListItem/>
      </div>
    </main>
  );
}
