import React, { useState } from 'react';
import { completedVehicleSelection } from './SelectedVehicle';
const AddVehicle = ({ yearButton, setAddVehicleButton }) => {

    const handleVehicleButtonClick = () => {
        setAddVehicleButton(true);
        completedVehicleSelection();
        console.log(`Vehicle Button Clicked`);
        
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