import React from 'react';
import './BusCrowdedness.css';

type BusCrowdednessProps = {
    crowdedness: number;
}

const BusCrowdedness = (props: BusCrowdednessProps) => {
    const { crowdedness } = props;
    return (
        <div className="bus-crowdedness" style={{ width: `${crowdedness}%` }}>
        </div>
    );
}

export default BusCrowdedness;