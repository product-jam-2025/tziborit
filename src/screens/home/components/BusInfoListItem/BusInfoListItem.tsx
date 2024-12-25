import React from 'react';
import LineNumberCircle from "@/src/screens/home/components/BusInfoListItem/LineNumberCircle/LineNumberCircle";
import './BusInfoListItem.css';
import ListItemIcon from "@/src/screens/home/components/BusInfoListItem/ListItemIcon/ListItemIcon";
import BusArrivals from "@/src/screens/home/components/BusInfoListItem/BusArrivals/BusArrivals";
import {BusArrivalMock} from "@/public/constants/constants";


const BusInfoListItem = () => {
    return (
        <div className="list-item-container">
            <LineNumberCircle lineNumber={517}/>
            <div className='time-and-icons-container'>
                <div className="icons-container">
                    <ListItemIcon type={'crowded'} crowdedLevel={1}/>
                    <ListItemIcon type={'roadBlock'}/>
                </div>
                <BusArrivals arrivals={BusArrivalMock}/>
            </div>
        </div>
    );
}

export default BusInfoListItem;