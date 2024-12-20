
type BusTimeLineProps = {
    time: number
}

const BusTimeline = (props: BusTimeLineProps) => {
    const {time} = props
    return (
        <div className="bus-timeline" style={{width: `${time}%`}}>
        </div>
    );
}

export default BusTimeline;