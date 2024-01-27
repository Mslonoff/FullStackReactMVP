import React, { useState } from 'react';

const Colors = ({vehicles, trimsButton}) => {
    const [colorsButton, setColorsButton] = useState(false);

    return (
         trimsButton ? (
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