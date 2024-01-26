import React, { useState } from 'react';

const Colors = ({vehicles}) => {
    const [colorsButton, setColorsButton] = useState(false);

    return (
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
)};

export default Colors;