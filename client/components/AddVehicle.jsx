import React, { useState } from 'react';

const AddVehicle = ({ yearButton, setAddVehicleButton }) => {
    return (
        yearButton ? (
            <div id="addVehicle">
                <button className="addVehicle" onClick=
                {() => setAddVehicleButton(true)}>
                    Add Vehicle
                </button>
            </div>
        ) : null
    )
}

export default AddVehicle;