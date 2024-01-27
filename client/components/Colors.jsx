import React, { useState } from 'react';

const Colors = ({specificTrimButton, setColorButton, colorsButton, setColorsButton}) => {

    const handleButtonClick = (color) => {
        setColorButton(true);
        handleColorButtonClick(color);
      };

      const handleColorButtonClick = (color) => {
        console.log(`Color button clicked: ${color}`);
      }
      

    return (
        specificTrimButton ? (
<div id="colors">
    <button id="colorsButton" onClick={() => setColorsButton(true)}>
        Show Colors</button>
    {colorsButton ? (
        <>
        <button className="Black"
        onClick={() => handleButtonClick('Black')}>Black</button>
        <button className="Gray"
        onClick={() => handleButtonClick('Gray')}>Gray</button>
        <button className="Red"
        onClick={() => handleButtonClick('Red')}>Red</button>
          </>
    ) : null}
</div>
    ) : null
)};

export default Colors;

// <form>
//     <input type='radio' value={colors??}
// </form>