import "./BuslineAlt.css";

type BuslineAltProps = {
    curLineNumber: number;
}

export default function BuslineAlt(props: BuslineAltProps) {
    const {curLineNumber} = props;
    return(
        <div className="alt-lines">
          <div className="bus-circle" id="current-bus-line">{curLineNumber}</div>
          <div className="bus-circle">17</div>
          <div className="bus-circle">74</div>
          <div className="bus-circle">19</div>
        </div>
    )
}