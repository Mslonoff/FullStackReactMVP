import React, { useState } from 'react';
import SelectedVehicle from "./SelectedVehicle.jsx";

const Years = ({vehicles, setYearButton, yearButton, colorButton, setColorsButton, yearsButton, setYearsButton}) => {

    const handleButtonClick = (year) => {
        setYearButton(true);
        handleYearButtonClick(year);
      };

      const handleYearButtonClick = (year) => {
        console.log(`Year button clicked: ${year}`);
      }


    return (
        colorButton ? (
<div id="years">
    <button id="yearsButton" onClick={() => setYearsButton(true)}>
        Show Years</button>
    {yearsButton ? (
        <>
        <button className="2023"onClick=
        {() => handleButtonClick('2023')}>2023</button>
        <button className="2024"onClick=
        {() => handleButtonClick('2024')}>2024</button>
        </>
    ) : null}
</div>
    ) : null
)};

export default Years;