import React, { useState } from 'react';

const Colors = ({specificTrimButton, setSelectedColor, selectedColor, setColorButton, colorsButton, setColorsButton}) => {

    const handleButtonClick = (color) => {
        setColorButton(true);
        setSelectedColor(color);
        handleColorButtonClick(color);
        console.log('selectedColor:', selectedColor);
      };

      const handleColorButtonClick = (color) => {
        console.log(`Color button clicked: ${color}`);
      }
      

    return (
        specificTrimButton ? (
<div id="colors">
    <button className="colorsButton" onClick={() => setColorsButton(true)}>
        Show Colors</button>
    {colorsButton ? (
        <div id="colorOptions">
        <button className="Black"
        onClick={() => handleButtonClick('Black')}>Black</button>
        <button className="Gray"
        onClick={() => handleButtonClick('Gray')}>Gray</button>
        <button className="Red"
        onClick={() => handleButtonClick('Red')}>Red</button>
          </div>
    ) : null}
</div>
    ) : null
)};

export default Colors;

// <form>
//     <input type='radio' value={colors??}
// </form>