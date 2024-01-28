import React, { useEffect, useState } from "react";

export const completedVehicleSelection = (fourRunnerButton, selectedModel, setSelectedModel, selectedTrim, selectedColor, selectedYear) => {

    console.log('userVehicle: not figured out yet');
}
const SelectedVehicle = ({addVehicleButton, selectedModel, setSelectedModel, selectedTrim, setSelectedTrim, selectedColor, setSelectedColor, selectedYear, setSelectedYear}) => {

    return (
        addVehicleButton ? (
            <div id="selectedVehicle">
                <p>Vehicle Added to you Garage, Congratulations!</p>
            </div>
        ) : null
        
    )

}

export default SelectedVehicle;
