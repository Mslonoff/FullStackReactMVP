import React, { useEffect, useState } from "react";
const userVehicle = [];

export const completedVehicleSelection = (selectedModel, selectedTrim, selectedColor, selectedYear) => {
    let selectedModelString = selectedModel.toString();
    let selectedTrimString = selectedTrim.toString();
    let selectedColorString = selectedColor.toString();
    let selectedYearString = selectedYear.toString();
    userVehicle.push(selectedModelString, selectedTrimString,
         selectedColorString, selectedYearString);
    console.log('userVehicle:', userVehicle);
}
const SelectedVehicle = ({addVehicleButton, selectedModel, setSelectedModel, selectedTrim, setSelectedTrim, selectedColor, setSelectedColor, selectedYear, setSelectedYear}) => {

    return (
        addVehicleButton ? (
            <div id="selectedVehicle">
                <p>{userVehicle}</p>
            </div>
        ) : null
        
    )

}

export default SelectedVehicle;
