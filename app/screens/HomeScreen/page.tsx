import BusInfoListItem from "@/src/components/Home/components/BusInfoListItem/BusInfoListItem";
import StationHeader from "@/src/components/Home/components/StationHeader/StationHeader";
import React from 'react';

export default function HomeScreen() {
    return (
        <main>
            <div>
                <StationHeader stationName="יפו מרכז" stationNumber={753675}/>
                <BusInfoListItem lineNumber={517}/>
                <BusInfoListItem lineNumber={19}/>
                <BusInfoListItem lineNumber={92}/>
                <BusInfoListItem lineNumber={17}/>
                <BusInfoListItem lineNumber={22}/>
                <StationHeader stationName="אגרון" stationNumber={753675}/>
                <BusInfoListItem lineNumber={9}/>
                <BusInfoListItem lineNumber={78}/>
                <BusInfoListItem lineNumber={12}/>
                <BusInfoListItem lineNumber={14}/>
            </div>
        </main>
    );
}
