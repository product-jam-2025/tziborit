"use client"
import React, { useState } from 'react';
import Reports from './Reports';
import './FloatingPlusButton.css';

const FloatingPlusButton = () => {

    const [showPopup, setShowPopup] = useState(false);

    const togglePopup = () => {
        setShowPopup(!showPopup);
    };
    return (
        <>
            <button className="floating-plus-button" onClick={togglePopup}>
                +
            </button>
            {showPopup && (
                <div className="popup">
                    <div className="popup-inner">
                        <Reports />  {/* Render the Reports component here */}
                    </div>
                </div>
            )}
        </>
    );
}
export default FloatingPlusButton;