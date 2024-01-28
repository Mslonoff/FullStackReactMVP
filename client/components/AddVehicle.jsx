import React, { useState } from 'react';
import { completedVehicleSelection } from './SelectedVehicle';
const AddVehicle = ({ saveVehicle, yearButton, setAddVehicleButton }) => {

    const handleVehicleButtonClick = () => {
        setAddVehicleButton(true);
        completedVehicleSelection();
        console.log(`Vehicle Button Clicked`);
        saveVehicle();
        
      };

    return (
        yearButton ? (
            <div id="addVehicle">
                <button className="addVehicle" onClick=
                {() => handleVehicleButtonClick()}>
                    Add Vehicle 
                </button>
            </div>
        ) : null
    )
}

export default AddVehicle;