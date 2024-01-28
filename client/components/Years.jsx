import React, { useState } from 'react';
import SelectedVehicle from "./SelectedVehicle.jsx";

const Years = ({vehicles, setYearButton, setSelectedYear, yearButton, colorButton, setColorsButton, yearsButton, setYearsButton}) => {

    const handleButtonClick = (year) => {
        setYearButton(true);
        setSelectedYear(year);
        handleYearButtonClick(year);
      };

      const handleYearButtonClick = (year) => {
        console.log(`Year button clicked: ${year}`);
      }


    return (
        colorButton ? (
<div id="years">
    <button className="yearsButton" onClick={() => setYearsButton(true)}>
        Show Years</button>
    {yearsButton ? (
        <div>
        <button className="first"onClick=
        {() => handleButtonClick('2023')}>2023</button>
        <button className="second"onClick=
        {() => handleButtonClick('2024')}>2024</button>
        </div>
    ) : null}
</div>
    ) : null
)};

export default Years;