import React from 'react';
import LineNumberCircle from "@/src/screens/home/components/BusInfoListItem/LineNumberCircle/LineNumberCircle";
import BusTimeline from "@/src/screens/home/components/BusInfoListItem/BusTimeline/BusTimeline";
import BusCrowdedness from "@/src/screens/home/components/BusInfoListItem/BusCrowdedness/BusCrowdedness";

const BusInfoListItem = () => {
    return (
        <div>
            <LineNumberCircle lineNumber={517}/>
            <div>
                <BusTimeline/>
                <BusCrowdedness crowdedness={50}/>
            </div>
        </div>
    );
}

export default BusInfoListItem;