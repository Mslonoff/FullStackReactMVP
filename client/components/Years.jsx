import React, { useState } from 'react';

const Years = ({vehicles, colorButton, setColorsButton, yearsButton, setYearsButton}) => {


    return (
        colorButton ? (
<div id="years">
    <button id="yearsButton" onClick={() => setYearsButton(true)}>
        Show Years</button>
    {yearsButton ? (
        <>
        <button id="2023">2023</button>
        <button id="2024">2024</button>
        </>
    ) : null}
</div>
    ) : null
)};

export default Years;