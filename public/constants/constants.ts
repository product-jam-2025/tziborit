import {BusStopProps} from "@/src/components/Busline/components/BuslineRoute/BuslineRoute";

export const Icons ={
    CrowdedIcon: '/icons/crowdedIcon.svg',
    RoadBlockIcon: '/icons/roadBlockIcon.svg',
}

export const BusArrivalMock = [
    {
        id: 1,
        route: 'mount_scouts',
        time: 8
    },
    {
        id: 2,
        route: 'mount_scouts',
        time: 15
    }
]

export const hardcodedStops: BusStopProps[] = [
    { name: "דרך עזה / מטודלה", status: "people" },
    { name: "דרך עזה / רד״ק", status: "people-group" },
    { name: "המלך ג׳ורג׳ / קק״ל", status: "stop" },
    { name: "המלך ג׳ורג׳ / בן יהודה", status: "stop" },
    { name: "דרך עזה / ז׳בוטינסקי", status: "stop" },
    { name: "יפו מרכז", status: "stop" },
    { name: "הנביאים / שטרואס", status: "" }
];