import React, { useState } from 'react';

const Colors = ({vehicles, specificTrimButton, trimsButton, colorsButton, setColorsButton}) => {

    return (
        specificTrimButton ? (
<div id="colors">
    <button id="colorsButton" onClick={() => setColorsButton(true)}>
        Show Colors</button>
    {colorsButton ? (
        <>
        <button id="Black">Black</button>
        <button id="Gray">Gray</button>
        <button id="Red">Red</button>
          </>
    ) : null}
</div>
    ) : null
)};

export default Colors;

// <form>
//     <input type='radio' value={colors??}
// </form>