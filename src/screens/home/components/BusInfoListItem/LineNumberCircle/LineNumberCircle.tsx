import React from 'react';
import './LineNumberCircle.css';

type LineNumberCircleProps = {
    lineNumber: number;
}
const LineNumberCircle = (props: LineNumberCircleProps) => {
    const { lineNumber } = props;
    return (
        <div className="line-number-circle">
            <span>{lineNumber}</span>
        </div>
    );
    // todo: itay was here
}

export default LineNumberCircle;