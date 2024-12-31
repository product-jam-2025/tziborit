"use client"
import React, { useState } from 'react';
import './FloatingPlusButton.css';
import ReportsModal from "@/src/components/ReportsModal";

const FloatingPlusButton = () => {

    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <>
            <button className="floating-plus-button" onClick={handleOpen}>
                +
            </button>
                <div className="popup">
                    <div className="popup-inner">
                        <ReportsModal open={open} onClose={handleClose}/>
                    </div>
                </div>
        </>
    );
}
export default FloatingPlusButton;